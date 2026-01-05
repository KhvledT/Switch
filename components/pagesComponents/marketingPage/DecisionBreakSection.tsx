"use client";
import { motion, useReducedMotion } from "framer-motion";
interface DecisionBreakSectionProps {
  revealUp: any;
}

export default function DecisionBreakSection({ revealUp }: DecisionBreakSectionProps) {
    
  const reduceMotion = useReducedMotion();
    
  // choose motion props per reduced-motion user pref
  const sectionMotionProps = reduceMotion
    ? { initial: 'visible' as const, whileInView: 'visible' as const, viewport: { once: true, amount: 0.02 } }
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true, amount: 0.18 } };

  return (
    <div className="decision-break py-16 border-b bg-muted/10">
        <div className="container mx-auto px-4 text-center">
          <motion.p variants={revealUp} {...sectionMotionProps} className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Not sure a package fits your business?
          </motion.p>
        </div>
      </div>
  )
}
