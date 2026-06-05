# 🚀 Vivek Prakash – Personal Portfolio Website

A modern, responsive personal portfolio website built using **Next.js**, **TypeScript**, and **Tailwind CSS**, showcasing professional experience, skills, and projects.

***

## 📌 Overview

This project is a production-ready portfolio website designed to:

* Present professional profile and background
* Showcase technical skills and projects
* Provide a clean and interactive user experience
* Demonstrate modern frontend engineering practices

***

## 🛠️ Tech Stack

### Core Technologies

* **Next.js (App Router)**
* **React**
* **TypeScript**

### Styling & UI

* **Tailwind CSS**
* **PostCSS**

### Other

* **ESLint** – code quality
* **Custom components & hooks architecture**

***

## 📂 Project Structure

```
.
├── app/              # App router pages (Next.js)
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── public/           # Static assets
├── styles/           # Global styling
├── middleware.ts     # Request middleware logic
├── next.config.mjs   # Next.js configuration
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

***

## ⚙️ Getting Started

### ✅ Prerequisites

Make sure you have:

* Node.js (v18+ recommended)
* npm / pnpm / yarn

***

### ▶️ Run in Development Mode

```bash
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

***

### 🏗️ Build for Production

```bash
npm run build
```

***

### 🚀 Start Production Server

```bash
npm start
```

***

## 🌐 Deployment

### ✅ Production Setup (EC2 + Nginx)

This app is designed to run behind **Nginx as a reverse proxy**.

### Typical deployment flow:

1. Build the app:
   ```bash
   npm run build
   ```

2. Start using PM2:
   ```bash
   pm2 start npm --name "vivekprakash-site" -- start
   pm2 save
   ```

3. Nginx config (example):

```nginx
server {
    listen 80;
    server_name vivekprakash.de;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

***

## 📈 Features

* ✅ Fully responsive design
* ✅ Component-based architecture
* ✅ Optimized font loading
* ✅ Fast performance with Next.js
* ✅ Clean UI using Tailwind CSS
* ✅ Production-ready deployment setup

***

## 🧩 Customization

You can easily customize:

* Content → `app/` pages
* UI components → `components/`
* Styling → `tailwind.config.ts`
* Assets → `public/`

***

## 📄 Environment Variables

If needed, create:

```
.env.local
```

Example:

```
NEXT_PUBLIC_API_URL=your_api_url_here
```

***

## 🧪 Linting

```bash
npm run lint
```

***

## 💡 Future Enhancements

* Add blog section
* Add analytics (e.g., Google Analytics)
* Integrate CMS (e.g., Contentful / Sanity)
* Improve SEO with dynamic metadata

***

## 👤 Author

**Vivek Prakash**  
Digital Strategy Manager | QA Data & Analytics

***

## 📜 License

This project is open-source and available for personal use and customization.

***

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

***

## 🚀 Final Note

This project demonstrates:

* Modern frontend development with Next.js
* Clean and scalable architecture
* Production deployment using EC2 + Nginx + PM2

***
