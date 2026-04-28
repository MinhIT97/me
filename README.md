# Minh's Personal Portfolio & Blog

Chào mừng bạn đến với repo mã nguồn của trang web cá nhân của tôi. Đây là một ứng dụng web hiện đại được xây dựng bằng Next.js, tập trung vào hiệu năng, trải nghiệm người dùng và thiết kế cao cấp.

## 🚀 Công nghệ sử dụng

Trang web được xây dựng dựa trên các công nghệ mới nhất:

- **Framework**: [Next.js 12](https://nextjs.org/) (React 17)
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
  - [SCSS/Sass](https://sass-lang.com/) (Modular styling)
  - [Material UI v4](https://v4.mui.com/) (Components)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) & [Swiper.js](https://swiperjs.com/)
- **Đa ngôn ngữ**: Next.js i18n (Hỗ trợ Tiếng Việt & Tiếng Anh)
- **Quản lý Form**: React Hook Form
- **Linting & Formatting**: ESLint (Airbnb config) & Prettier

## ✨ Tính năng chính

- **Trang chủ (Home)**: Giới thiệu tổng quan với các hiệu ứng mượt mà.
- **Dự án (Projects)**: Danh mục các dự án đã thực hiện với thông tin chi tiết.
- **Đa ngôn ngữ (i18n)**: Hỗ trợ chuyển đổi ngôn ngữ Việt/Anh mượt mà.
- **Responsive Design**: Tối ưu hóa hiển thị trên mọi thiết bị (Mobile, Tablet, Desktop).
- **Premium UI/UX**: Sử dụng glassmorphism, gradients và micro-animations.

## 🛠️ Hướng dẫn cài đặt

Để chạy dự án này trên máy cục bộ, hãy làm theo các bước sau:

1. **Clone repository**:
   ```bash
   git clone https://github.com/MinhIT97/me.git
   cd me
   ```

2. **Cài đặt dependencies**:
   ```bash
   yarn install
   # hoặc
   npm install
   ```

3. **Chạy môi trường development**:
   ```bash
   yarn dev
   # hoặc
   npm run dev
   ```
   Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt của bạn.

## 📁 Cấu trúc thư mục

```text
.
├── component/          # Các React component dùng chung
├── pages/              # Next.js pages (Routing)
├── public/             # Tài nguyên tĩnh (images, fonts, v.v.)
├── src/
│   ├── locale/         # File ngôn ngữ (vi.ts, en.ts)
│   └── ...
├── styles/             # Global styles và SCSS modules
├── next.config.js      # Cấu hình Next.js (i18n, v.v.)
├── tailwind.config.js  # Cấu hình Tailwind CSS
└── tsconfig.json       # Cấu hình TypeScript
```

## 📜 Các lệnh (Scripts)

- `yarn dev`: Chạy server phát triển.
- `yarn build`: Build ứng dụng cho môi trường production.
- `yarn start`: Chạy ứng dụng sau khi đã build.

---
© 2024 - Developed with ❤️ by [MinhIT97](https://github.com/MinhIT97)