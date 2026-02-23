import { defineConfig } from '@umijs/max'

export default defineConfig({
  model: {},
  initialState: {},
  request: {},
  esbuildMinifyIIFE: true,
  // 不使用 Pro Layout，改用自定义移动端布局（src/layouts/index.tsx）
  layout: false,
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs/index' },
    { path: '/docs/:id', component: 'docs/[id]' },
    { path: '/login', component: 'login', layout: false },
    { path: '/register', component: 'register', layout: false },
    { path: '/my-courses', component: 'my-courses' },
    { path: '/create-course', component: 'create-course' },
  ],
  npmClient: 'pnpm',
  // 开发时代理 API 到本地 Worker
  proxy: {
    '/api': {
      target: 'http://localhost:8787',
      changeOrigin: true,
    },
  },
  // 生产时 API 地址（通过环境变量或 define 配置）
  define: {
    'process.env.API_BASE': process.env.API_BASE || '',
  },
})
