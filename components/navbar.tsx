"use client"

import Link from "next/link"
import { useI18n } from "./i18n-context"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Languages, Check } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const { t } = useI18n()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  /* ================= Language Select ================= */
  const [langOpen, setLangOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState("en")
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => setMounted(true), [])

  // close language menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" },
    { code: "fr", label: "French" },
    { code: "de", label: "German" },
  ]

  const links = [
    { name: t("Home") ?? "Home", href: "/" },
    { name: t("Websites") ?? "Websites", href: "/websites" },
    { name: t("Marketing") ?? "Marketing", href: "/marketing" },
    { name: t("AI Automation") ?? "AI Automation", href: "/ai-automation" },
    { name: t("About Us") ?? "About Us", href: "/aboutus" },
    { name: t("Contact") ?? "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          SWITCH
        </Link>

        {/* Center Links */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors
                  ${isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"}
                `}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* ================= Language Select ================= */}
          <div className="relative" ref={langRef}>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8"
              onClick={() => setLangOpen((v) => !v)}
            >
              <Languages className="h-4 w-4" />
            </Button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-44 border bg-background shadow-xl z-50"
                >
                  <div className="flex flex-col py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang.code)
                          setLangOpen(false)
                        }}
                        className={`
                          flex items-center justify-between px-4 py-2 text-sm
                          hover:bg-muted transition
                        `}
                      >
                        <span>{lang.label}</span>
                        {selectedLang === lang.code && (
                          <Check className="h-4 w-4" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}
