"use client"

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8 text-center">

        {/* Logo / Name */}
        <div className="text-4xl sm:text-5xl font-black tracking-tighter uppercase">
          SWITCH
        </div>

        {/* Loader */}
        <div className="flex gap-2">
          <span className="h-2 w-2 bg-foreground animate-pulse" />
          <span className="h-2 w-2 bg-foreground animate-pulse delay-150" />
          <span className="h-2 w-2 bg-foreground animate-pulse delay-300" />
        </div>

        {/* Text */}
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Preparing your experience
        </p>

      </div>
    </div>
  )
}
