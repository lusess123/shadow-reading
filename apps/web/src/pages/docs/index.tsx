import React, { useEffect, useMemo, useState } from 'react'
import { List, SearchBar, Selector, Skeleton, Tag } from 'antd-mobile'
import { FileOutline, RightOutline } from 'antd-mobile-icons'
import { history } from '@umijs/max'

interface DocInfo {
  id: string
  name: string
  size: number
  uploaded: string
}

const apiBase = (typeof process !== 'undefined' && process.env.API_BASE) || ''

function inferCategory(name: string): string {
  if (name.startsWith('english_')) return '英语学习'
  if (name.includes('访谈') || name.includes('interview')) return '访谈'
  if (name.includes('AI') || name.includes('agent') || name.includes('代理')) return 'AI'
  if (name.includes('语音') || name.includes('voice') || name.includes('TTS')) return '语音技术'
  if (name.includes('Workshop') || name.includes('workshop')) return '工坊'
  if (name.includes('演讲') || name.includes('讲解')) return '演讲'
  if (name.includes('冥想') || name.includes('meditation')) return '冥想'
  if (name.includes('创业') || name.includes('startup')) return '创业'
  if (name.includes('moments') || name.includes('preview')) return '其他'
  return '技术'
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const CAT_COLORS: Record<string, string> = {
  '英语学习': 'primary',
  '访谈': 'success',
  'AI': 'warning',
  '语音技术': 'default',
  '工坊': 'success',
  '演讲': 'default',
  '冥想': 'success',
  '创业': 'warning',
  '技术': 'primary',
  '其他': 'default',
}

export default function DocsPage() {
  const [docs, setDocs] = useState<DocInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedCat, setSelectedCat] = useState<string[]>([])

  useEffect(() => {
    fetch(`${apiBase}/api/docs`)
      .then((r) => r.json())
      .then((data: { docs: DocInfo[] }) => setDocs(data.docs || []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const categories = useMemo(() => {
    const set = new Set(docs.map((d) => inferCategory(d.name)))
    return Array.from(set).sort()
  }, [docs])

  const filtered = useMemo(() => {
    return docs.filter((doc) => {
      const cat = inferCategory(doc.name)
      const matchSearch = !search || doc.name.toLowerCase().includes(search.toLowerCase())
      const matchCat = selectedCat.length === 0 || selectedCat.includes(cat)
      return matchSearch && matchCat
    })
  }, [docs, search, selectedCat])

  const catOptions = categories.map((c) => ({ label: c, value: c }))

  return (
    <div>
      {/* 搜索栏 */}
      <div style={{ padding: '8px 12px', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
        <SearchBar
          placeholder="搜索文档..."
          value={search}
          onChange={setSearch}
          style={{ '--border-radius': '8px' } as any}
        />
      </div>

      {/* 分类筛选 */}
      {categories.length > 0 && (
        <div style={{ padding: '8px 12px', background: '#fff', borderBottom: '1px solid #f0f0f0', overflowX: 'auto' }}>
          <Selector
            options={catOptions}
            value={selectedCat}
            onChange={setSelectedCat}
            multiple
            style={{ '--border-radius': '16px' } as any}
          />
        </div>
      )}

      {/* 文档数量 */}
      <div style={{ padding: '8px 12px', fontSize: 12, color: '#999' }}>
        共 {filtered.length} 篇文档
        {(search || selectedCat.length > 0) && `（过滤自 ${docs.length} 篇）`}
      </div>

      {/* 文档列表 */}
      {loading ? (
        <div style={{ padding: 12 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} animated style={{ height: 60, marginBottom: 8, borderRadius: 8 }} />
          ))}
        </div>
      ) : (
        <List style={{ '--border-inner': 'solid 1px #f0f0f0' }}>
          {filtered.map((doc) => {
            const cat = inferCategory(doc.name)
            const uploadDate = doc.uploaded
              ? new Date(doc.uploaded).toLocaleDateString('zh-CN')
              : ''

            return (
              <List.Item
                key={doc.id}
                prefix={<FileOutline style={{ fontSize: 20, color: '#1677ff' }} />}
                extra={<RightOutline style={{ color: '#ccc' }} />}
                description={
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 2 }}>
                    <Tag color={CAT_COLORS[cat] as any} fill="outline" style={{ fontSize: 11 }}>
                      {cat}
                    </Tag>
                    <span style={{ fontSize: 11, color: '#bbb' }}>
                      {formatSize(doc.size)}
                      {uploadDate && ` · ${uploadDate}`}
                    </span>
                  </div>
                }
                onClick={() => history.push(`/docs/${encodeURIComponent(doc.name)}`)}
              >
                <span style={{ fontSize: 14, fontWeight: 500 }}>
                  {doc.name.replace(/\.md$/, '')}
                </span>
              </List.Item>
            )
          })}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#999' }}>
              暂无文档
            </div>
          )}
        </List>
      )}
    </div>
  )
}
