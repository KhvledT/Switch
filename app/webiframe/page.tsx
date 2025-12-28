"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Monitor, ArrowLeft } from "lucide-react"

export default function WebIframePage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const url = searchParams.get("url")
  const decodedUrl = url ? decodeURIComponent(url) : null

  const [loading, setLoading] = useState(true)

  if (!decodedUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <Monitor className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
          <p className="font-bold mb-4">Invalid or missing URL</p>
          <Button variant="outline" onClick={() => router.back()}>
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden px-50 pt-15">
      {/* Top Bar */}
      <header className="h-16 shrink-0 border-b bg-background flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-4 w-4" />
              <p className="text-xs uppercase tracking-widest cursor-pointer font-bold">
                Live Preview
              </p>
            </Button>
          </div>
        </div>
      </header>

      {/* Iframe Area */}
      <main className="flex-1 relative bg-muted overflow-hidden">
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background">
            <div className="flex flex-col items-center text-muted-foreground">
              <Monitor className="h-8 w-8 mb-3 animate-pulse" />
              <p className="text-xs uppercase tracking-widest font-bold">
                Loading Preview
              </p>
            </div>
          </div>
        )}

        <iframe
          src={decodedUrl}
          className="absolute inset-0 w-full h-full border-0"
          onLoad={() => setLoading(false)}
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </main>
    </div>
  )
}
