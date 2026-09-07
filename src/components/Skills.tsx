import { motion } from 'motion/react';
import { useRef } from 'react';

const skills = [
  "Figma", 
  "Claude",
  "Illustrator",
  "Photoshop",
  "Firefly",
  "Google AI studio", 
  "Stitch",
  "XD", 
  "Corel Draw"
];

const reversedSkills = [...skills].reverse();

export default function Skills() {
  const containerRef = useRef(null);

  return (
    <section className="w-full py-[60px] md:py-36 bg-transparent text-white overflow-hidden relative z-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-20 text-center">
        <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent pb-2">
          Toolset & Skills
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-6">
        
        {/* Row 1 - scrolling right to left */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            className="flex gap-4 md:gap-8 px-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div 
                key={`r1-${index}`}
                className="px-8 py-4 md:px-12 md:py-6 rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-sm text-2xl md:text-5xl font-display font-light text-zinc-800 dark:text-zinc-300 whitespace-nowrap hover:bg-black/10 dark:hover:bg-white/10 hover:text-zinc-950 dark:hover:text-white transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - scrolling left to right */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            className="flex gap-4 md:gap-8 px-4 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear",
              },
            }}
          >
            {[...reversedSkills, ...reversedSkills].map((skill, index) => (
              <div 
                key={`r2-${index}`}
                className="px-8 py-4 md:px-12 md:py-6 rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-sm text-2xl md:text-5xl font-display font-light text-zinc-800 dark:text-zinc-300 whitespace-nowrap hover:bg-black/10 dark:hover:bg-white/10 hover:text-zinc-950 dark:hover:text-white transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
