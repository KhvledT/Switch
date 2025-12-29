"use client"

import FuzzyText from "@/components/reactBits/FuzzyText"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center overflow-hidden">

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20 pt-15">
        <Button
          variant="ghost"
          onClick={() => router.push("/")}
          className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Button>
      </div>

      {/* Content */}
      <div className="text-center leading-none flex flex-col items-center justify-center gap-6">

        {/* 404 */}
        <FuzzyText
          baseIntensity={0.4}
          hoverIntensity={0.7}
          enableHover={true}
          fontSize={210}
        >
          404
        </FuzzyText>

        {/* not found */}
        <FuzzyText
          baseIntensity={0.4}
          hoverIntensity={0.7}
          enableHover={true}
          fontSize={80}
        >
          not found
        </FuzzyText>

      </div>
    </div>
  )
}
