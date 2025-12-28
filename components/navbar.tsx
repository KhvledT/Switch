"use client"

import Link from "next/link"
import { useI18n } from "./i18n-context"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Languages } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function Navbar() {
  const { lang, setLang, t } = useI18n()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          SWITCH
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            {t("home")}
          </Link>
          <Link href="/websites" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            {t("websites")}
          </Link>
          <Link href="/marketing" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            {t("marketing")}
          </Link>
          <Link href="/ai-automation" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            {t("ai_automation")}
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            {t("contact")}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setLang(lang === "en" ? "ar" : "en")} className="w-9 px-0">
            <Languages className="h-4 w-4" />
            <span className="sr-only">Toggle Language</span>
          </Button>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 px-0"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">Toggle Theme</span>
            </Button>
          )}

          <Link href="/contact" className="hidden sm:block">
            <Button size="sm" className="font-bold">
              {t("contact")}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
