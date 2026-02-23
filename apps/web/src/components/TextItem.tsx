import React, { useEffect, useRef, useState } from 'react'
import { Button, Card } from 'antd-mobile'
import { PlayOutline, StopOutline, SoundOutline, AudioOutline } from 'antd-mobile-icons'

interface TextItemProps {
  v: string
  enableDelay: boolean
  sound: boolean
  times: number
  delay?: number
  label: string
  s: string
  p: string
  t: string
  playing: boolean
  onPlayEnd?: (index: number) => void
  index: number
  rate: number
}

const apiBase = (typeof process !== 'undefined' && process.env.API_BASE) || ''

export default function TextItem({
  v,
  enableDelay,
  sound,
  times,
  delay,
  label,
  s,
  p,
  t,
  playing,
  onPlayEnd,
  index,
  rate,
}: TextItemProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playCount, setPlayCount] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const settimeRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<number>(0)
  const maxCount = times

  // 切换句子或声音时重置音频
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `${apiBase}/api/tts?s=${encodeURIComponent(s)}&v=${encodeURIComponent(v)}`
      audioRef.current.load()
      audioRef.current.playbackRate = rate
    }
  }, [s, v, rate])

  // playing 状态变化处理
  useEffect(() => {
    if (!audioRef.current) return
    if (playing) {
      if (!audioRef.current.currentTime) {
        audioRef.current.load()
        audioRef.current.playbackRate = rate
        audioRef.current.addEventListener('loadeddata', () => { playAudio() }, { once: true })
      }
    } else {
      if (settimeRef.current) clearTimeout(settimeRef.current)
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      timeRef.current = 0
      setIsPlaying(false)
      setIsWaiting(false)
      setPlayCount(0)
    }
  }, [playing])

  const playAudio = () => {
    if (!audioRef.current) return
    if (!sound) audioRef.current.volume = 0
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    timeRef.current = Date.now()
    if (isPlaying) {
      if (settimeRef.current) clearTimeout(settimeRef.current)
      setIsPlaying(false)
      setPlayCount(0)
      audioRef.current.playbackRate = rate
      audioRef.current.currentTime = 0
      setIsWaiting(false)
      audioRef.current.pause()
    } else {
      setPlayCount(playCount + 1)
      setIsPlaying(true)
      audioRef.current.playbackRate = rate
      audioRef.current.play()
    }
  }

  function handleEnded() {
    const elapsed = (Date.now() - timeRef.current) / 1000
    setDuration(elapsed)
    setIsWaiting(true)
    const delayMs = enableDelay
      ? maxCount
        ? maxCount * (elapsed * 1000 + ((delay || 0) * 1000 + 2000))
        : (delay || 0) * 1000 + 2000
      : maxCount * elapsed * 1000
    settimeRef.current = setTimeout(() => {
      if (playCount < maxCount) {
        setIsWaiting(false)
        timeRef.current = Date.now()
        setPlayCount((c) => c + 1)
        if (audioRef.current) {
          audioRef.current.play()
          audioRef.current.playbackRate = rate
        }
      } else {
        timeRef.current = 0
        setIsPlaying(false)
        setIsWaiting(false)
        setPlayCount(0)
        if (onPlayEnd) onPlayEnd(index)
      }
    }, delayMs / rate)
  }

  return (
    <div ref={cardRef}>
      <Card
        style={{
          borderRadius: 10,
          border: isPlaying ? '2px solid #1677ff' : '1px solid #f0f0f0',
          boxShadow: isPlaying ? '0 2px 12px rgba(22,119,255,0.15)' : 'none',
          background: isPlaying ? '#f0f7ff' : '#fff',
          transition: 'all 0.2s',
        }}
        bodyStyle={{ padding: '12px' }}
      >
        <audio ref={audioRef} onEnded={handleEnded} />

        {/* 句子 */}
        <div
          style={{ fontSize: 17, fontWeight: isPlaying ? 700 : 500, marginBottom: 4, lineHeight: 1.5 }}
          onTouchEnd={() => {
            if (typeof window === 'undefined' || !window.getSelection) return
            const selected = window.getSelection()?.toString()
            if (selected) {
              const utterance = new SpeechSynthesisUtterance(selected)
              speechSynthesis.speak(utterance)
            }
          }}
        >
          <span style={{ color: '#666', marginRight: 6, fontSize: 14 }}>{index + 1}.</span>
          <span dangerouslySetInnerHTML={{ __html: label }} />
        </div>

        {/* 音标 */}
        {p && (
          <div style={{ fontSize: 13, color: '#888', marginBottom: 2 }}>
            [{p}]
          </div>
        )}

        {/* 翻译 */}
        {t && (
          <div style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
            {t}
          </div>
        )}

        {/* 控制栏 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Button
            size="mini"
            color={isPlaying ? 'danger' : 'primary'}
            fill="solid"
            onClick={playAudio}
            style={{ borderRadius: 16 }}
          >
            {isPlaying ? <StopOutline /> : <PlayOutline />}
            <span style={{ marginLeft: 4 }}>{isPlaying ? '停止' : '播放'}</span>
          </Button>

          {isPlaying && (
            <span style={{ fontSize: 12, color: '#1677ff', display: 'flex', alignItems: 'center', gap: 2 }}>
              {isWaiting ? <AudioOutline /> : <SoundOutline />}
              {isWaiting ? '跟读中' : '播放中'}
              {maxCount > 0 && ` ${playCount}/${maxCount}`}
            </span>
          )}

          {!!duration && !isPlaying && (
            <span style={{ fontSize: 12, color: '#999' }}>{duration.toFixed(1)}秒</span>
          )}

          <Button
            size="mini"
            fill="none"
            style={{ marginLeft: 'auto', color: '#999' }}
            onClick={() => {
              cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }}
          >
            置顶
          </Button>
        </div>
      </Card>
    </div>
  )
}
