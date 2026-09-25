'use client';
import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactNode, useRef } from 'react';

interface ParallaxProps {
  children: ReactNode;
  amount?: number;
  className?: string;
}

const Parallax = ({ children, amount = 8, className }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        element,
        { yPercent: -amount },
        {
          yPercent: amount,
          ease: 'none',
          scrollTrigger: { trigger: element.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      );
    },
    { scope: ref, dependencies: [amount] },
  );

  return (
    <div ref={ref} className={cn('absolute inset-x-0 -inset-y-[12%]', className)}>
      {children}
    </div>
  );
};

export default Parallax;
