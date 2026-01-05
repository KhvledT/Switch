"use client";
import { Bot, Globe, ShieldCheck, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface PhilosophySectionProps {
  sectionReveal: any;
  listItem: any;
}

export default function PhilosophySection({ sectionReveal, listItem }: PhilosophySectionProps) {
  const reduceMotion = useReducedMotion();
  
    const inViewMotion = reduceMotion
      ? { initial: "visible", whileInView: "visible" }
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.25 },
        };
  return (
    <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-16"
            variants={sectionReveal}
            {...inViewMotion}
          >
            Our philosophy
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Zap className="h-6 w-6" />, title: "Speed matters", desc: "Fast execution beats perfect planning." },
              { icon: <Bot className="h-6 w-6" />, title: "Automate everything", desc: "If a human repeats it, a machine should do it." },
              { icon: <Globe className="h-6 w-6" />, title: "Build for scale", desc: "Every system should grow without friction." },
              { icon: <ShieldCheck className="h-6 w-6" />, title: "Security first", desc: "Trust is built through strong foundations." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={listItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Principle {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  )
}
function Principle({ icon, title, desc }: any) {
  return (
    <div className="space-y-4">
      <div className="h-12 w-12 flex items-center justify-center border border-background/30">
        {icon}
      </div>
      <h3 className="text-xl font-black uppercase tracking-tighter">
        {title}
      </h3>
      <p className="text-background/60">
        {desc}
      </p>
    </div>
  );
}