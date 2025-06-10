# KAWS - The Unofficial Story

A modern, interactive one-page website inspired by the Unofficial KAWS design, built using Next.js and GSAP animations to deliver a fast, fluid, and immersive browsing experience.

## 🎨 Features

- **Interactive Hero Section** with parallax effects and smooth animations
- **Table of Contents** with animated chapter cards
- **Individual Chapter Sections** with content, images, and video links
- **Sources Section** with video thumbnails and pagination
- **Custom Cursor Effects** for desktop users
- **Sticky Navigation** with smooth scrolling and section highlighting
- **Responsive Design** optimized for all screen sizes
- **Performance Optimized** with Next.js SSR and image optimization

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional-grade animation library
- **Lucide React** - Beautiful icons
- **Framer Motion** - Additional animation capabilities

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page with GSAP animations
├── components/
│   ├── CustomCursor.tsx     # Interactive cursor component
│   ├── Navigation.tsx       # Sticky navigation with scroll spy
│   ├── HeroSection.tsx      # Hero section with parallax
│   ├── TableOfContents.tsx  # Animated chapter cards
│   ├── ChapterSections.tsx  # Individual chapter content
│   ├── SourcesSection.tsx   # Video sources with pagination
│   └── Footer.tsx           # Footer with KAWS figure
├── public/              # Static assets
└── ...config files
```

## 🎬 Animations & Interactions

- **GSAP ScrollTrigger** for scroll-based animations
- **Parallax effects** on hero and chapter sections
- **Custom cursor** with hover states
- **Smooth scrolling** navigation
- **Staggered animations** for chapter cards
- **Image hover effects** with scaling and overlays
- **Video play buttons** with YouTube integration

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Breakpoint-specific layouts** (sm, md, lg, xl)
- **Touch-friendly interactions** for mobile devices
- **Optimized animations** for better mobile performance

## 🎨 Design System

- **Colors**: Monochrome palette with accent beige
- **Typography**: Helvetica Neue with custom font sizes
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth easing curves and transitions

## 🔧 Customization

### Adding New Chapters

Edit the `chaptersData` array in `components/ChapterSections.tsx`:

```typescript
const chaptersData: ChapterData[] = [
  {
    id: 7,
    title: 'NEW CHAPTER',
    subtitle: 'Your subtitle here',
    year: 2024,
    content: 'Chapter content...',
    videoId: 'youtube-video-id',
    image: 'image-url'
  }
]
```

### Custom Animations

Add new GSAP animations in the respective component files:

```typescript
gsap.fromTo(element, 
  { opacity: 0, y: 50 }, 
  { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
)
```

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

3. Deploy to Vercel, Netlify, or your preferred platform.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Credits

- **Design Inspiration**: [Unofficial KAWS Website](https://unofficial-kaws.webflow.io/)
- **Images**: Unsplash (placeholder images)
- **Icons**: Lucide React
- **Animations**: GSAP

---

Made with ❤️ for the creative community 