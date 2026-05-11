"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LogoIcon } from "@/components/brand/logo"
import { ArrowRight, Scissors, Sparkles, Calendar, Clock, Settings } from "lucide-react"

const industries = [
  { icon: Scissors, label: "Barbershops\n& Hair Salons" },
  { icon: Sparkles, label: "Beauty &\nMakeup" },
  { icon: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 3c.5 0 1 .2 1.4.6l.6.6c.3.3.7.5 1.1.5h.9c.6 0 1.1.2 1.5.6.4.4.6.9.6 1.5v.9c0 .4.2.8.5 1.1l.6.6c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-.6.6c-.3.3-.5.7-.5 1.1v.9c0 .6-.2 1.1-.6 1.5-.4.4-.9.6-1.5.6h-.9c-.4 0-.8.2-1.1.5l-.6.6c-.4.4-.9.6-1.4.6s-1-.2-1.4-.6l-.6-.6c-.3-.3-.7-.5-1.1-.5h-.9c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5v-.9c0-.4-.2-.8-.5-1.1l-.6-.6c-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4l.6-.6c.3-.3.5-.7.5-1.1v-.9c0-.6.2-1.1.6-1.5.4-.4.9-.6 1.5-.6h.9c.4 0 .8-.2 1.1-.5l.6-.6c.4-.4.9-.6 1.4-.6z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ), label: "Massage &\nWellness" },
  { icon: Calendar, label: "Online Booking\n24/7" },
  { icon: Settings, label: "Tailored\nSettings" },
]

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-[0.04]">
          <LogoIcon className="w-full h-full" variant="dark" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo and Brand */}
            <div className="flex items-center gap-4 mb-10">
              <LogoIcon className="w-16 h-16 sm:w-20 sm:h-20" />
              <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">BookVSFlow</span>
            </div>

            {/* Tagline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-foreground mb-2">
              <span className="text-accent font-medium">All-in-one booking solution</span>
            </h1>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-10 text-balance">
              for any type of service business
            </p>

            {/* Industries Icons */}
            <div className="flex flex-wrap items-start gap-6 sm:gap-8 mb-10 pb-10 border-b border-border">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="flex flex-col items-center text-center w-[72px] sm:w-[80px]"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-accent/40 flex items-center justify-center mb-2 text-accent">
                    <industry.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-pre-line leading-tight">{industry.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Bottom tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl sm:text-2xl text-foreground mb-10"
            >
              More bookings. Fewer no-shows. <span className="text-accent font-medium">Smarter business.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base">
                <Link href="/salon-questionnaire">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-accent text-accent hover:bg-accent/10 h-12 px-8 text-base">
                <Link href="https://t.me/bookvsflow" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
