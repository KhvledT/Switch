"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GlareHover from "@/components/reactBits/GlareHover";
interface FeaturedOffersSectionProps {
  titleVariant: any;
    revealUp: any;
    containerStagger: any;
    planCard: any;
    badge: any;
    ctaWrap: any;
    featureItem: any;
    plans?: {
      title: string;
      desc: string;
        features: string[];
        popular?: boolean;
    }[];

}
export default function FeaturedOffersSection({plans, titleVariant, revealUp, containerStagger, planCard, badge, ctaWrap, featureItem}: FeaturedOffersSectionProps) {
    
  const reduceMotion = useReducedMotion();
    
  // choose motion props per reduced-motion user pref
  const sectionMotionProps = reduceMotion
    ? { initial: 'visible' as const, whileInView: 'visible' as const, viewport: { once: true, amount: 0.02 } }
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true, amount: 0.18 } };
  return (
    <div className="featured-offers py-24 border-b">
        <div className="container mx-auto px-4">
          <motion.div variants={revealUp} {...sectionMotionProps} className="mb-12">
            <motion.h2 variants={titleVariant} className="text-4xl font-black tracking-tighter uppercase mb-2">
              Featured solutions
            </motion.h2>
            <motion.p variants={revealUp} {...sectionMotionProps} className="text-muted-foreground max-w-xl">
              Proven marketing systems trusted by growing brands.
            </motion.p>
          </motion.div>

          {/* Plans Grid: container stagger */}
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            variants={reduceMotion ? {} : containerStagger}
            {...sectionMotionProps}
          >
            {plans?.map((plan, i) => (
              <GlareHover
                key={plan.title + i}
                glareOpacity={0.4}
                transitionDuration={950}
                className={`relative flex flex-col border transition-colors ${plan.popular ? "bg-muted/10 border-foreground/50 shadow-xl" : "bg-background"}`}
              >
                <motion.div
                variants={reduceMotion ? {} : planCard}
                whileHover={reduceMotion ? undefined : "hover"}
                aria-label={`${plan.title} plan`}
                className="relative flex flex-col p-8 h-full"
              >
                {plan.popular && (
                  <motion.div variants={badge} initial="hidden" animate="visible" className="absolute -top-3 left-8 bg-foreground text-background px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                    Most Requested
                  </motion.div>
                )}

                <motion.div variants={revealUp} {...sectionMotionProps} className="mb-8">
                  <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                </motion.div>

                <motion.div className="flex-grow space-y-4 mb-8" variants={reduceMotion ? {} : {}} {...sectionMotionProps}>
                  <motion.p variants={revealUp} className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    What’s included
                  </motion.p>

                  <motion.ul className="space-y-2" variants={reduceMotion ? {} : { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}>
                    {plan.features.map((feature, idx) => (
                      <motion.li key={feature} variants={reduceMotion ? {} : featureItem} className="flex items-start gap-2 text-sm">
                        <motion.span className="flex-shrink-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 * idx }}>
                          <Check className="h-4 w-4 mt-0.5" />
                        </motion.span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                <motion.div variants={ctaWrap} whileHover={reduceMotion ? undefined : "hover"} {...sectionMotionProps}>
                  <Link href="/contact" aria-label={`Select ${plan.title}`}>
                    <motion.div whileTap={{ scale: 0.98 }} className="w-full">
                      <Button className="w-full font-black uppercase h-12">
                        Select Solution
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
              </GlareHover>
            ))}
          </motion.div>
        </div>
      </div>
  )
}
