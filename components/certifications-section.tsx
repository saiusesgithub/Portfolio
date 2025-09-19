"use client"

import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react"

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    expiryDate: "2026",
    credentialId: "AWS-SAP-2023-001",
    level: "Professional",
    description: "Advanced certification demonstrating expertise in designing distributed systems on AWS",
    skills: ["Cloud Architecture", "Security", "Cost Optimization", "Migration Strategies"],
    logo: "/aws-logo.png",
  },
  {
    name: "Google Cloud Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2022",
    expiryDate: "2024",
    credentialId: "GCP-PCD-2022-045",
    level: "Professional",
    description: "Expertise in developing scalable applications using Google Cloud technologies",
    skills: ["App Engine", "Cloud Functions", "Kubernetes", "BigQuery"],
    logo: "/gcp-logo.png",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    expiryDate: "2025",
    credentialId: "CKA-2022-789",
    level: "Professional",
    description: "Hands-on certification for Kubernetes cluster administration and troubleshooting",
    skills: ["Cluster Management", "Networking", "Security", "Troubleshooting"],
    logo: "/kubernetes-logo.png",
  },
  {
    name: "Microsoft Azure Developer Associate",
    issuer: "Microsoft",
    date: "2021",
    expiryDate: "2024",
    credentialId: "AZ-204-2021-456",
    level: "Associate",
    description: "Proficiency in developing cloud solutions using Microsoft Azure services",
    skills: ["Azure Functions", "Cosmos DB", "Service Bus", "Key Vault"],
    logo: "/azure-logo.png",
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB Inc.",
    date: "2021",
    expiryDate: "2024",
    credentialId: "MDB-DEV-2021-123",
    level: "Professional",
    description: "Expertise in MongoDB database design, development, and optimization",
    skills: ["Database Design", "Aggregation", "Indexing", "Performance Tuning"],
    logo: "/mongodb-logo.png",
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2020",
    expiryDate: "2023",
    credentialId: "DCA-2020-987",
    level: "Associate",
    description: "Containerization expertise using Docker for application deployment",
    skills: ["Containerization", "Docker Compose", "Swarm", "Registry"],
    logo: "/docker-logo.png",
  },
]

const upcomingCerts = [
  {
    name: "Terraform Associate",
    issuer: "HashiCorp",
    plannedDate: "Q2 2024",
    description: "Infrastructure as Code certification",
  },
  {
    name: "AWS DevOps Engineer Professional",
    issuer: "Amazon Web Services",
    plannedDate: "Q3 2024",
    description: "Advanced DevOps practices on AWS",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
      <div className="absolute top-40 left-10 w-36 h-36 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise across cloud platforms and modern technologies
          </p>
        </motion.div>

        {/* Current Certifications */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 h-full hover:border-indigo-500/30 transition-all duration-300 hover:bg-gray-900/70">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                        <Award className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                        <div className="text-indigo-400 font-medium mb-2">{cert.issuer}</div>
                        <div className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm">
                          {cert.level}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Valid until {cert.expiryDate}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{cert.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <span className="text-gray-400 text-sm">ID: {cert.credentialId}</span>
                    <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Verify</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Planned Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingCerts.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/30 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                    <p className="text-purple-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                    <p className="text-gray-500 text-xs mt-2">Planned: {cert.plannedDate}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
