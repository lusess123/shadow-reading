import { Hono } from 'hono'
import { cors } from 'hono/cors'

// ==================== Types ====================

type Bindings = {
  AI: Ai
  AUDIO_CACHE: R2Bucket
  DOCS: R2Bucket
  COURSES: R2Bucket
  DB: D1Database
  KV_VERIFY: KVNamespace
  KV_SESSIONS: KVNamespace
  ALLOWED_ORIGIN: string
  JWT_SECRET: string
  RESEND_API_KEY: string
  EMAIL_FROM: string
}

type Variables = {
  userId?: string
  userEmail?: string
  userName?: string
}

interface UserRow {
  id: string
  email: string
  name: string
  password_hash: string
  created_at: string
}

interface CourseOwnerRow {
  course_id: string
  owner_id: string
  owner_email: string
  owner_name: string
  is_public: number
  created_at: string
}

// ==================== Helpers ====================

async function hashText(text: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function generateId(): string {
  return crypto.randomUUID()
}

function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// PBKDF2 密码哈希（Workers 兼容）
async function hashPassword(password: string): Promise<string> {
  const enc = new TextEncoder()
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits'])
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, keyMaterial, 256)
  const hashHex = Array.from(new Uint8Array(bits)).map(b => b.toString(16).padStart(2, '0')).join('')
  const saltHex = Array.from(salt).map(b => b.toString(16).padStart(2, '0')).join('')
  return `pbkdf2:${saltHex}:${hashHex}`
}

async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const parts = stored.split(':')
  if (parts.length !== 3 || parts[0] !== 'pbkdf2') return false
  const saltHex = parts[1]
  const hashHex = parts[2]
  const salt = new Uint8Array(saltHex.match(/.{2}/g)!.map(h => parseInt(h, 16)))
  const enc = new TextEncoder()
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits'])
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, keyMaterial, 256)
  const testHex = Array.from(new Uint8Array(bits)).map(b => b.toString(16).padStart(2, '0')).join('')
  return testHex === hashHex
}

// HMAC-SHA256 JWT（无外部依赖，支持 Unicode）
function base64url(str: string): string {
  // 先转 UTF-8 字节，再 base64 编码（支持中文等 Unicode 字符）
  const bytes = new TextEncoder().encode(str)
  let binary = ''
  bytes.forEach(b => { binary += String.fromCharCode(b) })
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function base64urlDecode(str: string): string {
  const padded = str.replace(/-/g, '+').replace(/_/g, '/') + '=='.slice(0, (4 - (str.length % 4)) % 4)
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) { bytes[i] = binary.charCodeAt(i) }
  return new TextDecoder().decode(bytes)
}

async function signJWT(payload: Record<string, unknown>, secret: string): Promise<string> {
  const header = base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const body = base64url(JSON.stringify(payload))
  const data = `${header}.${body}`
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data))
  const sigB64 = base64url(String.fromCharCode(...new Uint8Array(sig)))
  return `${data}.${sigB64}`
}

async function verifyJWT(token: string, secret: string): Promise<Record<string, unknown> | null> {
  try {
    const parts = token.split('.')
    if (parts.length !== 3) return null
    const [header, body, sig] = parts
    const data = `${header}.${body}`
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify'])
    const sigBytes = Uint8Array.from(base64urlDecode(sig), c => c.charCodeAt(0))
    const valid = await crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(data))
    if (!valid) return null
    const payload = JSON.parse(base64urlDecode(body)) as Record<string, unknown>
    // 检查过期
    if (payload.exp && typeof payload.exp === 'number' && payload.exp < Math.floor(Date.now() / 1000)) return null
    return payload
  } catch {
    return null
  }
}

// 发送验证码邮件（Resend API 或控制台 fallback）
async function sendVerificationEmail(email: string, name: string, code: string, resendApiKey: string, emailFrom: string): Promise<void> {
  if (!resendApiKey) {
    console.log(`[DEV] 验证码发送到 ${email}（${name}）：${code}`)
    return
  }
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: emailFrom || 'noreply@shadow-reading.app',
      to: email,
      subject: '【Shadow Reading】邮箱验证码',
      html: `<p>你好 ${name}，</p><p>你的注册验证码是：</p><h2 style="font-size:32px;letter-spacing:8px">${code}</h2><p>验证码 10 分钟内有效。</p>`,
    }),
  })
}

// Workers AI TTS 目前只有英文
const VOICES = [{ name: 'cf-speecht5', gender: 'Female', 中文: '英语-Cloudflare-AI-女性' }]

// ==================== App ====================

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>()

// CORS 中间件
app.use(
  '/api/*',
  cors({
    origin: (origin, c) => {
      const allowed = c.env.ALLOWED_ORIGIN || '*'
      if (allowed === '*') return '*'
      if (origin.startsWith('http://localhost') || origin.startsWith('http://127.0.0.1')) {
        return origin
      }
      return allowed
    },
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
  })
)

// 可选认证中间件（不强制，只提取用户信息）
async function optionalAuth(c: any, next: () => Promise<void>) {
  const authHeader = c.req.header('Authorization')
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.slice(7)
    const payload = await verifyJWT(token, c.env.JWT_SECRET || 'dev-secret')
    if (payload) {
      c.set('userId', payload.sub as string)
      c.set('userEmail', payload.email as string)
      c.set('userName', payload.name as string)
    }
  }
  await next()
}

// 强制认证中间件
async function requireAuth(c: any, next: () => Promise<void>) {
  await optionalAuth(c, async () => {})
  if (!c.get('userId')) {
    return c.json({ error: '请先登录' }, 401)
  }
  await next()
}

// ==================== 认证接口 ====================

// POST /api/auth/send-code - 发送注册验证码
app.post('/api/auth/send-code', async (c) => {
  const { email, name } = await c.req.json<{ email: string; name: string }>()
  if (!email || !name) return c.json({ error: '缺少 email 或 name 参数' }, 400)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return c.json({ error: '邮箱格式不正确' }, 400)
  if (name.trim().length < 1) return c.json({ error: '昵称不能为空' }, 400)

  // 检查邮箱是否已注册
  const existing = await c.env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first()
  if (existing) return c.json({ error: '该邮箱已注册，请直接登录' }, 409)

  const code = generateCode()
  // 存 KV，10 分钟过期
  await c.env.KV_VERIFY.put(`verify:${email}`, JSON.stringify({ code, name: name.trim() }), { expirationTtl: 600 })
  await sendVerificationEmail(email, name.trim(), code, c.env.RESEND_API_KEY, c.env.EMAIL_FROM)

  return c.json({ success: true, message: '验证码已发送，请查收邮件' })
})

// POST /api/auth/register - 填验证码 + 密码完成注册
app.post('/api/auth/register', async (c) => {
  const { email, code, password } = await c.req.json<{ email: string; code: string; password: string }>()
  if (!email || !code || !password) return c.json({ error: '缺少必要参数' }, 400)
  if (password.length < 6) return c.json({ error: '密码至少 6 位' }, 400)

  const storedRaw = await c.env.KV_VERIFY.get(`verify:${email}`)
  if (!storedRaw) return c.json({ error: '验证码已过期或不存在，请重新发送' }, 400)

  const stored = JSON.parse(storedRaw) as { code: string; name: string }
  if (stored.code !== code) return c.json({ error: '验证码错误' }, 400)

  // 删除已用验证码
  await c.env.KV_VERIFY.delete(`verify:${email}`)

  const passwordHash = await hashPassword(password)
  const id = generateId()
  const createdAt = new Date().toISOString()

  await c.env.DB.prepare(
    'INSERT INTO users (id, email, name, password_hash, created_at) VALUES (?, ?, ?, ?, ?)'
  ).bind(id, email, stored.name, passwordHash, createdAt).run()

  // 颁发 token
  const token = await signJWT(
    { sub: id, email, name: stored.name, exp: Math.floor(Date.now() / 1000) + 7 * 24 * 3600 },
    c.env.JWT_SECRET || 'dev-secret'
  )

  return c.json({ success: true, token, user: { id, email, name: stored.name } })
})

// POST /api/auth/login - 邮箱 + 密码登录
app.post('/api/auth/login', async (c) => {
  const { email, password } = await c.req.json<{ email: string; password: string }>()
  if (!email || !password) return c.json({ error: '缺少 email 或 password' }, 400)

  const user = await c.env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(email).first<UserRow>()
  if (!user) return c.json({ error: '邮箱或密码错误' }, 401)

  const valid = await verifyPassword(password, user.password_hash)
  if (!valid) return c.json({ error: '邮箱或密码错误' }, 401)

  const token = await signJWT(
    { sub: user.id, email: user.email, name: user.name, exp: Math.floor(Date.now() / 1000) + 7 * 24 * 3600 },
    c.env.JWT_SECRET || 'dev-secret'
  )

  return c.json({ success: true, token, user: { id: user.id, email: user.email, name: user.name } })
})

// GET /api/auth/me - 获取当前用户信息
app.get('/api/auth/me', optionalAuth, (c) => {
  const userId = c.get('userId')
  if (!userId) return c.json({ user: null })
  return c.json({ user: { id: userId, email: c.get('userEmail'), name: c.get('userName') } })
})

// ==================== TTS 接口 ====================
// GET /api/tts?s=<text>&v=<voice>

app.get('/api/tts', async (c) => {
  const text = c.req.query('s')
  const voice = c.req.query('v') || 'cf-speecht5'

  if (!text) return c.json({ error: '缺少 s 参数' }, 400)

  const hash = await hashText(`${voice}:${text}`)
  const cacheKey = `${voice}/${hash}.wav`

  // 查 R2 缓存
  const cached = await c.env.AUDIO_CACHE.get(cacheKey)
  if (cached) {
    return new Response(await cached.arrayBuffer(), {
      headers: {
        'Content-Type': 'audio/wav',
        'Cache-Control': 'public, max-age=604800',
        'X-Cache': 'HIT',
      },
    })
  }

  // 调用 Workers AI
  try {
    const result = await c.env.AI.run('@cf/microsoft/speecht5-tts', { prompt: text })
    const audioBuffer =
      result instanceof ArrayBuffer ? result : await (result as any).arrayBuffer()

    const putPromise = c.env.AUDIO_CACHE.put(cacheKey, audioBuffer.slice(0), {
      httpMetadata: { contentType: 'audio/wav' },
      customMetadata: { text: text.slice(0, 200), voice },
    })
    try {
      c.executionCtx.waitUntil(putPromise)
    } catch {
      await putPromise
    }

    return new Response(audioBuffer, {
      headers: {
        'Content-Type': 'audio/wav',
        'Cache-Control': 'public, max-age=604800',
        'X-Cache': 'MISS',
      },
    })
  } catch (err) {
    console.error('TTS 生成失败:', err)
    return c.json({ error: 'TTS 生成失败', detail: String(err) }, 500)
  }
})

// ==================== 声音列表 ====================

app.get('/api/voices', (c) => {
  return c.json(VOICES)
})

// ==================== 课程接口 ====================
// GET  /api/courses        - 列出所有公开课程 + 我的课程
// GET  /api/courses/:name  - 获取指定课程
// POST /api/courses        - 创建课程（需登录）
// PUT  /api/courses/:name  - 更新课程（需登录且是课程所有者）
// DELETE /api/courses/:name - 删除课程（需登录且是课程所有者）

app.get('/api/courses', optionalAuth, async (c) => {
  const userId = c.get('userId')
  const list = await c.env.COURSES.list()

  const courseIds = list.objects
    .filter((obj) => !obj.key.startsWith('_'))
    .map((obj) => {
      let displayId = obj.key.replace(/\.json$/, '')
      try { displayId = decodeURIComponent(displayId) } catch {}
      return { key: obj.key, id: displayId, size: obj.size, uploaded: obj.uploaded }
    })

  // 从 D1 获取课程归属信息
  let ownerMap: Record<string, CourseOwnerRow> = {}
  if (courseIds.length > 0) {
    const ids = courseIds.map(c => c.id)
    const placeholders = ids.map(() => '?').join(',')
    const rows = await c.env.DB.prepare(
      `SELECT * FROM course_owners WHERE course_id IN (${placeholders})`
    ).bind(...ids).all<CourseOwnerRow>()
    for (const row of rows.results) {
      ownerMap[row.course_id] = row
    }
  }

  const courses = courseIds
    .filter((item) => {
      const owner = ownerMap[item.id]
      // 公开课程 or 没有归属记录的（老课程）or 当前用户的课程
      if (!owner) return true
      if (owner.is_public) return true
      if (userId && owner.owner_id === userId) return true
      return false
    })
    .map((item) => {
      const owner = ownerMap[item.id]
      return {
        id: item.id,
        size: item.size,
        uploaded: item.uploaded,
        ownerId: owner?.owner_id || null,
        ownerName: owner?.owner_name || null,
        isPublic: owner ? Boolean(owner.is_public) : true,
        isMine: userId ? owner?.owner_id === userId : false,
      }
    })

  return c.json({ courses, total: courses.length })
})

app.get('/api/courses/:name', optionalAuth, async (c) => {
  const rawParam = c.req.param('name')
  const encodedKey = `${encodeURIComponent(rawParam)}.json`
  const plainKey = rawParam.endsWith('.json') ? rawParam : `${rawParam}.json`

  let obj = await c.env.COURSES.get(encodedKey)
  if (!obj) obj = await c.env.COURSES.get(plainKey)
  if (!obj) return c.json({ error: '课程不存在' }, 404)

  // 检查权限
  const userId = c.get('userId')
  const owner = await c.env.DB.prepare('SELECT * FROM course_owners WHERE course_id = ?').bind(rawParam).first<CourseOwnerRow>()
  if (owner && !owner.is_public && (!userId || owner.owner_id !== userId)) {
    return c.json({ error: '无权限访问此课程' }, 403)
  }

  const sentences = await obj.json()
  return c.json({
    id: rawParam,
    sentences,
    ownerId: owner?.owner_id || null,
    ownerName: owner?.owner_name || null,
    isPublic: owner ? Boolean(owner.is_public) : true,
    isMine: userId ? owner?.owner_id === userId : false,
  })
})

// POST /api/courses - 创建课程（需登录）
app.post('/api/courses', requireAuth, async (c) => {
  const { name, sentences, isPublic = true } = await c.req.json<{
    name: string
    sentences: unknown[]
    isPublic?: boolean
  }>()
  if (!name || !Array.isArray(sentences)) return c.json({ error: '缺少 name 或 sentences' }, 400)

  const userId = c.get('userId')!
  const userEmail = c.get('userEmail')!
  const userName = c.get('userName')!

  const key = `${encodeURIComponent(name)}.json`
  const body = JSON.stringify(sentences)

  await c.env.COURSES.put(key, body, {
    httpMetadata: { contentType: 'application/json; charset=utf-8' },
    customMetadata: { uploadedAt: new Date().toISOString() },
  })

  // 写入 D1 归属表
  await c.env.DB.prepare(
    'INSERT OR REPLACE INTO course_owners (course_id, owner_id, owner_email, owner_name, is_public, created_at) VALUES (?, ?, ?, ?, ?, ?)'
  ).bind(name, userId, userEmail, userName, isPublic ? 1 : 0, new Date().toISOString()).run()

  return c.json({ success: true, id: name })
})

// PUT /api/courses/:name - 更新课程（需登录且是所有者）
app.put('/api/courses/:name', requireAuth, async (c) => {
  const name = decodeURIComponent(c.req.param('name'))
  const key = name.endsWith('.json') ? name : `${encodeURIComponent(name)}.json`
  const userId = c.get('userId')!
  const userEmail = c.get('userEmail')!
  const userName = c.get('userName')!

  // 检查是否是所有者（或课程尚无归属）
  const owner = await c.env.DB.prepare('SELECT * FROM course_owners WHERE course_id = ?').bind(name).first<CourseOwnerRow>()
  if (owner && owner.owner_id !== userId) {
    return c.json({ error: '无权限修改此课程' }, 403)
  }

  const body = await c.req.text()
  try { JSON.parse(body) } catch { return c.json({ error: '请求体必须是合法 JSON' }, 400) }

  const isPublicHeader = c.req.header('X-Is-Public')
  const isPublic = isPublicHeader !== undefined ? isPublicHeader !== 'false' : (owner?.is_public !== 0)

  await c.env.COURSES.put(key, body, {
    httpMetadata: { contentType: 'application/json; charset=utf-8' },
    customMetadata: { uploadedAt: new Date().toISOString() },
  })

  await c.env.DB.prepare(
    'INSERT OR REPLACE INTO course_owners (course_id, owner_id, owner_email, owner_name, is_public, created_at) VALUES (?, ?, ?, ?, ?, ?)'
  ).bind(name, userId, userEmail, userName, isPublic ? 1 : 0, owner?.created_at || new Date().toISOString()).run()

  return c.json({ success: true, id: name })
})

app.delete('/api/courses/:name', requireAuth, async (c) => {
  const name = decodeURIComponent(c.req.param('name'))
  const key = name.endsWith('.json') ? name : `${encodeURIComponent(name)}.json`
  const userId = c.get('userId')!

  const owner = await c.env.DB.prepare('SELECT * FROM course_owners WHERE course_id = ?').bind(name).first<CourseOwnerRow>()
  if (owner && owner.owner_id !== userId) {
    return c.json({ error: '无权限删除此课程' }, 403)
  }

  await c.env.COURSES.delete(key)
  if (owner) {
    await c.env.DB.prepare('DELETE FROM course_owners WHERE course_id = ?').bind(name).run()
  }

  return c.json({ success: true })
})

// ==================== Markdown 文档接口 ====================

app.get('/api/docs', async (c) => {
  const list = await c.env.DOCS.list()
  const docs = list.objects.map((obj) => {
    let displayName = obj.key
    try { displayName = decodeURIComponent(obj.key) } catch {}
    return {
      id: obj.key,
      name: displayName,
      size: obj.size,
      uploaded: obj.uploaded,
    }
  })
  return c.json({ docs, total: docs.length })
})

app.get('/api/docs/:name', async (c) => {
  const rawParam = c.req.param('name')
  const r2Key = encodeURIComponent(rawParam)

  let obj = await c.env.DOCS.get(r2Key)
  if (!obj) obj = await c.env.DOCS.get(rawParam)
  if (!obj) return c.json({ error: '文件不存在' }, 404)

  const content = await obj.text()
  let displayName = rawParam
  try { displayName = decodeURIComponent(rawParam) } catch {}

  return c.json({
    name: displayName,
    content,
    uploaded: obj.uploaded,
    customMetadata: obj.customMetadata,
  })
})

app.put('/api/docs/:name', async (c) => {
  const name = decodeURIComponent(c.req.param('name'))
  const body = await c.req.text()

  await c.env.DOCS.put(name, body, {
    httpMetadata: { contentType: 'text/markdown; charset=utf-8' },
    customMetadata: { uploadedAt: new Date().toISOString() },
  })

  return c.json({ success: true, name })
})

// ==================== 健康检查 ====================

app.get('/', (c) => c.json({ status: 'ok', service: 'shadow-reading-api', version: '2.0.0' }))

export default app
