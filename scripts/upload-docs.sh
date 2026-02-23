#!/bin/bash
# 上传 Markdown 文档到 R2
# 使用方式: bash scripts/upload-docs.sh [--local] [--prod]

set -e

ROOT_DIR="."
BUCKET="shadow-reading-docs"

MODE="local"
if [[ "$*" == *"--prod"* ]]; then
  MODE="prod"
fi

echo "📤 上传 Markdown 文档到 R2 ($MODE 模式)..."

count=0
fail=0

# 扫描根目录的 .md 文件（排除 node_modules、apps 等）
while IFS= read -r -d '' file; do
  filename=$(basename "$file")

  # 使用 Python 进行 URL 编码（处理中文和特殊字符）
  encoded_key=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$filename', safe='-._~'))" 2>/dev/null || echo "")

  if [ -z "$encoded_key" ]; then
    echo "⚠️  跳过: $filename （编码失败）"
    ((fail++))
    continue
  fi

  if [[ "$MODE" == "local" ]]; then
    npx wrangler r2 object put "${BUCKET}/${encoded_key}" \
      --file "$file" \
      --content-type "text/markdown; charset=utf-8" \
      --local \
      --config apps/api/wrangler.toml 2>/dev/null && echo "✅ 上传: $filename" || { echo "⚠️  跳过: $filename"; ((fail++)); continue; }
  else
    npx wrangler r2 object put "${BUCKET}/${encoded_key}" \
      --file "$file" \
      --content-type "text/markdown; charset=utf-8" \
      --config apps/api/wrangler.toml 2>/dev/null && echo "✅ 上传: $filename" || { echo "⚠️  跳过: $filename"; ((fail++)); continue; }
  fi

  ((count++))
done < <(find "$ROOT_DIR" -maxdepth 1 -name "*.md" -print0 2>/dev/null)

echo ""
echo "🎉 完成！成功: $count 个，跳过: $fail 个"
