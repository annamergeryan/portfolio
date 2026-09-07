import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, CheckCircle2, ExternalLink, Loader2 } from 'lucide-react';
import cvPreview from '../assets/images/anna_cv_preview.png';
import cvPdfUrl from '../assets/Anna_Mergeryan_CV.pdf';

export default function Resume() {
  const [downloaded, setDownloaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      // 1. Fetch file as binary blob to ensure exact PDF bytes without iframe interference
      let response: Response | null = null;
      try {
        response = await fetch(cvPdfUrl);
      } catch {
        // Fallback to static public path
        response = null;
      }

      if (!response || !response.ok) {
        response = await fetch('/Anna_Mergeryan_CV.pdf');
      }

      if (!response.ok) {
        throw new Error('Could not fetch PDF directly');
      }

      const blob = await response.blob();
      
      // Ensure correct MIME type
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      const blobUrl = window.URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Anna_Mergeryan_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 10000);

      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    } catch (err) {
      console.warn('Direct blob download fallback to new window:', err);
      // Fail-safe: open PDF in a new window/tab directly so browser displays it
      window.open(cvPdfUrl || '/Anna_Mergeryan_CV.pdf', '_blank');
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenInNewTab = () => {
    window.open(cvPdfUrl || '/Anna_Mergeryan_CV.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-[40px] md:py-36 px-6 bg-transparent transition-colors duration-700 relative z-10 border-t border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Heading, description & Download button */}
        <div className="flex-1 max-w-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
              Curriculum Vitae
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter mb-4 text-zinc-900 dark:text-zinc-50 bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent pb-2">
            Curriculum Vitae
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8">
            Get a comprehensive overview of my career, UX/UI case backgrounds, design systems expertise, and academic qualifications. Download the exact verified PDF resume below.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleDownload}
              disabled={isLoading}
              className="group relative overflow-hidden rounded-full border border-black/20 dark:border-white/20 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-8 py-4 text-base sm:text-lg font-medium tracking-tight inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-300 cursor-pointer disabled:opacity-75"
              data-cursor-text="DOWNLOAD"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-amber-400" />
                  <span>Preparing PDF...</span>
                </>
              ) : downloaded ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 dark:text-emerald-600" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300 text-amber-400 dark:text-amber-500" />
                  <span>Download Resume PDF</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-4">
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 tracking-wider">
              Original Verified PDF · 1 Page · Ready to Print
            </span>
          </div>
        </div>

        {/* Right Column: Exact 1:1 Visual Preview Card of the Authentic PDF */}
        <div 
          onClick={handleOpenInNewTab}
          className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[1/1.414] rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden cursor-pointer group hover:scale-[1.03] transition-all duration-500 select-none"
          data-cursor-text="PREVIEW"
        >
          {/* Authentic Document Visual Render */}
          <img 
            src={cvPreview} 
            alt="Anna Mergeryan Curriculum Vitae"
            className="w-full h-full object-cover object-top"
          />

          {/* Hover Overlay with View/Download CTA */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300">
            <div className="flex items-center gap-2 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white px-5 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <ExternalLink className="w-4 h-4 text-amber-500" />
              <span>VIEW ORIGINAL PDF</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

