"use client";
import ShinyText from "@/components/reactBits/ShinyText";
import { motion, useReducedMotion } from "framer-motion";
interface HeroSectionProps {
  revealUp: any;
}
export default function HeroSection({revealUp }: HeroSectionProps) {
    const shouldReduceMotion = useReducedMotion();
    // helper: choose motion props based on reduced motion
  const animateProps = shouldReduceMotion
    ? { initial: 'visible', whileInView: 'visible', viewport: { once: true, amount: 0.01 } }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.12 } };
  return (
    <div className="hero border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div variants={revealUp} {...animateProps}>
            <ShinyText
              text="Websites & Templates"
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
              Explore real-world projects built for clients, or unlock reusable website templates you can own and use
              without limits.
            </p>
          </motion.div>
        </div>
      </div>
  )
}
