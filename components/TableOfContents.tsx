'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronRight } from 'lucide-react'

interface Chapter {
  id: number
  title: string
  subtitle: string
  description: string
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: 'EARLY OPPORTUNITY',
    subtitle: 'The origin of an iconic figure',
    description: 'Donnelly first garnered attention in the late 1990s for his graffiti art and subversive streetwear designs.'
  },
  {
    id: 2,
    title: 'REBELLIOUS CURIOSITY',
    subtitle: 'Break the rules to stand out',
    description: 'Donnelly moved on from a simple tag and developed a unique style that involved adding cartoon-like figures.'
  },
  {
    id: 3,
    title: 'FRUGAL FOR GROWTH',
    subtitle: 'Find opportunities from nothing',
    description: 'Donnelly traded a painting for a trip to Japan after being approached by Bounty Hunter.'
  },
  {
    id: 4,
    title: 'NOT SO ORIGINAL',
    subtitle: 'Build on what\'s already created',
    description: 'Donnelly built characters based on beloved Sesame Street and used similar features to Disney characters.'
  },
  {
    id: 5,
    title: 'SKIN IN THE GAME',
    subtitle: 'Invest in yourself',
    description: 'Donnelly took payment in stock of toys for his initial venture. The COMPANION became a recurring figure.'
  },
  {
    id: 6,
    title: 'CREATE LEVERAGE',
    subtitle: 'Ditch middle man',
    description: 'Donnelly moved his store onto his own platform, shipping direct to the customer.'
  }
]

export default function TableOfContents() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]
    
    gsap.fromTo(
      cards,
      { y: 100, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  const handleChapterClick = (chapterId: number) => {
    const element = document.querySelector(`#chapter-${chapterId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="section-reveal py-20 px-4 bg-accent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-600 mb-4">Table of content</p>
        </div>

        {/* Chapter Cards */}
        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              ref={el => { cardsRef.current[index] = el }}
              onClick={() => handleChapterClick(chapter.id)}
              className="group relative bg-secondary border-2 border-gray-200 rounded-3xl p-8 cursor-pointer hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{
                marginLeft: `${index * 2}rem`,
                marginRight: `${(chapters.length - 1 - index) * 2}rem`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:text-gray-700 transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-gray-600 uppercase tracking-wide mb-4">
                    {chapter.subtitle}
                  </p>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-2xl">
                    {chapter.description}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-medium text-gray-500">
                    Chapter {chapter.id}
                  </span>
                  <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Chapters Link */}
        <div className="text-center mt-12">
          <button 
            onClick={() => document.querySelector('#chapters')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 text-primary hover:text-gray-600 transition-colors font-medium"
          >
            <span>$</span>
            <span>All chapters</span>
          </button>
        </div>
      </div>
    </section>
  )
}