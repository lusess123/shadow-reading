import React, { useMemo } from 'react'
import { history, Outlet, useLocation, useModel } from '@umijs/max'
import { NavBar, TabBar, Toast } from 'antd-mobile'
import {
  SoundOutline,
  FileOutline,
  UserOutline,
  AddCircleOutline,
} from 'antd-mobile-icons'
import 'antd-mobile/es/global'

// 每个 Tab 对应的页面标题
const PAGE_TITLES: Record<string, string> = {
  '/': '跟读练习',
  '/docs': '文档浏览',
  '/my-courses': '我的课程',
  '/create-course': '创建课程',
}

const TAB_ROUTES = ['/', '/docs', '/my-courses']

const TABS = [
  { key: '/', title: '跟读', icon: <SoundOutline /> },
  { key: '/docs', title: '文档', icon: <FileOutline /> },
  { key: '/my-courses', title: '我的', icon: <UserOutline /> },
]

export default function MobileLayout() {
  const location = useLocation()
  const { user } = useModel('auth')

  const pathname = location.pathname

  // 是否显示底部 TabBar（docs/:id 和 create-course 不显示，或者都显示）
  const showTabBar = TAB_ROUTES.includes(pathname) || pathname === '/create-course'

  // 当前激活 Tab
  const activeTab = useMemo(() => {
    if (pathname.startsWith('/docs')) return '/docs'
    if (pathname === '/my-courses' || pathname === '/create-course') return '/my-courses'
    return '/'
  }, [pathname])

  // 是否显示返回按钮（docs/:id 和 create-course 显示返回）
  const showBack = pathname.startsWith('/docs/') || pathname === '/create-course'

  const title = PAGE_TITLES[pathname] || (pathname.startsWith('/docs/') ? '文档阅读' : '')

  function handleTabChange(key: string) {
    if (key === '/my-courses' && !user) {
      Toast.show({ content: '请先登录', position: 'bottom' })
      history.push('/login')
      return
    }
    history.push(key)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100dvh',
        overflow: 'hidden',
        background: '#f5f5f5',
      }}
    >
      {/* 顶部导航栏 */}
      <NavBar
        back={showBack ? '返回' : null}
        onBack={() => history.back()}
        style={{
          background: '#fff',
          borderBottom: '1px solid #f0f0f0',
          flexShrink: 0,
          '--height': '44px',
        } as React.CSSProperties}
        right={
          user ? (
            <span
              style={{ fontSize: 13, color: '#1677ff', cursor: 'pointer' }}
              onClick={() => history.push('/my-courses')}
            >
              {user.name}
            </span>
          ) : (
            <span
              style={{ fontSize: 13, color: '#1677ff', cursor: 'pointer' }}
              onClick={() => history.push('/login')}
            >
              登录
            </span>
          )
        }
      >
        {title}
      </NavBar>

      {/* 内容区 */}
      <main
        style={{
          flex: 1,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch' as any,
        }}
      >
        <Outlet />
      </main>

      {/* 底部 Tab 导航 */}
      {showTabBar && (
        <TabBar
          activeKey={activeTab}
          onChange={handleTabChange}
          style={{
            background: '#fff',
            borderTop: '1px solid #f0f0f0',
            paddingBottom: 'env(safe-area-inset-bottom)',
            flexShrink: 0,
          }}
        >
          {TABS.map((tab) => (
            <TabBar.Item key={tab.key} icon={tab.icon} title={tab.title} />
          ))}
        </TabBar>
      )}
    </div>
  )
}
