'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorDot = useRef<HTMLDivElement>(null)
  const cursorOutline = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e
      
      gsap.to(cursorDot.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'power2.out',
      })
      
      gsap.to(cursorOutline.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseEnter = () => {
      gsap.to([cursorDot.current, cursorOutline.current], {
        scale: 1.5,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to([cursorDot.current, cursorOutline.current], {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    document.addEventListener('mousemove', moveCursor)
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorDot} className="cursor-dot hidden md:block" />
      <div ref={cursorOutline} className="cursor-outline hidden md:block" />
    </>
  )
} 