import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import { AnimatePresence, motion } from 'motion/react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import AnkiSweetsDetail from './pages/AnkiSweetsDetail';

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <ThemeProvider defaultTheme="dark">
      <SmoothScroll>
        <CustomCursor />
        
        <AnimatePresence mode="wait">
          {loading ? (
            <Preloader key="preloader" onComplete={() => setLoading(false)} />
          ) : (
            <div className="w-full min-h-screen bg-background-light dark:bg-background-dark text-zinc-900 dark:text-zinc-50 transition-colors duration-700">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/case-studies/anki-sweets" element={<AnkiSweetsDetail />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </AnimatePresence>
      </SmoothScroll>
    </ThemeProvider>
  );
}
