# Brutalist Portfolio

A modern portfolio website built with Astro and Tailwind CSS, featuring an industrial brutalist design aesthetic.

## 🚀 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── TechStack.astro
│   │   ├── Skills.astro
│   │   ├── SkillCard.astro
│   │   ├── ProjectCard.astro
│   │   ├── Experience.astro
│   │   ├── Capabilities.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── portfolio.ts          # All your data goes here
│   ├── layouts/
│   │   └── Layout.astro          # Base layout with styles
│   └── pages/
│       └── index.astro           # Main page
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Design Features

- **Industrial Brutalist Aesthetic**: Concrete gray (#E6E6E6), safety orange (#FF3300), bold black borders
- **Grain Texture Overlay**: Analog noise effect for tactile feel
- **Micro-interactions**: Hover effects, dimension lines, grayscale to color reveals
- **Custom Cursor**: Crosshair cursor for technical vibe
- **Fully Responsive**: Mobile-first design with breakpoints

## 📝 Updating Your Content

All content is centralized in `portfolio.ts`:

### 1. Personal Info
```typescript
export const siteData = {
  name: "YOUR NAME",
  title: "Your Role",
  tagline: "Your Tagline.",
  // ... update all fields
};
```

### 2. Projects
```typescript
export const projects = [
  {
    title: "Your Project",
    year: "2026",
    description: "Project description",
    image: "url-to-image",
    tags: ["Tech1", "Tech2"],
    links: { live: "#", github: "#" }
  }
];
```

### 3. Tech Stack Icons
Uses Lucide icons. Available icons: https://lucide.dev/icons/

### 4. Skills, Experience, Capabilities
Update the respective arrays in `portfolio.ts`

## 🛠️ Commands

| Command           | Action                                       |
|:-----------------|:---------------------------------------------|
| `npm install`    | Install dependencies                         |
| `npm run dev`    | Start dev server at `localhost:4321`         |
| `npm run build`  | Build production site to `./dist/`           |
| `npm run preview`| Preview production build locally             |

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import on Vercel
3. Framework preset: Astro
4. Deploy!

### Netlify
1. Push to GitHub
2. New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📦 Adding New Sections

Create a new component in `src/components/`:

```astro
---
// YourSection.astro
---

<section class="w-full border-beam-b p-6 lg:p-12">
  <h2 class="text-3xl font-extrabold uppercase tracking-tight">Section Title</h2>
  <!-- Your content -->
</section>
```

Import and use in `src/pages/index.astro`

## 🎯 Current Status

✅ **Complete with placeholder data**
- All sections built and styled
- Responsive design
- Brutalist aesthetic preserved
- Components are reusable
- Dev server running on http://localhost:4321/

## 📸 Placeholder Images

Currently using Unsplash images. Replace with your own:
- Update `image` URLs in `portfolio.ts`
- Hero image in `Hero.astro` component

## 🔥 Next Steps

1. **Update `src/data/portfolio.ts`** with your real information
2. **Replace placeholder images** with your project screenshots
3. **Customize colors** in `tailwind.config.mjs` (optional)
4. **Add your resume/CV** link to navbar
5. **Test contact form** (currently static, add backend)
6. **Deploy** to Vercel/Netlify

## 💡 Tips

- Keep the brutalist vibe: bold, geometric, functional
- Use high-quality, high-contrast images
- Stick to the color palette for consistency
- Test on mobile devices
- Optimize images before deploying

---

Built with [Astro](https://astro.build) • Styled with [Tailwind CSS](https://tailwindcss.com)
