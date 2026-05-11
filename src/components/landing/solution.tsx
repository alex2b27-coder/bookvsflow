"use client"

import { motion } from "framer-motion"
import { Bot, Sparkles, Zap } from "lucide-react"

export function Solution() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">The Solution</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
              Telegram-first automation for modern salons
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              BookVSFlow transforms your salon management with a Telegram bot that works 24/7. Your clients book, 
              reschedule, and get reminders — all within the app they already use every day.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Bot,
                  title: "Always Available",
                  description: "Your booking assistant never sleeps. Clients can book anytime, anywhere.",
                },
                {
                  icon: Sparkles,
                  title: "Zero Learning Curve",
                  description: "No apps to download. No websites to navigate. Just Telegram.",
                },
                {
                  icon: Zap,
                  title: "Instant Setup",
                  description: "Connect your salon in minutes. Start accepting bookings the same day.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-accent/50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-xl border border-border shadow-xl p-6">
              {/* Telegram Chat Mock */}
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">B</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">BookVSFlow Bot</div>
                    <div className="text-xs text-muted-foreground">online</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Bot message */}
                  <div className="flex gap-2">
                    <div className="bg-card rounded-lg rounded-tl-sm p-3 max-w-[80%] shadow-sm border border-border">
                      <p className="text-sm text-foreground">{"Welcome to Bella's Beauty Studio!"}</p>
                      <p className="text-sm text-foreground mt-2">What would you like to do?</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium">
                      Book Appointment
                    </button>
                    <button className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
                      View Services
                    </button>
                    <button className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
                      My Bookings
                    </button>
                  </div>

                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-lg rounded-tr-sm p-3 max-w-[80%]">
                      <p className="text-sm">Book Appointment</p>
                    </div>
                  </div>

                  {/* Bot response */}
                  <div className="flex gap-2">
                    <div className="bg-card rounded-lg rounded-tl-sm p-3 max-w-[80%] shadow-sm border border-border">
                      <p className="text-sm text-foreground">Perfect! Please select a service:</p>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                          <span className="text-sm text-foreground">Haircut</span>
                          <span className="text-xs text-accent">45 min - $35</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                          <span className="text-sm text-foreground">Color & Style</span>
                          <span className="text-xs text-accent">2h - $120</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                          <span className="text-sm text-foreground">Manicure</span>
                          <span className="text-xs text-accent">30 min - $25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
