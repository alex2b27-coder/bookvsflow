import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/brand/logo"
import { LanguageSwitcher } from "@/components/landing/language-switcher"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#industries", label: "Industries" },
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Logo size="sm" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" asChild>
              <a href="/salon-questionnaire">Get Started</a>
            </Button>
            <Button size="sm" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://t.me/bookvsflow" target="_blank" rel="noopener noreferrer">
                @bookvsflow
              </a>
            </Button>
          </div>

          {/* Mobile right cluster */}
          <div className="md:hidden flex items-center gap-1">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border"
            >
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 flex flex-col gap-2">
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href="/salon-questionnaire">Get Started</a>
                  </Button>
                  <Button size="sm" asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href="https://t.me/bookvsflow" target="_blank" rel="noopener noreferrer">
                      @bookvsflow
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
