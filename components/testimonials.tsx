"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Update the component name to match its purpose
export default function Hackathons() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const hackathons = [
    {
      id: 1,
      name: "Nexathon 2025",
      position: "February 2025",
      content:
        "Developed AI hands-free assistant focusing on accessibility, automation, voice control, navigation, and object recognition.",
      level: "State Level",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Sparkathon 2024",
      position: "October 2024 - Runner-up",
      content:
        "Built AI healthcare app with scheduling, history tracking, and bilingual support. Our team achieved runner-up position.",
      level: "State Level",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Smart India Hackathon 2024",
      position: "September 2024",
      content:
        "Worked on AI job recommendation and skill assessment platform to help match candidates with appropriate positions based on their skills.",
      level: "National Level",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "iTrix 24'",
      position: "April 2024 - Special Mention",
      content:
        "Contributed to sustainability project focused on solar energy solutions. Our project received a Special Mention from the judges.",
      level: "State Level",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "iTrix 25'",
      position: "March 2025 - Won Internship",
      content:
        "Developed Vision Solve AI edtech platform offering dynamic video explanations. Our team won an internship opportunity.",
      level: "State Level",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonials" className="py-20">
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
            Hackathons
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathon Participation</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {hackathons.map((hackathon) => (
                <CarouselItem key={hackathon.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={hackathon.image || "/placeholder.svg"}
                            alt={hackathon.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{hackathon.name}</h4>
                          <p className="text-sm text-muted-foreground">{hackathon.position}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4">"{hackathon.content}"</p>
                      <div className="mt-auto">
                        <Badge variant={hackathon.level === "National Level" ? "default" : "outline"} className="mt-2">
                          {hackathon.level}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
