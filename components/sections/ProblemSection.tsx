'use client'

import React from 'react'
import { X } from '@/components/icons'

const problems = [
  'Você manda a mesma pergunta 5 vezes e a AI nunca entende direito',
  'Os resultados são genéricos demais — poderia ter escrito no Google',
  'Você desiste e faz na mão porque "é mais rápido"',
]

export function ProblemSection() {
  return (
    <section aria-label="Problem" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black leading-tight text-black">
              Você usa AI todo dia.<br />
              <span className="text-black/40">Mas não usa do jeito certo.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {problems.map((problem, idx) => (
              <div key={idx} className="bg-black/5 border border-black/10 p-8 rounded-2xl text-center">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <X size={24} className="text-red-500" />
                </div>
                <p className="text-lg font-bold text-black">{problem}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-black/60 text-center max-w-2xl mx-auto">
            O problema não é a AI. É que ninguém te ensinou a
            <span className="font-bold text-black"> falar com ela de verdade.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
