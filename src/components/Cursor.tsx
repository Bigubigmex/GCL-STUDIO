import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check for touch device
    const checkTouch = () => {
      setIsTouch(window.matchMedia('(pointer: coarse)').matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target or parent has data-magnet or is a button/link
      const isMagnet = target.closest('[data-magnet="true"]') || 
                       target.closest('button') || 
                       target.closest('a') ||
                       target.closest('input') ||
                       target.closest('textarea');
      
      setIsHovering(!!isMagnet);
    };

    if (!isTouch) {
      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouch, cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{
          width: isHovering ? 40 : 12,
          height: isHovering ? 40 : 12,
          scale: isClicking ? 0.8 : 1,
          opacity: isHovering ? 0.3 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      {!isHovering && (
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full border border-white/30"
          animate={{ scale: isClicking ? 0.8 : 1 }}
        />
      )}
    </motion.div>
  );
}
