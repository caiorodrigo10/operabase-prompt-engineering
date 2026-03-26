'use client'

import React, { useState } from 'react'
import { HelpCircle, ChevronDown } from '@/components/icons'

const faqItems = [
  {
    q: 'Preciso saber programar para aprender Prompt Engineering?',
    a: 'Não. Prompt Engineering é sobre linguagem e raciocínio estruturado, não código. Qualquer pessoa que saiba escrever e pensar de forma organizada pode aprender — e aplicar — as técnicas ensinadas aqui.'
  },
  {
    q: 'Isso funciona com ChatGPT, Claude, Gemini e outros modelos?',
    a: 'Sim. Os princípios de Prompt Engineering são agnósticos de modelo. Zero-Shot, Few-Shot, Chain-of-Thought e Role Prompting funcionam em qualquer LLM de geração de texto — você apenas adapta a sintaxe específica de cada plataforma.'
  },
  {
    q: 'Qual a diferença entre um prompt comum e um prompt de engenharia?',
    a: 'Um prompt comum é uma pergunta. Um prompt de engenharia é uma instrução estruturada com contexto, papel, objetivo, restrições e formato de saída. É a diferença entre pedir "me faça um email" e dar um briefing completo que garante o resultado esperado.'
  },
  {
    q: 'Quanto tempo leva para dominar as técnicas básicas?',
    a: 'As 4 técnicas fundamentais (Zero-Shot, Few-Shot, Chain-of-Thought e Role Prompting) podem ser compreendidas e aplicadas em horas. Dominar os padrões avançados e criar templates reutilizáveis leva semanas de prática consistente — mas o ROI começa no primeiro dia.'
  }
]

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="faq" aria-label="FAQ" className="py-32 bg-[var(--brand-bg-alt)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-black">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-bold flex items-center gap-3">
                    <HelpCircle size={20} className="text-[var(--brand-primary)] flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={24}
                    className={`text-white/40 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-white/70 pl-9">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
