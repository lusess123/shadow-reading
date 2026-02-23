import React, { useEffect, useState } from 'react'
import { ErrorBlock, Skeleton } from 'antd-mobile'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { useParams } from '@umijs/max'
import 'highlight.js/styles/github.css'

interface DocDetail {
  name: string
  content: string
  uploaded?: string
}

const apiBase = (typeof process !== 'undefined' && process.env.API_BASE) || ''

export default function DocViewerPage() {
  const params = useParams<{ id: string }>()
  const docName = decodeURIComponent(params.id || '')

  const [doc, setDoc] = useState<DocDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!docName) return
    setLoading(true)
    setError(null)
    fetch(`${apiBase}/api/docs/${encodeURIComponent(docName)}`)
      .then((r) => {
        if (!r.ok) throw new Error(`文件不存在 (${r.status})`)
        return r.json()
      })
      .then((data: DocDetail) => setDoc(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [docName])

  const title = docName.replace(/\.md$/, '')
  const uploadDate = doc?.uploaded ? new Date(doc.uploaded).toLocaleDateString('zh-CN') : ''

  return (
    <div>
      <div style={{ padding: '12px 16px' }}>
        {loading && (
          <div>
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} animated style={{ height: 16, marginBottom: 10, borderRadius: 4 }} />
            ))}
          </div>
        )}

        {error && (
          <ErrorBlock
            title="加载失败"
            description={error}
            style={{ paddingTop: 60 }}
          />
        )}

        {!loading && !error && doc && (
          <div>
            {uploadDate && (
              <div style={{ fontSize: 12, color: '#bbb', marginBottom: 16 }}>
                上传时间: {uploadDate}
              </div>
            )}
            <article className="markdown-body" style={{ fontSize: 15, lineHeight: 1.8, wordBreak: 'break-word' }}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  table: ({ children, ...props }) => (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ minWidth: '100%', borderCollapse: 'collapse' }} {...props}>
                        {children}
                      </table>
                    </div>
                  ),
                  img: ({ src, alt, ...props }) => (
                    <img
                      src={src}
                      alt={alt}
                      style={{ maxWidth: '100%', borderRadius: 8 }}
                      loading="lazy"
                      {...props}
                    />
                  ),
                  code: ({ className, children, ...props }: any) => {
                    const isBlock = className?.includes('language-')
                    return isBlock ? (
                      <code className={className} {...props}>{children}</code>
                    ) : (
                      <code
                        style={{ background: '#f5f5f5', color: '#d73a49', padding: '2px 5px', borderRadius: 4, fontSize: 13 }}
                        {...props}
                      >
                        {children}
                      </code>
                    )
                  },
                }}
              >
                {doc.content}
              </ReactMarkdown>
            </article>
          </div>
        )}
      </div>
    </div>
  )
}
