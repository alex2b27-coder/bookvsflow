"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "light" | "dark"
}

const sizes = {
  sm: { icon: 32, text: "text-lg" },
  md: { icon: 40, text: "text-xl" },
  lg: { icon: 48, text: "text-2xl" },
  xl: { icon: 64, text: "text-3xl" },
}

export function Logo({ 
  className, 
  showText = true, 
  size = "md",
  variant = "dark"
}: LogoProps) {
  const sizeConfig = sizes[size]
  
  // Light logo for dark backgrounds, dark logo for light backgrounds
  const logoSrc = variant === "light" 
    ? "/logo-light.png" 
    : "/logo-dark.png"

  const textColor = variant === "light" ? "text-white" : "text-charcoal"

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src={logoSrc}
        alt="BookVSFlow Logo"
        width={sizeConfig.icon}
        height={sizeConfig.icon}
        className="object-contain"
      />
      
      {showText && (
        <span className={cn("font-semibold tracking-tight", sizeConfig.text, textColor)}>
          BookVSFlow
        </span>
      )}
    </div>
  )
}

// Icon-only version for smaller contexts
export function LogoIcon({ 
  className,
  size = 40,
  variant = "dark"
}: { 
  className?: string
  size?: number
  variant?: "light" | "dark"
}) {
  const logoSrc = variant === "light" 
    ? "/logo-light.png" 
    : "/logo-dark.png"

  return (
    <Image
      src={logoSrc}
      alt="BookVSFlow Logo"
      width={size}
      height={size}
      className={cn("object-contain", className)}
    />
  )
}
