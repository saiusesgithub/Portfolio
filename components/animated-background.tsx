"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`cube-${i}`}
            className="floating-cube"
            style={
              {
                "--mouse-x": mousePosition.x,
                "--mouse-y": mousePosition.y,
                "--delay": `${i * 0.5}s`,
                "--size": `${60 + i * 20}px`,
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 3) * 25}%`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`pyramid-${i}`}
            className="floating-pyramid"
            style={
              {
                "--rotation-speed": `${15 + i * 5}s`,
                "--scale": 0.8 + i * 0.2,
                right: `${5 + i * 15}%`,
                bottom: `${10 + (i % 2) * 40}%`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`sphere-${i}`}
            className="floating-sphere"
            style={
              {
                "--orbit-duration": `${20 + i * 8}s`,
                "--sphere-size": `${80 + i * 30}px`,
                left: `${20 + i * 15}%`,
                top: `${20 + i * 12}%`,
                transform: `translateZ(${i * 50}px)`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`ring-${i}`}
            className="interactive-ring"
            style={
              {
                "--mouse-influence": mousePosition.x * 30 + mousePosition.y * 20,
                "--ring-delay": `${i * 2}s`,
                "--ring-size": `${150 + i * 100}px`,
                left: `${30 + i * 20}%`,
                top: `${30 + i * 15}%`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="dna-helix">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`helix-${i}`}
            className="helix-strand"
            style={
              {
                "--strand-index": i,
                "--total-strands": 20,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`dodeca-${i}`}
            className="floating-dodecahedron"
            style={
              {
                "--rotation-x": `${i * 120}deg`,
                "--rotation-y": `${i * 90}deg`,
                "--float-duration": `${25 + i * 10}s`,
                right: `${10 + i * 25}%`,
                top: `${25 + i * 20}%`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="particle-wave-system">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`wave-particle-${i}`}
            className="wave-particle"
            style={
              {
                "--particle-index": i,
                "--wave-offset": `${(i / 50) * 360}deg`,
                "--mouse-x-influence": mousePosition.x * 50,
                "--mouse-y-influence": mousePosition.y * 30,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`torus-${i}`}
            className="floating-torus"
            style={
              {
                "--torus-rotation": `${i * 45}deg`,
                "--torus-scale": 0.6 + i * 0.3,
                "--torus-speed": `${30 + i * 15}s`,
                left: `${15 + i * 30}%`,
                bottom: `${15 + i * 25}%`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}
