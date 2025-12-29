"use client"

import Link from "next/link"
import { useI18n } from "./i18n-context"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Languages, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function Navbar() {
  const { lang, setLang, t } = useI18n()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => setMounted(true), [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileOpen])

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          SWITCH
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/">{t("home")}</NavLink>
          <NavLink href="/websites">{t("websites")}</NavLink>
          <NavLink href="/marketing">{t("marketing")}</NavLink>
          <NavLink href="/ai-automation">{t("ai_automation")}</NavLink>
          <NavLink href="/contact">{t("contact")}</NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="w-9 px-0"
          >
            <Languages className="h-4 w-4" />
          </Button>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 px-0"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden w-9 px-0"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          ref={menuRef}
          className="border-t bg-background px-6 py-6 flex flex-col gap-6"
        >
          <MobileLink href="/" onClick={() => setMobileOpen(false)}>
            {t("home")}
          </MobileLink>
          <MobileLink href="/websites" onClick={() => setMobileOpen(false)}>
            {t("websites")}
          </MobileLink>
          <MobileLink href="/marketing" onClick={() => setMobileOpen(false)}>
            {t("marketing")}
          </MobileLink>
          <MobileLink href="/ai-automation" onClick={() => setMobileOpen(false)}>
            {t("ai_automation")}
          </MobileLink>
          <MobileLink href="/contact" onClick={() => setMobileOpen(false)}>
            {t("contact")}
          </MobileLink>
        </div>
      </div>
    </nav>
  )
}

/* ================= Helpers ================= */

function NavLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="text-sm font-medium transition-colors hover:text-muted-foreground"
    >
      {children}
    </Link>
  )
}

function MobileLink({ href, children, onClick }: any) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-lg font-black uppercase tracking-widest"
    >
      {children}
    </Link>
  )
}
