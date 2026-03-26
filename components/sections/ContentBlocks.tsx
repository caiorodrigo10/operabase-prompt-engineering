'use client'

import React, { useState, useEffect, useRef } from 'react'
import { CheckCircle2, ChevronDown } from '@/components/icons'

const contentBlocks = [
  {
    id: 'block-1',
    number: '01',
    title: 'Zero-Shot Prompting',
    description: 'A base de tudo — instrução direta sem exemplos',
    items: [
      'Dê contexto claro: quem você é, o que você precisa e qual é o formato de saída',
      'Especifique o tom: formal, descontraído, técnico, persuasivo — a AI se adapta',
      'Use delimitadores: aspas, colchetes ou XML para separar partes do prompt'
    ]
  },
  {
    id: 'block-2',
    number: '02',
    title: 'Few-Shot Prompting',
    description: 'Mostre exemplos — a AI aprende pelo padrão',
    items: [
      'Inclua 2 a 5 exemplos do resultado que você quer — padrão de entrada/saída',
      'Quanto mais específico o exemplo, mais precisa a resposta gerada',
      'Ideal para tarefas repetitivas: classificação, resumo, extração de dados'
    ]
  },
  {
    id: 'block-3',
    number: '03',
    title: 'Chain-of-Thought',
    description: 'Faça a AI pensar em voz alta antes de responder',
    items: [
      'Adicione "Pense passo a passo" para ativar raciocínio encadeado',
      'Útil para problemas complexos: lógica, matemática, análise estratégica',
      'Aumenta drasticamente a qualidade de resposta em tarefas de múltiplas etapas'
    ]
  },
  {
    id: 'block-4',
    number: '04',
    title: 'Role Prompting',
    description: 'Coloque a AI em um papel — e ela performa nele',
    items: [
      '"Você é um copywriter sênior especializado em conversão" — e a resposta muda tudo',
      'Combine papel + contexto + tarefa para maximizar resultado',
      'Use para simular especialistas: advogado, médico, estrategista, analista'
    ]
  }
]

export function ContentBlocks() {
  const [activeBlock, setActiveBlock] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight
      const totalScroll = sectionHeight - windowHeight

      if (rect.top > 0) {
        setActiveBlock(0)
      } else if (rect.bottom - windowHeight < 0) {
        setActiveBlock(contentBlocks.length - 1)
      } else {
        const progress = Math.abs(rect.top) / totalScroll
        const blockIndex = Math.min(
          Math.floor(progress * contentBlocks.length),
          contentBlocks.length - 1
        )
        setActiveBlock(blockIndex)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label="Content blocks"
      className="bg-[var(--brand-bg-alt)] relative"
      style={{ height: `${contentBlocks.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header with progress indicators */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-black">
                As 4 técnicas essenciais:
              </h2>

              <div className="flex gap-2">
                {contentBlocks.map((block, index) => (
                  <div
                    key={block.id}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                      activeBlock === index
                        ? 'bg-[var(--brand-primary)] text-black scale-110'
                        : activeBlock > index
                        ? 'bg-[var(--brand-primary)]/50 text-white/70'
                        : 'bg-white/5 text-white/40'
                    }`}
                  >
                    {block.number}
                  </div>
                ))}
              </div>
            </div>

            {/* Sliding blocks */}
            <div className="relative overflow-hidden">
              {contentBlocks.map((block, index) => {
                let translateX = 0
                if (index < activeBlock) translateX = -100
                else if (index > activeBlock) translateX = 100

                return (
                  <div
                    key={block.id}
                    className={`transition-all duration-500 ease-out ${index === 0 ? 'relative' : 'absolute inset-0'}`}
                    style={{
                      transform: `translateX(${translateX}%)`,
                      opacity: index === activeBlock ? 1 : 0,
                    }}
                  >
                    <div className="bg-white/5 border border-[var(--brand-primary)]/30 rounded-3xl p-6 md:p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-5xl md:text-6xl font-heading font-black text-[var(--brand-primary)]">
                          {block.number}
                        </span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-heading font-black mb-1">
                            {block.title}
                          </h3>
                          <p className="text-white/60">{block.description}</p>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {block.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-white/80 bg-white/5 p-3 rounded-xl">
                            <CheckCircle2 size={20} className="text-[var(--brand-accent)] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Scroll hint */}
            <div className="flex justify-center mt-8">
              <div className="flex flex-col items-center gap-2 text-white/40">
                <span className="text-xs uppercase tracking-widest">
                  {activeBlock < contentBlocks.length - 1 ? 'Continue scrollando' : 'Próxima seção'}
                </span>
                <ChevronDown size={20} className="animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
