# Emeline Le Guillou — Coming Soon

A minimal, production-ready "Coming Soon" site built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design with dark gradient background
- 🎨 Tailwind CSS for styling with custom animations
- 🔍 SEO optimized with Open Graph and Twitter Card meta tags
- 🚀 Production-ready with security headers and redirects
- 📱 Fully accessible with proper ARIA labels and keyboard navigation
- 🎯 Single page application with centered layout

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd emeline-le-guillou-coming-soon
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Environment Variables

**Required for Google Analytics:**
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX)

**Optional:**
- `MAINTENANCE=1`: Enable maintenance mode

See `ENV_SETUP.md` for detailed setup instructions.

### Custom Domain Setup

The site is configured to redirect from `emelineleguillou.com` to `emeline.fi`. Update the `vercel.json` file if you need different redirects.

## SEO Configuration

### Enable Indexing

By default, the site is set to `noindex` for the coming soon phase. To enable indexing:

1. Update `app/layout.tsx`:
```typescript
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
  },
},
```

2. Update `app/robots.txt/route.ts`:
```typescript
const robotsTxt = `User-agent: *
Allow: /`;
```

### Meta Tags

The site includes comprehensive meta tags for:
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- SEO optimization
- Favicon and Apple touch icons

## Maintenance Mode

For existing Next.js applications, you can use the maintenance mode feature:

1. Set environment variable: `MAINTENANCE=1`
2. The middleware will serve `/coming-soon` for all routes except:
   - `/_next/*` (Next.js assets)
   - `/api/*` (API routes)
   - `/favicon.ico`
   - `/og.png`
   - `/preview-secret` (bypass route)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main coming soon page
│   ├── robots.txt/          # Dynamic robots.txt
│   └── sitemap.ts           # Dynamic sitemap
├── public/
│   ├── favicon.svg          # Custom favicon
│   └── og.png               # Open Graph image
├── vercel.json              # Vercel configuration
└── README.md                # This file
```

## Customization

### Colors and Styling

Update the gradient and colors in `app/globals.css`:
```css
body {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}
```

### Content

Update the main content in `app/page.tsx`:
- Name and title
- Description text
- Contact links (LinkedIn, Email)
- Footer text

### Meta Information

Update metadata in `app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter Card settings
- Favicon references

## Security

The site includes comprehensive security headers:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy
- Permissions Policy

## Performance

- Optimized images and fonts
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Proper caching headers for static assets

## Analytics

- Google Analytics 4 (GA4) integration
- Privacy-focused implementation
- Automatic tracking of page views and user interactions
- Real-time reporting available in Google Analytics dashboard

## License

This project is private and proprietary to Emeline Le Guillou.
