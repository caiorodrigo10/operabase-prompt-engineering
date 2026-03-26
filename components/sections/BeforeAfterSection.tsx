'use client'

import React from 'react'
import { X, CheckCircle2 } from '@/components/icons'

const beforeItems = [
  '"Me ajuda a escrever um email" — resultado genérico que você reescreve todo',
  'A AI não sabe o contexto, o tom nem o público — adivinha errado',
  'Você passa 20 minutos ajustando o que deveria levar 2',
  'Cada resposta parece feita para todo mundo — não para você',
  'Desiste da AI e faz na mão porque "nunca entende o que eu quero"',
]

const afterItems = [
  '"Você é um copywriter B2B. Escreva um email de follow-up para [contexto]. Tom: direto e consultivo."',
  'A AI tem contexto, papel e objetivo definidos — entrega no padrão esperado',
  'Primeira resposta já é 80% do caminho. Você ajusta 20%, não refaz do zero',
  'O output parece feito sob medida — porque as instruções foram sob medida',
  'AI vira um colaborador real, não uma calculadora de texto',
]

export function BeforeAfterSection() {
  return (
    <section aria-label="Before and after" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-black">
              <span className="text-black/40">Sem técnica</span> vs.<br />
              <span className="text-[var(--brand-secondary)]">Com Prompt Engineering</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-black/5 border border-black/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <X size={20} className="text-red-500" />
                </div>
                <h3 className="text-xl font-black text-black">Sem técnica</h3>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-black/70">
                    <span className="text-red-400 mt-1">&times;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-[var(--brand-primary)]/15 border border-[var(--brand-primary)]/40 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[var(--brand-primary)]/30 rounded-xl flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-[var(--brand-secondary)]" />
                </div>
                <h3 className="text-xl font-black text-black">Com Prompt Engineering</h3>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-black/70">
                    <span className="text-[var(--brand-secondary)] mt-1">&check;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
