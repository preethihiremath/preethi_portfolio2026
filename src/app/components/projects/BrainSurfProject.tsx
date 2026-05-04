import { motion } from "motion/react";
import { Brain, Zap, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects } from "../../../site-content";

interface Props {
  inView: boolean;
}

const project = projects.find((project) => project.id === "brainsurf");

export function BrainSurfProject({ inView }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const primaryLink = project?.links?.[0];
  const secondaryLink = project?.links?.length && project.links.length > 1 ? project.links[1] : project?.links?.[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative min-h-[500px] h-auto rounded-2xl overflow-hidden"
    >
      {/* Background with Neural Network */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-blue-900/40 backdrop-blur-sm">
        {/* Neural Network Nodes */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {/* Nodes */}
          {[...Array(15)].map((_, i) => {
            const x = (i % 5) * 25 + 10;
            const y = Math.floor(i / 5) * 33 + 15;
            return (
              <motion.circle
                key={i}
                cx={`${x}%`}
                cy={`${y}%`}
                r="3"
                fill="#8b5cf6"
                initial={{ opacity: 0.3 }}
               animate={
  isHovered
    ? { opacity: 1, scaleY: 1 }
    : { opacity: 0, scaleY: 0 }
}
style={{ transformOrigin: "top" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            );
          })}

          {/* Connections */}
          {[...Array(12)].map((_, i) => {
            const x1 = (i % 4) * 25 + 10;
            const y1 = Math.floor(i / 4) * 33 + 15;
            const x2 = ((i + 1) % 5) * 25 + 10;
            const y2 = Math.floor((i + 1) / 5) * 33 + 15;
            return (
              <motion.line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#brainsurf-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  isHovered
                    ? { pathLength: 1, opacity: [0, 0.6, 0] }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            );
          })}

          <defs>
            <linearGradient
              id="brainsurf-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* EEG Wave Animation */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 opacity-50"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 Q25,20 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 T400,50"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isHovered
                ? {
                    pathLength: [0, 1],
                    opacity: [0, 0.8, 0],
                    x: ["0%", "-50%"],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.path
            d="M0,70 Q30,90 60,70 T120,70 T180,70 T240,70 T300,70 T360,70 T420,70"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isHovered
                ? {
                    pathLength: [0, 1],
                    opacity: [0, 0.6, 0],
                    x: ["0%", "-50%"],
                  }
                : {}
            }
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
              delay: 0.3,
            }}
          />
        </svg>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={
          isHovered
            ? {
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                ],
              }
            : {}
        }
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative p-8 flex flex-col gap-6 z-10">
        <div>
          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50"
          >
            <Brain className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="text-3xl font-bold text-white mb-3">
            {project?.title ?? "BrainSurf"}
          </h3>
          <p className="text-cyan-300 text-sm mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            {project?.impact ?? "EEG Signal Processing System"}
          </p>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {project?.bullets?.[0] ??
              "Advanced brain-computer interface leveraging machine learning for real-time EEG signal analysis."}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project?.tags?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.ul
            className="space-y-2 text-sm text-gray-400"
            initial={{ opacity: 0, height: 0 }}
            animate={
              isHovered
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.3 }}
          >
            {project?.bullets?.map((bullet, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                {bullet}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="flex gap-4">
          <motion.a
            href={primaryLink?.href ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            {primaryLink?.label ?? "Primary"}
          </motion.a>
          <motion.a
            href={secondaryLink?.href ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/50 hover:bg-purple-500/10 text-purple-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {secondaryLink?.label ?? "Details"}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
