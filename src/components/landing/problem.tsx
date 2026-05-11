"use client"

import { motion } from "framer-motion"
import { Clock, CalendarX, Users, AlertTriangle, DollarSign, Headphones } from "lucide-react"

const problems = [
  {
    icon: CalendarX,
    title: "Missed Bookings",
    description: "Clients call when you're busy. Messages get lost. Appointments fall through the cracks.",
  },
  {
    icon: Clock,
    title: "Manual Scheduling",
    description: "Hours spent managing calendars, confirming appointments, and juggling staff schedules.",
  },
  {
    icon: Users,
    title: "Double Bookings",
    description: "Without a centralized system, overlapping appointments create chaos and unhappy clients.",
  },
  {
    icon: AlertTriangle,
    title: "Admin Overload",
    description: "Reminder calls, payment tracking, client notes — it never ends.",
  },
  {
    icon: DollarSign,
    title: "Lost Revenue",
    description: "No-shows, last-minute cancellations, and inefficient scheduling cost you money every day.",
  },
  {
    icon: Headphones,
    title: "24/7 Availability",
    description: "Clients want to book anytime, but you can't answer calls at midnight.",
  },
]

export function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">The Problem</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground text-balance">
            Running a salon shouldn&apos;t feel like this
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70">
            Beauty professionals spend more time managing their business than doing what they love.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-primary-foreground/5 rounded-lg p-6 border border-primary-foreground/10 hover:border-accent/30 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-accent/50 flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">{problem.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
