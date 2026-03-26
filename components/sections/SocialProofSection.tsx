'use client'

import React from 'react'

const speakers = [
  {
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
  },
  {
    name: 'Jane Smith',
    bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
]

export function SocialProofSection() {
  return (
    <section id="speakers" aria-label="Social proof" className="py-32 bg-[var(--brand-bg)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white">
              Your mentors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {speakers.map((speaker) => (
              <div key={speaker.name} className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <div className="aspect-[3/4] overflow-hidden bg-[#1a1a1a] rounded-2xl mb-8 flex items-center justify-center">
                  <span className="text-6xl font-heading font-black text-white/10">
                    {speaker.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-black font-heading text-white mb-3">
                  {speaker.name}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
