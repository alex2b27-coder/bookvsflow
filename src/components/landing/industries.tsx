"use client"

import { motion } from "framer-motion"
import { Scissors, Sparkles, Calendar, Settings } from "lucide-react"

const industries = [
  {
    title: "Beauty Salons",
    description: "Full-service hair salons with multiple stylists and services.",
    Icon: Sparkles,
  },
  {
    title: "Barbershops",
    description: "Classic and modern barbershops of any size.",
    Icon: Scissors,
  },
  {
    title: "Nail Studios",
    description: "Manicure, pedicure, and nail art professionals.",
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 3c.5 0 1 .2 1.4.6l.6.6c.3.3.7.5 1.1.5h.9c.6 0 1.1.2 1.5.6.4.4.6.9.6 1.5v.9c0 .4.2.8.5 1.1l.6.6c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-.6.6c-.3.3-.5.7-.5 1.1v.9c0 .6-.2 1.1-.6 1.5-.4.4-.9.6-1.5.6h-.9c-.4 0-.8.2-1.1.5l-.6.6c-.4.4-.9.6-1.4.6s-1-.2-1.4-.6l-.6-.6c-.3-.3-.7-.5-1.1-.5h-.9c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5v-.9c0-.4-.2-.8-.5-1.1l-.6-.6c-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4l.6-.6c.3-.3.5-.7.5-1.1v-.9c0-.6.2-1.1.6-1.5.4-.4.9-.6 1.5-.6h.9c.4 0 .8-.2 1.1-.5l.6-.6c.4-.4.9-.6 1.4-.6z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    title: "Lash & Brow Studios",
    description: "Eyelash extensions, brow shaping, and microblading.",
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <ellipse cx="12" cy="12" rx="8" ry="5"/>
        <circle cx="12" cy="12" r="3"/>
        <circle cx="12" cy="12" r="1"/>
      </svg>
    ),
  },
  {
    title: "Massage Studios",
    description: "Massage therapists and wellness practitioners.",
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 3c.5 0 1 .2 1.4.6l.6.6c.3.3.7.5 1.1.5h.9c.6 0 1.1.2 1.5.6.4.4.6.9.6 1.5v.9c0 .4.2.8.5 1.1l.6.6c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-.6.6c-.3.3-.5.7-.5 1.1v.9c0 .6-.2 1.1-.6 1.5-.4.4-.9.6-1.5.6h-.9c-.4 0-.8.2-1.1.5l-.6.6c-.4.4-.9.6-1.4.6s-1-.2-1.4-.6l-.6-.6c-.3-.3-.7-.5-1.1-.5h-.9c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5v-.9c0-.4-.2-.8-.5-1.1l-.6-.6c-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4l.6-.6c.3-.3.5-.7.5-1.1v-.9c0-.6.2-1.1.6-1.5.4-.4.9-.6 1.5-.6h.9c.4 0 .8-.2 1.1-.5l.6-.6c.4-.4.9-.6 1.4-.6z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    title: "Solo Professionals",
    description: "Independent beauty professionals working from home or rented spaces.",
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="8" r="4"/>
        <path d="M20 21a8 8 0 10-16 0"/>
      </svg>
    ),
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Industries</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
            Built for beauty businesses of all sizes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you&apos;re a solo professional or manage a team, BookVSFlow scales with you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-lg p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-full border border-accent/50 flex items-center justify-center mb-4 mx-auto group-hover:border-accent transition-colors text-accent">
                <industry.Icon />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{industry.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Scissors className="w-5 h-5 text-accent" />
            <span className="text-sm">500+ Active Salons</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="text-sm">50,000+ Bookings Monthly</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-accent" />
            <span className="text-sm">Tailored Solutions</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
