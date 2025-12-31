import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { I18nProvider } from "@/components/i18n-context"
import { ThemeProvider } from "next-themes"
import { Footer } from "@/components/footer"
import { Suspense } from "react" // added Suspense import
import Navbar from "@/components/navbar"
import Sidebar from "@/components/pagesComponents/layoutPage/sidebar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })




export const metadata: Metadata = {
  title: "SWITCH | Modern Digital Services",
  description: "Marketing, Websites, and AI Automation",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider>
            <Navbar />
            <Sidebar/>
            <main className="flex-grow">
              <Suspense fallback={null}>{children}</Suspense>
            </main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
