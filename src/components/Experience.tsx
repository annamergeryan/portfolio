import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const experiences = [
  { id: 1, role: "Product designer | Graphic designer", company: "NCM technology", period: "2025–present" },
  { id: 2, role: "UI/UX Designer", company: "Haysell", period: "2025–2026" },
  { id: 3, role: "Product Designer", company: "Persona business academy, Skillbook", period: "2022–2026" },
  { id: 4, role: "UI/UX Designer", company: "Sootrock LLC", period: "2024–2025" },
  { id: 5, role: "UI/UX Designer", company: "Domus", period: "2023–2024" },
  { id: 6, role: "Graphic Designer", company: "Gama Marketing Agency", period: "2021–2022" },
  { id: 7, role: "Graphic Designer", company: "Champions Football School", period: "2020–2021" },
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="w-full py-[60px] md:py-36 bg-transparent text-zinc-900 dark:text-zinc-50 transition-colors duration-700 relative z-10">
      <div className="max-w-4xl mx-auto px-6" ref={containerRef}>
        
        <div className="mb-16 md:mb-20 flex items-center justify-between">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent pb-2">Experience</h2>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber-500 dark:text-amber-400 font-bold hidden md:block">Career</span>
        </div>

        <div className="relative">
          {/* Animated Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-white/10">
            <motion.div 
              className="w-full bg-amber-400 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-20">
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id}
                className="relative pl-10 md:pl-20 group cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-cursor-text="VIEW"
              >
                {/* Node */}
                <div className="absolute left-[-4px] top-3 w-[9px] h-[9px] rounded-full bg-white dark:bg-black border border-zinc-300 dark:border-white/20 group-hover:border-amber-400 group-hover:bg-amber-400 transition-colors duration-300 z-10" />

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8 border-b border-zinc-200 dark:border-white/10 pb-10 group-hover:border-amber-400/50 transition-colors duration-500">
                  <div className="flex flex-col">
                    <h3 className="text-2xl md:text-4xl font-display font-bold tracking-tight group-hover:translate-x-3 transition-transform duration-500 ease-out">
                      {exp.company}
                    </h3>
                    <p className="text-zinc-500 dark:text-gray-400 mt-2 font-mono text-sm tracking-tight group-hover:translate-x-3 transition-transform duration-500 delay-75 ease-out">
                      {exp.role}
                    </p>
                  </div>
                  <div className="font-mono text-xs tracking-[0.2em] text-zinc-400 dark:text-gray-500 uppercase mt-2 md:mt-0 opacity-60">
                    {exp.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
