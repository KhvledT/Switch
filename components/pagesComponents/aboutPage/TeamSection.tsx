"use client";
import { motion, useReducedMotion } from "framer-motion"
import { Users } from "lucide-react";

interface TeamSectionProps {
  textLeft: any;
  textRight: any;
  listItem: any;
}

export default function TeamSection({ textLeft, textRight, listItem }: TeamSectionProps) {
  const reduceMotion = useReducedMotion();
  
    const inViewMotion = reduceMotion
      ? { initial: "visible", whileInView: "visible" }
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.25 },
        };
  return (
    <section className="py-24 border-t bg-muted/10">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div className="space-y-6" variants={textLeft} {...inViewMotion}>
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Built like a team, not an agency
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work closely with founders, operators, and technical teams.
              No layers. No account managers. Just direct execution.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project is treated as a long-term system, not a one-off delivery.
            </p>
          </motion.div>

          <motion.div
            className="border bg-background p-10 space-y-6"
            variants={textRight}
            {...inViewMotion}
          >
            {[
              "Founder-led execution",
              "Direct communication",
              "No outsourcing",
              "Long-term partnerships",
            ].map((text, i) => (
              <motion.div key={i} variants={listItem}>
                <InfoLine icon={<Users className="h-4 w-4" />} text={text} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
  )
}

function InfoLine({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3 text-sm">
      {icon}
      <span className="font-medium">{text}</span>
    </div>
  );
}