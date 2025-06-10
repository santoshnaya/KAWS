'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { Play } from 'lucide-react'

interface ChapterData {
  id: number
  title: string
  subtitle: string
  year: number
  content: string
  videoId: string
  image: string
}

const chaptersData: ChapterData[] = [
  {
    id: 1,
    title: 'EARLY OPPORTUNITY',
    subtitle: 'The origin of an iconic figure',
    year: 1996,
    content: 'Donnelly first garnered attention in the late 1990s for his graffiti art and subversive streetwear designs. Before long, he was working as a background painter on animated series such as Disney\'s 101 Dalmatians and cult shows Daria and Doug.',
    videoId: 'dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80'
  },
  {
    id: 2,
    title: 'REBELLIOUS CURIOSITY',
    subtitle: 'Break the rules to stand out',
    year: 1997,
    content: 'Donnelly began painting the letters \'KAWS\' on New Jersey and Manhattan buildings. However, Donnelly soon moved on from this simple tag and developed a unique style that involved adding cartoon-like figures to bus-shelter advertisements.',
    videoId: 'dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80'
  },
  {
    id: 3,
    title: 'FRUGAL FOR GROWTH',
    subtitle: 'Find opportunities from nothing',
    year: 1998,
    content: 'Donnelly traveled to Japan after being approached by Bounty Hunter, a cult toy and streetwear brand. He traded a painting to get the trip paid for.',
    videoId: 'dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&q=80'
  },
  {
    id: 4,
    title: 'NOT SO ORIGINAL',
    subtitle: 'Build on what\'s already created',
    year: 1999,
    content: 'In 1999, KAWS was approached by Bounty Hunter, a Japanese streetwear brand, to visit Japan. This trip led to the creation of KAWS\' first toy, COMPANION. Produced in an edition of 500, the toys sold out almost immediately.',
    videoId: 'dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80'
  },
  {
    id: 5,
    title: 'SKIN IN THE GAME',
    subtitle: 'Invest in yourself',
    year: 2000,
    content: 'Produced in an edition of 500 COMPANION\'s, the toys sold out almost immediately. Donnelly took payment in stock of toys for this initial venture. The COMPANION became a recurring figure in KAWS\' work.',
    videoId: 'dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80'
  },
  {
    id: 6,
    title: 'CREATE LEVERAGE',
    subtitle: 'Ditch middle man',
    year: 2002,
    content: 'Donnelly\'s current collection with the Japanese brand sees him redrawing beloved Sesame Street characters. All priced under $50, the pieces feature the tagline, \'You\'re never too old for the street\'. Donnelly moved his store onto his own platform.',
    videoId: 'dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&q=80'
  }
]

export default function ChapterSections() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const chapters = chapterRefs.current.filter(Boolean) as HTMLDivElement[]
    
    chapters.forEach((chapter: HTMLDivElement) => {
      gsap.fromTo(
        chapter,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: chapter,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
  }

  return (
    <section id="chapters" ref={sectionRef} className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4">
        {chaptersData.map((chapter, index) => (
          <div
            key={chapter.id}
            id={`chapter-${chapter.id}`}
            ref={el => { chapterRefs.current[index] = el }}
            className="mb-32 last:mb-0"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="space-y-2">
                  <p className="text-sm font-mono text-gray-500">
                    {String(chapter.id).padStart(2, '0')}:55
                  </p>
                  <h2 className="text-chapter font-bold text-primary">
                    {chapter.title}
                  </h2>
                  <p className="text-lg text-gray-600 font-medium">
                    {chapter.subtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-xl font-bold text-gray-800">
                    {chapter.year}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {chapter.content}
                  </p>
                </div>

                {/* Video button */}
                <button
                  onClick={() => handleVideoClick(chapter.videoId)}
                  className="inline-flex items-center space-x-3 bg-primary text-secondary px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 group"
                >
                  <Play size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">watch the full clip</span>
                </button>

                {/* Chapter indicator */}
                <div className="flex items-center space-x-4 pt-8">
                  <div className="text-6xl font-bold text-primary opacity-20">
                    CHAPTER
                  </div>
                  <div className="text-6xl font-bold text-primary">
                    ({chapter.id})
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gray-100 group">
                  <Image
                    src={chapter.image}
                    alt={`Chapter ${chapter.id} - ${chapter.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Play button overlay */}
                  <button
                    onClick={() => handleVideoClick(chapter.videoId)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-16 h-16 bg-secondary/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Play size={24} className="text-primary ml-1" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}