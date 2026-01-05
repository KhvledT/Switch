"use client";
import ShinyText from "@/components/reactBits/ShinyText"
import { motion, useReducedMotion } from "framer-motion"

interface AIAutomationHeroProps {
  sectionReveal: any;
}

export default function AiAutomationHero({ sectionReveal } : AIAutomationHeroProps) {
  
  const reduceMotion = useReducedMotion();
  
  const heroMotion = reduceMotion
    ? { initial: "visible", animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <section className="border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div variants={sectionReveal} {...heroMotion}>
            <ShinyText
              text="AI Automation"
              className="mb-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
            />
            <p className="text-xl text-muted-foreground max-w-2xl px-0.5">
              Leverage autonomous agents and intelligent workflows to eliminate
              repetitive work and scale efficiently.
            </p>
          </motion.div>
        </div>
      </section>
  )
}
