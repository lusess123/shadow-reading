/**
 * 课程数据入口
 * 生产环境从 R2 API 获取，这里提供初始空结构
 * 实际数据通过 useCourses() hook 异步加载
 */

export interface Sentence {
  sentence: string
  original: string
  translation: string
  phonetic: string
  delay?: number
}

export interface Course {
  id: string
  displayName: string
  sentences: Sentence[]
}

// 占位，供 page.tsx 初始渲染使用
export const COURSES: Record<string, Sentence[]> = {}
