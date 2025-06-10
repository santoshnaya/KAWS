'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import { Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const figureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      figureRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <footer id="footer" ref={footerRef} className="relative bg-accent py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* KAWS Figure */}
          <div 
            ref={figureRef}
            className="relative h-96 flex items-center justify-center"
          >
            <div className="relative w-64 h-80">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80"
                alt="KAWS companion figure"
                fill
                className="object-contain opacity-60"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Made by Ty for webflow designers
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If this website had fine print, it would say you can{' '}
                <span className="font-medium underline cursor-pointer hover:text-primary transition-colors">
                  clone this site
                </span>{' '}
                and nerd out all day long.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-primary hover:text-gray-600 transition-colors">
                  <span>$</span>
                  <span>All chapters</span>
                </button>
              </div>

              <div className="pt-4 border-t border-gray-300">
                <p className="text-sm text-gray-600 mb-4">
                  Contact & Social
                </p>
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors group">
                    <Mail size={18} className="group-hover:scale-110 transition-transform" />
                    <span>hello@kaws.com</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors group">
                    <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
                    <span>Portfolio</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8">
              <button className="bg-secondary border border-gray-300 rounded-full px-6 py-3 text-primary hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-200 flex items-center space-x-2">
                <span>(close)</span>
              </button>
              
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-primary transition-colors">
                  prev
                </button>
                <button className="text-gray-600 hover:text-primary transition-colors">
                  next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © 2024 KAWS Unofficial Story. Made with ❤️ for the creative community.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <button className="hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors">
                Terms of Use
              </button>
              <button className="hover:text-primary transition-colors">
                Credits
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 left-4 text-xs text-gray-400 font-mono">
          https://www.unofficial-kaws.com
        </div>
      </div>
    </footer>
  )
} 