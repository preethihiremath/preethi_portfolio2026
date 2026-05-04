import { motion } from "motion/react";
import { Languages, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects } from "../../../site-content";

interface Props {
  inView: boolean;
}

const project = projects.find((p) => p.id === "translator");

export function TranslatorProject({ inView }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const link = project?.links?.[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative min-h-[500px] rounded-2xl overflow-hidden"
    >
      {/* Background: flowing text effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40">
        
        {/* Floating text animation */}
        <motion.div
          className="absolute inset-0 opacity-20 text-sm text-white whitespace-nowrap"
          animate={isHovered ? { x: ["0%", "-50%"] } : {}}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {"hello bonjour hola namaste hallo ".repeat(20)}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative p-8 flex flex-col gap-6 z-10">
        <motion.div
          animate={isHovered ? { scale: 1.1, rotate: -5 } : {}}
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-600 flex items-center justify-center shadow-lg"
        >
          <Languages className="w-8 h-8 text-white" />
        </motion.div>

        <h3 className="text-3xl font-bold text-white">
          {project?.title}
        </h3>

        <p className="text-pink-300 text-sm">
          {project?.impact}
        </p>

        <p className="text-gray-300">
          {project?.bullets?.[0]}
        </p>

        <div className="flex flex-wrap gap-2">
          {project?.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand bullets */}
        <motion.ul
          className="space-y-2 text-sm text-gray-400"
          animate={
            isHovered
              ? { opacity: 1, scaleY: 1 }
              : { opacity: 0, scaleY: 0 }
          }
          style={{ transformOrigin: "top" }}
        >
          {project?.bullets?.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-pink-400">▸</span>
              {b}
            </li>
          ))}
        </motion.ul>

        <div className="flex gap-4 mt-auto">
          <a
            href={link?.href}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700"
          >
            <Github className="w-4 h-4" />
            {link?.label}
          </a>

          <a
            href={link?.href}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-pink-500/50"
          >
            <ExternalLink className="w-4 h-4" />
            Details
          </a>
        </div>
      </div>
    </motion.div>
  );
}