'use client'

import React from 'react'
import { ArrowRight, CheckCircle2 } from '@/components/icons'
import { siteConfig } from '@/site.config'

interface HeroSectionProps {
  onCtaClick?: (position: string, text: string) => void
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pixel-grid">
      <div className="scan-line"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand logo area */}
          <div className="mb-10">
            <div className="inline-flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-1">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/40"></div>
                <span className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-white/70 px-4">
                  Operabase
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/40"></div>
              </div>
              <span className="text-3xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tight text-white">
                Prompt Engineering
              </span>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-10 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
            <div className="w-2 h-2 bg-[var(--brand-accent)] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/80">A habilidade que separa quem usa AI de quem domina AI</span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black leading-[1.1] mb-8 tracking-tight">
            A diferença entre um <span className="text-[var(--brand-secondary)]">estagiário</span> e um <span className="text-[var(--brand-accent)]">sênior</span> não é a ferramenta. É como você instrui ela.
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6 max-w-2xl mx-auto">
            Engenharia de Prompt é a arte de falar com AI de um jeito que ela entende exatamente o que você quer — e entrega resultado de verdade.
          </p>

          <p className="text-base md:text-lg text-white/50 leading-relaxed mb-12 max-w-xl mx-auto">
            Sem técnica, você fica no ciclo de tentar, errar e reformular. Com técnica, você constrói sistemas que trabalham por você.
          </p>

          <a
            href="https://operabase.io/aplicar"
            aria-label={siteConfig.ctaText}
            className="bg-[var(--brand-primary)] text-black px-10 md:px-14 py-5 md:py-6 rounded-full text-lg font-black uppercase tracking-wide inline-flex items-center gap-3 hover:opacity-90 transition-opacity shadow-2xl mb-8"
            onClick={() => onCtaClick?.('hero', siteConfig.ctaText)}
          >
            {siteConfig.ctaText} <ArrowRight size={24} />
          </a>

          {/* Value propositions */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--brand-accent)]" />
              Zero conhecimento técnico necessário
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--brand-accent)]" />
              Funciona com qualquer modelo de AI
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--brand-accent)]" />
              Resultados aplicáveis hoje
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
