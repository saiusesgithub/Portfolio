"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2017 - 2019",
    gpa: "3.8/4.0",
    description:
      "Specialized in Machine Learning and Distributed Systems. Completed thesis on scalable web architectures.",
    coursework: [
      "Advanced Algorithms",
      "Machine Learning",
      "Distributed Systems",
      "Database Systems",
      "Software Engineering",
    ],
    honors: ["Dean's List", "Graduate Research Assistant"],
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2013 - 2017",
    gpa: "3.7/4.0",
    description: "Comprehensive foundation in software development, data structures, and system design principles.",
    coursework: [
      "Data Structures",
      "Object-Oriented Programming",
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
    ],
    honors: ["Magna Cum Laude", "ACM Student Chapter President"],
  },
]

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SA-2023-001",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    credentialId: "GCP-PD-2022-045",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-2022-789",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Education & Learning
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Strong academic foundation combined with continuous professional development
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 hover:bg-gray-900/70">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <GraduationCap className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <div className="text-lg font-medium text-green-400 mb-2">{edu.school}</div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 mb-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Honors & Activities:</h4>
                      <ul className="space-y-1">
                        {edu.honors.map((honor, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span>{honor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="p-3 bg-blue-500/10 rounded-lg w-fit mx-auto mb-4">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                  <p className="text-blue-400 mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                  <p className="text-gray-500 text-xs">ID: {cert.credentialId}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
