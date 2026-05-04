// import { motion } from "motion/react";
// import { useInView } from "./hooks/useInView";
// import { Briefcase, GraduationCap, Rocket } from "lucide-react";
// import { aboutTimeline, aboutSection, summary } from "../../site-content";


// export function About() {
//   const { ref, inView } = useInView({ threshold: 0.2 });

//   return (
//     <section ref={ref} className="py-20 px-6 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
//             {aboutSection.heading}
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             {aboutSection.subheading}
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Connection Line */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-cyan-500 to-purple-600 hidden lg:block">
//             <motion.div
//               initial={{ height: 0 }}
//               animate={inView ? { height: "100%" } : {}}
//               transition={{ duration: 2, ease: "easeInOut" }}
//               className="w-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
//             />
//           </div>

//           <div className="space-y-12 lg:space-y-24">
//             {timeline.map((item, index) => {
//               const isEven = index % 2 === 0;
//               const Icon = item.icon;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: isEven ? -50 : 50 }}
//                   animate={inView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.8, delay: index * 0.2 }}
//                   className={`flex items-center gap-8 ${
//                     isEven ? "lg:flex-row" : "lg:flex-row-reverse"
//                   } flex-col`}
//                 >
//                   {/* Content Card */}
//                   <div className="flex-1 lg:text-left text-center">
//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       className={`relative p-6 rounded-xl backdrop-blur-md bg-gradient-to-br ${
//                         isEven
//                           ? "from-purple-900/20 to-cyan-900/20"
//                           : "from-cyan-900/20 to-purple-900/20"
//                       } border border-purple-500/30`}
//                     >
//                       <div className="absolute -inset-0.5 bg-gradient-to-r opacity-30 blur-lg rounded-xl group-hover:opacity-50 transition duration-300 from-purple-600 to-cyan-600"></div>
//                       <div className="relative">
//                         <span className={`text-sm font-mono text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
//                           {item.period}
//                         </span>
//                         <h3 className="text-2xl font-bold text-white mt-2 mb-1">
//                           {item.role}
//                         </h3>
//                         <p className="text-cyan-400 mb-3">{item.company}</p>
//                         <p className="text-gray-400">{item.description}</p>
//                       </div>
//                     </motion.div>
//                   </div>

//                   {/* Center Icon */}
//                   <motion.div
//                     whileHover={{ scale: 1.2, rotate: 360 }}
//                     transition={{ duration: 0.5 }}
//                     className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-purple-500/50 z-10`}
//                   >
//                     <Icon className="w-8 h-8 text-white" />
//                   </motion.div>

//                   {/* Spacer for alignment */}
//                   <div className="flex-1 hidden lg:block" />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* About Text */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="mt-20 max-w-4xl mx-auto text-center"
//         >
//           <div className="p-8 rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30">
//             <p className="text-gray-300 text-lg leading-relaxed">
//               {summary}
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
