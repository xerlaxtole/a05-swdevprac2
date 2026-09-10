'use client'
import { ReactNode, useState } from 'react'

export default function InteractiveCard({ children }: { children: ReactNode }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`w-full h-full rounded-lg overflow-hidden transition-colors duration-200 ${
        hovered ? 'shadow-2xl bg-neutral-200' : 'shadow-lg bg-white'
      }`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {children}
    </div>
  )
}
