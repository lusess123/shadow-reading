import { describe, it, expect } from 'vitest'
import app from './index'

// ==================== Mock R2 Bucket ====================

function createMockR2() {
  const store = new Map<string, { data: string; metadata?: Record<string, string> }>()
  return {
    async get(key: string) {
      const item = store.get(key)
      if (!item) return null
      return {
        text: async () => item.data,
        json: async () => JSON.parse(item.data),
        arrayBuffer: async () => new TextEncoder().encode(item.data).buffer,
        uploaded: new Date().toISOString(),
        customMetadata: item.metadata || {},
        key,
      }
    },
    async put(key: string, data: string | ArrayBuffer, opts?: any) {
      const text = typeof data === 'string' ? data : new TextDecoder().decode(data as ArrayBuffer)
      store.set(key, { data: text, metadata: opts?.customMetadata })
    },
    async delete(key: string) {
      store.delete(key)
    },
    async list() {
      const objects = Array.from(store.entries()).map(([key, val]) => ({
        key,
        size: val.data.length,
        uploaded: new Date().toISOString(),
        customMetadata: val.metadata || {},
      }))
      return { objects, truncated: false }
    },
    _store: store,
  }
}

// ==================== Mock AI ====================

function createMockAI() {
  return {
    async run(_model: string, _params: any) {
      return new ArrayBuffer(44)
    },
  }
}

// ==================== Mock D1 Database ====================

function createMockD1() {
  const tables: Record<string, any[]> = {
    users: [],
    course_owners: [],
  }

  function matchRow(row: any, conditions: string, values: any[]): boolean {
    // 简单的 WHERE 解析：支持 col = ? 和 col IN (?, ?, ...)
    const andClauses = conditions.split(' AND ')
    let vi = 0
    for (const clause of andClauses) {
      const inMatch = clause.match(/(\w+)\s+IN\s*\(([^)]+)\)/)
      if (inMatch) {
        const col = inMatch[1].trim()
        const count = inMatch[2].split(',').length
        const vals = values.slice(vi, vi + count)
        vi += count
        if (!vals.includes(row[col])) return false
      } else {
        const eqMatch = clause.match(/(\w+)\s*=\s*\?/)
        if (eqMatch) {
          const col = eqMatch[1].trim()
          if (row[col] !== values[vi]) return false
          vi++
        }
      }
    }
    return true
  }

  function parseQuery(sql: string, values: any[]) {
    const s = sql.trim()

    // INSERT OR REPLACE
    if (/^INSERT\s+OR\s+REPLACE/i.test(s)) {
      const tableMatch = s.match(/INTO\s+(\w+)\s*\(/i)
      const colMatch = s.match(/\(([^)]+)\)\s+VALUES/i)
      if (!tableMatch || !colMatch) return { type: 'insert', affected: 0 }
      const table = tableMatch[1]
      const cols = colMatch[1].split(',').map(c => c.trim())
      const newRow: any = {}
      cols.forEach((col, i) => { newRow[col] = values[i] })
      // Find primary key and replace if exists
      const existing = tables[table]?.findIndex((r: any) => r[cols[0]] === newRow[cols[0]])
      if (existing !== undefined && existing >= 0) {
        tables[table][existing] = newRow
      } else {
        tables[table] = tables[table] || []
        tables[table].push(newRow)
      }
      return { type: 'insert', results: [], success: true, meta: {} }
    }

    // INSERT
    if (/^INSERT\s+INTO/i.test(s)) {
      const tableMatch = s.match(/INTO\s+(\w+)\s*\(/i)
      const colMatch = s.match(/\(([^)]+)\)\s+VALUES/i)
      if (!tableMatch || !colMatch) return { type: 'insert', affected: 0 }
      const table = tableMatch[1]
      const cols = colMatch[1].split(',').map(c => c.trim())
      const newRow: any = {}
      cols.forEach((col, i) => { newRow[col] = values[i] })
      tables[table] = tables[table] || []
      tables[table].push(newRow)
      return { type: 'insert', results: [], success: true, meta: {} }
    }

    // SELECT
    if (/^SELECT/i.test(s)) {
      const tableMatch = s.match(/FROM\s+(\w+)/i)
      if (!tableMatch) return { type: 'select', results: [] }
      const table = tableMatch[1]
      let rows = [...(tables[table] || [])]
      const whereMatch = s.match(/WHERE\s+(.+?)(?:\s+LIMIT|\s*$)/i)
      if (whereMatch) {
        rows = rows.filter(row => matchRow(row, whereMatch[1], values))
      }
      return { type: 'select', results: rows }
    }

    // DELETE
    if (/^DELETE/i.test(s)) {
      const tableMatch = s.match(/FROM\s+(\w+)/i)
      if (!tableMatch) return { type: 'delete', affected: 0 }
      const table = tableMatch[1]
      const whereMatch = s.match(/WHERE\s+(.+?)$/i)
      if (whereMatch) {
        const before = tables[table]?.length || 0
        tables[table] = (tables[table] || []).filter((row: any) => !matchRow(row, whereMatch[1], values))
        return { type: 'delete', affected: before - (tables[table]?.length || 0), success: true, meta: {} }
      }
      return { type: 'delete', affected: 0 }
    }

    // CREATE TABLE (no-op in mock)
    return { type: 'other', results: [], success: true, meta: {} }
  }

  return {
    prepare(sql: string) {
      let boundValues: any[] = []
      return {
        bind(...values: any[]) {
          boundValues = values
          return this
        },
        async run() {
          return parseQuery(sql, boundValues)
        },
        async first<T = any>(): Promise<T | null> {
          const result = parseQuery(sql, boundValues) as any
          return (result.results?.[0] as T) || null
        },
        async all<T = any>() {
          const result = parseQuery(sql, boundValues) as any
          return { results: (result.results || []) as T[], success: true, meta: {} }
        },
      }
    },
    _tables: tables,
  }
}

// ==================== Mock KV ====================

function createMockKV() {
  const store = new Map<string, { value: string; ttl?: number }>()
  return {
    async get(key: string): Promise<string | null> {
      return store.get(key)?.value || null
    },
    async put(key: string, value: string, opts?: { expirationTtl?: number }) {
      store.set(key, { value, ttl: opts?.expirationTtl })
    },
    async delete(key: string) {
      store.delete(key)
    },
    _store: store,
  }
}

// ==================== Test Env ====================

function createTestEnv() {
  return {
    AI: createMockAI(),
    AUDIO_CACHE: createMockR2(),
    DOCS: createMockR2(),
    COURSES: createMockR2(),
    DB: createMockD1(),
    KV_VERIFY: createMockKV(),
    KV_SESSIONS: createMockKV(),
    ALLOWED_ORIGIN: '*',
    JWT_SECRET: 'test-secret',
    RESEND_API_KEY: '',
    EMAIL_FROM: 'test@example.com',
  }
}

// ==================== Auth Helper ====================

async function registerAndLogin(env: ReturnType<typeof createTestEnv>, email = 'user@test.com', name = 'Test User', password = 'password123') {
  // 1. Send code
  await app.fetch(new Request('http://localhost/api/auth/send-code', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, name }),
  }), env as any)

  // 2. Get code from KV mock
  const stored = await env.KV_VERIFY.get(`verify:${email}`)
  const { code } = JSON.parse(stored!)

  // 3. Register
  const regRes = await app.fetch(new Request('http://localhost/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, code, password }),
  }), env as any)
  const regBody = await regRes.json() as any
  return regBody.token as string
}

// ==================== Tests ====================

describe('Health Check', () => {
  it('GET / 返回状态 ok', async () => {
    const env = createTestEnv()
    const res = await app.fetch(new Request('http://localhost/'), env as any)
    expect(res.status).toBe(200)
    const body = await res.json() as any
    expect(body.status).toBe('ok')
  })
})

describe('Voices API', () => {
  it('GET /api/voices 返回声音列表', async () => {
    const env = createTestEnv()
    const res = await app.fetch(new Request('http://localhost/api/voices'), env as any)
    expect(res.status).toBe(200)
    const voices = await res.json() as any[]
    expect(Array.isArray(voices)).toBe(true)
    expect(voices.length).toBeGreaterThan(0)
  })
})

describe('TTS API', () => {
  it('GET /api/tts 缺少 s 参数返回 400', async () => {
    const env = createTestEnv()
    const res = await app.fetch(new Request('http://localhost/api/tts'), env as any)
    expect(res.status).toBe(400)
  })

  it('GET /api/tts 生成音频（MISS）', async () => {
    const env = createTestEnv()
    const res = await app.fetch(new Request('http://localhost/api/tts?s=Hello&v=cf-speecht5'), env as any)
    expect(res.status).toBe(200)
    expect(res.headers.get('X-Cache')).toBe('MISS')
  })

  it('GET /api/tts 命中缓存（HIT）', async () => {
    const env = createTestEnv()
    await app.fetch(new Request('http://localhost/api/tts?s=Hello+Cache&v=cf-speecht5'), env as any)
    const res = await app.fetch(new Request('http://localhost/api/tts?s=Hello+Cache&v=cf-speecht5'), env as any)
    expect(res.headers.get('X-Cache')).toBe('HIT')
  })
})

describe('Auth API', () => {
  it('POST /api/auth/send-code 缺少参数返回 400', async () => {
    const env = createTestEnv()
    const res = await app.fetch(new Request('http://localhost/api/auth/send-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@test.com' }),
    }), env as any)
    expect(res.status).toBe(400)
  })

  it('POST /api/auth/send-code 成功发送验证码', async () => {
    const env = createTestEnv()
    const res = await app.fetch(new Request('http://localhost/api/auth/send-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'user@test.com', name: 'Test User' }),
    }), env as any)
    expect(res.status).toBe(200)
    const body = await res.json() as any
    expect(body.success).toBe(true)
    // 验证 KV 中有验证码
    const stored = await env.KV_VERIFY.get('verify:user@test.com')
    expect(stored).not.toBeNull()
  })

  it('完整注册流程', async () => {
    const env = createTestEnv()
    const token = await registerAndLogin(env)
    expect(token).toBeTruthy()
    expect(token.split('.')).toHaveLength(3)
  })

  it('POST /api/auth/register 验证码错误返回 400', async () => {
    const env = createTestEnv()
    await app.fetch(new Request('http://localhost/api/auth/send-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'user@test.com', name: 'Test' }),
    }), env as any)
    const res = await app.fetch(new Request('http://localhost/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'user@test.com', code: '000000', password: 'password123' }),
    }), env as any)
    expect(res.status).toBe(400)
  })

  it('POST /api/auth/login 登录成功', async () => {
    const env = createTestEnv()
    await registerAndLogin(env, 'login@test.com', 'Login User', 'mypassword')
    const res = await app.fetch(new Request('http://localhost/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'login@test.com', password: 'mypassword' }),
    }), env as any)
    expect(res.status).toBe(200)
    const body = await res.json() as any
    expect(body.token).toBeTruthy()
    expect(body.user.email).toBe('login@test.com')
  })

  it('POST /api/auth/login 密码错误返回 401', async () => {
    const env = createTestEnv()
    await registerAndLogin(env, 'user2@test.com', 'User2', 'correctpass')
    const res = await app.fetch(new Request('http://localhost/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'user2@test.com', password: 'wrongpass' }),
    }), env as any)
    expect(res.status).toBe(401)
  })

  it('GET /api/auth/me 未登录返回 null', async () => {
    const env = createTestEnv()
    const res = await app.fetch(new Request('http://localhost/api/auth/me'), env as any)
    expect(res.status).toBe(200)
    const body = await res.json() as any
    expect(body.user).toBeNull()
  })

  it('GET /api/auth/me 已登录返回用户信息', async () => {
    const env = createTestEnv()
    const token = await registerAndLogin(env, 'me@test.com', 'Me User')
    const res = await app.fetch(new Request('http://localhost/api/auth/me', {
      headers: { 'Authorization': `Bearer ${token}` },
    }), env as any)
    expect(res.status).toBe(200)
    const body = await res.json() as any
    expect(body.user.email).toBe('me@test.com')
  })
})

describe('Courses API', () => {
  it('GET /api/courses 空列表', async () => {
    const env = createTestEnv()
    const res = await app.fetch(new Request('http://localhost/api/courses'), env as any)
    expect(res.status).toBe(200)
    const body = await res.json() as any
    expect(body.courses).toEqual([])
  })

  it('POST /api/courses 未登录返回 401', async () => {
    const env = createTestEnv()
    const res = await app.fetch(new Request('http://localhost/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'test', sentences: [] }),
    }), env as any)
    expect(res.status).toBe(401)
  })

  it('POST /api/courses 已登录可创建课程', async () => {
    const env = createTestEnv()
    const token = await registerAndLogin(env)
    const sentences = [{ sentence: 'Hello', original: 'Hello', translation: '你好', phonetic: '[hɛloʊ]' }]
    const res = await app.fetch(new Request('http://localhost/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ name: 'my-course', sentences }),
    }), env as any)
    expect(res.status).toBe(200)
    const body = await res.json() as any
    expect(body.success).toBe(true)
  })

  it('GET /api/courses/:name 获取已创建的课程', async () => {
    const env = createTestEnv()
    const token = await registerAndLogin(env)
    const sentences = [{ sentence: 'Hello', original: 'Hello', translation: '你好', phonetic: '[hɛloʊ]' }]
    await app.fetch(new Request('http://localhost/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ name: 'get-course', sentences }),
    }), env as any)
    const res = await app.fetch(new Request('http://localhost/api/courses/get-course'), env as any)
    expect(res.status).toBe(200)
    const body = await res.json() as any
    expect(body.id).toBe('get-course')
    expect(body.sentences).toEqual(sentences)
  })

  it('DELETE /api/courses/:name 非所有者无法删除', async () => {
    const env = createTestEnv()
    const token1 = await registerAndLogin(env, 'owner@test.com', 'Owner')
    await app.fetch(new Request('http://localhost/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token1}` },
      body: JSON.stringify({ name: 'owned-course', sentences: [] }),
    }), env as any)
    // 第二个用户尝试删除
    const token2 = await registerAndLogin(env, 'other@test.com', 'Other')
    const res = await app.fetch(new Request('http://localhost/api/courses/owned-course', {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token2}` },
    }), env as any)
    expect(res.status).toBe(403)
  })
})

describe('Docs API', () => {
  it('GET /api/docs 空列表', async () => {
    const env = createTestEnv()
    const res = await app.fetch(new Request('http://localhost/api/docs'), env as any)
    expect(res.status).toBe(200)
    const body = await res.json() as any
    expect(body.docs).toEqual([])
  })

  it('PUT /api/docs/:name 上传文档', async () => {
    const env = createTestEnv()
    const res = await app.fetch(new Request('http://localhost/api/docs/test.md', {
      method: 'PUT',
      body: '# Test',
    }), env as any)
    expect(res.status).toBe(200)
  })

  it('GET /api/docs/:name 不存在返回 404', async () => {
    const env = createTestEnv()
    const res = await app.fetch(new Request('http://localhost/api/docs/not-exist.md'), env as any)
    expect(res.status).toBe(404)
  })
})
