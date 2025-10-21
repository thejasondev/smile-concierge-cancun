# Smile Concierge Cancun

A modern dental tourism website built with Astro, React, TypeScript, and Tailwind CSS. This project showcases a professional dental clinic website for Cancun-based dental tourism services.

## 🛠️ Tech Stack

- **Framework**: Astro 5.x
- **Frontend**: React 19.x with TypeScript
- **Styling**: Tailwind CSS 4.x
- **Package Manager**: pnpm
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier with Astro and Tailwind plugins

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── NaturalResults.tsx
│   │   ├── Testimonials.tsx
│   │   ├── HowItWorks.tsx
│   │   └── CTA.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── specialists.astro
│       ├── results.astro
│       ├── process.astro
│       └── reviews.astro
├── astro.config.mjs
├── vercel.json
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm run dev`         | Starts local dev server at `localhost:4321`      |
| `pnpm run build`       | Build your production site to `./dist/`          |
| `pnpm run preview`     | Preview your build locally, before deploying     |
| `pnpm run lint`        | Run ESLint to check code quality                 |
| `pnpm run lint:fix`    | Fix ESLint issues automatically                  |
| `pnpm run format`      | Format code with Prettier                        |
| `pnpm run type-check`  | Check TypeScript types                           |

## 🚀 Deployment to Vercel

### Quick Deploy

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Astro and configure settings
   - Click "Deploy"

### Manual Configuration (if needed)

- **Framework Preset**: Astro
- **Build Command**: `pnpm run build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

### Environment Variables

Copy `.env.example` to `.env` and update values:

```bash
PUBLIC_SITE_URL=https://your-site.vercel.app
PUBLIC_SITE_NAME=Smile Concierge Cancun
```

## 📱 Pages

- **Home** (`/`) - Main landing page with hero, services, and testimonials
- **Specialists** (`/specialists`) - Meet our dental experts
- **Results** (`/results`) - Before & after transformations
- **Process** (`/process`) - Step-by-step journey
- **Reviews** (`/reviews`) - Patient testimonials and success stories

## 🎨 Design System

### Colors
- **Primary**: Teal (600-500)
- **Secondary**: Cyan (600-500)
- **Accent**: Emerald (600-500)
- **Neutral**: Slate (50-800)

### Glassmorphism Elements
- `bg-white/60 backdrop-blur-xl`
- `border border-white/40`
- `shadow-xl hover:shadow-2xl`
- `rounded-2xl` for modern look

## 🔧 Optimization

- ✅ CSS Minification
- ✅ JavaScript Minification (Terser)
- ✅ HTML Compression
- ✅ Code Splitting (React vendor chunk)
- ✅ Auto-inlined critical CSS
- ✅ Optimized caching headers

## 📊 Performance

- **Lighthouse Score**: 95+ (target)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

This is a client project. For any changes or improvements, please contact the project owner.

## 📄 License

© 2025 Smile Concierge Cancun. All rights reserved.

---

**Built with ❤️ using Astro + React + TailwindCSS**
