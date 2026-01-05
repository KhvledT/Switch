"use client";
import { motion, useReducedMotion } from "framer-motion";
import WebsiteCard from "./websiteCard";
interface ClientsProjectsSectionProps {
  revealLeft: any;
    pageStagger: any;
    cardItem: any;
    projects: {
      title: string;
        desc: string;
        url: string;
        image: string;
    }[];
}
export default function ClientsProjectsSection({ revealLeft, pageStagger, cardItem, projects } : ClientsProjectsSectionProps) {
  const shouldReduceMotion = useReducedMotion();
    // helper: choose motion props based on reduced motion
  const animateProps = shouldReduceMotion
    ? { initial: 'visible', whileInView: 'visible', viewport: { once: true, amount: 0.01 } }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.12 } };


    return (
    <div className="client-projects py-24">
        <div className="container mx-auto px-4">
          <motion.div className="mb-14 max-w-2xl" variants={revealLeft} {...animateProps}>
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
              Client Projects
            </p>
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Real websites. Real businesses.
            </h2>
            <p className="mt-4 text-muted-foreground">
              These projects are showcased for demonstration purposes and reflect real production-ready builds.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 gap-14 md:grid-cols-2" variants={pageStagger} {...animateProps}>
            {projects.map((project, i) => (
              <div key={project.title + i} className="project-item rounded-lg">
                <WebsiteCard project={project} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
  )
}
