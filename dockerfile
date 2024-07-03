FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
# COPY .env.local ./
RUN npm config set registry https://registry.npmmirror.com/
RUN npm ci 
COPY . .
RUN npx prisma generate
RUN npm run build
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.env ./.env
EXPOSE 3000
CMD ["npm", "start"]