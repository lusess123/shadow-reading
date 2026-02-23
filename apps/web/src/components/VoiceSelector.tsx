import React, { useEffect, useState } from 'react'
import { Select } from 'antd'

interface Voice {
  name: string
  gender: string
  中文: string
}

interface VoiceSelectorProps {
  value: string
  onChange: (v: string) => void
  className?: string
}

export default function VoiceSelector({ value, onChange, className }: VoiceSelectorProps) {
  const [voices, setVoices] = useState<Voice[]>([])

  useEffect(() => {
    const apiBase = (typeof process !== 'undefined' && process.env.API_BASE) || ''
    fetch(`${apiBase}/api/voices`)
      .then((r) => r.json())
      .then((data: Voice[]) => setVoices(data))
      .catch(() => {
        // fallback to default voice
        setVoices([{ name: 'cf-speecht5', gender: 'Female', 中文: '英语-Cloudflare-AI' }])
      })
  }, [])

  return (
    <Select
      className={className}
      value={value}
      onChange={onChange}
      options={voices.map((v) => ({ value: v.name, label: v['中文'] || v.name }))}
      placeholder="选择声音"
    />
  )
}
