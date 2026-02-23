import React, { useEffect, useState } from 'react'
import { Button, Dialog, List, Skeleton, SwipeAction, Tag, Toast } from 'antd-mobile'
import { AddCircleOutline, LinkOutline, DeleteOutline, EditSOutline } from 'antd-mobile-icons'
import { history, useModel } from '@umijs/max'

interface CourseInfo {
  id: string
  ownerName: string | null
  isPublic: boolean
  isMine: boolean
  size: number
  uploaded: string
}

const apiBase = (typeof process !== 'undefined' && process.env.API_BASE) || ''

export default function MyCoursesPage() {
  const { user, authFetch } = useModel('auth')
  const [courses, setCourses] = useState<CourseInfo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      history.push('/login')
      return
    }
    loadMyCourses()
  }, [user])

  async function loadMyCourses() {
    setLoading(true)
    try {
      const res = await authFetch('/api/courses')
      const data = await res.json() as { courses: CourseInfo[] }
      // 只显示自己创建的课程
      setCourses((data.courses || []).filter((c) => c.isMine))
    } catch {
      Toast.show({ icon: 'fail', content: '加载失败' })
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(courseId: string) {
    const confirmed = await Dialog.confirm({
      content: `确定删除课程「${courseId}」？`,
      confirmText: '删除',
      cancelText: '取消',
    })
    if (!confirmed) return

    try {
      await authFetch(`/api/courses/${encodeURIComponent(courseId)}`, { method: 'DELETE' })
      Toast.show({ icon: 'success', content: '已删除' })
      loadMyCourses()
    } catch {
      Toast.show({ icon: 'fail', content: '删除失败' })
    }
  }

  function handleShare(courseId: string) {
    const shareUrl = `${window.location.origin}/?course=${encodeURIComponent(courseId)}`
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        Toast.show({ icon: 'success', content: '分享链接已复制' })
      })
    } else {
      // fallback
      const el = document.createElement('textarea')
      el.value = shareUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      Toast.show({ icon: 'success', content: '分享链接已复制' })
    }
  }

  if (!user) return null

  return (
    <div>
      {/* 创建按钮 */}
      <div style={{ padding: '12px', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
        <Button
          block
          color="primary"
          onClick={() => history.push('/create-course')}
          style={{ borderRadius: 8 }}
        >
          <AddCircleOutline style={{ marginRight: 6 }} />
          创建新课程
        </Button>
      </div>

      {loading ? (
        <div style={{ padding: 12 }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} animated style={{ height: 60, marginBottom: 8, borderRadius: 8 }} />
          ))}
        </div>
      ) : courses.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📚</div>
          <div style={{ fontSize: 16, marginBottom: 8 }}>还没有创建任何课程</div>
          <div style={{ fontSize: 14 }}>点击上方按钮开始创建</div>
        </div>
      ) : (
        <List>
          {courses.map((course) => (
            <SwipeAction
              key={course.id}
              rightActions={[
                {
                  key: 'share',
                  text: (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                      <LinkOutline />
                      <span style={{ fontSize: 11 }}>分享</span>
                    </div>
                  ),
                  color: 'primary',
                  onClick: () => handleShare(course.id),
                },
                {
                  key: 'delete',
                  text: (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                      <DeleteOutline />
                      <span style={{ fontSize: 11 }}>删除</span>
                    </div>
                  ),
                  color: 'danger',
                  onClick: () => handleDelete(course.id),
                },
              ]}
            >
              <List.Item
                prefix={<div style={{ fontSize: 28 }}>📖</div>}
                description={
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 2 }}>
                    <Tag color={course.isPublic ? 'success' : 'warning'} fill="outline" style={{ fontSize: 11 }}>
                      {course.isPublic ? '公开' : '私有'}
                    </Tag>
                    {course.uploaded && (
                      <span style={{ fontSize: 11, color: '#bbb' }}>
                        {new Date(course.uploaded).toLocaleDateString('zh-CN')}
                      </span>
                    )}
                  </div>
                }
                extra={
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <LinkOutline
                      style={{ fontSize: 18, color: '#1677ff' }}
                      onClick={(e) => { e.stopPropagation(); handleShare(course.id) }}
                    />
                  </div>
                }
                onClick={() => history.push(`/?course=${encodeURIComponent(course.id)}`)}
              >
                <span style={{ fontSize: 15, fontWeight: 500 }}>{course.id}</span>
              </List.Item>
            </SwipeAction>
          ))}
        </List>
      )}

      {courses.length > 0 && (
        <div style={{ padding: '12px', fontSize: 12, color: '#bbb', textAlign: 'center' }}>
          向左滑动可分享或删除课程
        </div>
      )}
    </div>
  )
}
