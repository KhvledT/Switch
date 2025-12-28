"use client"

import { useI18n } from "./i18n-context"
import Link from "next/link"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter">SWITCH</h3>
            <p className="text-sm text-muted-foreground max-w-xs">{t("footer_desc")}</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest">{t("services")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/websites">{t("websites")}</Link>
              </li>
              <li>
                <Link href="/marketing">{t("marketing")}</Link>
              </li>
              <li>
                <Link href="/ai-automation">{t("ai_automation")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="/contact">{t("contact")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} SWITCH. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
