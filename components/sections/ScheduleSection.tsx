'use client'

import React from 'react'
import { Calendar, Clock, MapPin, CheckCircle2 } from '@/components/icons'
import { siteConfig } from '@/site.config'

const highlights = [
  'Lorem ipsum dolor sit amet consectetur',
  'Adipiscing elit sed do eiusmod tempor',
  'Incididunt ut labore et dolore magna aliqua',
  'Ut enim ad minim veniam quis nostrud',
]

export function ScheduleSection() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-32 bg-[var(--brand-bg-alt)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-12">
            2 days. {siteConfig.event.format}. {siteConfig.event.formatDetail}.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/40 p-8 rounded-2xl">
              <Calendar size={32} className="text-[var(--brand-secondary)] mx-auto mb-4" />
              <p className="text-2xl font-black">{siteConfig.event.date}</p>
              <p className="text-white/60 text-sm">{siteConfig.event.year}</p>
            </div>
            <div className="bg-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/40 p-8 rounded-2xl">
              <Clock size={32} className="text-[var(--brand-secondary)] mx-auto mb-4" />
              <p className="text-2xl font-black">{siteConfig.event.time}</p>
              <p className="text-white/60 text-sm">{siteConfig.event.timezone}</p>
            </div>
            <div className="bg-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/40 p-8 rounded-2xl">
              <MapPin size={32} className="text-[var(--brand-secondary)] mx-auto mb-4" />
              <p className="text-2xl font-black">{siteConfig.event.format}</p>
              <p className="text-white/60 text-sm">{siteConfig.event.formatDetail}</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <ul className="space-y-4 text-left">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={18} className="text-[var(--brand-accent)] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
