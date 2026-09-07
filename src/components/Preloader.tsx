import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait a bit before completing
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-zinc-950 text-white"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative overflow-hidden text-6xl md:text-9xl font-display font-light flex items-end">
        <motion.span
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          AM
        </motion.span>
        <div className="text-xl md:text-3xl ml-4 font-mono font-light text-zinc-500 mb-2 w-16">
          {progress}%
        </div>
      </div>
      <div className="w-64 h-px bg-zinc-800 mt-8 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-white"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}

export default Preloader;
