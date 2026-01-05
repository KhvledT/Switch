"use client";
import CountUp from "@/components/reactBits/CountUp";
import { motion, useReducedMotion } from "framer-motion"

interface ResultsSectionProps {
  fadeScale: any;
  stagger: any;
  stats: { number: number; suffix: string; label: string }[];
}

export default function ResultsSection({ fadeScale, stagger, stats } : ResultsSectionProps) {
  
  const reduceMotion = useReducedMotion();
  
  const inViewMotion = reduceMotion
    ? { initial: "visible", whileInView: "visible" }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.25 },
      };
  return (
    <section className="py-20 md:py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
            variants={stagger}
            {...inViewMotion}
          >
            {stats.map((item, i) => (
              <motion.div key={i} variants={fadeScale}>
                <h3 className="text-4xl md:text-5xl font-black">
                  <CountUp from={0} to={item.number} duration={1.5} startWhen />
                  <span>{item.suffix}</span>
                </h3>
                <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}
