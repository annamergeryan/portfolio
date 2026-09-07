import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Only show custom cursor on fine pointers (desktop)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;
    
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest('a, button, input, textarea, [data-hover]');
      
      if (hoverable) {
        setIsHovering(true);
        const text = hoverable.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
        else setCursorText('');
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          backgroundColor: 'white',
        }}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? (cursorText ? 4 : 2) : 1,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 800,
          damping: 50,
        }}
      >
        {cursorText && (
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-[4px] font-bold text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
