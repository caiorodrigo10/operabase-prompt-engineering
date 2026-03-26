'use client'

import React, { useState } from 'react'
import { X, Menu } from '@/components/icons'
import { siteConfig } from '@/site.config'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative w-full max-w-7xl mx-auto py-5 px-4">
      <div className="mx-auto px-6 md:px-10 flex items-center justify-between w-full">
        <a href="/" className="flex-shrink-0">
          <span className="text-xl font-heading font-black tracking-tight text-white">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-[var(--brand-primary)] text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg whitespace-nowrap ml-2"
          >
            {siteConfig.ctaTextNav}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 mx-4 bg-[var(--brand-bg)]/95 backdrop-blur-xl border border-white/10 rounded-3xl z-40 p-8 flex flex-col gap-6 md:hidden shadow-2xl">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-black font-heading uppercase tracking-tight text-white/80 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-[var(--brand-primary)] text-white w-full py-4 rounded-full text-sm font-black uppercase tracking-widest text-center hover:opacity-90 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            {siteConfig.ctaTextNav}
          </a>
        </div>
      )}
    </header>
  )
}
