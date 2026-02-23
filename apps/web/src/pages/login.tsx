import React, { useState } from 'react'
import { Button, Form, Input, NavBar, Toast } from 'antd-mobile'
import { history, useModel } from '@umijs/max'
import 'antd-mobile/es/global'

const apiBase = (typeof process !== 'undefined' && process.env.API_BASE) || ''

export default function LoginPage() {
  const { login } = useModel('auth')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(values: { email: string; password: string }) {
    setLoading(true)
    try {
      const res = await fetch(`${apiBase}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json() as any
      if (!res.ok) {
        Toast.show({ icon: 'fail', content: data.error || '登录失败' })
        return
      }
      login(data.token, data.user)
      Toast.show({ icon: 'success', content: '登录成功' })
      history.push('/')
    } catch {
      Toast.show({ icon: 'fail', content: '网络错误，请稍后重试' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100dvh', background: '#f5f5f5' }}>
      <NavBar onBack={() => history.back()} style={{ background: '#fff' }}>
        登录
      </NavBar>

      <div style={{ padding: '40px 16px 0' }}>
        {/* Logo 区域 */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>📖</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#1677ff' }}>Shadow Reading</div>
          <div style={{ fontSize: 14, color: '#999', marginTop: 4 }}>跟读练习，提升口语</div>
        </div>

        <div style={{ background: '#fff', borderRadius: 12, padding: '16px 0', marginBottom: 16 }}>
          <Form
            onFinish={handleSubmit}
            footer={
              <Button block type="submit" color="primary" size="large" loading={loading}>
                登录
              </Button>
            }
          >
            <Form.Item
              name="email"
              label="邮箱"
              rules={[
                { required: true, message: '请输入邮箱' },
                { type: 'string', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '邮箱格式不正确' },
              ]}
            >
              <Input placeholder="请输入邮箱" type="email" autoComplete="email" clearable />
            </Form.Item>
            <Form.Item
              name="password"
              label="密码"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input placeholder="请输入密码" type="password" autoComplete="current-password" />
            </Form.Item>
          </Form>
        </div>

        <div style={{ textAlign: 'center', color: '#999', fontSize: 14 }}>
          还没有账号？
          <span
            style={{ color: '#1677ff', cursor: 'pointer', marginLeft: 4 }}
            onClick={() => history.push('/register')}
          >
            立即注册
          </span>
        </div>
      </div>
    </div>
  )
}
