import { motion } from 'motion/react';
import React, { useRef, useState } from 'react';

const certificates = [
  { id: 1, title: "Commemorative Coin Design Competition", issuer: "Central Bank of Armenia", year: "2023" },
  { id: 2, title: "UX/UI Design", issuer: "Udemy", year: "2022" },
  { id: 3, title: "UX/UI Design", issuer: "Persona Business Academy", year: "2022" },
  { id: 4, title: "Social Media Marketing", issuer: "Insta Business", year: "2021" },
  { id: 5, title: "Web Design", issuer: "Armbit", year: "2020" },
];

const TiltCard: React.FC<{ cert: typeof certificates[0] }> = ({ cert }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    // Calculate rotation limits (-5 to +5 degrees)
    const rX = ((y / box.height) - 0.5) * -10;
    const rY = ((x / box.width) - 0.5) * 10;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative p-8 md:p-10 rounded-[2rem] bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 overflow-hidden group cursor-pointer flex flex-col justify-between"
      data-cursor-text="VIEW"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-yellow-500/0 to-amber-500/0 group-hover:from-amber-500/20 group-hover:via-yellow-500/20 group-hover:to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10">
        <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-6">{cert.year}</div>
        <h3 className="text-xl md:text-2xl font-display font-medium text-zinc-900 dark:text-white mb-2">{cert.title}</h3>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">{cert.issuer}</p>
      </div>
    </motion.div>
  );
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-[40px] md:py-36 px-6 bg-transparent transition-colors duration-700 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-center mb-16 md:mb-20 bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent pb-2">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map(cert => (
            <TiltCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
