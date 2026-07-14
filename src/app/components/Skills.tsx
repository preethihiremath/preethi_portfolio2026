import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { skillLevels } from "../../site-content";

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const size = 600;
  const center = size / 2;
  const minOrbit = size * 0.14;
  const maxOrbit = size * 0.42;
  const angleStep = (2 * Math.PI) / skillLevels.length;

  const nodes = skillLevels.map((skill, i) => {
    const angle = i * angleStep - Math.PI / 2;
    // higher value => smaller orbit (closer to core = more mastery)
    const orbit = maxOrbit - (skill.value / 100) * (maxOrbit - minOrbit);
    const nodeSize = 8 + (skill.value / 100) * 16;

    return {
      x: center + orbit * Math.cos(angle),
      y: center + orbit * Math.sin(angle),
      labelX: center + (orbit + nodeSize + 14) * Math.cos(angle),
      labelY: center + (orbit + nodeSize + 14) * Math.sin(angle),
      anchor: Math.cos(angle) > 0.15 ? "start" : Math.cos(angle) < -0.15 ? "end" : "middle",
      name: skill.name,
      value: skill.value,
      nodeSize,
      delay: i * 0.04,
    };
  });

  return (
    <section ref={ref} className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        Skills
      </h2>
      <p className="text-sm text-gray-400 mb-12">
        Closer to the core = deeper mastery
      </p>

      <div className="flex justify-center">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible max-w-full h-auto">
          <defs>
            <radialGradient id="coreGlow">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* Orbit rings */}
          {[minOrbit, (minOrbit + maxOrbit) / 2, maxOrbit].map((r, i) => (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={r}
              fill="none"
              stroke="#666"
              strokeWidth="1"
              strokeDasharray="2 6"
              opacity="0.25"
            />
          ))}

          {/* Core */}
          <circle cx={center} cy={center} r={70} fill="url(#coreGlow)" />
          <motion.circle
            cx={center}
            cy={center}
            r={6}
            fill="#a78bfa"
            initial={{ scale: 0 }}
            animate={inView ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          {/* Connector lines, pulse opacity by mastery */}
          {nodes.map((n, i) => (
            <motion.line
              key={`line-${i}`}
              x1={center}
              y1={center}
              x2={n.x}
              y2={n.y}
              stroke="#8b5cf6"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={
                inView
                  ? { opacity: [0.1, (n.value / 100) * 0.5, 0.1] }
                  : { opacity: 0 }
              }
              transition={{ duration: 3, repeat: Infinity, delay: n.delay }}
            />
          ))}

          {/* Skill nodes */}
          {nodes.map((n, i) => (
            <motion.g
              key={`node-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: n.delay }}
              className="cursor-pointer"
              whileHover={{ scale: 1.4 }}
            >
              <circle cx={n.x} cy={n.y} r={n.nodeSize} fill="url(#nodeGradient)" opacity="0.9" />
              <circle cx={n.x} cy={n.y} r={n.nodeSize} fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.4" />
            </motion.g>
          ))}

          {/* Labels */}
          {nodes.map((n, i) => (
            <text
              key={`label-${i}`}
              x={n.labelX}
              y={n.labelY}
              textAnchor={n.anchor as "start" | "end" | "middle"}
              dominantBaseline="middle"
              className="fill-gray-300 text-xs font-medium"
            >
              {n.name}
              <tspan className="fill-cyan-400" dx="4" fontSize="10">
                {n.value}%
              </tspan>
            </text>
          ))}
        </svg>
      </div>
    </section>
  );
}