"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { FLAG_ICONS } from "@/components/flag-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const LOCALE_LABELS: Record<string, string> = {
  en: "English",
  cs: "Čeština",
  de: "Deutsch",
  ro: "Română",
}

export function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const CurrentFlag = FLAG_ICONS[locale]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Change language"
        className="flex items-center gap-1.5 text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary focus:outline-none"
      >
        <CurrentFlag className="h-3.5 w-5 flex-shrink-0 rounded-[2px] object-cover ring-1 ring-white/15" />
        {locale.toUpperCase()}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((loc) => {
          const Flag = FLAG_ICONS[loc]
          return (
            <DropdownMenuItem
              key={loc}
              disabled={loc === locale}
              onSelect={() => router.replace(pathname, { locale: loc })}
              className="gap-2"
            >
              <Flag className="h-3.5 w-5 flex-shrink-0 rounded-[2px] object-cover ring-1 ring-white/15" />
              {LOCALE_LABELS[loc]}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
