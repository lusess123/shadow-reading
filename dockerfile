FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
# COPY .env.local ./
RUN npm config set registry https://registry.npmmirror.com/
RUN npm i
# 安装 python-shell npm 包
RUN npm install python-shell
COPY . .
RUN npm run build
FROM node:22-alpine
WORKDIR /app

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && \
    apk update && \
    apk add --no-cache python3 py3-pip

# 安装 virtualenv
RUN pip3 install virtualenv

# 创建和激活虚拟环境，然后安装 edge-tts
RUN python3 -m virtualenv venv && \
    . ./venv/bin/activate && \
    pip install edge-tts



# # 安装 python-shell npm 包
# RUN npm install python-shell
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.env ./.env
COPY --from=build /app/audio_cache ./audio_cache

EXPOSE 3000
CMD ["npm", "start"]