'use client';

import { Button } from "@/components/ui/button";
import { Bot, Megaphone, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { motion, Variants, useReducedMotion, Transition } from "framer-motion";

export default function AskAI() {
  const [query, setQuery] = useState("");

  const quickStarts = [
    "I want more Instagram customers",
    "I want to sell more online",
    "I need automated ads",
    "I want a full marketing strategy",
  ];

  // Motion helpers (TS-safe)
  const ease: number[] = [0.22, 1, 0.36, 1];
  const shortTrans: Transition = { duration: 0.26 };
  const medTrans: Transition = { duration: 0.52 };

  const reduceMotion = useReducedMotion();

  const containerStagger: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.04 },
    },
  };
  
  const directionCard: Variants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    hover: {
      y: -8,
    },
  };

  const headerVariant: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: medTrans },
  };

  const inputVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { ...shortTrans } },
    focus: { scale: 1.003, transition: { duration: 0.08 } },
  };

  const chipVariant: Variants = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0, transition: { ...shortTrans } },
    tap: { scale: 0.98, transition: { duration: 0.08 } },
  };

  const assistantVariant: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: medTrans },
  };

  // choose section motion props according to reduced-motion preference
  const sectionMotionProps = reduceMotion
    ? { initial: "visible" as const, whileInView: "visible" as const, viewport: { once: true, amount: 0.02 } }
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, amount: 0.15 } };

  return (
    <>
      {/* ================= Direction Selector ================= */}
      <section className="py-20 border-b">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div className="mb-12 max-w-2xl" variants={headerVariant} {...sectionMotionProps}>
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
              Getting Started
            </p>
            <h2 className="text-4xl font-black tracking-tighter uppercase">Choose your direction</h2>
            <p className="mt-4 text-muted-foreground">
              This helps us understand your goal before creating a personalized strategy.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={reduceMotion ? {} : containerStagger}
            {...sectionMotionProps}
          >
            {[
              { title: "Get more leads", icon: Users },
              { title: "Increase sales", icon: TrendingUp },
              { title: "Build brand awareness", icon: Megaphone },
              { title: "Automate marketing", icon: Bot },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.title}
                  onClick={() => {
                    setQuery(item.title);
                    // keep the same scroll behaviour
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                    }
                  }}
                  className="group border p-8 text-left transition-all hover:bg-foreground hover:text-background"
                  variants={reduceMotion ? undefined : directionCard}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}

                  aria-label={item.title}
                >
                  <Icon className="h-10 w-10 mb-6 opacity-60 group-hover:opacity-100" />
                  <h3 className="text-xl font-black tracking-tighter uppercase">{item.title}</h3>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= AI Assistant ================= */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div className="border bg-background p-10" variants={assistantVariant} {...sectionMotionProps}>
            {/* Header */}
            <motion.div className="mb-10" variants={assistantVariant} {...sectionMotionProps}>
              <p className="mb-2 text-xs font-black uppercase tracking-widest text-muted-foreground">AI Assistant</p>
              <h2 className="text-4xl font-black tracking-tighter uppercase">Describe your objective</h2>
            </motion.div>

            {/* Input + Button */}
            <motion.div className="flex flex-col sm:flex-row gap-4 mb-10" variants={containerStagger} {...sectionMotionProps}>
              <motion.input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. I own a café and want more Instagram customers"
                className="flex-1 border bg-background px-5 py-4 text-lg outline-none focus:border-foreground"
                variants={inputVariant}
                // small focus micro-interaction (only if motion allowed)
                whileFocus={reduceMotion ? undefined : "focus"}
                aria-label="AI objective input"
              />

              <motion.div variants={chipVariant} className="flex-shrink-0">
                <Button
                  size="lg"
                  className="h-14 px-8 font-black uppercase tracking-widest"
                  disabled={!query.trim()}
                  // slight press feedback
                >
                  Ask AI
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick Starts */}
            <motion.div className="mb-12" variants={assistantVariant} {...sectionMotionProps}>
              <p className="mb-3 text-xs font-black uppercase tracking-widest text-muted-foreground">Quick starts</p>
              <motion.div className="flex flex-wrap gap-3" variants={reduceMotion ? {} : containerStagger}>
                {quickStarts.map((s) => (
                  <motion.button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="border px-4 py-2 text-sm font-bold uppercase hover:bg-foreground hover:text-background transition-all"
                    variants={reduceMotion ? {} : chipVariant}
                    whileTap={reduceMotion ? undefined : "tap"}
                  >
                    {s}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* Divider */}
            <div className="border-t my-10" />

            {/* AI Recommendation */}
            <motion.div className="text-center" variants={assistantVariant} {...sectionMotionProps}>
              <motion.h3 className="text-2xl font-black tracking-tighter uppercase mb-4" variants={headerVariant}>
                AI Recommendation
              </motion.h3>

              <motion.p className="text-muted-foreground max-w-md mx-auto" variants={headerVariant}>
                Your personalized marketing recommendation will appear here once we analyze your objective.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
