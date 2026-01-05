"use client";
import { motion, useReducedMotion } from "framer-motion";
import ShinyText from "@/components/reactBits/ShinyText";
interface MarketingHeroProps {
  titleVariant: any;
  revealUp: any;
}
export default function MarketingHero({ titleVariant, revealUp}: MarketingHeroProps) {
    
  const reduceMotion = useReducedMotion();
    
  // choose motion props per reduced-motion user pref
  const sectionMotionProps = reduceMotion
    ? { initial: 'visible' as const, whileInView: 'visible' as const, viewport: { once: true, amount: 0.02 } }
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true, amount: 0.18 } };
  return (
    <div className="header border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div variants={titleVariant} {...sectionMotionProps}>
            <ShinyText
              text="Marketing Plans & Solutions"
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
            <motion.p variants={revealUp} {...sectionMotionProps} className="text-xl text-muted-foreground max-w-2xl px-0.5">
              Strategic campaigns engineered for measurable, scalable growth.
            </motion.p>
          </motion.div>
        </div>
      </div>
  )
}
