'use client'

import React from 'react'

export function SolutionSection() {
  return (
    <section id="solution" aria-label="Solution" className="py-32 bg-[var(--brand-primary)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-12 leading-tight text-black">
            E se você pudesse dar ordens<br />
            que a AI sempre obedece?
          </h2>

          <div className="bg-black/10 backdrop-blur-sm border border-black/20 rounded-3xl p-8 md:p-12 mb-12">
            <p className="text-xl md:text-2xl text-black/90 leading-relaxed mb-8">
              <strong>Engenharia de Prompt</strong> é o método de estruturar suas instruções para que modelos de linguagem entendam contexto, tom, formato e objetivo — e entreguem exatamente o que você precisa.
            </p>
            <p className="text-lg text-black/80 leading-relaxed">
              Um bom prompt é como uma boa briefing de agência.<br />
              Quanto mais claro, mais preciso o resultado.
            </p>
          </div>

          {/* Lever Diagram */}
          <div className="bg-black/10 border border-black/20 rounded-2xl p-6 md:p-10 mb-8">
            <svg viewBox="0 0 400 180" className="w-full h-auto max-h-44 md:max-h-52">
              <polygon points="200,110 175,150 225,150" fill="rgba(0,0,0,0.6)" />
              <rect x="30" y="85" width="340" height="12" rx="6" fill="rgba(0,0,0,0.7)" transform="rotate(-10, 200, 91)" />
              <g transform="translate(55, 75)">
                <rect x="-15" y="-15" width="30" height="30" rx="6" fill="#dc2626" />
              </g>
              <g transform="translate(345, 35)">
                <rect x="-25" y="-25" width="50" height="50" rx="8" fill="#1a1a1a" />
              </g>
              <text x="55" y="130" textAnchor="middle" fill="rgba(0,0,0,0.8)" fontSize="12" fontWeight="600">Prompt ruim</text>
              <text x="345" y="100" textAnchor="middle" fill="rgba(0,0,0,0.9)" fontSize="12" fontWeight="600">Resultado preciso</text>
              <text x="200" y="175" textAnchor="middle" fill="rgba(0,0,0,0.95)" fontSize="13" fontWeight="700">Sua Alavanca</text>
            </svg>
          </div>

          <p className="text-lg text-black/80 mt-12 font-medium">
            Mesma AI. Resultado completamente diferente.
          </p>
        </div>
      </div>
    </section>
  )
}
