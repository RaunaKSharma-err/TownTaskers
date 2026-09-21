'use client';

import { useEffect, useState } from 'react';

export function SkipLink() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setShow(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <a
      href="#main-content"
      className={`sr-only focus:not-sr-only fixed top-4 left-4 z-[100] bg-primary text-white px-4 py-2 rounded-lg shadow-lg transition-all`}
    >
      Skip to main content
    </a>
  );
}