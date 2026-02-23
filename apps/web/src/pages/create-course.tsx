import React, { useState } from 'react'
import {
  Button,
  Card,
  Form,
  Input,
  Switch,
  TextArea,
  Toast,
} from 'antd-mobile'
import { AddOutline, DeleteOutline } from 'antd-mobile-icons'
import { history, useModel } from '@umijs/max'

interface SentenceInput {
  id: number
  text: string       // 英文原文（用于显示和 TTS）
  translation: string  // 中文翻译
  phonetic: string   // 音标（可选）
}

const apiBase = (typeof process !== 'undefined' && process.env.API_BASE) || ''
let nextId = 1

export default function CreateCoursePage() {
  const { user, authFetch } = useModel('auth')
  const [courseName, setCourseName] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [sentences, setSentences] = useState<SentenceInput[]>([
    { id: nextId++, text: '', translation: '', phonetic: '' },
  ])
  const [importing, setImporting] = useState(false)
  const [importText, setImportText] = useState('')
  const [saving, setSaving] = useState(false)

  if (!user) {
    history.push('/login')
    return null
  }

  function addSentence() {
    setSentences((prev) => [...prev, { id: nextId++, text: '', translation: '', phonetic: '' }])
  }

  function removeSentence(id: number) {
    setSentences((prev) => prev.filter((s) => s.id !== id))
  }

  function updateSentence(id: number, field: keyof SentenceInput, value: string) {
    setSentences((prev) => prev.map((s) => s.id === id ? { ...s, [field]: value } : s))
  }

  // 批量导入（每行一句：英文|中文 或 JSON）
  function handleImport() {
    try {
      // 尝试解析 JSON
      const parsed = JSON.parse(importText)
      if (Array.isArray(parsed)) {
        const imported = parsed.map((item: any) => ({
          id: nextId++,
          text: item.sentence || item.original || item.text || '',
          translation: item.translation || item.cn || '',
          phonetic: item.phonetic || '',
        }))
        setSentences(imported.filter((s) => s.text))
        setImporting(false)
        setImportText('')
        Toast.show({ icon: 'success', content: `导入了 ${imported.length} 条句子` })
        return
      }
    } catch {}

    // 按行解析：英文|中文 格式
    const lines = importText.split('\n').filter((l) => l.trim())
    const imported = lines.map((line) => {
      const parts = line.split('|')
      return {
        id: nextId++,
        text: parts[0]?.trim() || '',
        translation: parts[1]?.trim() || '',
        phonetic: parts[2]?.trim() || '',
      }
    }).filter((s) => s.text)

    if (imported.length === 0) {
      Toast.show({ icon: 'fail', content: '未能解析任何句子' })
      return
    }
    setSentences(imported)
    setImporting(false)
    setImportText('')
    Toast.show({ icon: 'success', content: `导入了 ${imported.length} 条句子` })
  }

  async function handleSave() {
    if (!courseName.trim()) {
      Toast.show({ icon: 'fail', content: '请填写课程名称' })
      return
    }
    const validSentences = sentences.filter((s) => s.text.trim())
    if (validSentences.length === 0) {
      Toast.show({ icon: 'fail', content: '请至少添加一条句子' })
      return
    }

    setSaving(true)
    try {
      const payload = {
        name: courseName.trim(),
        isPublic,
        sentences: validSentences.map((s) => ({
          sentence: s.text.trim(),
          original: s.text.trim(),
          translation: s.translation.trim(),
          phonetic: s.phonetic.trim(),
        })),
      }

      const res = await authFetch('/api/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json() as any
      if (!res.ok) {
        Toast.show({ icon: 'fail', content: data.error || '保存失败' })
        return
      }

      Toast.show({ icon: 'success', content: '课程创建成功！' })
      history.push('/my-courses')
    } catch {
      Toast.show({ icon: 'fail', content: '网络错误，请重试' })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div style={{ paddingBottom: 80 }}>
      {/* 顶部设置卡片 */}
      <Card style={{ margin: 12, borderRadius: 10 }}>
        <Form layout="horizontal">
          <Form.Item label="课程名称" required>
            <Input
              placeholder="例：英文经典歌曲 · 吻别"
              value={courseName}
              onChange={setCourseName}
              clearable
            />
          </Form.Item>
          <Form.Item label="公开分享" extra={
            <Switch
              checked={isPublic}
              onChange={setIsPublic}
            />
          }>
            <span style={{ fontSize: 13, color: '#999' }}>
              {isPublic ? '所有人可以看到这个课程' : '仅自己可见'}
            </span>
          </Form.Item>
        </Form>
      </Card>

      {/* 句子列表 */}
      <div style={{ padding: '0 12px', marginBottom: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 600 }}>
            句子列表（{sentences.filter((s) => s.text.trim()).length} 条）
          </span>
          <Button
            size="small"
            fill="outline"
            color="primary"
            onClick={() => setImporting(true)}
          >
            批量导入
          </Button>
        </div>

        {sentences.map((s, i) => (
          <Card
            key={s.id}
            style={{ marginBottom: 8, borderRadius: 8 }}
            bodyStyle={{ padding: 10 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: '#999' }}>第 {i + 1} 句</span>
              {sentences.length > 1 && (
                <DeleteOutline
                  style={{ fontSize: 16, color: '#ff3141', cursor: 'pointer' }}
                  onClick={() => removeSentence(s.id)}
                />
              )}
            </div>
            <Input
              placeholder="英文原文（必填，用于朗读）"
              value={s.text}
              onChange={(v) => updateSentence(s.id, 'text', v)}
              style={{ marginBottom: 6 }}
            />
            <Input
              placeholder="中文翻译（选填）"
              value={s.translation}
              onChange={(v) => updateSentence(s.id, 'translation', v)}
              style={{ marginBottom: 6 }}
            />
            <Input
              placeholder="音标（选填，如 /hɛloʊ/）"
              value={s.phonetic}
              onChange={(v) => updateSentence(s.id, 'phonetic', v)}
            />
          </Card>
        ))}

        <Button
          block
          fill="dashed"
          color="primary"
          onClick={addSentence}
          style={{ borderRadius: 8, marginBottom: 12 }}
        >
          <AddOutline style={{ marginRight: 4 }} />
          添加句子
        </Button>
      </div>

      {/* 批量导入弹窗 */}
      {importing && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
            zIndex: 100, display: 'flex', alignItems: 'flex-end',
          }}
          onClick={() => setImporting(false)}
        >
          <div
            style={{ background: '#fff', width: '100%', borderRadius: '16px 16px 0 0', padding: 16, paddingBottom: 32 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>批量导入句子</div>
            <div style={{ fontSize: 13, color: '#999', marginBottom: 10 }}>
              支持两种格式：<br />
              1. 每行：<code>英文|中文翻译|音标</code>（音标可省略）<br />
              2. JSON 数组：<code>[&#123;"sentence":"...","translation":"..."&#125;]</code>
            </div>
            <TextArea
              placeholder={'Hello World|你好世界\nI love you|我爱你'}
              value={importText}
              onChange={setImportText}
              rows={6}
              style={{ marginBottom: 12 }}
            />
            <div style={{ display: 'flex', gap: 8 }}>
              <Button block fill="outline" onClick={() => setImporting(false)}>取消</Button>
              <Button block color="primary" onClick={handleImport}>导入</Button>
            </div>
          </div>
        </div>
      )}

      {/* 保存按钮（固定底部） */}
      <div
        style={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
          padding: '12px 16px',
          paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
          background: '#fff',
          borderTop: '1px solid #f0f0f0',
          zIndex: 10,
        }}
      >
        <Button block color="primary" size="large" onClick={handleSave} loading={saving} style={{ borderRadius: 8 }}>
          保存课程
        </Button>
      </div>
    </div>
  )
}
