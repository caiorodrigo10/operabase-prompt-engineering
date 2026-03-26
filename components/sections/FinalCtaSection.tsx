'use client'

import React from 'react'
import { ArrowRight } from '@/components/icons'
import { siteConfig } from '@/site.config'

interface FinalCtaSectionProps {
  onCtaClick?: (position: string, text: string) => void
}

export function FinalCtaSection({ onCtaClick }: FinalCtaSectionProps) {
  return (
    <section aria-label="Final call to action" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-black leading-tight mb-6 text-black">
            Pare de adivinhar.<br />
            <span className="text-[var(--brand-secondary)]">Comece a instruir.</span>
          </h2>

          <p className="text-xl text-black/60 mb-10">
            Junte-se ao Operabase e aprenda Prompt Engineering com quem usa AI como alavanca de negócio — não como brinquedo.
          </p>

          <a
            href="https://operabase.io/aplicar"
            aria-label={siteConfig.ctaText}
            className="bg-[var(--brand-primary)] text-black px-12 py-6 rounded-full text-xl font-black uppercase tracking-wide inline-flex items-center gap-4 hover:opacity-90 transition-opacity shadow-2xl mb-6"
            onClick={() => onCtaClick?.('final', siteConfig.ctaText)}
          >
            {siteConfig.ctaText} <ArrowRight size={28} />
          </a>

          <p className="text-black/50 text-sm">
            Vagas limitadas. Comunidade seletiva de criadores.
          </p>
        </div>
      </div>
    </section>
  )
}
