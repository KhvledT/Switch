"use client";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion"

interface CTASectionProps {
  sectionReveal: any;
}

export default function CTASection({ sectionReveal }: CTASectionProps) {
  
  const reduceMotion = useReducedMotion();

  
  const inViewMotion = reduceMotion
    ? { initial: "visible", whileInView: "visible" }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.25 },
      };
  return (
    <section className="py-24 border-y">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto space-y-8"
            variants={sectionReveal}
            {...inViewMotion}
          >
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Ready to automate?
            </h2>
            <p className="text-muted-foreground text-lg">
              AI automation packages start from{" "}
              <span className="text-foreground font-black">$1,999/mo</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-12 font-black uppercase tracking-widest"
              >
                Get a Free Audit
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-12 font-black uppercase tracking-widest bg-transparent"
              >
                View Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
  )
}
