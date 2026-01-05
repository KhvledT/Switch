"use client";
import { motion } from 'framer-motion';
interface TechStackSecionProps {
  revealUp: any;
  staggerContainer: any;
}
export default function TechStackSecion({ revealUp, staggerContainer } : TechStackSecionProps) {
  return (
    <motion.section className="py-20 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div className="mb-14 max-w-3xl" variants={revealUp}>
            <p className="mb-4 text-xs font-black uppercase tracking-widest text-muted-foreground">
              Technology
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Built with modern tools.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {["Next.js", "React", "Node.js", "Laravel", "SQL"].map((tech, i) => (
              <motion.div key={i} className="border border-border p-4 text-center font-bold uppercase" variants={revealUp} transition={{ duration: 0.6 }}>
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
  )
}
