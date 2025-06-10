'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
    .fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.8'
    )
    .fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )

    // Parallax effect for the hero image
    gsap.to(imageRef.current, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-accent"
    >
      {/* Background Image */}
      <div 
        ref={imageRef}
        className="hero-bg absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-80 h-96 md:w-96 md:h-[30rem] opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
            alt="KAWS figure"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 text-center px-4 max-w-4xl">
        <h1 
          ref={titleRef}
          className="text-hero font-bold text-primary mb-6 tracking-tight"
        >
          THE <span className="block">UNOFFICIAL</span>
          <span className="block">KAWS STORY</span>
        </h1>
        
        <div className="space-y-4">
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
          >
            Made by Ty for webflow designers
          </p>
          
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto italic">
            If this website had fine print, it would say you can{' '}
            <span className="font-medium">clone this site</span> and nerd out all day long.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* News badge */}
      <div className="absolute top-20 right-4 md:top-24 md:right-8">
        <button className="bg-secondary border border-primary rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-secondary transition-colors duration-200">
          Kaws news
        </button>
      </div>
    </section>
  )
} 