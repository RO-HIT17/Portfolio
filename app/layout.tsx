import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Add a more tech-focused font
import { Space_Grotesk } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

// Update the metadata
export const metadata: Metadata = {
  title: "Rohit Selvakumaran | Software Engineer",
  description:
    "Portfolio of Rohit Selvakumaran - Software Engineer specializing in Python, full-stack development, Machine Learning, and AI",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Update the body class to use the new font */}
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
