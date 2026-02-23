import React, { useEffect, useState } from 'react'
import {
  Button,
  Picker,
  Popup,
  SpinLoading,
  Stepper,
  Switch,
  Tag,
  Toast,
} from 'antd-mobile'
import {
  SoundOutline,
  SoundMuteOutline,
  SetOutline,
  PlayOutline,
  StopOutline,
} from 'antd-mobile-icons'
import NoSleep from 'nosleep.js'
import { useSearchParams } from '@umijs/max'
import TextItem from '@/components/TextItem'
import type { Sentence } from '@/source/index'

interface CourseInfo {
  id: string
  ownerName: string | null
  isPublic: boolean
}

const apiBase = (typeof process !== 'undefined' && process.env.API_BASE) || ''

const RATE_OPTIONS = [
  [
    { label: '0.5x', value: '0.5' },
    { label: '0.75x', value: '0.75' },
    { label: '1x', value: '1' },
    { label: '1.25x', value: '1.25' },
    { label: '1.5x', value: '1.5' },
    { label: '2x', value: '2' },
  ],
]

const VOICE_OPTIONS = [
  [{ label: '英语-Cloudflare-女性', value: 'cf-speecht5' }],
]

export default function IndexPage() {
  const [searchParams] = useSearchParams()
  const urlCourse = searchParams.get('course')

  const [client, setClient] = useState(false)
  const [courseList, setCourseList] = useState<CourseInfo[]>([])
  const [coursesLoading, setCoursesLoading] = useState(true)
  const [sentences, setSentences] = useState<Sentence[]>([])
  const [sentencesLoading, setSentencesLoading] = useState(false)
  const [playing, setPlaying] = useState('')
  const [sound, setSound] = useState(true)
  const [times, setTimes] = useState(0)
  const [settingsVisible, setSettingsVisible] = useState(false)
  const [coursePicker, setCoursePicker] = useState(false)

  const [content, setContent] = useState(
    () => urlCourse || (typeof window !== 'undefined' && localStorage.getItem('content')) || ''
  )
  const [voice, setVoice] = useState(
    () => (typeof window !== 'undefined' && localStorage.getItem('voice')) || 'cf-speecht5'
  )
  const [delay, setDelay] = useState(
    () => !!((typeof window !== 'undefined' && localStorage.getItem('delay')) || 'delay')
  )
  const [rate, setRate] = useState(() =>
    parseFloat((typeof window !== 'undefined' && localStorage.getItem('rate')) || '1')
  )

  useEffect(() => setClient(true), [])

  // NoSleep
  useEffect(() => {
    const noSleep = new NoSleep()
    function enable() {
      document.removeEventListener('click', enable, false)
      noSleep.enable()
    }
    document.addEventListener('click', enable, false)
    return () => document.removeEventListener('click', enable, false)
  }, [])

  // 加载课程列表
  useEffect(() => {
    fetch(`${apiBase}/api/courses`)
      .then((r) => r.json())
      .then((data: { courses: CourseInfo[] }) => {
        setCourseList(data.courses || [])
        if (!content && data.courses?.length > 0) {
          setContent(data.courses[0].id)
        }
      })
      .catch(console.error)
      .finally(() => setCoursesLoading(false))
  }, [])

  // 加载句子
  useEffect(() => {
    if (!content) return
    setSentencesLoading(true)
    setPlaying('')
    setSentences([])
    fetch(`${apiBase}/api/courses/${encodeURIComponent(content)}`)
      .then((r) => r.json())
      .then((data: { sentences: Sentence[] }) => setSentences(data.sentences || []))
      .catch(console.error)
      .finally(() => setSentencesLoading(false))
  }, [content])

  if (!client) return null

  const isPlaying = playing !== ''
  const currentCourse = courseList.find((c) => c.id === content)

  const coursePickerOptions = [
    courseList.map((c) => ({ label: c.id, value: c.id })),
  ]

  return (
    <div style={{ paddingBottom: 16 }}>
      {/* 课程选择栏 */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: '#fff',
          borderBottom: '1px solid #f0f0f0',
          padding: '8px 12px',
          display: 'flex',
          gap: 8,
          alignItems: 'center',
        }}
      >
        {/* 课程选择器 */}
        <div
          onClick={() => !coursesLoading && setCoursePicker(true)}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            background: '#f5f5f5',
            borderRadius: 8,
            padding: '8px 12px',
            cursor: 'pointer',
            minWidth: 0,
          }}
        >
          {coursesLoading ? (
            <SpinLoading color="primary" style={{ '--size': '16px' } as any} />
          ) : (
            <>
              <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: 14 }}>
                {content || '选择课程'}
              </span>
              <span style={{ color: '#999', fontSize: 12, marginLeft: 4 }}>▼</span>
            </>
          )}
        </div>

        {/* 播放/停止 */}
        <Button
          color="primary"
          size="middle"
          disabled={sentencesLoading || sentences.length === 0}
          onClick={() => {
            if (isPlaying) {
              setPlaying('')
            } else if (sentences.length > 0) {
              setPlaying(sentences[0].sentence)
            }
          }}
          style={{ flexShrink: 0 }}
        >
          {isPlaying ? <StopOutline /> : <PlayOutline />}
        </Button>

        {/* 静音切换 */}
        <Button
          size="middle"
          onClick={() => setSound(!sound)}
          style={{ flexShrink: 0 }}
        >
          {sound ? <SoundOutline /> : <SoundMuteOutline />}
        </Button>

        {/* 设置 */}
        <Button
          size="middle"
          onClick={() => setSettingsVisible(true)}
          style={{ flexShrink: 0 }}
        >
          <SetOutline />
        </Button>
      </div>

      {/* 当前课程信息 */}
      {currentCourse?.ownerName && (
        <div style={{ padding: '6px 12px', fontSize: 12, color: '#999' }}>
          来自 {currentCourse.ownerName}
          {!currentCourse.isPublic && <Tag color="warning" style={{ marginLeft: 6 }}>私有</Tag>}
        </div>
      )}

      {/* 内容区 */}
      <div style={{ padding: '8px 12px' }}>
        {sentencesLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 60 }}>
            <SpinLoading color="primary" />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {sentences.map((item, index) => (
              <TextItem
                key={item.original || index}
                index={index}
                label={item.sentence}
                s={item.original}
                p={item.phonetic}
                t={item.translation}
                delay={item.delay}
                v={voice}
                rate={rate}
                times={times}
                sound={sound}
                enableDelay={delay}
                playing={item.sentence === playing}
                onPlayEnd={(i: number) => {
                  if (i < sentences.length - 1) {
                    setPlaying(sentences[i + 1].sentence)
                  } else {
                    setPlaying('')
                    Toast.show({ content: '课程播放完毕', position: 'bottom' })
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* 课程选择 Picker */}
      <Picker
        columns={coursePickerOptions}
        visible={coursePicker}
        onClose={() => setCoursePicker(false)}
        value={content ? [content] : undefined}
        onConfirm={(val) => {
          const newContent = val[0] as string
          if (newContent) {
            setContent(newContent)
            setPlaying('')
            localStorage.setItem('content', newContent)
          }
        }}
        title="选择课程"
      />

      {/* 设置抽屉 */}
      <Popup
        visible={settingsVisible}
        onMaskClick={() => setSettingsVisible(false)}
        position="bottom"
        bodyStyle={{ borderRadius: '16px 16px 0 0', padding: '16px 0 32px' }}
      >
        <div style={{ textAlign: 'center', fontWeight: 600, fontSize: 16, padding: '0 0 12px', borderBottom: '1px solid #f0f0f0', marginBottom: 8 }}>
          播放设置
        </div>

        <div style={{ padding: '0 16px' }}>
          {/* 播放速度 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f5f5f5' }}>
            <span style={{ fontSize: 15 }}>播放速度</span>
            <div style={{ display: 'flex', gap: 6 }}>
              {[0.5, 0.75, 1, 1.25, 1.5, 2].map((v) => (
                <Button
                  key={v}
                  size="mini"
                  color={rate === v ? 'primary' : 'default'}
                  fill={rate === v ? 'solid' : 'outline'}
                  onClick={() => {
                    setRate(v)
                    localStorage.setItem('rate', v.toString())
                  }}
                >
                  {v}x
                </Button>
              ))}
            </div>
          </div>

          {/* 重复次数 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f5f5f5' }}>
            <span style={{ fontSize: 15 }}>重复次数</span>
            <Stepper
              min={0}
              max={20}
              value={times}
              onChange={setTimes}
            />
          </div>

          {/* 延迟 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f5f5f5' }}>
            <span style={{ fontSize: 15 }}>跟读延迟</span>
            <Switch
              checked={delay}
              onChange={(v) => {
                setDelay(v)
                localStorage.setItem('delay', String(v))
              }}
            />
          </div>

          {/* 声音开关 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
            <span style={{ fontSize: 15 }}>播放声音</span>
            <Switch
              checked={sound}
              onChange={setSound}
            />
          </div>
        </div>
      </Popup>
    </div>
  )
}
