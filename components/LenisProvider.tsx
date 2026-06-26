'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimal settings for premium smooth scrolling
    const lenis = new Lenis({
      duration: 1.4,      // Slightly slower for elegant pacing
      lerp: 0.08,         // Smoother transition
      syncTouch: true,    // Smooth touch scrolling
      autoRaf: true,      // Automatically handle requestAnimationFrame (Lenis v1.1+)
    });

    lenisRef.current = lenis;

    // Reset scroll on navigation (helps keep standard browser page change expectation)
    window.scrollTo(0, 0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
