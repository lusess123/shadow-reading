#!/bin/bash
# 上传课程数据到 R2
# 先运行: npx tsx scripts/convert-courses.mts
# 然后运行: bash scripts/upload-courses.sh [--local] [--prod]
#
# --local  上传到本地 wrangler dev 模拟的 R2（默认）
# --prod   上传到真实 Cloudflare R2（需要 wrangler 登录）

set -e

DATA_DIR="data/courses"
BUCKET="shadow-reading-courses"

if [ ! -d "$DATA_DIR" ]; then
  echo "❌ 找不到 $DATA_DIR 目录，请先运行: npx tsx scripts/convert-courses.mts"
  exit 1
fi

MODE="local"
if [[ "$*" == *"--prod"* ]]; then
  MODE="prod"
fi

echo "📤 上传课程数据到 R2 ($MODE 模式)..."

for file in "$DATA_DIR"/*.json; do
  filename=$(basename "$file")

  if [[ "$MODE" == "local" ]]; then
    # 使用 wrangler API 本地上传
    npx wrangler r2 object put "${BUCKET}/${filename}" \
      --file "$file" \
      --content-type "application/json; charset=utf-8" \
      --local \
      --config apps/api/wrangler.toml
  else
    npx wrangler r2 object put "${BUCKET}/${filename}" \
      --file "$file" \
      --content-type "application/json; charset=utf-8" \
      --config apps/api/wrangler.toml
  fi

  echo "✅ 上传: $filename"
done

echo ""
echo "🎉 课程数据上传完成！"
