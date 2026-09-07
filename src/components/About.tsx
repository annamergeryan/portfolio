import { motion } from 'motion/react';
import { useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';
import aboutImage from '../assets/images/anna_about.jpeg';

const FloatingCard = ({ title, delay, xOffset, yOffset }: { title: string, delay: number, xOffset: string, yOffset: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      animate={{
        y: [0, -10, 0],
      }}
      className={`absolute ${xOffset} ${yOffset} px-6 py-3 rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl dark:shadow-2xl z-20`}
    >
      <span className="font-mono text-sm tracking-widest uppercase font-semibold text-zinc-800 dark:text-zinc-200">
        {title}
      </span>
    </motion.div>
  );
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="relative w-full py-32 md:py-48 px-6 overflow-hidden bg-transparent text-zinc-900 dark:text-zinc-50 transition-colors duration-700 z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        
        {/* Visual / Image Side */}
        <div className="relative w-full lg:w-1/2 aspect-square md:aspect-[4/3] lg:aspect-square flex justify-center items-center" ref={containerRef}>
          <motion.div 
            style={{ y }}
            className="relative w-full max-w-sm h-full max-h-[500px]"
          >
            {/* Main Image Container */}
            <div className="w-full h-full rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative z-10 border border-black/10 dark:border-white/10 shadow-2xl group">
              <img 
                src={aboutImage} 
                alt="Anna Mergeryan - Product Designer" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Tags */}
            <FloatingCard title="User-Centered" delay={0.2} xOffset="-left-4 md:-left-12" yOffset="top-12 md:top-24" />
            <FloatingCard title="Creative Thinking" delay={0.4} xOffset="-right-4 md:-right-16" yOffset="top-1/2 -translate-y-1/2" />
            <FloatingCard title="Attention to Detail" delay={0.6} xOffset="left-8 md:left-4" yOffset="-bottom-6 md:-bottom-8" />
            
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-8">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 dark:text-amber-400 font-bold">About Me</span>
          </div>

          <div className="overflow-hidden mb-6">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
              Hi, I'm Anna.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
              I'm a Product and Graphic Designer who turns complex ideas into intuitive digital experiences and distinctive visual identities.
            </p>
            <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
              My work combines user-centered thinking with strong visual design — from researching and structuring complex digital experiences to crafting polished interfaces, branding, and visual systems.
            </p>

            <div className="pt-4">
              <a href="#experience" data-cursor-text="EXPLORE" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-zinc-900 dark:text-white group relative pb-2 overflow-hidden">
                <span>View Experience</span>
                <motion.div 
                  className="w-full h-px bg-zinc-900 dark:bg-white absolute bottom-0 left-0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
