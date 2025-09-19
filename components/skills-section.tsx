"use client"

import { motion } from "framer-motion"

const skillDomains = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", logo: "⚛️" },
      { name: "Next.js", logo: "▲" },
      { name: "TypeScript", logo: "🔷" },
      { name: "Tailwind CSS", logo: "🎨" },
      { name: "Vue.js", logo: "💚" },
      { name: "Framer Motion", logo: "🎭" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", logo: "🟢" },
      { name: "Python", logo: "🐍" },
      { name: "GraphQL", logo: "🔗" },
      { name: "REST APIs", logo: "🌐" },
      { name: "Express.js", logo: "🚀" },
      { name: "FastAPI", logo: "⚡" },
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      { name: "PostgreSQL", logo: "🐘" },
      { name: "MongoDB", logo: "🍃" },
      { name: "Redis", logo: "🔴" },
      { name: "Supabase", logo: "⚡" },
      { name: "Firebase", logo: "🔥" },
      { name: "Prisma", logo: "🔺" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", logo: "☁️" },
      { name: "Docker", logo: "🐳" },
      { name: "Kubernetes", logo: "⚙️" },
      { name: "Vercel", logo: "▲" },
      { name: "GitHub Actions", logo: "🔄" },
      { name: "Terraform", logo: "🏗️" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", logo: "📱" },
      { name: "Flutter", logo: "🦋" },
      { name: "iOS", logo: "🍎" },
      { name: "Android", logo: "🤖" },
      { name: "Expo", logo: "⚡" },
      { name: "PWA", logo: "📲" },
    ],
  },
  {
    title: "Design & Tools",
    skills: [
      { name: "Figma", logo: "🎨" },
      { name: "Adobe XD", logo: "🎭" },
      { name: "Git", logo: "📝" },
      { name: "VS Code", logo: "💻" },
      { name: "Linear", logo: "📊" },
      { name: "Notion", logo: "📋" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience across multiple domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillDomains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-900/70">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">{domain.title}</h3>

                <div className="grid grid-cols-2 gap-3">
                  {domain.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-200 hover:scale-105"
                    >
                      <span className="text-lg">{skill.logo}</span>
                      <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
