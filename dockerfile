FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
# COPY .env.local ./
RUN npm config set registry https://registry.npmmirror.com/
RUN npm i

COPY . .
RUN npm run build
FROM node:22-alpine
WORKDIR /app

# 替换软件源并安装 python3 和 pip
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && \
    apk update && \
    apk add --no-cache python3 py3-pip

# 创建和激活虚拟环境，然后安装 edge-tts
RUN python3 -m venv venv && \
    ./venv/bin/pip install edge-tts





# # 安装 python-shell npm 包
# RUN npm install python-shell
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.env ./.env
COPY --from=build /app/audio_cache ./audio_cache
# 安装 python-shell npm 包
# RUN npm config set registry https://registry.npmmirror.com/
# # 安装 python-shell npm 包
# RUN npm install python-shell


EXPOSE 3000
CMD ["npm", "start"]