"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, GraduationCap, Sparkles } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl"></div>
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
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeIn} className="relative">
            <div className="absolute -left-4 -top-4 w-16 h-16 border-t-2 border-l-2 border-primary/30"></div>
            <h3 className="text-2xl font-bold mb-4 tech-text">A Passionate Developer</h3>
            <p className="text-muted-foreground mb-6">
              I'm a software engineer specializing in Python, full-stack development, Machine Learning, and AI. With
              experience in building web, mobile, and AI-based applications, I bring a versatile skill set to every
              project.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in software development began during my studies at Anna University, where I discovered my
              passion for solving complex problems through code. I'm skilled in UI/UX design, data-driven solutions,
              data structures, algorithms, and AI/ML models, with a focus on problem-solving and optimization.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, or
              sharing my knowledge through community forums and events.
            </p>
            <div className="absolute -right-4 -bottom-4 w-16 h-16 border-b-2 border-r-2 border-accent/30"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
              className="hover-lift"
            >
              <Card className="tech-border overflow-hidden bg-gradient-to-br from-background to-muted/50 border border-primary/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full animate-pulse-slow">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 flex items-center">
                        Education
                        <Sparkles className="h-4 w-4 ml-2 text-yellow-400" />
                      </h4>
                      <p className="text-muted-foreground">
                        B. Tech in Information Technology, 2023-2027
                        <br />
                        College of Engineering Guindy, Anna University
                        <br />
                        Current CGPA: 8.9
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
              className="hover-lift"
            >
              <Card className="tech-border overflow-hidden bg-gradient-to-br from-background to-muted/50 border border-primary/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full animate-pulse-slow">
                      <Code className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Technical Participation</h4>
                      <p className="text-muted-foreground">
                        Senior Coordinator – ACM CEG CP Wing
                        <br />
                        Junior Head - AUSEC
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
              className="hover-lift"
            >
              <Card className="tech-border overflow-hidden bg-gradient-to-br from-background to-muted/50 border border-primary/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full animate-pulse-slow">
                      <Lightbulb className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Contact</h4>
                      <p className="text-muted-foreground">
                        Mobile: 9384799275
                        <br />
                        Email: rohit.selvakumaran@gmail.com<br />
                        
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
