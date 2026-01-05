"use client";
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  ctaReveal: any;
}

export default function CTASection({ ctaReveal }: CTASectionProps) {
  const reduceMotion = useReducedMotion();
  
    const inViewMotion = reduceMotion
      ? { initial: "visible", whileInView: "visible" }
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.25 },
        };
  return (
    <section className="py-32 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div variants={ctaReveal} {...inViewMotion}>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-8">
              Let’s build something that lasts.
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              If you’re looking for more than just a website — we should talk.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-16 px-14 font-black uppercase tracking-widest">
                Start a conversation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
  )
}
