import { useState, useCallback, useEffect } from 'react'

export interface AuthUser {
  id: string
  email: string
  name: string
}

const TOKEN_KEY = 'sr_token'
const USER_KEY = 'sr_user'

const apiBase = (typeof process !== 'undefined' && process.env.API_BASE) || ''

export default function useAuthModel() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // 初始化：从 localStorage 恢复登录状态
  useEffect(() => {
    const savedToken = localStorage.getItem(TOKEN_KEY)
    const savedUser = localStorage.getItem(USER_KEY)
    if (savedToken && savedUser) {
      try {
        setToken(savedToken)
        setUser(JSON.parse(savedUser))
      } catch {}
    }
    setLoading(false)
  }, [])

  const login = useCallback((newToken: string, newUser: AuthUser) => {
    setToken(newToken)
    setUser(newUser)
    localStorage.setItem(TOKEN_KEY, newToken)
    localStorage.setItem(USER_KEY, JSON.stringify(newUser))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUser(null)
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  }, [])

  // 返回带 Authorization 头的 fetch
  const authFetch = useCallback((url: string, options: RequestInit = {}) => {
    const headers = new Headers(options.headers)
    if (token) headers.set('Authorization', `Bearer ${token}`)
    return fetch(`${apiBase}${url}`, { ...options, headers })
  }, [token])

  return { user, token, loading, login, logout, authFetch, isLoggedIn: !!user }
}
