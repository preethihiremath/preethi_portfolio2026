import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { BrainSurfProject } from "./projects/BrainSurfProject";
import { SnitchLintProject } from "./projects/SnitchLintProject";
import { TranslatorProject } from "./projects/TranslatorProject";
import { TraceProject } from "./projects/TraceProject";
import { projectSection } from "../../site-content";

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            {projectSection.heading}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {projectSection.subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <BrainSurfProject inView={inView} />
          <SnitchLintProject inView={inView} />
          <TranslatorProject inView={inView} />
          <TraceProject inView={inView} />
        </div>
      </div>
    </section>
  );
}
