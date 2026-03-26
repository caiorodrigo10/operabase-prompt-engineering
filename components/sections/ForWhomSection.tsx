'use client'

import React from 'react'
import { CheckCircle2, X } from '@/components/icons'

const forYou = [
  'Usa ChatGPT, Claude ou qualquer AI mas sente que poderia extrair muito mais',
  'Quer criar conteúdo, automações ou sistemas com AI e não sabe por onde começar',
  'Tem um negócio e quer usar AI para reduzir tempo em tarefas repetitivas',
  'É curioso sobre como programadores e estrategistas usam AI com precisão cirúrgica',
]

const notForYou = [
  'Nunca usou nenhuma ferramenta de AI e não tem interesse em aprender',
  'Já é especialista em LLMs e está buscando conteúdo de nível de pesquisa acadêmica',
  'Quer uma solução pronta — sem precisar entender como funciona',
]

export function ForWhomSection() {
  return (
    <section id="for-whom" aria-label="For whom" className="py-32 bg-[var(--brand-bg-alt)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black">
              Isso é para você?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For you */}
            <div className="bg-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/40 rounded-2xl p-8">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                <CheckCircle2 size={24} className="text-[var(--brand-accent)]" />
                É para você se:
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/80">
                    <span className="text-[var(--brand-accent)]">&rarr;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for you */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                <X size={24} className="text-red-400" />
                NÃO é para você se:
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/60">
                    <span className="text-red-400">&rarr;</span>
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
