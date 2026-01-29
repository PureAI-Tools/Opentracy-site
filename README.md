# Lunar Marketing Site

A production-ready marketing website for Lunar, a platform that cuts LLM inference costs by ~57% through automated distillation pipelines.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: JetBrains Mono (monospace), Inter (sans-serif)

## Features

- Terminal/retro-systems aesthetic with high contrast black-and-white design
- Monospace typography for headlines and UI elements
- ASCII-style windows and panels
- Responsive design for all screen sizes
- SEO optimized with metadata
- Accessible semantic HTML

## Pages

- `/` - Home (hero, demo, pipeline, use cases, developer experience, security, community, CTA)
- `/docs` - Documentation landing with categories and quickstart
- `/pricing` - Three-tier pricing with FAQ
- `/blog` - Blog index with sample posts
- `/blog/[slug]` - Individual blog posts
- `/community` - Community links, roadmap, contributors
- `/security` - Security features, compliance, trust center

## Components

- `Navbar` - Fixed header with navigation
- `Footer` - Site footer with links
- `Container` - Max-width wrapper
- `Button` - Primary, secondary, ghost variants
- `Badge` - Labels and tags
- `Card` - Content containers
- `SectionHeading` - Section titles with subtitles
- `CodeBlock` - Syntax-highlighted code with copy button
- `AsciiWindow` - Terminal-style window component
- `Stepper` - Pipeline step visualization
- `LogoMark` - SVG logo (moon phase + core)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd lunar-site-v2

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and Tailwind
│   ├── docs/
│   │   └── page.tsx        # Docs landing
│   ├── pricing/
│   │   └── page.tsx        # Pricing page
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/
│   │       └── page.tsx    # Blog post
│   ├── community/
│   │   └── page.tsx        # Community page
│   └── security/
│       └── page.tsx        # Security page
├── components/
│   ├── AsciiWindow.tsx
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── CodeBlock.tsx
│   ├── Container.tsx
│   ├── Footer.tsx
│   ├── LogoMark.tsx
│   ├── Navbar.tsx
│   ├── SectionHeading.tsx
│   └── Stepper.tsx
└── data/
    └── posts.ts            # Blog post content
```

## Design System

### Colors

- Background: `#000000`
- Foreground: `#ffffff`
- Muted: `#888888`
- Border: `#333333`
- Accent: `#f59e0b` (amber/orange)
- Surface: `#0a0a0a`

### Typography

- Headlines: JetBrains Mono, uppercase, tight tracking
- Body: Inter, normal case
- Code: JetBrains Mono

### Spacing

Uses Tailwind's default spacing scale with a max-width of 6xl (1152px) for content.

## License

MIT
