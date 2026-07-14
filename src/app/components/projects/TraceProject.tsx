import { motion } from "motion/react";
import { Search, Zap, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects } from "../../../site-content";

interface Props {
  inView: boolean;
}

const project = projects.find((project) => project.id === "trace");

export function TraceProject({ inView }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const primaryLink = project?.links?.[0];
  const secondaryLink = project?.links?.length && project.links.length > 1 ? project?.links?.[1] : project?.links?.[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative min-h-[500px] h-auto rounded-2xl overflow-hidden"
    >
      {/* Background with Document/Query Flow */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-cyan-900/40 to-blue-900/40 backdrop-blur-sm">
        {/* Document nodes retrieved by a query */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {[...Array(9)].map((_, i) => {
            const x = (i % 3) * 30 + 20;
            const y = Math.floor(i / 3) * 30 + 20;
            return (
              <motion.rect
                key={i}
                x={`${x}%`}
                y={`${y}%`}
                width="18"
                height="22"
                rx="2"
                fill="#14b8a6"
                initial={{ opacity: 0.25 }}
                animate={
                  isHovered
                    ? { opacity: [0.25, 0.9, 0.25] }
                    : { opacity: 0.25 }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: i * 0.12,
                }}
              />
            );
          })}

          {/* Query -> retrieved-doc connectors, converging toward the center */}
          {[...Array(6)].map((_, i) => {
            const x1 = 50;
            const y1 = 50;
            const x2 = (i % 3) * 30 + 26;
            const y2 = Math.floor(i / 3) * 30 + 28;
            return (
              <motion.line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#trace-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  isHovered
                    ? { pathLength: 1, opacity: [0, 0.6, 0] }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            );
          })}

          <defs>
            <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={
          isHovered
            ? {
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
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
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/50"
          >
            <Search className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="text-3xl font-bold text-white mb-3">
            {project?.title ?? "TRACE"}
          </h3>
          <p className="text-cyan-300 text-sm mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            {project?.impact ?? "RAG-Based Production Support Assistant"}
          </p>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {project?.bullets?.[0] ??
              "Retrieval-augmented assistant answering production-support questions from documentation and source code, with two-stage retrieval and confidentiality-aware ingestion."}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project?.tags?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30"
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
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white transition-colors"
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
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-teal-500/50 hover:bg-teal-500/10 text-teal-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {secondaryLink?.label ?? "Details"}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}