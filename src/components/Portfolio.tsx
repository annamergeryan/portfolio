import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import domusImage from '../assets/images/regenerated_image_1787936215609.jpg';
import hyoorImage from '../assets/images/regenerated_image_1787936632037.jpg';
import pbaImage from '../assets/images/regenerated_image_1788422096282.jpg';
import skillbookImage from '../assets/images/regenerated_image_1788422091068.jpg';

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  size: string;
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Persona Business Academy",
    category: "Web Design",
    description: "A modern educational platform empowering professionals through structured business courses, mentorship programs, and interactive learning.",
    image: pbaImage,
    link: "https://pba.am/en",
    size: "regular"
  },
  {
    id: 2,
    title: "Hyoor Wedding",
    category: "Web Design",
    description: "An elegant wedding platform designed to create seamless digital invitations, gift registries, and RSVP experiences for couples and their guests.",
    image: hyoorImage,
    link: "https://hyoor.am/blank?to=%2Fwedding%2Fw-215&back=%2Fweb-invitations",
    size: "regular"
  },
  {
    id: 3,
    title: "Domus",
    category: "E-Commerce",
    description: "A digital platform designed to simplify the property discovery experience, helping users explore, compare, and find properties through a clear and intuitive interface.",
    image: domusImage,
    link: "https://domus.am",
    size: "regular"
  },
  {
    id: 4,
    title: "Skillbook",
    category: "EdTech Platform",
    description: "An interactive educational platform offering modern skill-building courses, structured curricula, and career growth resources.",
    image: skillbookImage,
    link: "https://skillbook.co",
    size: "regular"
  },
];

export const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  return (
    <motion.a
      href={project.link}
      target={project.link !== "#" ? "_blank" : undefined}
      rel={project.link !== "#" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col gap-6 w-full col-span-1"
      data-cursor-text="EXPLORE"
    >
      <div className="relative w-full overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 shadow-sm border border-black/5 dark:border-white/10 aspect-[16/11]">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover origin-center transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        
        {/* Ambient base overlay */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />

        {/* Hover Overlay with Description */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10 z-20">
          <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col gap-3">
            <h4 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight">
              {project.title}
            </h4>
            <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-xl line-clamp-4 md:line-clamp-none">
              {project.description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/80 group-hover:text-white">
              <span>View project</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
        <h3 className="text-3xl md:text-4xl font-display font-medium text-zinc-900 dark:text-zinc-50 tracking-tight transition-colors duration-300">{project.title}</h3>
        
        <div className="hidden md:flex relative w-12 h-12 rounded-full border border-black/10 dark:border-white/10 items-center justify-center overflow-hidden group-hover:bg-black group-hover:border-black dark:group-hover:bg-white dark:group-hover:border-white transition-all duration-300">
           {/* SVG Arrow (entering from bottom left) */}
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute text-white dark:text-black opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
             <path d="M5 12h14"></path>
             <path d="m12 5 7 7-7 7"></path>
           </svg>
           {/* SVG Arrow (leaving to top right) */}
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute text-zinc-900 dark:text-white opacity-100 group-hover:opacity-0 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
             <path d="M5 12h14"></path>
             <path d="m12 5 7 7-7 7"></path>
           </svg>
        </div>
      </div>
    </motion.a>
  );
};

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section id="portfolio" className="relative w-full pt-[40px] pb-[60px] md:py-36 px-6 bg-background-light dark:bg-background-dark text-zinc-900 dark:text-zinc-50 transition-colors duration-700 overflow-hidden z-20" ref={containerRef}>
      <motion.div style={{ y: sectionY }} className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 flex items-center justify-between">
          <h2 className="w-fit max-w-full text-5xl md:text-7xl font-display font-bold tracking-tighter bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent pb-2">
            Selected Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
