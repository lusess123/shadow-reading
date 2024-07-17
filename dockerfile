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
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.env ./.env
COPY --from=build /app/audio_cache ./audio_cache

EXPOSE 3000
CMD ["npm", "start"]