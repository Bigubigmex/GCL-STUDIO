import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { motion } from 'motion/react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div 
      className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-xl border border-[var(--stroke)] select-none group"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Base) */}
      <img 
        src={afterImage} 
        alt={`Depois: ${alt}`} 
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-xs font-bold tracking-widest text-white border border-white/10">
        DEPOIS
      </div>

      {/* Before Image (Overlay) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt={`Antes: ${alt}`} 
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-xs font-bold tracking-widest text-white border border-white/10">
          ANTES
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3 bg-black/20" />
            <div className="w-0.5 h-3 bg-black/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
