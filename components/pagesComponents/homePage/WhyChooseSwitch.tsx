"use client";
import { motion } from 'framer-motion';
interface WhyChooseSwitchProps {
  revealUp: any;
  staggerContainer: any;
}
export default function WhyChooseSwitch({ revealUp, staggerContainer } : WhyChooseSwitchProps) {
  return (
    <motion.section className="py-20 md:py-24 border-t border-border"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div className="mb-14 max-w-3xl" variants={revealUp}>
            <p className="mb-4 text-xs font-black uppercase tracking-widest text-muted-foreground">
              Why SWITCH
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Built to perform. Designed to convert.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Performance First", desc: "Optimized for speed, SEO, and real users." },
              { title: "Modern Stack", desc: "Next.js, scalable architecture, clean code." },
              { title: "Business Focused", desc: "Design decisions driven by conversions." },
              { title: "Future Proof", desc: "Built to grow with your business." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="border border-border p-8 transition-all hover:bg-foreground hover:text-background"
                variants={revealUp}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-4 text-xl font-black tracking-tighter uppercase">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-background/70">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
  )
}
