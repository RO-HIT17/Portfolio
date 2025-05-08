"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Phone, Code, Cpu } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Software Engineer"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"></div>

        {/* Tech-themed decorative elements */}
        <div className="absolute top-20 right-20 opacity-10 animate-rotate">
          <Code size={80} className="text-primary" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10 animate-float">
          <Cpu size={60} className="text-accent" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-16 h-16 border-t-2 border-l-2 border-primary opacity-60"></div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="tech-text">Rohit</span>
              </h1>
              <div className="absolute -right-4 -bottom-4 w-16 h-16 border-b-2 border-r-2 border-accent opacity-60"></div>
            </div>

            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              <span className="text-foreground">{text}</span>
              <span className="animate-blink">|</span>
            </h2>

            <motion.p className="text-lg text-muted-foreground mb-8 max-w-lg" variants={itemVariants}>
              Versatile Software Engineer specializing in Python, full-stack development, Machine Learning, and AI.
              Experienced in building web, mobile, and AI-based applications.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button size="lg" className="group relative overflow-hidden" onClick={() => scrollToSection("projects")}>
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group hover-lift"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div className="flex gap-4 mt-8" variants={itemVariants}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                asChild
              >
                <a href="https://github.com/RO-HIT17" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                asChild
              >
                <a href="https://www.linkedin.com/in/rohit-selvakumaran/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                asChild
              >
                <a href="mailto:rohit.selvakumaran@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                asChild
              >
                <a href="tel:+919384799275">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute inset-4 bg-muted rounded-full overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Rohit Selvakumaran"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full"></div>
            <div className="absolute -inset-2 border border-accent/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute -inset-4 border border-secondary/10 rounded-full animate-rotate"></div>

            {/* Tech-themed decorative elements around the profile */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary/20 p-2 rounded-full animate-float">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-accent/20 p-2 rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Cpu className="h-6 w-6 text-accent" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce p-2 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-colors"
        >
          <ArrowRight className="h-6 w-6 transform rotate-90 text-primary" />
        </button>
      </motion.div>
    </section>
  )
}
