"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "Sixth Sense Voice Assistant",
      shortDescription: "AI-powered voice assistant with natural language processing.",
      description:
        "AI-powered voice assistant with natural language processing to understand and respond to complex commands.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "AI", "NLP"],
      features: [
        "Natural language processing",
        "Voice recognition",
        "Complex command handling",
        "Contextual responses",
        "Multi-platform support",
      ],
    },
    {
      id: 2,
      title: "Maze Runner Game",
      shortDescription: "Interactive game demonstrating advanced data structures and algorithms.",
      description:
        "Interactive game demonstrating advanced data structures and algorithms for complex problem-solving.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["C", "DSA"],
      features: [
        "Pathfinding algorithms",
        "Dynamic maze generation",
        "Difficulty levels",
        "Performance optimization",
        "Interactive UI",
      ],
    },
    {
      id: 3,
      title: "AI Sentiment Analysis",
      shortDescription: "Cross-platform UI for analyzing text sentiment using AI.",
      description: "Cross-platform UI for analyzing text sentiment using AI to provide actionable insights.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["TypeScript", "Node.js", "AI"],
      features: [
        "Real-time sentiment analysis",
        "Multi-language support",
        "Data visualization",
        "Batch processing",
        "Export capabilities",
      ],
    },
    {
      id: 4,
      title: "Sports League Management",
      shortDescription: "System for managing teams, leagues, and player statistics.",
      description: "System for managing teams, leagues, and player statistics with real-time updates.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "Database"],
      features: [
        "Team management",
        "Player statistics",
        "League scheduling",
        "Real-time updates",
        "Performance analytics",
      ],
    },
    {
      id: 5,
      title: "Legal Cases Management",
      shortDescription: "Platform for law firms to manage legal cases and documents.",
      description: "Platform for law firms to manage legal cases, documents, and client information efficiently.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["TypeScript", "Node.js", "PostgreSQL"],
      features: [
        "Case management",
        "Document organization",
        "Client information",
        "Calendar integration",
        "Secure access control",
      ],
    },
    {
      id: 6,
      title: "Vision Solve AI",
      shortDescription: "AI EdTech platform offering dynamic video explanations.",
      description: "AI EdTech platform offering dynamic video explanations, currently transitioning into a startup.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["FastAPI", "PostgreSQL", "Docker"],
      features: [
        "Dynamic video explanations",
        "Personalized learning paths",
        "Progress tracking",
        "Content recommendation",
        "Interactive exercises",
      ],
    },
  ]

  const getProjectRow = (index: number) => Math.floor(index / 3) // Assuming 3 columns

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedRow === getProjectRow(index) ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => {
                  const row = getProjectRow(index)
                  setExpandedRow(expandedRow === row ? null : row)
                }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2 tech-text">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedRow === getProjectRow(index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary" className="animate-pulse-slow">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-2">
                            <p className="text-sm text-muted-foreground italic">{project.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedRow === getProjectRow(index) ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
