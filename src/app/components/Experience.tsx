import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Building2, TrendingUp } from "lucide-react";
import { experienceSection } from "../../site-content";

export function Experience() {
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
            {experienceSection.heading}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {experienceSection.subheading}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-cyan-500 to-purple-600 hidden md:block">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            />
          </div>

          <div className="space-y-12">
            {experienceSection.experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-4 border-gray-900 hidden md:block z-10"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(139, 92, 246, 0.7)",
                        "0 0 0 10px rgba(139, 92, 246, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full"
                  />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`relative p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 hover:border-cyan-500/50 transition-all duration-300 group`}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-30 blur-lg rounded-xl transition duration-300 from-purple-600 to-cyan-600"></div>

                  <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center`}
                          >
                            <Building2 className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              {exp.role}
                            </h3>
                            <p className="text-cyan-400 text-sm flex items-center gap-2">
                              {exp.company}
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400">
                                {exp.location}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-purple-400 font-mono mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2 + i * 0.1,
                          }}
                          className="flex items-start gap-3 text-sm text-gray-400"
                        >
                          <TrendingUp className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
