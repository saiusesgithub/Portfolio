"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navigationItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Education",
    "Achievements",
    "Certifications",
    "Projects",
    "Contact",
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gradient">{"<SSP />"}</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4">
            <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 shadow-2xl">
              <div className="grid grid-cols-1 gap-4">
                {navigationItems.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="group flex items-center justify-between p-3 rounded-xl hover:bg-blue-500/10 transition-all duration-300 text-left"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-gray-300 group-hover:text-blue-400 font-medium transition-colors duration-200">
                      {item}
                    </span>
                    <div className="w-2 h-2 bg-blue-500/30 rounded-full group-hover:bg-blue-500 transition-colors duration-200" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
