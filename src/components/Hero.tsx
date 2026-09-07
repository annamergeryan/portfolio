import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowDown, Sparkles, Briefcase } from 'lucide-react';

import adamHandImg from '../assets/images/adam_hand_screen.png';
import designerHandImg from '../assets/images/designer_hand_screen.png';
import aboutImage from '../assets/images/anna_about.jpeg';

const FloatingTag = ({ title, delay, xOffset, yOffset }: { title: string, delay: number, xOffset: string, yOffset: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className={`absolute ${xOffset} ${yOffset} px-2.5 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-zinc-900/85 backdrop-blur-xl border border-white/15 shadow-xl sm:shadow-2xl z-20 whitespace-nowrap`}
    >
      <span className="font-mono text-[9px] sm:text-xs tracking-widest uppercase font-semibold text-zinc-200">
        {title}
      </span>
    </motion.div>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking across the runway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring physics for fluid cinematic feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001
  });

  // 1. Hands translation: faster approach and touch
  const adamX = useTransform(smoothProgress, [0, 0.28, 0.38, 0.65], ["-30vw", "0vw", "0vw", "-15vw"]);
  const adamOpacity = useTransform(smoothProgress, [0, 0.28, 0.42, 0.65], [0.95, 1, 0.9, 0]);
  const adamScale = useTransform(smoothProgress, [0, 0.30, 0.60], [0.96, 1, 1.04]);

  const designerX = useTransform(smoothProgress, [0, 0.28, 0.38, 0.65], ["30vw", "0vw", "0vw", "15vw"]);
  const designerOpacity = useTransform(smoothProgress, [0, 0.28, 0.42, 0.65], [0.95, 1, 0.9, 0]);
  const designerScale = useTransform(smoothProgress, [0, 0.30, 0.60], [0.96, 1, 1.04]);

  // 2. Initial Hero Typography fade out as hands approach
  const introOpacity = useTransform(smoothProgress, [0, 0.16], [1, 0]);
  const introY = useTransform(smoothProgress, [0, 0.16], ["0px", "-40px"]);

  // 3. Contact Spark / Glow at the exact fingertip contact point
  const sparkScale = useTransform(smoothProgress, [0.22, 0.30, 0.38, 0.55], [0, 1.8, 2.2, 0]);
  const sparkOpacity = useTransform(smoothProgress, [0.22, 0.29, 0.38, 0.55], [0, 1, 0.85, 0]);

  // 4. Aperture Reveal: opens directly from the center point between the fingertips (50% 50%)
  const portalClip = useTransform(
    smoothProgress,
    [0.26, 0.32, 0.44, 0.56],
    [
      "circle(0% at 50% 50%)",
      "circle(14% at 50% 50%)",
      "circle(95% at 50% 50%)",
      "circle(160% at 50% 50%)"
    ]
  );
  const portalOpacity = useTransform(smoothProgress, [0.25, 0.31, 0.40], [0, 0.9, 1]);
  const portalScale = useTransform(smoothProgress, [0.26, 0.50], [0.92, 1]);

  // Background subtle atmosphere dust particles
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: 50 + (Math.cos(i * 1.3) * (20 + (i % 5) * 8)),
      y: 50 + (Math.sin(i * 1.5) * (18 + (i % 4) * 8)),
      size: 2 + (i % 3),
      delay: i * 0.15,
    }));
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[220vh] bg-transparent text-zinc-900 dark:text-zinc-100 transition-colors duration-700 z-10">
      
      {/* Fixed Sticky Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between z-20">
        
        {/* Transparent Atmosphere with Subtle Ambient Accent */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vh] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[140px]" />
        </div>

        {/* Top Navigation */}
        <header className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center z-40">
          <a href="#" className="text-xl font-bold tracking-tighter italic font-display text-zinc-900 dark:text-white">
            AM<span className="text-amber-500">.</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] font-mono text-zinc-600 dark:text-zinc-400">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                const heroEl = containerRef.current;
                if (heroEl) {
                  const targetY = heroEl.offsetTop + (heroEl.offsetHeight - window.innerHeight) * 0.7;
                  window.scrollTo({ top: targetY, behavior: 'smooth' });
                }
              }}
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a href="#portfolio" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Works</a>
            <a href="#experience" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Contact</a>
          </nav>
        </header>

        {/* CENTER STAGE: Creation of Adam Hands & Spark Interaction */}
        <div className="relative flex-1 w-full flex items-center justify-center pointer-events-none z-20">
          
          {/* Minimal Initial Hero Typography (Fades out as user scrolls) */}
          <motion.div
            style={{ opacity: introOpacity, y: introY }}
            className="absolute top-12 md:top-16 text-center max-w-2xl px-6 z-10"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md mb-4">
              <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-600 dark:text-zinc-400">Product designer | Graphic designer</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-light tracking-tight text-zinc-900 dark:text-white/95">
              Anna <span className="font-bold text-amber-500 dark:text-amber-200/90">Mergeryan</span>
            </h1>
            <p className="mt-3 text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400">
              Scroll down to initiate creation
            </p>
          </motion.div>

          {/* THE CREATION OF ADAM HANDS CONTAINER - Full screen bleed without border cutoffs */}
          <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[580px] xl:h-[640px] flex items-center justify-center overflow-visible">
            
            {/* Left Hand: Adam (Michelangelo) - Originates beyond left screen edge */}
            <motion.div
              style={{
                x: adamX,
                opacity: adamOpacity,
                scale: adamScale,
              }}
              className="absolute right-1/2 top-1/2 -translate-y-1/2 w-[55vw] min-w-[360px] h-full flex items-center justify-end pr-0 select-none will-change-transform"
            >
              <div className="relative w-full h-full flex items-center justify-end overflow-visible">
                <img
                  src={adamHandImg}
                  alt="Adam's reaching hand"
                  referrerPolicy="no-referrer"
                  className="w-[54vw] min-w-[380px] max-w-none h-full object-contain object-right drop-shadow-[0_10px_25px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>

            {/* Right Hand: Designer Character - Originates beyond right screen edge */}
            <motion.div
              style={{
                x: designerX,
                opacity: designerOpacity,
                scale: designerScale,
              }}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[55vw] min-w-[360px] h-full flex items-center justify-start pl-0 select-none will-change-transform"
            >
              <div className="relative w-full h-full flex items-center justify-start overflow-visible">
                <img
                  src={designerHandImg}
                  alt="Designer's reaching hand"
                  referrerPolicy="no-referrer"
                  className="w-[54vw] min-w-[380px] max-w-none h-full object-contain object-left drop-shadow-[0_10px_25px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>

            {/* TOUCH POINT: Golden Divine Spark & Atmospheric Dust */}
            <motion.div
              style={{
                scale: sparkScale,
                opacity: sparkOpacity,
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none flex items-center justify-center z-30"
            >
              {/* Radial Corona Glow */}
              <div className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 blur-2xl opacity-80" />
              <div className="absolute w-16 h-16 rounded-full bg-white blur-md" />
              
              {/* Radiant Light Beams */}
              <div className="absolute w-44 h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent blur-[1px]" />
              <div className="absolute h-44 w-1 bg-gradient-to-b from-transparent via-amber-200 to-transparent blur-[1px]" />
              <Sparkles className="w-8 h-8 text-amber-500 dark:text-amber-100 animate-spin" style={{ animationDuration: '10s' }} />

              {/* Floating Ethereal Particles around the contact point */}
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full bg-amber-300 shadow-[0_0_8px_#fef08a]"
                  style={{
                    width: p.size,
                    height: p.size,
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.4, 0.8]
                  }}
                  transition={{
                    duration: 3 + (p.id % 3),
                    repeat: Infinity,
                    delay: p.delay,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

          </div>

        </div>

        {/* EMERGING "ABOUT ME" SECTION (Revealed from the aperture between the fingertips) */}
        <motion.div
          id="about"
          style={{
            clipPath: portalClip,
            opacity: portalOpacity,
            scale: portalScale,
            pointerEvents: useTransform(smoothProgress, (p) => p > 0.25 ? 'auto' : 'none'),
          }}
          className="absolute inset-0 z-30 bg-background-light dark:bg-background-dark text-zinc-900 dark:text-zinc-50 flex flex-col justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 shadow-[0_0_100px_rgba(245,158,11,0.15)] will-change-[clip-path,transform] transition-colors duration-700"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-500/10 via-violet-600/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-14">
              
              {/* Visual / Portrait Column - full preserved sizing */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[440px] xl:max-w-[460px] aspect-square flex justify-center items-center mx-auto px-4 sm:px-2 flex-shrink-0">
                <div className="relative w-full h-full">
                  {/* Main Portrait Container */}
                  <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 relative z-10 border border-black/10 dark:border-white/10 shadow-2xl group">
                    <img 
                      src={aboutImage} 
                      alt="Anna Mergeryan - Product and Graphic Designer" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Floating Tags - positioned safely around the portrait */}
                  <FloatingTag title="USER-CENTERED" delay={0.2} xOffset="-left-3 sm:-left-6 md:-left-8" yOffset="top-4 sm:top-8 md:top-14" />
                  <FloatingTag title="CREATIVE THINKING" delay={0.4} xOffset="-right-3 sm:-right-6 md:-right-8" yOffset="top-1/2 -translate-y-1/2" />
                  <FloatingTag title="ATTENTION TO DETAIL" delay={0.6} xOffset="left-4 sm:left-6 md:left-4" yOffset="-bottom-3 sm:-bottom-4 md:-bottom-6" />
                  
                  {/* Background decorative halo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-500/10 rounded-full blur-[90px] -z-10" />
                </div>
              </div>

              {/* Content / Narrative Column - crisp, visible typography */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono tracking-widest uppercase mb-2 sm:mb-3 lg:mb-4 w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>About Me</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold tracking-tight text-zinc-900 dark:text-white mb-2 sm:mb-3 lg:mb-4">
                  Hi, I'm Anna.
                </h2>

                <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4 text-zinc-700 dark:text-zinc-300">
                  <p className="text-sm sm:text-base lg:text-lg text-zinc-900 dark:text-zinc-200 leading-relaxed font-light">
                    I'm a Product and Graphic Designer who turns complex ideas into intuitive digital experiences and distinctive visual identities.
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    My work combines user-centered thinking with strong visual design — from researching and structuring complex digital experiences to crafting polished interfaces, branding, and visual systems.
                  </p>
                </div>

                {/* CTAs */}
                <div className="pt-4 sm:pt-5 lg:pt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href="#portfolio"
                    data-cursor-text="EXPLORE"
                    className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black font-medium text-xs sm:text-sm tracking-wide hover:bg-amber-500 dark:hover:bg-amber-400 transition-colors shadow-xl"
                  >
                    <span>Selected Works</span>
                    <ArrowDown className="w-4 h-4" />
                  </a>

                  <a
                    href="#experience"
                    data-cursor-text="CAREER"
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-black/10 dark:border-white/20 hover:border-black/30 dark:hover:border-white text-zinc-900 dark:text-white font-medium text-xs sm:text-sm tracking-wide transition-colors"
                  >
                    <span>View Experience</span>
                    <Briefcase className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </motion.div>

        {/* Bottom spacer / padding */}
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-6 z-30 pointer-events-none" />

      </div>

    </div>
  );
}
