import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface LanguageSwitcherProps {
  className?: string
}

/**
 * Placeholder language switcher.
 * Languages will be wired up later — for now this is just the UI shell.
 */
export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={className}
          aria-label="Change language"
        >
          <Globe className="w-4 h-4" />
          <span className="ml-2 text-xs font-medium uppercase tracking-wide">EN</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          More languages coming soon
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
