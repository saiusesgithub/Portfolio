"use client"

import { motion } from "framer-motion"
import { Award, Calendar, GraduationCap, MapPin } from "lucide-react"

const educationTimeline = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Vidya Jyothi Institute of Technology (VJIT), Hyderabad, Telangana",
    period: "2024 - June 2028 (Expected)",
    details: ["CGPA: 9.63/10 (after 1st year)"],
    coursework: [
      "C Programming",
      "Python Programming",
      "Data Structures (in C)",
      "DBMS (MySQL)",
      "R Programming",
    ],
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Impulse Junior College",
    period: "2022 - 2024",
    details: [
      "Percentage: 94.7%",
      "Focus: Mathematics, Physics, Chemistry",
    ],
  },
  {
    degree: "School",
    institution: "Kendriya Vidyalaya Gachibowli",
    period: "2022 (Passout)",
    details: [],
  },
]

const certifications = [
  "Cyberonix Level-1 Cybersecurity Workshop & Hackathon",
  "CodeTantra - C Programming & Python (certificates)",
  "Cisco - Python (certificate)",
]

const honors = [
  "DSS Tech Team Member",
  "PitchQuest - 2nd Prize (2024 & 2025)",
  "Cyberonix Hackathon - 2nd out of 50 teams",
]

const educationMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={educationMotion}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Education & Learning
          </h2>
          <p className="text-xl text-gray-300">
            Strong academic foundation combined with continuous professional development
          </p>
        </motion.div>

        <div className="space-y-10">
          {educationTimeline.map(({ degree, institution, period, details, coursework }, index) => (
            <motion.article
              key={degree}
              className="rounded-2xl border border-green-500/20 bg-gray-900/60 p-8 backdrop-blur"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={educationMotion}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-3">
                  <span className="rounded-lg bg-green-500/10 p-3 text-green-300" aria-hidden="true">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{degree}</h3>
                    <p className="text-base text-green-300">{institution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>{period}</span>
                </div>
              </div>

              <div className="mt-4 space-y-4 text-sm text-gray-300">
                {details.length ? (
                  <ul className="space-y-1">
                    {details.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {coursework?.length ? (
                  <div>
                    <h4 className="font-semibold text-white">Relevant Coursework (so far):</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-full border border-gray-700/60 bg-gray-800/60 px-3 py-1 text-xs text-gray-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={educationMotion}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-blue-500/20 bg-gray-900/60 p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-blue-500/10 p-3 text-blue-300" aria-hidden="true">
                <Award className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold text-white">Certifications & Courses</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {certifications.map((cert) => (
                <li key={cert} className="leading-relaxed">
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-gray-900/60 p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-purple-500/10 p-3 text-purple-300" aria-hidden="true">
                <MapPin className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold text-white">Honors & Activities</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {honors.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
      </div>
    </section>
  )
}
