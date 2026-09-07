import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import CaseStudies from '../components/CaseStudies';
import GraphicDesign from '../components/GraphicDesign';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Certificates from '../components/Certificates';
import Education from '../components/Education';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <motion.main 
      key="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen font-sans relative flex flex-col overflow-x-clip"
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-violet-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-blue-600/15 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-indigo-500/10 rounded-full blur-[80px]"></div>
      </div>
      
      <Hero />
      <Portfolio />
      <Experience />
      <CaseStudies />
      <GraphicDesign />
      <Skills />
      <Testimonials />
      <Certificates />
      <Education />
      <Resume />
      <Contact />
    </motion.main>
  );
}
