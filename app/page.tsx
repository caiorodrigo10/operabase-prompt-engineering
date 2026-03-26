'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { Navigation } from '@/components/sections/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { ContentBlocks } from '@/components/sections/ContentBlocks'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'
import { ForWhomSection } from '@/components/sections/ForWhomSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'
import { Footer } from '@/components/sections/Footer'
import { siteConfig } from '@/site.config'
import { appendUtmParams } from '@/lib/utm'
import { initPostHog, initMetaPixel, trackEvent } from '@/lib/analytics'

export default function Home() {
  const [checkoutUrl, setCheckoutUrl] = useState(siteConfig.ctaUrl)

  // Initialize analytics
  useEffect(() => {
    initPostHog()
    trackEvent('page_loaded', { page: '/' })

    // Lazy load Meta Pixel on user interaction
    const loadPixel = () => {
      initMetaPixel()
      window.removeEventListener('scroll', loadPixel)
      window.removeEventListener('click', loadPixel)
    }
    window.addEventListener('scroll', loadPixel, { once: true, passive: true })
    window.addEventListener('click', loadPixel, { once: true })
    const timeout = setTimeout(loadPixel, 5000)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', loadPixel)
      window.removeEventListener('click', loadPixel)
    }
  }, [])

  // UTM parameter capture
  useEffect(() => {
    setCheckoutUrl(appendUtmParams(siteConfig.ctaUrl))
  }, [])

  const handleCtaClick = useCallback((position: string, buttonText: string) => {
    trackEvent('cta_click', { position, button_text: buttonText, page: '/' })
  }, [])

  // suppress unused variable warning
  void checkoutUrl

  return (
    <div className="min-h-screen bg-[var(--brand-bg)] text-white">
      <Navigation />
      <main role="main">
        <HeroSection onCtaClick={handleCtaClick} />
        <ProblemSection />
        <SolutionSection />
        <ContentBlocks />
        <BeforeAfterSection />
        <ForWhomSection />
        <FaqSection />
        <FinalCtaSection onCtaClick={handleCtaClick} />
      </main>
      <Footer />
    </div>
  )
}
