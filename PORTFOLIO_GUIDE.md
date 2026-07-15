# Portfolio Content Guide

This guide helps you easily edit and update your portfolio content without touching any code.

## Quick Start

### Update Global Content (Easy!)

All portfolio content is centralized in `/src/constants/portfolio.js`. Edit this file to update your entire portfolio:

```javascript
// /src/constants/portfolio.js
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more info
};
```

## Content Sections

### 1. Personal Info & Hero Section
**File:** `src/constants/portfolio.js`

Update `PERSONAL_INFO` to change:
- Name
- Title
- Subtitle
- Email
- Phone
- Location

```javascript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1 (123) 456-7890",
  location: "Your City, Country",
};
```

### 2. Navigation Menu
**File:** `src/constants/portfolio.js`

Update `NAVIGATION` array to customize menu items:

```javascript
export const NAVIGATION = [
  { label: "About", href: "#About" },
  { label: "Projects", href: "#Projects" },
  // Add or remove as needed
];
```

### 3. Social Links
**File:** `src/constants/portfolio.js`

Update `SOCIAL_LINKS` to add/remove social profiles:

```javascript
export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/yourprofile", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "linkedin" },
  // ... more platforms
];
```

### 4. Experience & Education
**File:** `src/constants/portfolio.js`

Update `EXPERIENCES` array with your work history:

```javascript
export const EXPERIENCES = [
  {
    id: 1,
    title: "Your Job Title",
    company: "Company Name",
    period: "Jan 2023 - Present",
    description: "What you did here...",
    skills: ["Skill1", "Skill2", "Skill3"],
  },
  // Add more experiences
];
```

Update `EDUCATION` array with your education:

```javascript
export const EDUCATION = [
  {
    id: 1,
    degree: "Your Degree",
    field: "Your Field",
    institution: "Your University",
    year: "2020",
    details: "Details about your education...",
  },
];
```

### 5. Projects
**File:** `src/constants/portfolio.js`

Update `PROJECTS` array with your projects:

```javascript
export const PROJECTS = [
  {
    id: 1,
    title: "Project Name",
    description: "What the project does...",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourrepo",
    live: "https://project-live-url.com",
    role: "Your Role",
  },
  // Add more projects (max 6 shown)
];
```

### 6. Certifications & Achievements
**File:** `src/constants/portfolio.js`

Update `CERTIFICATIONS` for your professional certificates:

```javascript
export const CERTIFICATIONS = [
  {
    id: 1,
    title: "Certificate Name",
    issuer: "Issuing Organization",
    date: "2023",
    credential: "Certificate Type",
  },
];
```

Update `ACHIEVEMENTS` for your accomplishments:

```javascript
export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Achievement Title",
    description: "Description of the achievement...",
  },
];
```

### 7. About Section
**File:** `src/constants/portfolio.js`

Update `CORE_VALUES` to define your professional values:

```javascript
export const CORE_VALUES = [
  {
    id: 1,
    title: "Value Name",
    description: "Description of your value...",
    icon: "💡", // Use any emoji
  },
];
```

Update `ABOUT_STATS` for quick statistics:

```javascript
export const ABOUT_STATS = [
  { number: "5+", label: "Years Experience" },
  { number: "30+", label: "Projects" },
];
```

### 8. Footer Services
**File:** `src/constants/portfolio.js`

Update `FOOTER_SERVICES` to list your services:

```javascript
export const FOOTER_SERVICES = [
  { label: "Web Development", href: "#" },
  { label: "Consulting", href: "#" },
  // Add more services
];
```

## Customizing Component Styles

### Colors
The portfolio uses a black background with cyan accent color (#00ffcc). To change colors:

1. Update colors in component CSS files:
   - `src/Components/Experience/Experience.css`
   - `src/Components/Projects/ProjectsSection.css`
   - `src/Components/About/AboutSection.css`
   - `src/Components/Certifications/Certifications.css`
   - `src/Components/Contact/ContactSection.css`
   - `src/Components/Footer/FooterSection.css`

Find and replace:
- `#00ffcc` (cyan accent) with your brand color
- `#e0dbdb` (light text) with your text color
- `rgba(0, 255, 204, ...)` with your brand color variants

### Typography
Fonts are set in `src/App.css`. To change fonts:

```css
html, body {
  font-family: "Your Font", sans-serif;
}
```

### Spacing & Layout
All spacing uses consistent 8px grid. Modify padding/margin in CSS:
- `padding: 80px 20px;` for section padding
- `gap: 40px;` for spacing between items

## Component Structure

```
src/
├── Components/
│   ├── Home/               # Hero section
│   ├── Experience/         # Experience & Education
│   ├── Skills/            # Skills section (existing)
│   ├── Projects/          # Projects showcase
│   ├── About/             # About section
│   ├── Certifications/    # Certifications & Achievements
│   ├── Contact/           # Contact form
│   ├── Footer/            # Footer
│   └── common/            # Reusable components
├── constants/
│   └── portfolio.js       # All content (EDIT THIS!)
├── App.jsx                # Main app
└── index.css              # Global styles
```

## Adding New Sections

To add a new section:

1. Create folder: `src/Components/YourSection/`
2. Create component: `YourSection.jsx`
3. Create styles: `YourSection.css`
4. Import in `App.jsx`
5. Add content to `src/constants/portfolio.js`

Example component template:

```jsx
import React from "react";
import { motion } from "framer-motion";
import "./YourSection.css";

function YourSection() {
  return (
    <section id="YourSection" className="your-section">
      <div className="container">
        <motion.h1 className="section-title">Your Title</motion.h1>
        {/* Your content */}
      </div>
    </section>
  );
}

export default YourSection;
```

## Contact Form

The contact form in `ContactSection.jsx` currently logs to console. To add backend integration:

1. Add your backend endpoint:
```javascript
const response = await fetch('your-api-endpoint', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

2. Or use services like Formspree, EmailJS, or Netlify Forms

## Performance Tips

- Optimize images before adding them
- Use lazy loading for below-the-fold content
- Limit animations for mobile devices
- Keep dependencies updated

## Mobile Responsive

All sections are mobile-first responsive:
- Desktop: Full layout
- Tablet (768px): 2-column → single column
- Mobile (480px): Optimized spacing and sizing

Test at different breakpoints:
```bash
npm run dev
# Open DevTools → Toggle device toolbar
```

## Deploy

### Vercel (Recommended)
```bash
npm run build
# Push to GitHub
# Connect repo to Vercel
```

### Manual Deploy
```bash
npm run build
# Upload dist/ folder to your host
```

## Troubleshooting

### Styles not updating?
- Clear browser cache: Ctrl+Shift+Delete
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

### Content not showing?
- Check `src/constants/portfolio.js` for typos
- Verify imports in components
- Check browser console for errors

### Mobile looks broken?
- Check media queries in CSS files
- Test at actual breakpoints: 480px, 768px, 1200px
- Use `npm run dev` → DevTools → Responsive Design Mode

## Need More Help?

Refer to component files for examples:
- Experience section examples → `Experience.jsx`
- Project cards examples → `ProjectsSection.jsx`
- Form handling → `ContactSection.jsx`

Happy editing! 🚀
