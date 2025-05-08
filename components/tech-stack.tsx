"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layout, Server, Database, Wrench, Binary, Zap } from "lucide-react"

export default function TechStack() {
  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programming Languages",
      description: "Core languages for systems and application development",
      skills: [
        { name: "Python", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "C", level: 85 },
        { name: "C++", level: 85 },
      ],
    },
    concepts: {
      icon: <Binary className="h-6 w-6" />,
      title: "AI/ML Expertise",
      description: "Artificial Intelligence and Machine Learning skills",
      skills: [
        { name: "Azure Cognitive Services", level: 90 },
        { name: "BERT-based NER", level: 85 },
        { name: "Image Classification", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Data Structures", level: 90 },
        { name: "Algorithms", level: 90 },
      ],
    },
    frontend: {
      icon: <Layout className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Modern web development technologies",
      skills: [
        { name: "React", level: 90 },
        { name: "Angular", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "UI/UX Design", level: 85 },
      ],
    },
    backend: {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Server-side frameworks and technologies",
      skills: [
        { name: "Flask", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
      ],
    },
    database: {
      icon: <Database className="h-6 w-6" />,
      title: "Database Systems",
      description: "Database management and optimization",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Development Tools",
      description: "Tools and environments for development",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm backdrop-blur-sm border-primary/20">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(technologies).map(([key, category], index) => (
            <motion.div
              key={key}
              variants={scaleUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="hover-lift"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-background to-muted/50 border border-primary/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full animate-pulse-slow">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-secondary/10 hover:bg-secondary/20 transition-colors"
                      >
                        {skill.name}
                        <Zap className="h-3 w-3 ml-1 text-yellow-400" />
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            With extensive experience in both low-level systems programming and modern web development, I bring a
            comprehensive understanding of software engineering principles to every project.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
