"use client";
import { motion, useReducedMotion } from "framer-motion";

interface ServicesSectionProps {
  sectionReveal: any;
  cardLift: any;
}

export default function ServicesSection({ sectionReveal, cardLift }: ServicesSectionProps) {
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
        <div className="container mx-auto px-4">
          <motion.div className="mb-16 max-w-3xl" variants={sectionReveal} {...inViewMotion}>
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">
              What we do
            </h2>
            <p className="text-lg text-muted-foreground">
              SWITCH operates across three tightly integrated verticals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Platforms",
                desc: "High-performance websites, dashboards, and internal systems built with modern stacks.",
              },
              {
                title: "Growth Marketing",
                desc: "Full-funnel marketing systems focused on conversion, not vanity metrics.",
              },
              {
                title: "AI Automation",
                desc: "Custom AI agents and workflows that eliminate manual operations.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardLift}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                whileHover={reduceMotion ? undefined : "hover"}
              >
                <ServiceCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
function ServiceCard({ title, desc }: any) {
  return (
    <div className="border p-8 hover:border-foreground transition">
      <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground">
        {desc}
      </p>
    </div>
  );
}