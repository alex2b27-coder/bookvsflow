"use client"

import { motion } from "framer-motion"
import { 
  Calendar, 
  Clock, 
  Bell, 
  Users, 
  CreditCard, 
  BarChart3, 
  Shield 
} from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "24/7 Online Booking",
    description: "Your clients can book appointments anytime, even when you're asleep. No missed opportunities.",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "Intelligent calendar management that prevents conflicts and optimizes your workday.",
  },
  {
    icon: Bell,
    title: "Automatic Reminders",
    description: "Reduce no-shows by 80%. Clients get timely reminders before their appointments.",
  },
  {
    icon: Users,
    title: "CRM System",
    description: "Keep track of client history, preferences, and notes. Build lasting relationships.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Accept deposits and full payments. Reduce cancellations with prepayment options.",
  },
  {
    icon: BarChart3,
    title: "Daily Reports",
    description: "Get financial summaries and insights delivered to you every day. Know your numbers.",
  },
  {
    icon: Shield,
    title: "Anti Double-Booking",
    description: "Never worry about overlapping appointments again. Our system prevents conflicts automatically.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Features</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
            Everything your salon needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete automation toolkit designed specifically for beauty businesses.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-card rounded-lg p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-accent/50 flex items-center justify-center mb-4 group-hover:border-accent transition-colors">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
