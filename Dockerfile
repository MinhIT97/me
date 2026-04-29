# Chọn base image với Node.js 24 (tương tự như cấu hình engine trong package.json)
FROM node:24-alpine AS deps
WORKDIR /app

# Copy các file quản lý package và cài đặt dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Môi trường build
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js app
RUN yarn build

# Môi trường chạy production
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Copy các thư mục và file cần thiết từ builder
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

# Lệnh khởi chạy ứng dụng
CMD ["yarn", "start"]
