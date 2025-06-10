'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'

interface Source {
  id: number
  title: string
  subtitle: string
  source: string
  videoId: string
  thumbnail: string
  type: 'video' | 'article'
}

const sources: Source[] = [
  {
    id: 1,
    title: 'How KAWS Became the Face Of Contemporary Art',
    subtitle: 'Blueprint',
    source: 'Complex',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80',
    type: 'video'
  },
  {
    id: 2,
    title: 'The Evolution of KAWS\' Street Art Aesthetic',
    subtitle: 'Brilliant Ideas Ep. 29',
    source: 'Bloomberg',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    type: 'video'
  },
  {
    id: 3,
    title: 'Pharrell Williams Interviews David Salle & KAWS',
    subtitle: 'ARTST TLK Ep. 2 Full',
    source: 'Reserve Channel',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80',
    type: 'video'
  },
  {
    id: 4,
    title: 'KAWS x i-D Magazine Video Interview',
    subtitle: 'Exclusive Interview',
    source: 'Hypebeast',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    type: 'video'
  }
]

const newsArticles: Source[] = [
  {
    id: 5,
    title: 'KAWS:HOLIDAY Lands on Changbai Mountain in China',
    subtitle: 'Art Installation',
    source: 'Complex',
    videoId: '',
    thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80',
    type: 'article'
  },
  {
    id: 6,
    title: 'REESE\'S PUFFS Teams Up with Iconic Artist KAWS',
    subtitle: 'Brand Collaboration',
    source: 'Business Wire',
    videoId: '',
    thumbnail: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80',
    type: 'article'
  },
  {
    id: 7,
    title: 'KAWS on why he\'s exhibiting his new art show in Fortnite',
    subtitle: 'Digital Art',
    source: 'Dazed',
    videoId: '',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    type: 'article'
  }
]

export default function SourcesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3

  useEffect(() => {
    gsap.fromTo(
      '.sources-grid',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  const handleSourceClick = (source: Source) => {
    if (source.type === 'video' && source.videoId) {
      window.open(`https://www.youtube.com/watch?v=${source.videoId}`, '_blank')
    }
  }

  const totalPages = Math.ceil(sources.length / itemsPerPage)
  const currentSources = sources.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <section id="sources" ref={sectionRef} className="py-20 bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-8 mb-8">
            <h2 className="text-4xl md:text-6xl font-bold">
              NOT TOP SECRET
            </h2>
            <div className="text-4xl md:text-6xl font-bold opacity-50">
              (4)
            </div>
            <h3 className="text-4xl md:text-6xl font-bold">
              SOURCES
            </h3>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We still have missing pieces of the story. Hopefully these videos can fill in the gaps.
          </p>
        </div>

        {/* Video Sources Grid */}
        <div className="sources-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentSources.map((source) => (
            <div key={source.id} className="group cursor-pointer">
              <div className="space-y-4">
                <div className="text-sm text-gray-400">
                  {source.source}
                </div>
                
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800">
                  <Image
                    src={source.thumbnail}
                    alt={source.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  <button
                    onClick={() => handleSourceClick(source)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-16 h-16 bg-secondary/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Play size={24} className="text-primary ml-1" />
                    </div>
                  </button>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-secondary px-2 py-1 rounded text-xs font-medium">
                      Video
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-lg leading-tight group-hover:text-gray-300 transition-colors">
                    {source.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {source.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                currentPage === i
                  ? 'bg-secondary text-primary'
                  : 'border border-gray-600 hover:bg-gray-800'
              }`}
            >
              {i + 1}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* News Articles */}
        <div className="border-t border-gray-700 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <div key={article.id} className="group cursor-pointer">
                <div className="space-y-4">
                  <div className="text-sm text-gray-400">
                    {article.source}
                  </div>
                  
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800">
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-base leading-tight group-hover:text-gray-300 transition-colors">
                      {article.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-700">
          <button className="flex items-center space-x-2 text-gray-400 hover:text-secondary transition-colors">
            <ChevronLeft size={20} />
            <span>prev</span>
          </button>
          
          <button className="flex items-center space-x-2 text-gray-400 hover:text-secondary transition-colors">
            <span>next</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
} 