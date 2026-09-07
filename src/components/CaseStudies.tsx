import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { caseStudies, CaseStudy } from '../data/caseStudies';

interface CardProps {
  key?: string;
  study: CaseStudy;
  index: number;
  total: number;
}

function CaseStudyCard({ study, index, total }: CardProps) {
  const ctaLabel = study.cta || "View Case Study";

  return (
    <div className="w-full">
      <a
        href={study.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block group outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-[2rem]"
        data-cursor-text="BEHANCE"
      >
        <div
          className="relative rounded-[2rem] bg-white dark:bg-zinc-900 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-black/10 dark:border-white/10 flex flex-col lg:flex-row h-auto min-h-[460px] lg:h-[500px] transition-all duration-500 group-hover:border-amber-500/40 group-hover:shadow-2xl"
        >
          {/* Image Section */}
          <div className="w-full lg:w-7/12 h-[240px] sm:h-[280px] lg:h-full overflow-hidden relative bg-zinc-100 dark:bg-zinc-800">
            <img
              src={study.image}
              alt={study.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center origin-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-5/12 p-6 sm:p-8 md:p-10 lg:p-11 flex flex-col justify-between relative bg-white dark:bg-zinc-900">
            <div>
              {/* Desktop Badge Header */}
              <div className="hidden lg:flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-mono tracking-widest uppercase border border-black/10 dark:border-white/10 rounded-full text-zinc-600 dark:text-zinc-300">
                    Behance
                  </span>
                </div>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                  0{index + 1} / 0{total}
                </span>
              </div>

              {/* Title & Arrow */}
              <h3 className="text-2xl sm:text-3xl font-display font-medium mb-3.5 text-zinc-900 dark:text-zinc-50 tracking-tight flex items-start justify-between gap-3 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">
                <span>{study.title}</span>
                <div className="p-2 rounded-full border border-black/10 dark:border-white/10 text-zinc-400 group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </h3>

              {/* Narrative Description */}
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light line-clamp-3 sm:line-clamp-4 lg:line-clamp-4">
                {study.description}
              </p>
            </div>

            {/* Bottom Metadata & CTA */}
            <div className="mt-6 lg:mt-auto pt-5 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-0.5">Role</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{study.role}</p>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-medium group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                <span>{ctaLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-[60px] md:py-36 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-700 relative z-10 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/5 dark:border-white/5 pb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="font-mono text-xs tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                In-Depth Projects
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent">
              Case Studies
            </h2>
          </div>
          <div className="flex flex-col md:items-end justify-end">
            <a
              href="https://www.behance.net/annamergeryan2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-zinc-900 hover:border-amber-500/50 hover:bg-amber-500/10 text-zinc-800 dark:text-zinc-200 font-mono text-xs tracking-wider uppercase transition-all shadow-sm group w-fit"
            >
              <span>View Behance Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Static, Evenly Spaced Case Study Cards */}
        <div className="flex flex-col gap-10 md:gap-14">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              index={index}
              total={caseStudies.length}
            />
          ))}
        </div>

        {/* Bottom Behance CTA */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-base md:text-lg font-display font-medium text-zinc-900 dark:text-zinc-100">
              Explore more project breakdowns on Behance
            </p>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light">
              Full presentations, interactive flows, and design systems.
            </p>
          </div>
          <a
            href="https://www.behance.net/annamergeryan2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-amber-500 dark:hover:bg-amber-400 hover:text-white dark:hover:text-black font-medium text-xs font-mono uppercase tracking-wider transition-colors shrink-0 shadow-sm group"
          >
            <span>Visit Behance Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
