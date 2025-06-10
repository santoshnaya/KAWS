import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'KAWS - The Unofficial Story',
  description: 'A modern, interactive website inspired by the Unofficial KAWS design',
  keywords: 'KAWS, art, design, interactive, animation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
} 