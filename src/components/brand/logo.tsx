import { cn } from "@/lib/utils"
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
      <img
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
    <img
      src={logoSrc}
      alt="BookVSFlow Logo"
      width={size}
      height={size}
      className={cn("object-contain", className)}
    />
  )
}

/**
 * DecorativeLogo
 * Auto-picks the logo variant and tunes opacity/blend mode so the mark
 * stays legible against any section background — without per-page tweaking.
 *
 * `surface` describes the background the logo sits on:
 *   - "light"   → app background / cream surfaces (use dark logo)
 *   - "dark"    → primary / charcoal surfaces (use light logo)
 *   - "accent"  → gold/brand accent surfaces (use dark logo, blended)
 *   - "auto"    → infer from `prefers-color-scheme`
 *
 * `intensity` controls how present the decoration feels:
 *   - "subtle"   → faint watermark (still visible, never invisible)
 *   - "medium"   → clearly visible accent
 *   - "strong"   → near-foreground emphasis
 */
type Surface = "light" | "dark" | "accent" | "auto"
type Intensity = "subtle" | "medium" | "strong"

const SURFACE_VARIANT: Record<Exclude<Surface, "auto">, "light" | "dark"> = {
  light: "dark",
  dark: "light",
  accent: "dark",
}

// Minimum opacities chosen to keep the mark readable on each surface.
// Dark/accent surfaces need a higher floor because the logo's mid-tones
// otherwise wash out into the background.
const OPACITY: Record<Exclude<Surface, "auto">, Record<Intensity, string>> = {
  light:  { subtle: "opacity-15", medium: "opacity-30", strong: "opacity-60" },
  dark:   { subtle: "opacity-25", medium: "opacity-50", strong: "opacity-80" },
  accent: { subtle: "opacity-30", medium: "opacity-55", strong: "opacity-85" },
}

// Blend modes boost contrast where a flat opacity would muddy the artwork.
const BLEND: Record<Exclude<Surface, "auto">, string> = {
  light:  "mix-blend-multiply",
  dark:   "mix-blend-screen",
  accent: "mix-blend-overlay",
}

export function DecorativeLogo({
  className,
  size,
  surface = "auto",
  intensity = "subtle",
}: {
  className?: string
  size?: number
  surface?: Surface
  intensity?: Intensity
}) {
  const resolved: Exclude<Surface, "auto"> =
    surface === "auto"
      ? typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : surface

  return (
    <LogoIcon
      variant={SURFACE_VARIANT[resolved]}
      size={size}
      className={cn(OPACITY[resolved][intensity], BLEND[resolved], className)}
    />
  )
}

