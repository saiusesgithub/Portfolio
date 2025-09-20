"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating 3D cubes */}
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 hero-cube-1"
          style={{
            transform: `rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg) translateZ(50px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 hero-cube-2"
          style={{
            transform: `rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * -8}deg) translateZ(30px)`,
          }}
        ></div>

        {/* 3D Pyramids */}
        <div
          className="absolute top-1/2 left-1/6 hero-pyramid-1"
          style={{
            transform: `rotateX(${mousePosition.y * 12}deg) rotateY(${mousePosition.x * 12}deg) translateZ(40px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/6 hero-pyramid-2"
          style={{
            transform: `rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * -10}deg) translateZ(35px)`,
          }}
        ></div>

        {/* Floating rings */}
        <div
          className="absolute top-1/3 right-1/3 hero-ring-1"
          style={{
            transform: `rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg) translateZ(60px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/2 left-1/3 hero-ring-2"
          style={{
            transform: `rotateX(${mousePosition.y * -12}deg) rotateY(${mousePosition.x * -12}deg) translateZ(45px)`,
          }}
        ></div>

        {/* Enhanced background blurs with 3D depth */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl float-animation hero-depth-1"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float-animation hero-depth-2"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full blur-2xl float-animation hero-depth-3"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance hero-text-3d"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
              }}
            >
              Hi, I'm <span className="text-gradient hero-name-glow">Sai Srujan Punati</span>
            </h1>
            <p
              className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty hero-subtitle-3d"
              style={{
                transform: `perspective(800px) rotateX(${mousePosition.y * 1}deg) rotateY(${mousePosition.x * 1}deg)`,
              }}
            >
              Building apps today. Architecting the cloud tomorrow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="glow-effect font-semibold px-8 py-3 button-3d-primary transform-gpu"
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-semibold px-8 py-3 bg-transparent button-3d-outline transform-gpu"
            >
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: "https://github.com/saiusesgithub", label: "GitHub" },
              { icon: Linkedin, href: "https://in.linkedin.com/in/saisrujanpunati", label: "LinkedIn" },
              { icon: Mail, href: "mailto:saisrujanpuanti@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 social-icon-3d transform-gpu"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce scroll-indicator-3d">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

