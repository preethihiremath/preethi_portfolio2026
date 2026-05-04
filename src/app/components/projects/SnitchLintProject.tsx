import { motion } from "motion/react";
import { Shield, AlertTriangle, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects } from "../../../site-content";

interface Props {
  inView: boolean;
}

const project = projects.find((project) => project.id === "snitchlint");

export function SnitchLintProject({ inView }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const primaryLink = project?.links?.[0];
  const secondaryLink = project?.links?.length && project.links.length > 1 ? project.links[1] : project?.links?.[0];

  const codeLines = [
    "const apiKey = process.env.SECRET",
    "function validateInput(data) {",
    "  return sanitize(data);",
    "}",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative min-h-[500px] h-auto rounded-2xl overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-orange-900/40 to-yellow-900/40 backdrop-blur-sm">
        {/* Code Scanner Effect */}
        <div className="absolute inset-0 font-mono text-xs text-green-400/30 p-6 overflow-hidden">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              className="mb-2 relative"
              initial={{ opacity: 0.3 }}
              animate={isHovered ? { opacity: [0.3, 0.7, 0.3] } : { opacity: 0.3 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {line}
              {i === 0 && (
                <motion.span
                  className="absolute right-0 top-0 text-red-400 text-xs"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isHovered
                      ? { opacity: [0, 1, 1, 0], scale: [0, 1.2, 1, 0] }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                >
                  ⚠ DETECTED
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Scanning Line */}
        <motion.div
          className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-lg shadow-red-500/50"
          initial={{ top: 0 }}
          animate={isHovered ? { top: ["0%", "100%"] } : { top: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Alert Icons */}
        {isHovered &&
          [...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1.5, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </motion.div>
          ))}

        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern
              id="snitchlint-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(239, 68, 68, 0.3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#snitchlint-grid)" />
        </svg>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={
          isHovered
            ? {
                background: [
                  "radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 70% 60%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.2) 0%, transparent 50%)",
                ],
              }
            : {}
        }
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between z-10">
        <div>
          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-red-500/50"
          >
            <Shield className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="text-3xl font-bold text-white mb-3">
            {project?.title ?? "SnitchLint"}
          </h3>
          <p className="text-orange-300 text-sm mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            {project?.impact ?? "Security Static Analysis Tool"}
          </p>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {project?.bullets?.[0] ??
              "Intelligent linter that detects security vulnerabilities and code smells before they reach production."}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project?.tags?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-300 border border-red-500/30"
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
                <span className="text-orange-400 mt-1">▸</span>
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
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            {primaryLink?.label ?? "GitHub"}
          </motion.a>
          <motion.a
            href={secondaryLink?.href ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500/50 hover:bg-red-500/10 text-red-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {secondaryLink?.label ?? "Documentation"}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
