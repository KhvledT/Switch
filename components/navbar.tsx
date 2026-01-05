"use client";

import Link from "next/link";
import { useI18n } from "./i18n-context";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Languages } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const links = [
    { name: t("Home") ?? "Home", href: "/" },
    { name: t("Websites") ?? "Websites", href: "/websites" },
    { name: t("Marketing") ?? "Marketing", href: "/marketing" },
    { name: t("AI Automation") ?? "AI Automation", href: "/ai-automation" },
    { name: t("About Us") ?? "About Us", href: "/aboutus" },
    { name: t("Contact") ?? "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          SWITCH
        </Link>

        {/* Center Links - Desktop Only */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors
                  ${isActive
                    ? "text-black dark:text-white"
                    : "text-muted-foreground hover:text-black dark:hover:text-white"}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 h-16">

          {/* Language */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="w-8 h-8 p-0 flex items-center justify-center text-black dark:text-white"
          >
            <Languages className="h-4 w-4" />
          </Button>

          {/* Theme toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 p-0 flex items-center justify-center text-black dark:text-white"
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
  );
}
