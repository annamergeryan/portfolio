import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Heart, Sparkles, Layers, Box, Maximize2, X, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

import { AnkiLogo } from '../components/AnkiLogo';
import ankiHeroImg from '../assets/images/anki_cover-1.jpg';
import ankiLogoImg from '../assets/images/anki_logo_presentation_1786968137014.jpg';
import ankiPackagingImg from '../assets/images/anki_packaging_suite_1786968149341.jpg';
import ankiStationeryImg from '../assets/images/anki_pattern_stationery_1786968160360.jpg';
import ankiMacroImg from '../assets/images/anki_macro_detail_1786968171482.jpg';

export default function AnkiSweetsDetail() {
  const [activeLightBox, setActiveLightBox] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.2], [0, 60]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 1.04]);

  const colorPalette = [
    {
      name: "Anki Purple",
      hex: "#8D53A0",
      rgb: "RGB 141, 83, 160",
      cmyk: "CMYK 45, 75, 0, 0",
      usage: "Primary Brand Color, Packaging Highlights, Key Accent Elements",
      darkText: false,
    },
    {
      name: "Plum Burgundy",
      hex: "#6E3635",
      rgb: "RGB 110, 54, 53",
      cmyk: "CMYK 35, 78, 65, 38",
      usage: "Logotype Wordmark, Deep Contrast Backgrounds, Ribbon & Tag Details",
      darkText: false,
    },
    {
      name: "Cream White",
      hex: "#FAF7F5",
      rgb: "RGB 250, 247, 245",
      cmyk: "CMYK 1, 2, 2, 0",
      usage: "Shopping Bag Stock, Box Inset Panels, Label Paper",
      darkText: true,
    },
    {
      name: "Pastel Lilac Mist",
      hex: "#EADBFA",
      rgb: "RGB 234, 219, 250",
      cmyk: "CMYK 9, 16, 0, 0",
      usage: "Secondary Pastry Boxes, Pattern Substrates, Delicate Highlights",
      darkText: true,
    },
    {
      name: "Soft Warm Rose",
      hex: "#F5E9EE",
      rgb: "RGB 245, 233, 238",
      cmyk: "CMYK 2, 8, 2, 0",
      usage: "Tissue Wraps, Sticker Backgrounds, Interior Box Linings",
      darkText: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0C0B0E] text-[#ECE7F2] font-sans selection:bg-[#8D53A0] selection:text-[#FAF7F5] pb-32">
      {/* Top Floating Editorial Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#0C0B0E]/75 border-b border-white/5 px-6 sm:px-12 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/#graphic-design"
            className="flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors group"
            data-cursor-text="BACK"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#8D53A0]" />
            <span>Back to Graphic Works</span>
          </Link>

          {/* Authentic Logo Icon in Header */}
          <div className="hidden sm:flex items-center">
            <div className="w-24 opacity-90 hover:opacity-100 transition-opacity">
              <AnkiLogo
                ankiColor="#FAF7F5"
                sweetsColor="#D4A6E6"
                heartColor="#8D53A0"
                heartStripeColor="#FAF7F5"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-xs font-mono tracking-widest text-zinc-500 uppercase">
              Brand Identity · 2025
            </span>
            <a
              href="https://www.behance.net/gallery/222230931/Anki-Sweets-Branding"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8D53A0] hover:bg-[#7b468e] text-white text-xs font-mono tracking-widest uppercase font-semibold transition-all duration-300 shadow-xl shadow-black/40 border border-white/10"
              data-cursor-text="BEHANCE"
            >
              <span>Behance Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          01 — HERO
          ========================================================================= */}
      <section className="relative min-h-[92vh] pt-36 md:pt-48 pb-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          {/* Small label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="px-4 py-1.5 rounded-full bg-[#8D53A0]/15 border border-[#8D53A0]/40 text-[#D4A6E6] text-[11px] font-mono uppercase tracking-[0.25em] flex items-center gap-2 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8D53A0] animate-pulse" />
              BRAND IDENTITY · 2025
            </span>
          </div>

          {/* Large Typography & Official Logo Pairing */}
          <div className="mb-10">
            <div className="w-full max-w-sm sm:max-w-md mb-8 p-6 rounded-3xl bg-[#FAF7F5] border border-white/10 shadow-xl">
              <AnkiLogo
                ankiColor="#6E3635"
                sweetsColor="#8D53A0"
                heartColor="#8D53A0"
                heartStripeColor="#FAF7F5"
                className="w-full h-auto"
              />
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-medium tracking-tight text-white leading-[0.9] uppercase select-none">
              ANKI <span className="text-[#8D53A0]">SWEETS</span>
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light max-w-3xl leading-relaxed tracking-tight mb-12">
            A playful visual identity created for a sweets brand, combining personality, softness and a memorable visual language.
          </p>

          {/* Project Information Block */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-white/10 text-xs font-mono">
            <div>
              <span className="text-zinc-500 uppercase tracking-[0.2em] block mb-1.5">ROLE</span>
              <span className="text-zinc-200 font-medium text-sm">Graphic Designer</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-[0.2em] block mb-1.5">PROJECT</span>
              <span className="text-zinc-200 font-medium text-sm">Brand Identity</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-[0.2em] block mb-1.5">YEAR</span>
              <span className="text-zinc-200 font-medium text-sm">2025</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-[0.2em] block mb-1.5">SERVICES</span>
              <span className="text-zinc-200 font-medium text-sm">Logo Design · Visual Identity · Brand Design</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Hero Visual Cover Frame */}
      <section className="px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto mb-32">
        <motion.div
          style={{ y: heroParallax, scale: scaleHero }}
          className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-[#16141B] cursor-pointer group"
          onClick={() => setActiveLightBox(ankiHeroImg)}
        >
          <img
            src={ankiHeroImg}
            alt="Anki Sweets Brand Packaging Suite"
            className="w-full h-auto object-cover max-h-[850px] transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0E]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-xs font-mono text-zinc-300">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8D53A0]" />
              Anki Sweets · Confectionery Packaging Suite
            </span>
            <span className="hidden sm:flex items-center gap-1 opacity-75 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" /> Click to enlarge
            </span>
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          02 — PROJECT INTRODUCTION
          ========================================================================= */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8D53A0] font-semibold mb-4 block">
              // 02 — Introduction
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-[1.1] mb-8">
              A visual identity made to feel as sweet as the product.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-10">
              Anki Sweets is a branding project focused on creating a distinctive and memorable identity for a sweets brand. The visual direction combines the modern geometric elegance of <strong className="text-[#8D53A0] font-medium">Oneday</strong> typography with approachable <strong className="text-white font-medium">Poppins</strong> taglines and a distinctive purple & plum palette.
            </p>
            <div className="p-8 rounded-3xl bg-[#16141B]/80 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-widest text-zinc-400">
                <Sparkles className="w-4 h-4 text-[#8D53A0]" />
                <span>Creative Focus</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Balancing artisanal dessert charm with high-end packaging finishes, signature brand purple (<span className="text-[#D4A6E6] font-mono">#8D53A0</span>), and rich plum burgundy (<span className="text-[#D4A6E6] font-mono">#6E3635</span>) accents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — BRAND CONCEPT
          ========================================================================= */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-36">
        <div className="border-t border-white/10 pt-16 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8D53A0] font-semibold mb-4 block">
            // 03 — Concept
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-baseline">
            <h2 className="lg:col-span-5 text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
              The Idea Behind the Identity
            </h2>
            <p className="lg:col-span-7 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed">
              The identity was designed around the idea of making sweetness feel visual, playful and memorable. Every element works together to create a brand that feels approachable, expressive and easy to recognize.
            </p>
          </div>
        </div>

        {/* Large Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#16141B] shadow-2xl group cursor-pointer"
            onClick={() => setActiveLightBox(ankiPackagingImg)}
          >
            <img
              src={ankiPackagingImg}
              alt="Anki Sweets Brand Composition"
              className="w-full h-auto object-cover transition-transform duration-[1.4s] group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-[#16141B] border border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8D53A0] mb-2 block">
                Visual Harmony
              </span>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Repetitive mini-wave patterns and soft organic curvature evoke the textures of icing, delicate bakery ribbons, and artisanal craftsmanship.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[#6E3635]/40 border border-[#6E3635]/60">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-200 mb-2 block">
                Brand Core
              </span>
              <p className="text-sm text-zinc-200 font-light leading-relaxed">
                Designed to spark instant recognition on retail shelves, social media feeds, and gift unwrapping moments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          04 — LOGO
          ========================================================================= */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-36">
        <div className="border-t border-white/10 pt-16 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8D53A0] font-semibold mb-4 block">
            // 04 — Logotype
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight mb-4">
            The Logo
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            The Anki Sweets logotype is the central element of the identity, giving the brand a distinctive and recognizable personality.
          </p>
        </div>

        {/* Logo Presentation Grid */}
        <div className="space-y-8">
          {/* Main Logo Large Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-[#FAF7F5] text-[#6E3635] p-12 sm:p-20 md:p-24 flex flex-col items-center justify-center text-center relative shadow-2xl"
          >
            <div className="absolute top-6 left-8 text-[11px] font-mono uppercase tracking-[0.25em] text-[#6E3635]/60">
              Primary Logotype · Light Surface (#FAF7F5)
            </div>

            {/* Authentic Brand Vector Logotype */}
            <div className="py-8 w-full max-w-2xl flex items-center justify-center">
              <AnkiLogo
                ankiColor="#6E3635"
                sweetsColor="#8D53A0"
                heartColor="#8D53A0"
                heartStripeColor="#FAF7F5"
                className="w-full max-w-lg filter drop-shadow-sm"
              />
            </div>

            <div className="absolute bottom-6 right-8 text-[11px] font-mono tracking-widest text-[#6E3635]/60">
              Plum Burgundy #6E3635 · Anki Purple #8D53A0
            </div>
          </motion.div>

          {/* Logo Variations: Dark & Background Color */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logo on Plum Burgundy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-10 md:p-14 bg-[#6E3635] border border-white/10 flex flex-col justify-between min-h-[320px]"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 mb-6 block">
                Logo on Brand Plum Burgundy (#6E3635)
              </span>
              <div className="my-auto w-full flex items-center justify-center py-4">
                <AnkiLogo
                  ankiColor="#FAF7F5"
                  sweetsColor="#EADBFA"
                  heartColor="#8D53A0"
                  heartStripeColor="#6E3635"
                  className="w-full max-w-xs"
                />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-white/40 block mt-6 text-right">
                High Contrast Spec · Dark Theme
              </span>
            </motion.div>

            {/* Logo on Anki Purple */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl p-10 md:p-14 bg-[#8D53A0] border border-black/5 flex flex-col justify-between min-h-[320px]"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/80 mb-6 block">
                Logo on Anki Purple (#8D53A0)
              </span>
              <div className="my-auto w-full flex items-center justify-center py-4">
                <AnkiLogo
                  ankiColor="#FAF7F5"
                  sweetsColor="#FAF7F5"
                  heartColor="#6E3635"
                  heartStripeColor="#8D53A0"
                  className="w-full max-w-xs"
                />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-white/70 block mt-6 text-right">
                Primary Packaging Spec
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — LOGOTYPE / TYPOGRAPHY
          ========================================================================= */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-36">
        <div className="border-t border-white/10 pt-16 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8D53A0] font-semibold mb-4 block">
            // 05 — Typography
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight mb-4">
            Typography
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            Typography plays an important role in giving Anki Sweets its playful and expressive personality while keeping the identity visually cohesive.
          </p>
        </div>

        {/* Typographic Composition */}
        <div className="rounded-[2.5rem] md:rounded-[3rem] p-10 sm:p-16 bg-[#16141B] border border-white/10 overflow-hidden relative">
          <div className="flex flex-col gap-12">
            <div className="border-b border-white/10 pb-12">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8D53A0] font-semibold">
                  Primary Font · Oneday
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#8D53A0]/20 text-[#D4A6E6] border border-[#8D53A0]/30">
                  Headline & Main Logotype
                </span>
              </div>
              <div className="text-5xl sm:text-7xl md:text-8xl tracking-widest text-[#FAF7F5] uppercase leading-none mb-4 font-light" style={{ letterSpacing: '0.15em' }}>
                ONEDAY
              </div>
              <p className="text-xs sm:text-sm font-mono text-zinc-400">
                Slim, geometric uppercase headline typeface with stencil-cut terminals giving the brand its modern, distinctive character.
              </p>
            </div>

            <div className="border-b border-white/10 pb-12">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8D53A0] font-semibold">
                  Tagline & Secondary Font · Poppins
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                  Subheadings · Packaging Copy · Body
                </span>
              </div>
              <div className="text-3xl sm:text-5xl md:text-6xl text-[#D4A6E6] leading-tight mb-4 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Poppins Regular & Medium
              </div>
              <div className="text-lg sm:text-xl text-zinc-300 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                The quick brown fox jumps over the lazy dog · 0123456789
              </div>
              <p className="text-xs sm:text-sm font-mono text-zinc-400">
                Geometric sans-serif with friendly circular curves, offering high legibility and warmth across packaging descriptors, tags, and product ingredients.
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-4">
                Expressive Letterforms & Glyphs
              </span>
              <div className="flex flex-wrap gap-4 text-3xl sm:text-5xl text-zinc-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 font-bold">A</span>
                <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">N</span>
                <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">K</span>
                <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">I</span>
                <span className="px-5 py-3 rounded-2xl bg-[#6E3635]/60 border border-[#6E3635] text-[#D4A6E6]">♥</span>
                <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">S</span>
                <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">W</span>
                <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">E</span>
                <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">E</span>
                <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">T</span>
                <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">S</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — COLOR PALETTE
          ========================================================================= */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-36">
        <div className="border-t border-white/10 pt-16 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8D53A0] font-semibold mb-4 block">
            // 06 — Color
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight mb-4">
            Color
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            The color palette is anchored by <strong className="text-[#8D53A0] font-medium font-mono">#8D53A0</strong> (Anki Purple) and <strong className="text-[#FAF7F5] font-medium font-mono">#6E3635</strong> (Plum Burgundy), creating a soft, playful and appetizing visual atmosphere while helping the identity remain instantly recognizable across all touchpoints.
          </p>
        </div>

        {/* Large Color Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colorPalette.map((color, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl p-8 flex flex-col justify-between h-72 border border-white/10 shadow-xl transition-transform duration-300 hover:-translate-y-1.5"
              style={{ backgroundColor: color.hex }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`text-xl font-display font-bold ${color.darkText ? 'text-zinc-950' : 'text-white'}`}>
                    {color.name}
                  </h3>
                  <span className={`text-xs font-mono block mt-1 ${color.darkText ? 'text-zinc-800' : 'text-zinc-200'}`}>
                    {color.usage}
                  </span>
                </div>
              </div>

              <div className={`space-y-1 border-t pt-4 text-xs font-mono ${color.darkText ? 'border-zinc-900/20 text-zinc-900' : 'border-white/20 text-white'}`}>
                <div className="flex justify-between">
                  <span>HEX</span>
                  <span className="font-semibold">{color.hex}</span>
                </div>
                <div className="flex justify-between opacity-80">
                  <span>RGB</span>
                  <span>{color.rgb}</span>
                </div>
                <div className="flex justify-between opacity-80">
                  <span>CMYK</span>
                  <span>{color.cmyk}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          07 — VISUAL LANGUAGE
          ========================================================================= */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-36">
        <div className="border-t border-white/10 pt-16 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8D53A0] font-semibold mb-4 block">
            // 07 — Visual Language
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight mb-4">
            Visual Language
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            Beyond the logo, the identity creates a consistent visual language through color, typography, composition and playful graphic details.
          </p>
        </div>

        {/* Editorial Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Large Image */}
          <div
            className="lg:col-span-7 rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#16141B] shadow-2xl cursor-pointer group"
            onClick={() => setActiveLightBox(ankiStationeryImg)}
          >
            <img
              src={ankiStationeryImg}
              alt="Anki Sweets Brand Stationery and Stickers"
              className="w-full h-auto object-cover transition-transform duration-[1.4s] group-hover:scale-105"
            />
            <div className="p-6 bg-[#16141B] border-t border-white/10 text-xs font-mono text-zinc-400 flex justify-between">
              <span>Brand Collateral & Stickers</span>
              <span>Linen Surface Presentation</span>
            </div>
          </div>

          {/* Side Column: Cropped details + Typography + Color Elements */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div
              className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#16141B] shadow-xl cursor-pointer group"
              onClick={() => setActiveLightBox(ankiMacroImg)}
            >
              <img
                src={ankiMacroImg}
                alt="Anki Sweets Packaging Texture Detail"
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              />
              <div className="p-6 bg-[#16141B] border-t border-white/10 text-xs font-mono text-zinc-400 flex justify-between">
                <span>Tactile Embossed Texture</span>
                <span>Macro Crop</span>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-[#16141B] border border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8D53A0] mb-3 block">
                Graphic Rhythm
              </span>
              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-4">
                The continuous repetition of the custom purple wave pattern anchors all collateral, guaranteeing immediate visual distinction from ordinary bakeries.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4A6E6]">
                <Sparkles className="w-3.5 h-3.5 text-[#8D53A0]" />
                <span>Playful · Refined · Tactile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          08 — BRAND APPLICATIONS
          ========================================================================= */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-36">
        <div className="border-t border-white/10 pt-16 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8D53A0] font-semibold mb-4 block">
            // 08 — Applications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight mb-4">
            Bringing the Brand to Life
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            The identity becomes more expressive when applied across real brand touchpoints, creating a consistent experience wherever the customer encounters Anki Sweets.
          </p>
        </div>

        {/* Applications Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[2.5rem] bg-[#16141B] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8D53A0] mb-2 block">
                01 · Packaging & Boxes
              </span>
              <h3 className="text-2xl font-display font-medium text-white mb-4">
                Sliding Drawer Gift Boxes
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Engineered with satin ribbon pull loops and all-over pattern prints to offer a ceremonial unboxing ritual.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-zinc-500">
              Rigid Boxboard / Matte Lamination
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-[#16141B] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8D53A0] mb-2 block">
                02 · Retail Touchpoints
              </span>
              <h3 className="text-2xl font-display font-medium text-white mb-4">
                Paper Shopping Bags
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Stark cream-white paper bags equipped with thick ribbon handles and the dominant plum script wordmark.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-zinc-500">
              Heavyweight Kraft / Satin Handles
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-[#16141B] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D8C5ED] mb-2 block">
                03 · Confectionery Details
              </span>
              <h3 className="text-2xl font-display font-medium text-white mb-4">
                Individual Pastry Cubes
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Compact single-portion boxes designed for bespoke cupcakes, macarons, and specialty sweets on the go.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-zinc-500">
              Custom Fold / Food-Safe Cardstock
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          09 — PACKAGING / PRODUCT PRESENTATION
          ========================================================================= */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-36">
        <div className="border-t border-white/10 pt-16 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8D53A0] font-semibold mb-4 block">
            // 09 — Packaging
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-medium text-white tracking-tight leading-tight mb-4">
            Made to Be Seen
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            Designed as an advertising-grade product showcase celebrating scale, angles, and tactile craftsmanship.
          </p>
        </div>

        {/* Full Width Visual Showcase */}
        <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#16141B] group cursor-pointer" onClick={() => setActiveLightBox(ankiPackagingImg)}>
          <img
            src={ankiPackagingImg}
            alt="Anki Sweets Full Packaging Showcase"
            className="w-full h-auto object-cover max-h-[850px] transition-transform duration-[1.4s] group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-xs font-mono text-white/90">
            <span>Anki Sweets Complete Lineup</span>
            <span className="flex items-center gap-1.5"><Eye className="w-4 h-4 text-[#8D53A0]" /> Editorial Campaign View</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10 — BRAND DETAILS
          ========================================================================= */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-36">
        <div className="border-t border-white/10 pt-16 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8D53A0] font-semibold mb-4 block">
            // 10 — Macro Details
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight mb-4">
            Details Matter
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            Close-up inspection of typography, packaging closures, tactile textures, and color relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#16141B] cursor-pointer group"
            onClick={() => setActiveLightBox(ankiMacroImg)}
          >
            <img
              src={ankiMacroImg}
              alt="Macro Detail Anki Sweets"
              className="w-full h-96 object-cover transition-transform duration-[1.4s] group-hover:scale-105"
            />
            <div className="p-8 bg-[#16141B]">
              <h3 className="text-xl font-display font-medium text-white mb-2">Tactile Paper & Foil</h3>
              <p className="text-sm text-zinc-400 font-light">Matte purple & plum stock paired with rich pigment stamping.</p>
            </div>
          </div>

          <div
            className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#16141B] cursor-pointer group"
            onClick={() => setActiveLightBox(ankiLogoImg)}
          >
            <img
              src={ankiLogoImg}
              alt="Logo Presentation Anki Sweets"
              className="w-full h-96 object-cover transition-transform duration-[1.4s] group-hover:scale-105"
            />
            <div className="p-8 bg-[#16141B]">
              <h3 className="text-xl font-display font-medium text-white mb-2">Brand Wordmark & Tagline</h3>
              <p className="text-sm text-zinc-400 font-light">Harmonious pairing of Oneday primary display lettering with clean Poppins taglines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11 — FINAL BRAND PRESENTATION (VISUAL CLIMAX)
          ========================================================================= */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-36">
        <div className="text-center py-20 border-t border-white/10">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8D53A0] font-semibold mb-4 block">
            // 11 — Visual Climax
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold text-white tracking-tight uppercase mb-4">
            ANKI SWEETS
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-400 font-light max-w-2xl mx-auto">
            A sweet identity with a memorable personality.
          </p>
        </div>

        {/* Fullscreen visual showcase sequence */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-[#16141B]"
          >
            <img src={ankiHeroImg} alt="Anki Sweets Visual Presentation 01" className="w-full h-auto object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-[#16141B]"
          >
            <img src={ankiPackagingImg} alt="Anki Sweets Visual Presentation 02" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          12 — PROJECT INFORMATION
          ========================================================================= */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-36">
        <div className="rounded-[2.5rem] md:rounded-[3rem] p-10 sm:p-16 bg-[#16141B] border border-white/10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8D53A0] font-semibold mb-8 block">
            // 12 — Project Summary
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-xs font-mono">
            <div>
              <span className="text-zinc-500 uppercase tracking-widest block mb-2">PROJECT</span>
              <span className="text-white text-base font-medium font-sans">Anki Sweets</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-widest block mb-2">CATEGORY</span>
              <span className="text-white text-base font-medium font-sans">Brand Identity / Graphic Design</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-widest block mb-2">ROLE</span>
              <span className="text-white text-base font-medium font-sans">Graphic Designer</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-widest block mb-2">YEAR</span>
              <span className="text-white text-base font-medium font-sans">2025</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-widest block mb-2">TYPOGRAPHY</span>
              <div className="text-zinc-200 text-sm font-sans space-y-1">
                <div>Primary: <strong className="text-white font-medium">Oneday</strong></div>
                <div>Tagline: <strong className="text-white font-medium">Poppins</strong></div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <div className="flex flex-wrap gap-4 items-center">
              <div>
                <span className="text-zinc-500 uppercase tracking-widest mr-2">TOOLS:</span>
                <span className="text-zinc-200">Adobe Illustrator · Photoshop</span>
              </div>
              <div className="hidden sm:block text-zinc-700">|</div>
              <div>
                <span className="text-zinc-500 uppercase tracking-widest mr-2">PALETTE:</span>
                <span className="text-zinc-200 font-mono">#8D53A0 · #6E3635</span>
              </div>
            </div>
            <a
              href="https://www.behance.net/gallery/222230931/Anki-Sweets-Branding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A6E6] hover:underline flex items-center gap-1.5"
            >
              <span>View on Behance / 222230931</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          13 — NEXT PROJECT
          ========================================================================= */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="border-t border-white/10 pt-16">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8D53A0] font-semibold block">
              // 13 — Next Project
            </span>
            <Link
              to="/#graphic-design"
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Graphic Works</span>
            </Link>
          </div>

          {/* Next Project Card Showcase */}
          <a
            href="https://www.behance.net/annamergeryan1"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 bg-[#16141B] shadow-2xl p-10 sm:p-16 transition-all duration-500 hover:border-white/25"
            data-cursor-text="NEXT"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3 block">
                  Next in Graphic Works
                </span>
                <h3 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-white tracking-tight group-hover:text-[#D4A6E6] transition-colors duration-300">
                  Aura Botanica
                </h3>
                <p className="text-zinc-400 font-light text-base sm:text-lg mt-2 max-w-xl">
                  Visual Identity & Sustainable Packaging Architecture for Organic Botanical Skincare.
                </p>
              </div>

              <div className="flex items-center gap-3 text-white font-mono text-sm uppercase tracking-widest shrink-0">
                <span>View Next Project</span>
                <div className="w-12 h-12 rounded-full bg-white text-zinc-950 flex items-center justify-center group-hover:bg-[#8D53A0] group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* LightBox Modal for Full-Res Image Inspection */}
      {activeLightBox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveLightBox(null)}
        >
          <button
            onClick={() => setActiveLightBox(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeLightBox}
            alt="Enlarged branding artwork"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
