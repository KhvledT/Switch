"use client";
import { motion, useReducedMotion } from "framer-motion"

interface WhoWeAreSectionProps {
  textLeft: any;
  textRight: any;
}

export default function WhoWeAreSection({ textLeft, textRight }: WhoWeAreSectionProps) {
  const reduceMotion = useReducedMotion();
  
    const inViewMotion = reduceMotion
      ? { initial: "visible", whileInView: "visible" }
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.25 },
        };
  return (
    <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div className="space-y-6" variants={textLeft} {...inViewMotion}>
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Who we are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a small, high-impact team of engineers, designers, and strategists
              obsessed with performance, clarity, and automation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach is simple: remove complexity, automate what can be automated,
              and design systems that scale without breaking.
            </p>
          </motion.div>

          <motion.div
            className="border bg-background p-10 space-y-6"
            variants={textRight}
            {...inViewMotion}
          >
            <Stat label="Founded" value="2024" />
            <Stat label="Core Focus" value="Web • Marketing • AI" />
            <Stat label="Projects Delivered" value="40+" />
            <Stat label="Operating Mode" value="Remote / Global" />
          </motion.div>

        </div>
      </section>
  )
}
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <span className="font-black">{value}</span>
    </div>
  );
}