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

# 安装 python3 和 pip
RUN apk add --no-cache python3 py3-pip

# 安装 edge-tts
RUN pip3 install edge-tts

# 安装 python-shell npm 包
RUN npm install python-shell

# 安装 python-shell npm 包
RUN npm install python-shell
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.env ./.env
COPY --from=build /app/audio_cache ./audio_cache

EXPOSE 3000
CMD ["npm", "start"]