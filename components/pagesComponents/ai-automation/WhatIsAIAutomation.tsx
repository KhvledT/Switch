"use client";
import { Cpu } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

interface WhatIsAIAutomationProps {
  fadeScale: any;
  listItem: any;
  stagger: any;
}

export default function WhatIsAIAutomation({ fadeScale, listItem, stagger } : WhatIsAIAutomationProps) {
  
  const reduceMotion = useReducedMotion();

  const inViewMotion = reduceMotion
    ? { initial: "visible", whileInView: "visible" }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.25 },
      };
  return (
    <section className="py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="aspect-square bg-foreground text-background p-12 flex flex-col justify-center"
              variants={fadeScale}
              {...inViewMotion}
            >
              <Cpu className="h-16 w-16 mb-8" />
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">
                Intelligence by Design.
              </h2>
              <p className="text-lg opacity-60 leading-relaxed">
                AI Automation replaces manual processes with systems that learn,
                adapt, and execute business logic faster and more accurately
                than humans.
              </p>
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={stagger}
              {...inViewMotion}
            >
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                The Advantage
              </p>

              <h3 className="text-3xl font-black tracking-tighter uppercase">
                Why switch to autonomous systems?
              </h3>

              <div className="space-y-6">
                {[
                  "Reduce operational costs by up to 60%",
                  "Eliminate human error in workflows",
                  "Free your team for strategic work",
                  "Scale without hiring more staff",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    variants={listItem}
                  >
                    <div className="h-2 w-2 bg-foreground" />
                    <p className="text-lg font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
