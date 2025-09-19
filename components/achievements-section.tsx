"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Users, Code, Award, Target } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Tech Innovation Award 2023",
    description: "Recognized for developing an AI-powered code review system that improved team productivity by 35%",
    category: "Innovation",
    year: "2023",
  },
  {
    icon: Star,
    title: "Top 1% Developer on GitHub",
    description: "Ranked in the top 1% of developers globally based on contributions and community impact",
    category: "Open Source",
    year: "2023",
  },
  {
    icon: Users,
    title: "Team Leadership Excellence",
    description: "Successfully led a cross-functional team of 12 developers to deliver a $2M project ahead of schedule",
    category: "Leadership",
    year: "2022",
  },
  {
    icon: Code,
    title: "Hackathon Winner",
    description: "First place at TechCrunch Disrupt Hackathon for building a real-time collaboration platform",
    category: "Competition",
    year: "2022",
  },
  {
    icon: Award,
    title: "Employee of the Year",
    description: "Recognized for exceptional performance and mentoring junior developers at TechCorp Solutions",
    category: "Recognition",
    year: "2021",
  },
  {
    icon: Target,
    title: "Performance Optimization Expert",
    description: "Reduced application load times by 60% across 5 major products, saving $500K annually",
    category: "Technical",
    year: "2021",
  },
]

const stats = [
  { number: "50+", label: "Projects Completed", icon: Code },
  { number: "100K+", label: "Users Impacted", icon: Users },
  { number: "15+", label: "Awards & Recognition", icon: Trophy },
  { number: "5+", label: "Years Experience", icon: Star },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milestones that reflect dedication to excellence and continuous growth in technology
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300">
                <div className="p-3 bg-yellow-500/10 rounded-lg w-fit mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 h-full hover:border-yellow-500/30 transition-all duration-300 hover:bg-gray-900/70">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                    <achievement.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                      <span className="text-sm text-gray-400">{achievement.year}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-300 rounded-full text-sm mb-4">
                      {achievement.category}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
