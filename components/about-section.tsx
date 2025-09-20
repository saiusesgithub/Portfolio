import { Card } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern patterns.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces that balance aesthetics with functionality.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams using agile methodologies and clear communication.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm Sai Srujan Punati, a B.Tech IT student passionate about Flutter app development and currently diving into cloud technologies. I love creating smooth, user-friendly apps and exploring how the cloud can make them scalable and reliable. With a strong project-driven mindset, I plan to explore blockchain and cybersecurity in the future.
          </p>
        </div>

        <div className="space-y-12">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Started as a curious computer science student, I've evolved into a full-stack developer who thrives on
              creating digital experiences that make a difference. From startups to enterprise solutions, I've helped
              bring ideas to life through code. My passion lies in solving complex problems with elegant, user-centered
              solutions that make technology accessible and meaningful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="p-6 text-center hover:bg-card/80 transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
