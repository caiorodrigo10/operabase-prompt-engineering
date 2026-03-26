'use client'

import React from 'react'
import { ArrowRight } from '@/components/icons'
import { siteConfig } from '@/site.config'

interface PricingSectionProps {
  checkoutUrl?: string
  onCtaClick?: (position: string, text: string) => void
}

export function PricingSection({ checkoutUrl = '#', onCtaClick }: PricingSectionProps) {
  return (
    <section id="pricing" aria-label="Pricing" className="py-32 bg-[var(--brand-primary)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-white/80 mb-4 font-medium">
            {siteConfig.pricing.label}
          </p>

          <p className="text-8xl md:text-9xl font-heading font-black text-white mb-4">
            {siteConfig.pricing.currency === 'USD' ? '$' : siteConfig.pricing.currency === 'BRL' ? 'R$' : ''} {siteConfig.pricing.amount}
          </p>

          <p className="text-2xl text-white/90 mb-8">
            Lorem ipsum dolor sit amet.<br />
            Consectetur adipiscing elit.
          </p>

          <p className="text-lg text-white/70 mb-12 max-w-md mx-auto">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={siteConfig.ctaText}
            className="bg-white text-[var(--brand-secondary)] px-12 py-5 rounded-full text-lg font-black uppercase tracking-wide inline-flex items-center gap-3 hover:bg-white/90 transition-colors shadow-2xl mb-6"
            onClick={() => onCtaClick?.('price', siteConfig.ctaText)}
          >
            {siteConfig.ctaText} <ArrowRight size={24} />
          </a>

          <p className="text-white/60 text-sm">
            {siteConfig.pricing.guarantee}
          </p>
        </div>
      </div>
    </section>
  )
}
