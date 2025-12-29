"use client"

import CurvedLoop from "@/components/reactBits/CurvedLoop"

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 bg-background overflow-hidden">

      {/* ================= Curved Loop Background ================= */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-40 mx-auto">
        <CurvedLoop
          marqueeText="Welcome to Switch ✦"
          curveAmount={600}
        />

        <CurvedLoop
          marqueeText="Be ✦ Creative ✦ With ✦ Switch ✦"
          speed={1}
          curveAmount={700}
          direction="right"
        />

        <CurvedLoop
          marqueeText="Smooth Curved Animation ✦"
          speed={1}
          curveAmount={500}
        />
      </div>

      {/* ================= Foreground Content ================= */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 text-center">

          {/* Logo / Name */}
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase">
            SWITCH
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base uppercase tracking-widest text-muted-foreground">
            Preparing your experience
          </p>

          {/* Loader */}
          <div className="flex gap-2 mt-2">
            <span className="h-2 w-2 bg-foreground animate-pulse" />
            <span className="h-2 w-2 bg-foreground animate-pulse delay-150" />
            <span className="h-2 w-2 bg-foreground animate-pulse delay-300" />
          </div>

        </div>
      </div>

    </div>
  )
}
