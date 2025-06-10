'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import TableOfContents from '@/components/TableOfContents'
import ChapterSections from '@/components/ChapterSections'
import SourcesSection from '@/components/SourcesSection'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )

    // Parallax effect for hero section
    gsap.to('.hero-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Section reveal animations
    const sections = gsap.utils.toArray('.section-reveal') as HTMLElement[]
    sections.forEach((section: HTMLElement) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TableOfContents />
      <ChapterSections />
      <SourcesSection />
      <Footer />
    </main>
  )
} 