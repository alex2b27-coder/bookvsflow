"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Connect Your Salon",
    description: "Fill out a simple questionnaire and get your BookVSFlow account set up in minutes.",
  },
  {
    number: "02",
    title: "Configure Services & Staff",
    description: "Add your services, pricing, staff schedules, and business hours to the system.",
  },
  {
    number: "03",
    title: "Share Your Bot Link",
    description: "Get a custom Telegram bot link. Share it with clients on social media, business cards, or QR codes.",
  },
  {
    number: "04",
    title: "Clients Book via Telegram",
    description: "Clients open the bot, browse services, pick a time slot, and confirm — all in Telegram.",
  },
  {
    number: "05",
    title: "Receive Reports & Insights",
    description: "Get daily summaries, track revenue, monitor no-shows, and grow your business with data.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">How It Works</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
            Up and running in 5 simple steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No technical skills required. We guide you through every step of the setup process.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-accent/20" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                <div
                  className={`lg:text-right ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:order-2 lg:text-left"
                  }`}
                >
                  <div className={`${index % 2 === 0 ? "lg:ml-auto" : ""} max-w-md`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center dot for desktop */}
                <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                {/* Empty column for layout */}
                <div className={index % 2 === 0 ? "hidden lg:block" : "hidden lg:block lg:order-1"} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
