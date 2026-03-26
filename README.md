# Landing Page Template

High-performance landing page template with PageSpeed optimizations, built with Next.js 15, React 19, Tailwind CSS, and TypeScript.

## Performance Features

- **Static Export** (`output: 'export'`) for maximum speed
- **CSS Inlining** via Next.js experimental feature
- **Tree-shaken icons** (Lucide React re-exports)
- **Lazy analytics** (PostHog + Meta Pixel load on interaction)
- **Immutable cache headers** for static assets
- **Passive scroll listeners** throughout

## Quick Start

```bash
git clone https://github.com/SynkraAI/landing-page-template.git my-landing-page
cd my-landing-page
npm install
npm run dev
```

## Customization

### 1. Site Config (`site.config.ts`)
Edit brand name, CTA text, navigation, event details, pricing, and social links.

### 2. Design Tokens (`app/globals.css`)
Override CSS custom properties to change colors, fonts, and theme:

```css
:root {
  --brand-primary: #7c3aed;
  --brand-secondary: #a78bfa;
  --brand-accent: #4ade80;
  --brand-bg: #0c0c0c;
}
```

### 3. Sections (`components/sections/`)
Each section is a standalone component. Edit content directly or remove sections from `app/page.tsx`.

### 4. Analytics (optional)
Set environment variables to enable:
```
NEXT_PUBLIC_POSTHOG_KEY=your_key
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id
```

## Sections

| Section | File | Description |
|---------|------|-------------|
| Navigation | `Navigation.tsx` | Responsive nav with mobile menu |
| Hero | `HeroSection.tsx` | Full-screen hero with CTA |
| Problem | `ProblemSection.tsx` | Pain points grid |
| Solution | `SolutionSection.tsx` | Solution with lever diagram |
| Content Blocks | `ContentBlocks.tsx` | Scroll-driven 4-block slider |
| Before/After | `BeforeAfterSection.tsx` | Comparison columns |
| For Whom | `ForWhomSection.tsx` | Target audience cards |
| Social Proof | `SocialProofSection.tsx` | Speaker/mentor cards |
| Schedule | `ScheduleSection.tsx` | Event details grid |
| Pricing | `PricingSection.tsx` | Price with CTA |
| FAQ | `FaqSection.tsx` | Expandable FAQ |
| Final CTA | `FinalCtaSection.tsx` | Closing CTA |
| Footer | `Footer.tsx` | Footer with links |

## Build

```bash
npm run build    # Outputs to /out (static)
```

## Deploy

Works out of the box with Vercel. The `vercel.json` includes optimized cache headers.

## License

MIT
