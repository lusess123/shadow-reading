# Python 环境阶段
FROM node:20-alpine AS python
WORKDIR /app

# 替换软件源并安装 python3 和 pip
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && \
    apk update && \
    apk add --no-cache python3 py3-pip

# 创建和激活虚拟环境，并安装 Python 依赖
RUN python3 -m venv venv && \
    ./venv/bin/pip install --upgrade pip && \
    ./venv/bin/pip install edge-tts

# 构建阶段
FROM node:20-alpine AS build
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./
# 设置 npm registry
RUN npm config set registry https://registry.npmmirror.com/
# 安装 node 模块
RUN npm ci

# 设置 Python 环境变量
ENV PYTHON_ENV='cd /app &&  source ./venv/bin/activate &&'

# 复制所有文件并构建
COPY . .
RUN npm run build

# 最终阶段
FROM python AS final
WORKDIR /app

# 复制构建阶段生成的文件
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.env ./.env
COPY --from=build /app/audio_cache ./audio_cache

# 设置 npm registry
RUN npm config set registry https://registry.npmmirror.com/

# 暴露端口并启动应用
EXPOSE 3000
CMD ["npm", "start"]