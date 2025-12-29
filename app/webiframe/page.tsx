"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Monitor,
  Tablet,
  Smartphone,
  ArrowLeft,
  Menu,
  Info,
} from "lucide-react"

type Device = "desktop" | "tablet" | "mobile"

export default function WebIframePage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const url = searchParams.get("url")
  const decodedUrl = url ? decodeURIComponent(url) : null

  const [device, setDevice] = useState<Device>("desktop")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!decodedUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Button onClick={() => router.back()}>Go Back</Button>
      </div>
    )
  }

  /* ================= Preview Style ================= */
  const previewStyle = () => {
  if (device === "desktop") {
    return {
      width: "100%",
      maxWidth: "1400px",
      borderRadius: "0px",
      height: "100%",
    }
  }

  if (device === "tablet") {
    return {
      width: "900px",
      maxWidth: "90%",
      borderRadius: "16px",
      height: "95%",
    }
  }

  // mobile
  return {
    width: "420px",
    maxWidth: "100%",
    borderRadius: "28px",
    height: "85%",
  }
}


  return (
    <div className="h-screen flex bg-muted pt-15 overflow-hidden relative">
      {/* ================= Sidebar (Desktop) ================= */}
      <aside className="hidden lg:flex w-1/4 border-r bg-background p-6 flex-col gap-10">
        <Sidebar
          device={device}
          setDevice={setDevice}
        />
      </aside>

      {/* ================= Tablet Toggle ================= */}
      <div className="hidden md:flex lg:hidden absolute top-20 right-4 z-50">
        <Button size="icon" variant="outline" onClick={() => setSidebarOpen(true)}>
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* ================= Tablet Sidebar Overlay ================= */}
      <div
        className={`
          fixed inset-0 z-40 md:flex lg:hidden
          transition-opacity duration-300
          ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          bg-black/40
        `}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className={`
            flex flex-col gap-8 left-0 top-0 h-full w-80 bg-background p-6
            transform transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => setSidebarOpen(false)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Close
          </Button>

          <Sidebar
            device={device}
            setDevice={setDevice}
          />
        </div>
      </div>

      {/* ================= Preview Area ================= */}
      <main className="flex-1 flex items-center justify-center bg-muted p-6">
        <div
          style={previewStyle()}
          className="
            relative
            bg-background
            border
            shadow-2xl
            transition-all
            duration-300
            overflow-hidden
            flex
            flex-col
          "
        >

          {/* Header */}
          <div className="h-12 border-b flex items-center justify-between px-4 bg-background shrink-0">
            <span className="text-xs font-bold uppercase tracking-widest">
              Live Preview
            </span>

            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>

          <iframe
            src={decodedUrl}
            className="w-full flex-1 border-0"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        </div>
      </main>
    </div>
  )
}

/* ================= Sidebar ================= */

function Sidebar({
  device,
  setDevice,
}: {
  device: Device
  setDevice: (d: Device) => void
}) {
  return (
    <>
      <Section title="Device Preview">
        <Row>
          <DeviceButton active={device === "desktop"} onClick={() => setDevice("desktop")}>
            <Monitor className="h-4 w-4" />
          </DeviceButton>
          <DeviceButton active={device === "tablet"} onClick={() => setDevice("tablet")}>
            <Tablet className="h-4 w-4" />
          </DeviceButton>
          <DeviceButton active={device === "mobile"} onClick={() => setDevice("mobile")}>
            <Smartphone className="h-4 w-4" />
          </DeviceButton>
        </Row>
      </Section>
    
      <Section title="Project Info">
        <InfoRow label="Type" value="E-Commerce Website" />
        <InfoRow label="Industry" value="Retail & Lifestyle" />
        <InfoRow label="Target" value="Online Customers" />
        <InfoRow label="Goal" value="Increase Conversions" />
        <InfoRow label="Stack" value="Next.js / Tailwind / APIs" />
      </Section>

      <Button className="mt-auto h-14 font-black uppercase tracking-widest">
        Build Similar Website
      </Button>
    </>
  )
}

/* ================= UI Helpers ================= */

function Section({ title, children }: any) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      {children}
    </div>
  )
}

function Row({ children }: any) {
  return <div className="flex gap-2">{children}</div>
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Info className="h-4 w-4 text-muted-foreground" />
      <span className="font-bold">{label}:</span>
      <span className="text-muted-foreground">{value}</span>
    </div>
  )
}

function DeviceButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`h-10 w-10 flex items-center justify-center border transition
        ${active ? "bg-foreground text-background" : "hover:border-foreground"}
      `}
    >
      {children}
    </button>
  )
}
