import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { skillLevels } from "../../site-content";

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2 });

const size = 500; // base size (desktop)
const center = size / 2;
const radius = size * 0.35;
  const angleStep = (2 * Math.PI) / skillLevels.length;

  const points = skillLevels.map((skill, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const valueRadius = (skill.value / 100) * radius;

    return {
      x: center + valueRadius * Math.cos(angle),
      y: center + valueRadius * Math.sin(angle),
      labelX: center + (radius + 25) * Math.cos(angle),
      labelY: center + (radius + 25) * Math.sin(angle),
      name: skill.name,
    };
  });

  const polygonPoints = points.map(p => `${p.x},${p.y}`).join(" ");

  return (
    <section ref={ref} className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        Skills
      </h2>

      <div className="flex justify-center">
        <svg width={size} height={size} className="overflow-visible">

          {/* Grid circles */}
          {[20, 40, 60, 80, 100].map((r) => (
            <circle
              key={r}
              cx={center}
              cy={center}
              r={(r / 100) * radius}
              fill="none"
              stroke="#444"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}

          {/* Axes */}
          {points.map((p, i) => (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={p.labelX}
              y2={p.labelY}
              stroke="#666"
              strokeWidth="1"
              opacity="0.4"
            />
          ))}

          {/* Skill Polygon */}
          <motion.polygon
            points={polygonPoints}
            fill="url(#skillGradient)"
            stroke="#8b5cf6"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 0.7, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          />

          {/* Gradient */}
          <defs>
            <linearGradient id="skillGradient">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* Labels */}
          {points.map((p, i) => (
            <text
              key={i}
              x={p.labelX}
              y={p.labelY}
              textAnchor="middle"
              className="fill-gray-300 text-sm"
            >
              {p.name}
            </text>
          ))}
        </svg>
      </div>
    </section>
  );
}