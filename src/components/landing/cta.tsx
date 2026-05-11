"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LogoIcon } from "@/components/brand/logo"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-primary rounded-xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden"
        >
          {/* Large decorative logo */}
          <div className="absolute top-1/2 right-8 -translate-y-1/2 w-48 h-48 lg:w-64 lg:h-64 opacity-10 pointer-events-none">
            <LogoIcon className="w-full h-full" variant="light" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground text-balance">
              Ready to automate your salon?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Fill out the salon onboarding form and get instant trial access. Start accepting bookings via Telegram today.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                asChild 
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8"
              >
                <Link href="/salon-questionnaire">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8"
              >
                <Link href="https://t.me/bookvsflow" target="_blank" rel="noopener noreferrer">
                  Try Demo Bot
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/50">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
