"use client";
import { motion } from 'framer-motion';
interface ProcessSectionProps {
  revealUp: any;
  staggerContainer: any;
}
export default function ProcessSection({ revealUp, staggerContainer } : ProcessSectionProps) {
  return (
    <motion.section className="py-20 md:py-24 bg-foreground text-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div className="mb-16 max-w-3xl" variants={revealUp}>
            <p className="mb-4 text-xs font-black uppercase tracking-widest text-background/60">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase">
              From idea to impact.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { step: "01", title: "Discover", desc: "Understand goals and users." },
              { step: "02", title: "Design", desc: "Bold UI with clear UX." },
              { step: "03", title: "Build", desc: "Scalable, high-performance code." },
              { step: "04", title: "Launch", desc: "Deploy, test, and optimize." },
            ].map((item, i) => (
              <motion.div key={i} variants={revealUp} transition={{ duration: 0.6 }}>
                <span className="text-sm font-black text-background/60">
                  {item.step}
                </span>
                <h3 className="mt-3 mb-4 text-xl font-black tracking-tighter uppercase">
                  {item.title}
                </h3>
                <p className="text-background/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
  )
}
