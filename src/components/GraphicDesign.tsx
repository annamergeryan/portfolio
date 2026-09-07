import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X, ExternalLink, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { graphicDesignWorks, GraphicDesignItem } from '../data/graphicDesign';

export default function GraphicDesign() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedWork, setSelectedWork] = useState<GraphicDesignItem | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform vertical scroll into horizontal movement across all cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const openModal = (work: GraphicDesignItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedWork(work);
    setActiveGalleryIndex(0);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <>
      <section 
        id="graphic-design" 
        ref={containerRef} 
        className="relative h-[240vh] md:h-[280vh] bg-transparent text-zinc-900 dark:text-zinc-50 transition-colors duration-700 z-20"
      >
        {/* Sticky viewport container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-8 pb-10 md:pt-12 md:pb-14 px-6 md:px-12 lg:px-16">
          
          {/* Section Header */}
          <div className="w-full max-w-7xl mx-auto z-10 pb-4 border-b border-black/5 dark:border-white/10">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent">
                Graphic Works
              </h2>
            </div>
          </div>

          {/* Horizontally moving container */}
          <div className="relative w-full flex-1 flex items-center my-auto overflow-visible pt-[37px] pb-4">
            <motion.div 
              style={{ x }} 
              className="flex items-stretch gap-6 md:gap-8 cursor-grab active:cursor-grabbing will-change-transform"
            >
              {/* Graphic Design Project Cards */}
              {graphicDesignWorks.map((work, idx) => {
                const isInternal = Boolean(work.routeUrl);
                const CardElement = isInternal ? Link : 'a';
                const cardProps = isInternal
                  ? { to: work.routeUrl! }
                  : { href: work.link || "https://www.behance.net/annamergeryan1", target: "_blank", rel: "noopener noreferrer" };

                return (
                  <CardElement
                    key={work.id}
                    {...cardProps}
                    className="group relative w-[320px] sm:w-[420px] md:w-[480px] lg:w-[540px] shrink-0 rounded-[2rem] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/60 overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-black/15 dark:hover:border-white/20"
                    data-cursor-text={isInternal ? "PROJECT" : "BEHANCE"}
                  >
                    {/* Image showcase */}
                    <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden bg-zinc-950">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full h-full object-cover origin-center transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      
                      {/* Quick Preview Prompt on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                        <span className="px-5 py-2.5 rounded-full bg-white text-zinc-950 text-xs font-mono font-bold tracking-widest uppercase shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <ArrowUpRight className="w-3.5 h-3.5 text-amber-500" />
                          <span>View Project →</span>
                        </span>
                      </div>
                    </div>

                    {/* Info section */}
                    <div className="p-6 md:p-8 flex flex-col justify-between flex-1 bg-white dark:bg-zinc-900">
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                          <span>Client: {work.client}</span>
                          <span>0{idx + 1} / 0{graphicDesignWorks.length}</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-display font-medium text-zinc-950 dark:text-zinc-50 tracking-tight mb-2 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300 flex items-center justify-between">
                          <span>{work.title}</span>
                          <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                        </h4>
                        <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed line-clamp-2">
                          {work.description}
                        </p>
                      </div>
                    </div>
                  </CardElement>
                );
              })}

              {/* End Card */}
              <div className="w-[280px] md:w-[320px] shrink-0 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center bg-zinc-100/50 dark:bg-zinc-900/40 border border-dashed border-black/15 dark:border-white/15">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  Full Graphic Archive
                </span>
                <h4 className="text-xl font-display font-medium text-zinc-900 dark:text-zinc-100 mb-6">
                  Explore More on Behance
                </h4>
                <a 
                  href="https://www.behance.net/annamergeryan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-mono tracking-widest uppercase font-semibold transition-colors flex items-center gap-2 shadow-lg"
                  data-cursor-text="BEHANCE"
                >
                  <span>Open Behance Profile</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          </div>


        </div>
      </section>

      {/* Modal / Lightbox for detailed view */}
      <AnimatePresence>
        {selectedWork && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Dialog Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-2xl z-10 flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 z-30 p-3 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-zinc-900 dark:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Feature Image / Gallery */}
              <div className="relative w-full h-[320px] md:h-[450px] bg-zinc-950 overflow-hidden">
                <img 
                  src={(selectedWork.gallery && selectedWork.gallery[activeGalleryIndex]) || selectedWork.image} 
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gallery Thumbnail Switcher if multiple images */}
                {selectedWork.gallery && selectedWork.gallery.length > 1 && (
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
                    {selectedWork.gallery.map((img, gIdx) => (
                      <button
                        key={gIdx}
                        onClick={() => setActiveGalleryIndex(gIdx)}
                        className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                          activeGalleryIndex === gIdx 
                            ? 'border-white scale-105 shadow-lg' 
                            : 'border-white/30 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12 flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/5 dark:border-white/10 pb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3.5 py-1 text-xs font-mono tracking-widest uppercase border border-black/10 dark:border-white/10 rounded-full text-zinc-600 dark:text-zinc-300">
                        {selectedWork.category}
                      </span>
                      <span className="text-zinc-400 font-mono text-sm">{selectedWork.year}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
                      {selectedWork.title}
                    </h3>
                  </div>

                  <div className="flex flex-col md:items-end">
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1">Client</span>
                    <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">{selectedWork.client}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">Project Overview</h4>
                    <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                      {selectedWork.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-col gap-4 bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-black/5 dark:border-white/5">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Deliverables & Specs</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedWork.deliverables.map((item, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <a 
                    href={selectedWork.link || "https://www.behance.net/annamergeryan1"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-mono uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
                  >
                    <span>Open on Behance</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button 
                    onClick={closeModal}
                    className="px-8 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-mono uppercase tracking-widest font-semibold hover:opacity-90 transition-opacity"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
