"use client"

import { useState } from "react"
import { Globe, Search, Check, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useI18n } from "../../i18n-context"
import { motion } from "framer-motion"

interface DomainSectionProps {
  revealUp: any
}

export default function DomainSection({ revealUp }: DomainSectionProps) {
  const [domain, setDomain] = useState("")
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { t } = useI18n()

  const handleSearch = async () => {
    if (!domain) return
    setLoading(true)
    setError("")
    setResult(null)

    if (!domain.includes(".")) {
      setError("Please enter a valid domain (e.g. brand.com)")
      setLoading(false)
      return
    }

    try {
      const res = await fetch(`/api/domain-check?domain=${domain}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Request failed")
      setResult(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealUp}
      transition={{ duration: 0.7 }}
      className="py-32 border-y bg-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">
              Domain Intelligence
            </p>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-6">
              Your brand starts with the right domain.
            </h2>

            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              Before you build a website, launch ads, or invest in branding —
              make sure your domain name is available and secure.
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 mt-1" />
                <span>
                  Avoid legal conflicts and brand confusion
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 mt-1" />
                <span>
                  Secure your name before competitors do
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 mt-1" />
                <span>
                  Make your business easier to find online
                </span>
              </li>
            </ul>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div>
            <div className="border bg-background shadow-2xl p-10">

              {/* Card Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">
                  Check domain availability
                </h3>
                <p className="text-sm text-muted-foreground">
                  Instant lookup. No signup required.
                </p>
              </div>

              {/* Input */}
              <div className="relative mb-6">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="yourbrand.com"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="h-16 pl-12 pr-28 text-lg rounded-none"
                />

                <Button
                  onClick={handleSearch}
                  disabled={loading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-12 px-6 font-black uppercase tracking-widest"
                >
                  {loading ? "…" : <Search className="h-4 w-4" />}
                </Button>
              </div>

              {/* Result */}
              <div className="min-h-[52px]">
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                {result && (
                  <div className="flex items-center gap-3 text-sm">
                    {result.available ? (
                      <>
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-green-600 font-mono">
                          {result.domain} is available
                        </span>
                      </>
                    ) : (
                      <>
                        <X className="h-4 w-4 text-red-500" />
                        <span className="text-muted-foreground font-mono line-through">
                          {result.domain}
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="mt-10 border-t pt-6 text-xs text-muted-foreground">
                Powered by real-time RDAP lookup
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  )
}
