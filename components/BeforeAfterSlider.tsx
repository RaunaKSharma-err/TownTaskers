'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  label?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  beforeAlt,
  afterImage,
  afterAlt,
  label,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setPosition(percentage);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-border shadow-soft"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
    >
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          width={containerWidth || 800}
          height={containerWidth ? (containerWidth * 10) / 16 : 500}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-full object-cover"
          style={{ objectPosition: 'left' }}
        />
      </div>

      <span className="absolute left-4 top-4 z-20 rounded-lg bg-foreground/70 px-3 py-1.5 text-xs font-medium text-white">
        Before
      </span>
      <span className="absolute right-4 top-4 z-20 rounded-lg bg-accent/90 px-3 py-1.5 text-xs font-medium text-white">
        After
      </span>
      {label && (
        <span className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-lg bg-white/90 px-4 py-1.5 text-xs font-medium text-foreground shadow-soft">
          {label}
        </span>
      )}

      <div
        className="absolute inset-y-0 z-30 w-1 bg-white shadow-lg"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
          <MoveHorizontal className="h-5 w-5 text-primary" />
        </div>
      </div>
    </div>
  );
}
