/**
 * 课程数据转换脚本
 * 将原 src/app/source/ 下的 .ts/.json 课程数据转换为标准 JSON 文件
 * 输出到 data/courses/ 目录
 *
 * 使用方式:
 *   npx tsx scripts/convert-courses.mts
 */

import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const outputDir = join(rootDir, 'data', 'courses')

mkdirSync(outputDir, { recursive: true })

// ---- 动态导入所有课程源文件 ----

const { sentences: coSentences } = await import('../src/app/sentence.ts')
const Course1 = (await import('../src/app/cource.json', { assert: { type: 'json' } })).default
const { sentences: eggSentences } = await import('../src/app/source/egg.ts')
const Gukong = (await import('../src/app/source/gukong.json', { assert: { type: 'json' } })).default
const Isha = (await import('../src/app/source/isha.json', { assert: { type: 'json' } })).default
const Genius = (await import('../src/app/source/genius.json', { assert: { type: 'json' } })).default
const tramp = (await import('../src/app/source/tranpu.ts')).default
const buzhang = (await import('../src/app/source/bz.ts')).default
const Peter = (await import('../src/app/source/peter.ts')).default
const TakeMe = (await import('../src/app/source/takeme.ts')).default
const Silent = (await import('../src/app/source/silent.ts')).default
const bz2 = (await import('../src/app/source/bz2.ts')).default
const m500m = (await import('../src/app/source/500m.ts')).default
const bz3 = (await import('../src/app/source/bz3.ts')).default
const bz4 = (await import('../src/app/source/bz4.ts')).default
const interview = (await import('../src/app/source/interview.ts')).default
const labubu = (await import('../src/app/source/labubu.ts')).default
const Iphone = (await import('../src/app/source/iphone.ts')).default

// ---- 课程名称 → 数据映射 ----
const courses: Record<string, unknown[]> = {
  co: coSentences,
  genAI1: Course1 as unknown[],
  egg: eggSentences,
  gukong: Gukong as unknown[],
  isha: Isha as unknown[],
  Genius: Genius as unknown[],
  tramp,
  脑洞部长: buzhang,
  脑洞部长2: bz2,
  彼得潘: Peter,
  吻别: TakeMe,
  寂静之声: Silent,
  '500米在风中': m500m,
  脑洞部长3: bz3,
  脑洞部长4: bz4,
  访谈: interview,
  labubu,
  iphone: Iphone,
}

// ---- 写出 JSON 文件 ----
for (const [name, data] of Object.entries(courses)) {
  const filePath = join(outputDir, `${name}.json`)
  writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
  console.log(`✅ 写出: ${name}.json (${(data as any[]).length} 条)`)
}

// ---- 写出课程索引 ----
const index = Object.entries(courses).map(([id, data]) => ({
  id,
  displayName: id,
  count: (data as any[]).length,
}))
writeFileSync(join(outputDir, '_index.json'), JSON.stringify(index, null, 2), 'utf-8')
console.log(`\n📋 课程索引已写出: ${index.length} 个课程`)
console.log('\n🎉 转换完成！运行上传脚本: bash scripts/upload-courses.sh')
