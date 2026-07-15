# Portfolio Setup & Deployment Guide

## Getting Started

### Prerequisites
- Node.js 16+ (check: `node --version`)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Portfolio

# Install dependencies
pnpm install
# or: npm install, yarn install, bun install
```

### Development

```bash
# Start dev server
pnpm dev
# or: npm run dev, yarn dev, bun dev

# Open in browser: http://localhost:5173
```

### Build for Production

```bash
# Build
pnpm build
# or: npm run build, yarn build, bun build

# Preview production build
pnpm preview
```

## Project Structure

```
Portfolio/
├── src/
│   ├── Components/
│   │   ├── Home/           # Hero section
│   │   ├── Experience/     # Experience & Education
│   │   ├── Skills/         # Skills showcase
│   │   ├── Projects/       # Projects portfolio
│   │   ├── About/          # About me section
│   │   ├── Certifications/ # Certifications & Achievements
│   │   ├── Contact/        # Contact form
│   │   ├── Footer/         # Footer
│   │   └── common/         # Shared components
│   ├── Intro/              # Intro animation
│   ├── constants/
│   │   └── portfolio.js    # All content (EDIT THIS!)
│   ├── App.jsx             # Main app
│   ├── App.css             # Global styles
│   ├── index.css           # Global CSS
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite config
├── PORTFOLIO_GUIDE.md      # Content editing guide (READ THIS!)
└── SETUP.md                # This file
```

## Editing Content

**READ: `PORTFOLIO_GUIDE.md`** for detailed instructions on updating:
- Personal info
- Experience & Education
- Projects
- Certifications
- About section
- Contact info
- Social links

All content is in `src/constants/portfolio.js` - no need to edit component files!

## Key Features

✅ **Production Ready**
- Fully responsive (mobile-first)
- Accessibility (semantic HTML, ARIA labels)
- Performance optimized
- SEO friendly

✅ **Modern Animations**
- Framer Motion for component animations
- GSAP for advanced animations
- Smooth scrolling (Lenis)
- Particle background effects

✅ **Tech Stack**
- React 19
- Tailwind CSS 4
- Framer Motion
- GSAP
- Vite (fast build)

✅ **Browser Support**
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Customization

### Colors
Edit CSS files to change brand colors:
- Primary accent: `#00ffcc` (cyan)
- Background: `#000000` (black)
- Text: `#ffffff` (white)
- Muted: `#b0b0b0` (gray)

### Fonts
Edit `src/App.css`:
```css
html, body {
  font-family: "Your Font", sans-serif;
}
```

### Animations
Adjust animation speeds in component files:
- `transition={{ duration: 0.6 }}` for fade/slide
- `animate: { ... }` for keyframe animations

## Deployment Options

### Vercel (Recommended)

1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Click Deploy (automatic!)
5. Visit your live portfolio

```bash
# One command deploy (if using Vercel CLI)
vercel --prod
```

### Netlify

1. Push code to GitHub
2. Go to netlify.com
3. New site from Git → Select repo
4. Build command: `pnpm build`
5. Publish directory: `dist`
6. Deploy!

### GitHub Pages

```bash
# Edit vite.config.js
export default {
  base: '/your-repo-name/',
}

# Build
pnpm build

# Deploy dist/ folder to gh-pages branch
```

### Manual Hosting

```bash
# Build
pnpm build

# Upload dist/ folder to any host:
# - AWS S3
# - Google Cloud Storage
# - Shared hosting (via FTP)
# - Your own server (nginx, Apache)
```

## Environment Variables

Currently none required. If you add backend features:

1. Create `.env` file:
```
VITE_API_URL=https://your-api.com
VITE_API_KEY=your-key-here
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Performance Optimization

### Already Optimized:
- Lazy component loading (Framer Motion)
- Image lazy loading
- CSS animations (hardware accelerated)
- Production build minification

### Manual Optimizations:
1. Compress images before adding
2. Use WebP format when possible
3. Remove unused dependencies
4. Monitor bundle size: `npm install -g vite-bundle-visualizer`

## Accessibility Checklist

✅ Semantic HTML (`<header>`, `<section>`, `<main>`)
✅ ARIA labels on interactive elements
✅ Alt text on images
✅ Keyboard navigation support
✅ Color contrast ratios (WCAG AA)
✅ Focus indicators on interactive elements

Test with:
- Screen reader: NVDA (Windows) or VoiceOver (Mac)
- Keyboard: Tab through entire site
- Lighthouse: DevTools → Lighthouse tab

## SEO Checklist

✅ Meta tags in `index.html`
✅ Semantic HTML structure
✅ Descriptive page title
✅ Open Graph tags (social sharing)
✅ Mobile responsive
✅ Fast loading (Core Web Vitals)

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 5173
lsof -i :5173

# Kill it
kill -9 <PID>

# Or use different port
pnpm dev --port 3000
```

### Styles Not Updating
```bash
# Clear cache
rm -rf node_modules/.vite

# Restart dev server
pnpm dev
```

### Build Errors
```bash
# Clean reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Components Not Rendering
1. Check imports in `App.jsx`
2. Check for typos in section IDs
3. Open browser DevTools → Console for errors
4. Verify data in `src/constants/portfolio.js`

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/add-blog-section

# Make changes
git add .
git commit -m "Add blog section"

# Push to remote
git push origin feature/add-blog-section

# Create Pull Request on GitHub
```

## Performance Metrics

Target metrics:
- **LCP** (Largest Contentful Paint): < 2.5s
- **INP** (Interaction to Next Paint): < 200ms
- **CLS** (Cumulative Layout Shift): < 0.1

Check with: DevTools → Lighthouse → Performance

## Support & Help

- **React Docs:** https://react.dev
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Vite Docs:** https://vitejs.dev/guide/

## License

This portfolio template is provided as-is. Feel free to customize and use!

---

Happy building! 🚀

**Next Step:** Read `PORTFOLIO_GUIDE.md` to start customizing your content.
