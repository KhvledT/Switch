"use client";
import ShinyText from "@/components/reactBits/ShinyText"
import { motion, useReducedMotion } from "framer-motion"

interface HeroSectionProps {
    sectionReveal: any;
}

export default function ContactHero({ sectionReveal }: HeroSectionProps) {
  
  const reduceMotion = useReducedMotion();
  

  const motionProps = reduceMotion
    ? { initial: "visible" as const, whileInView: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2 },
      };
  return (
    <section className="border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div variants={sectionReveal} {...motionProps}>
            <ShinyText
              text="Contact Us"
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
              Start the switch. Reach out to our team to discuss your next digital evolution.
            </p>
          </motion.div>
        </div>
      </section>
  )
}
