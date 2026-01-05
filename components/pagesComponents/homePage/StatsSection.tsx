"use client";
import CountUp from '@/components/reactBits/CountUp';
import { motion } from 'framer-motion';
interface StatsSectionProps {
  stats: { number: number; suffix: string; label: string }[];
  revealUp: any;
  staggerContainer: any;
}
export default function StatsSection({ stats, revealUp, staggerContainer } : StatsSectionProps) {
  return (
    <motion.section className="py-20 md:py-24 border-t border-border"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center" variants={staggerContainer}>
            {stats.map((item, i) => (
              <motion.div key={i} variants={revealUp} transition={{ duration: 0.7 }}>
                <h3 className="text-4xl md:text-5xl font-black">
                  <CountUp
                    from={0}
                    to={item.number}
                    duration={1.5}
                    startWhen={true}
                    className="count-up-text inline-block"
                  />
                  <span>{item.suffix}</span>
                </h3>

                <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
  )
}
