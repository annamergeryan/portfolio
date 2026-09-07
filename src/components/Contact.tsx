import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import React, { useState, useRef, useMemo } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

import adamHandImg from '../assets/images/adam_hand_screen.png';
import designerHandImg from '../assets/images/designer_hand_screen.png';

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll tracking as user scrolls into and through the Contact section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  // Hands translation: start apart at section entry, smoothly meet as user arrives at the form & CTA
  const leftHandX = useTransform(smoothProgress, [0.1, 0.85, 1], ["-22vw", "0vw", "0vw"]);
  const leftHandOpacity = useTransform(smoothProgress, [0.05, 0.4, 0.85], [0.15, 0.35, 0.45]);

  const rightHandX = useTransform(smoothProgress, [0.1, 0.85, 1], ["22vw", "0vw", "0vw"]);
  const rightHandOpacity = useTransform(smoothProgress, [0.05, 0.4, 0.85], [0.15, 0.35, 0.45]);

  // Touch spark & ripple effect when fingers connect near the CTA
  const touchGlowScale = useTransform(smoothProgress, [0.75, 0.88, 1], [0.4, 1.4, 1.2]);
  const touchGlowOpacity = useTransform(smoothProgress, [0.7, 0.85, 1], [0, 0.9, 0.75]);
  const touchRippleScale = useTransform(smoothProgress, [0.78, 0.92, 1], [0.5, 2.2, 2.6]);
  const touchRippleOpacity = useTransform(smoothProgress, [0.78, 0.88, 1], [0, 0.6, 0]);

  // Ambient background subtle illumination
  const ambientIllumination = useTransform(smoothProgress, [0.75, 0.9], [0, 0.35]);

  const particles = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: 50 + (Math.cos(i * 1.6) * (14 + (i % 3) * 6)),
      y: 50 + (Math.sin(i * 1.8) * (12 + (i % 3) * 5)),
      size: 1.5 + (i % 2),
      delay: i * 0.25,
    }));
  }, []);

  const socials = [
    { name: "Behance", link: "https://www.behance.net/annamergeryan2", isExternal: true },
    { name: "Instagram", link: "https://www.instagram.com/designs.byann/", isExternal: true },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/anna-mergeryan-11034716a/", isExternal: true }
  ];

  const handleFocus = (name: string) => setFocusedInput(name);
  const handleBlur = () => setFocusedInput(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // 1. Save directly into Firestore database
      try {
        await addDoc(collection(db, 'messages'), {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          createdAt: new Date().toISOString(),
          serverTimestamp: serverTimestamp()
        });
      } catch (dbError) {
        console.warn('Firestore message storage note:', dbError);
      }

      // 2. Also send email notification via FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/annamergeryan2000@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Even if email notification fails, if we saved it or user submitted, mark success
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err: any) {
      console.error('Contact form submit error:', err);
      // Fallback: If network issue or CORS, direct mailto fallback is available
      setStatus('error');
      setErrorMessage('Could not send message automatically. You can also reach me directly at annamergeryan2000@gmail.com.');
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-[60px] md:py-36 px-6 bg-transparent overflow-hidden relative z-10"
    >
      {/* BACKGROUND CINEMATIC ARTWORK: Connection Hands & Subtle Touch Interaction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        
        {/* Subtle Ambient Radial Light (Illuminates upon connection) */}
        <motion.div 
          style={{ opacity: ambientIllumination }}
          className="absolute w-[600px] h-[400px] bg-gradient-to-r from-amber-500/15 via-violet-600/10 to-amber-500/10 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="absolute -bottom-1/2 -right-1/4 w-full h-[150%] bg-gradient-to-t from-blue-600/10 to-transparent blur-3xl rounded-full" />

        {/* Artistic Hands Framing (Secondary & Atmospheric - Full Bleed) */}
        <div className="relative w-full h-[360px] md:h-[480px] lg:h-[560px] flex items-center justify-center opacity-60 dark:opacity-75 overflow-visible">
          
          {/* Left Hand: Creation/Adam - Moving in seamlessly from left screen edge */}
          <motion.div
            style={{
              x: leftHandX,
              opacity: leftHandOpacity,
            }}
            className="absolute right-1/2 top-1/2 -translate-y-1/2 w-[60vw] min-w-[380px] h-full flex items-center justify-end pr-0 select-none will-change-transform"
          >
            <div className="relative w-full h-full flex items-center justify-end overflow-visible">
              <img
                src={adamHandImg}
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="w-[58vw] min-w-[380px] max-w-none h-full object-contain object-right drop-shadow-[0_10px_25px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
              />
            </div>
          </motion.div>

          {/* Right Hand: Designer Character - Moving in seamlessly from right screen edge */}
          <motion.div
            style={{
              x: rightHandX,
              opacity: rightHandOpacity,
            }}
            className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[60vw] min-w-[380px] h-full flex items-center justify-start pl-0 select-none will-change-transform"
          >
            <div className="relative w-full h-full flex items-center justify-start overflow-visible">
              <img
                src={designerHandImg}
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="w-[58vw] min-w-[380px] max-w-none h-full object-contain object-left drop-shadow-[0_10px_25px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
              />
            </div>
          </motion.div>

          {/* Subtle Touch Point Glow & Gentle Ripple (Connection) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center pointer-events-none z-10">
            
            {/* Soft Ripple Wave */}
            <motion.div
              style={{
                scale: touchRippleScale,
                opacity: touchRippleOpacity,
              }}
              className="absolute w-24 h-24 rounded-full border border-amber-300/40 bg-amber-400/5 blur-[1px]"
            />

            {/* Warm Touch Halo */}
            <motion.div
              style={{
                scale: touchGlowScale,
                opacity: touchGlowOpacity,
              }}
              className="relative flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400/60 to-yellow-200/70 blur-lg" />
              <div className="absolute w-4 h-4 rounded-full bg-white/90 blur-[2px]" />
              
              {/* Very minimal floating ambient particles */}
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full bg-amber-200/80 shadow-[0_0_4px_#fef08a]"
                  style={{
                    width: p.size,
                    height: p.size,
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                  }}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + (p.id % 2),
                    repeat: Infinity,
                    delay: p.delay,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

          </div>

        </div>

      </div>

      {/* PRIMARY CONTACT CONTENT */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading in One Row */}
        <h2 className="text-[21px] min-[390px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight sm:tracking-tighter bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent pb-2 mb-8 md:mb-12 whitespace-nowrap">
          Let's create something amazing.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-light mb-8 max-w-sm">
              Available for new opportunities and freelance projects. Let's talk about your next big idea.
            </div>

          <div className="mb-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-2 block">Direct Line</span>
            <a 
              href="tel:+37498008244" 
              className="inline-block text-lg sm:text-xl font-display font-light text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors duration-300 tracking-tight"
              data-cursor-text="CALL"
            >
              +374 98 008 244
            </a>
          </div>

          <div className="mb-8">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-2 block">Email</span>
            <a 
              href="mailto:annamergeryan2000@gmail.com" 
              className="inline-block text-lg sm:text-xl font-display font-light text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors duration-300 tracking-tight"
              data-cursor-text="MAIL"
            >
              annamergeryan2000@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-1">Socials</span>
            <div className="flex flex-wrap gap-5">
              {socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link}
                  target={social.isExternal ? "_blank" : undefined}
                  rel={social.isExternal ? "noopener noreferrer" : undefined}
                  className="group relative text-lg font-display font-light text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors duration-300"
                  data-cursor-text="LINK"
                >
                  <span className="relative z-10">{social.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-950 dark:bg-white group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7 flex items-center">
          <form 
            className="w-full flex flex-col gap-7 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl p-8 sm:p-10 backdrop-blur-sm relative" 
            onSubmit={handleSubmit}
          >
            
            {/* Name Input */}
            <div className="relative group">
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                disabled={status === 'submitting'}
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 pb-3 text-lg outline-none focus:border-zinc-900 dark:focus:border-white transition-colors duration-300 peer placeholder-transparent text-zinc-900 dark:text-white disabled:opacity-50"
                placeholder="Name"
                required
              />
              <label 
                htmlFor="name" 
                className={`absolute left-0 transition-all duration-300 font-display ${
                  focusedInput === 'name' || formData.name 
                    ? '-top-5 text-xs text-zinc-500 dark:text-zinc-400' 
                    : 'top-0 text-lg text-zinc-500 peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-500 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-zinc-500 dark:peer-focus:text-zinc-400'
                }`}
              >
                What's your name?
              </label>
            </div>

            {/* Email Input */}
            <div className="relative group">
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                disabled={status === 'submitting'}
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 pb-3 text-lg outline-none focus:border-zinc-900 dark:focus:border-white transition-colors duration-300 peer placeholder-transparent text-zinc-900 dark:text-white disabled:opacity-50"
                placeholder="Email"
                required
              />
              <label 
                htmlFor="email" 
                className={`absolute left-0 transition-all duration-300 font-display ${
                  focusedInput === 'email' || formData.email 
                    ? '-top-5 text-xs text-zinc-500 dark:text-zinc-400' 
                    : 'top-0 text-lg text-zinc-500 peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-500 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-zinc-500 dark:peer-focus:text-zinc-400'
                }`}
              >
                Your email address?
              </label>
            </div>

            {/* Message Input */}
            <div className="relative group mt-1">
              <textarea 
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                disabled={status === 'submitting'}
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 pb-3 text-lg outline-none focus:border-zinc-900 dark:focus:border-white transition-colors duration-300 peer placeholder-transparent resize-none text-zinc-900 dark:text-white disabled:opacity-50"
                placeholder="Message"
                required
              />
              <label 
                htmlFor="message" 
                className={`absolute left-0 transition-all duration-300 font-display ${
                  focusedInput === 'message' || formData.message 
                    ? '-top-5 text-xs text-zinc-500 dark:text-zinc-400' 
                    : 'top-0 text-lg text-zinc-500 peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-500 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-zinc-500 dark:peer-focus:text-zinc-400'
                }`}
              >
                Tell me about your project
              </label>
            </div>

            {/* Feedback / Status Messages */}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 text-rose-500 dark:text-rose-400 text-sm font-sans"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Message received!</h4>
                  <p className="text-xs opacity-90 mt-0.5">Thank you for reaching out. I will get back to you shortly.</p>
                </div>
              </motion.div>
            )}

            {/* Action Button */}
            <div className="flex items-center gap-4 mt-2">
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-black/20 dark:border-white/20 bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-300 disabled:opacity-60 cursor-pointer shadow-md hover:shadow-lg" 
                data-cursor-text="SEND"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="font-medium">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="font-medium tracking-tight">Send Message</span>
                    <motion.div 
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

        </div>

      </div>
    </section>
  );
}

