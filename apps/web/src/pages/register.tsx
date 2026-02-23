import React, { useState } from 'react'
import { Button, Form, Input, NavBar, Steps, Toast } from 'antd-mobile'
import { history, useModel } from '@umijs/max'
import 'antd-mobile/es/global'

const apiBase = (typeof process !== 'undefined' && process.env.API_BASE) || ''

export default function RegisterPage() {
  const { login } = useModel('auth')
  const [step, setStep] = useState(0) // 0: 填邮箱/昵称, 1: 填验证码/密码
  const [loading, setLoading] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [emailInfo, setEmailInfo] = useState({ email: '', name: '' })

  // 开始倒计时
  function startCountdown() {
    setCountdown(60)
    const timer = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) { clearInterval(timer); return 0 }
        return c - 1
      })
    }, 1000)
  }

  // 第一步：发送验证码
  async function handleSendCode(values: { email: string; name: string }) {
    setLoading(true)
    try {
      const res = await fetch(`${apiBase}/api/auth/send-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json() as any
      if (!res.ok) {
        Toast.show({ icon: 'fail', content: data.error || '发送失败' })
        return
      }
      setEmailInfo(values)
      setStep(1)
      startCountdown()
      Toast.show({ icon: 'success', content: '验证码已发送，请查收邮件' })
    } catch {
      Toast.show({ icon: 'fail', content: '网络错误，请稍后重试' })
    } finally {
      setLoading(false)
    }
  }

  // 第二步：完成注册
  async function handleRegister(values: { code: string; password: string; confirmPassword: string }) {
    if (values.password !== values.confirmPassword) {
      Toast.show({ icon: 'fail', content: '两次密码不一致' })
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`${apiBase}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInfo.email, code: values.code, password: values.password }),
      })
      const data = await res.json() as any
      if (!res.ok) {
        Toast.show({ icon: 'fail', content: data.error || '注册失败' })
        return
      }
      login(data.token, data.user)
      Toast.show({ icon: 'success', content: '注册成功，欢迎加入！' })
      history.push('/')
    } catch {
      Toast.show({ icon: 'fail', content: '网络错误，请稍后重试' })
    } finally {
      setLoading(false)
    }
  }

  // 重新发送验证码
  async function handleResend() {
    if (countdown > 0) return
    setLoading(true)
    try {
      await fetch(`${apiBase}/api/auth/send-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailInfo),
      })
      startCountdown()
      Toast.show({ content: '验证码已重新发送' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100dvh', background: '#f5f5f5' }}>
      <NavBar
        onBack={() => (step === 1 ? setStep(0) : history.back())}
        style={{ background: '#fff' }}
      >
        注册账号
      </NavBar>

      <div style={{ padding: '24px 16px 0' }}>
        {/* 步骤指示器 */}
        <Steps
          current={step}
          style={{ marginBottom: 24, padding: '0 16px' }}
        >
          <Steps.Step title="填写信息" />
          <Steps.Step title="验证邮箱" />
        </Steps>

        {step === 0 && (
          <div style={{ background: '#fff', borderRadius: 12, padding: '16px 0' }}>
            <Form
              onFinish={handleSendCode}
              footer={
                <Button block type="submit" color="primary" size="large" loading={loading}>
                  获取验证码
                </Button>
              }
            >
              <Form.Item
                name="name"
                label="昵称"
                rules={[{ required: true, message: '请输入昵称' }]}
              >
                <Input placeholder="你的昵称" clearable />
              </Form.Item>
              <Form.Item
                name="email"
                label="邮箱"
                rules={[
                  { required: true, message: '请输入邮箱' },
                  { type: 'string', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '邮箱格式不正确' },
                ]}
              >
                <Input placeholder="用于接收验证码" type="email" clearable />
              </Form.Item>
            </Form>
          </div>
        )}

        {step === 1 && (
          <>
            <div style={{ textAlign: 'center', marginBottom: 16, color: '#666', fontSize: 14 }}>
              验证码已发送至 <span style={{ color: '#1677ff' }}>{emailInfo.email}</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '16px 0' }}>
              <Form
                onFinish={handleRegister}
                footer={
                  <Button block type="submit" color="primary" size="large" loading={loading}>
                    完成注册
                  </Button>
                }
              >
                <Form.Item
                  name="code"
                  label="验证码"
                  rules={[
                    { required: true, message: '请输入验证码' },
                    { len: 6, message: '验证码为 6 位数字' },
                  ]}
                  extra={
                    <span
                      style={{ color: countdown > 0 ? '#999' : '#1677ff', fontSize: 13, cursor: countdown > 0 ? 'default' : 'pointer' }}
                      onClick={handleResend}
                    >
                      {countdown > 0 ? `${countdown}s 后重发` : '重新发送'}
                    </span>
                  }
                >
                  <Input placeholder="6 位数字验证码" type="tel" maxLength={6} />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="密码"
                  rules={[
                    { required: true, message: '请设置密码' },
                    { min: 6, message: '密码至少 6 位' },
                  ]}
                >
                  <Input placeholder="至少 6 位" type="password" />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  label="确认密码"
                  rules={[{ required: true, message: '请确认密码' }]}
                >
                  <Input placeholder="再次输入密码" type="password" />
                </Form.Item>
              </Form>
            </div>
          </>
        )}

        <div style={{ textAlign: 'center', marginTop: 16, color: '#999', fontSize: 14 }}>
          已有账号？
          <span
            style={{ color: '#1677ff', cursor: 'pointer', marginLeft: 4 }}
            onClick={() => history.push('/login')}
          >
            立即登录
          </span>
        </div>
      </div>
    </div>
  )
}
