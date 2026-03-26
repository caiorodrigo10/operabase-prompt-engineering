export const siteConfig = {
  // Brand
  name: 'Operabase',
  tagline: 'Ecossistema de Criadores com AI',
  logo: '/images/logoiconw.png',

  // CTA
  ctaUrl: 'https://operabase.io/aplicar',
  ctaText: 'Quero Dominar Prompt Engineering',
  ctaTextNav: 'Aplicar',

  // Event/Product details (not used in this page)
  event: {
    date: '',
    year: '2026',
    time: '',
    timezone: 'Brasilia',
    format: 'Online',
    formatDetail: 'Comunidade + Imersão ao vivo',
  },

  // Pricing (not featured on this page)
  pricing: {
    currency: 'BRL',
    amount: '2997',
    label: 'Club + Imersão (anual)',
    guarantee: 'Garantia dupla: 7 dias incondicional + 30 dias condicional',
  },

  // Navigation
  navItems: [
    { label: 'O que é', href: '#solution' },
    { label: 'Técnicas', href: '#features' },
    { label: 'Para quem', href: '#for-whom' },
    { label: 'FAQ', href: '#faq' },
  ],

  // Sections to render (order matters)
  sections: [
    'hero',
    'problem',
    'solution',
    'content-blocks',
    'before-after',
    'for-whom',
    'faq',
    'final-cta',
  ] as const,

  // Social links
  social: {
    instagram: 'https://instagram.com/operabase.io',
    twitter: '',
    linkedin: '',
    youtube: '',
  },

  // Footer
  footer: {
    tagline: 'Ecossistema de criadores. AI como alavanca. Negócios que nascem aqui dentro.',
    copyright: 'Operabase',
    links: {
      terms: '#',
      privacy: '#',
    },
  },

  // Analytics (optional - leave empty to disable)
  analytics: {
    posthogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
    posthogHost: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
  },
}

export type SiteConfig = typeof siteConfig
