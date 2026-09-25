'use client';
import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSProperties, ReactNode, useRef } from 'react';

const tilts = [-2.2, 1.6, -1.2, 2];
const shifts = [-10, 8, -6, 10];

interface StackCardsProps {
  children: ReactNode;
  className?: string;
  messy?: boolean;
}

// Children must be `StackCardItem`s. On large screens each item sticks below the previous one (leaving its header
// strip visible) and the next one slides over it. Below `lg` the cards are a plain list.
export const StackCards = ({ children, className, messy = false }: StackCardsProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const items = gsap.utils.toArray<HTMLElement>('[data-stack-item]', ref.current);

        items.forEach((item, index) => {
          const next = items[index + 1];
          const card = item.querySelector('[data-stack-card]');
          if (!card) {
            return;
          }

          // Each card lands slightly rotated and off-center, like cards tossed onto a pile.
          const tilt = tilts[index % tilts.length];
          const shift = shifts[index % shifts.length];
          const dir = tilt < 0 ? -1 : 1;
          gsap.set(card, { transformOrigin: '50% 50%' });
          gsap.fromTo(
            card,
            messy ? { rotation: tilt * 3.5, x: shift * 2.5, y: 60 } : { rotation: tilt * 2.5, x: shift * 2, y: 0 },
            {
              rotation: tilt,
              x: shift,
              y: 0,
              ease: 'power2.out',
              scrollTrigger: { trigger: item, start: 'top 98%', end: 'top 55%', scrub: true },
            },
          );

          if (next) {
            // When the next card lands on top, the covered one gets nudged a bit more out of line.
            gsap.fromTo(
              card,
              { scale: 1, rotation: tilt, x: shift },
              {
                scale: 0.97,
                rotation: messy ? tilt + dir * 3 : tilt,
                x: messy ? shift + dir * 14 : shift,
                ease: 'none',
                immediateRender: false,
                scrollTrigger: { trigger: next, start: 'top 85%', end: 'top 30%', scrub: true },
              },
            );
          }
        });
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn('relative', className)}>
      {children}
    </div>
  );
};

interface StackCardItemProps {
  index: number;
  children: ReactNode;
  className?: string;
}

export const StackCardItem = ({ index, children, className }: StackCardItemProps) => (
  <div
    data-stack-item
    style={{ '--i': index } as CSSProperties}
    className={cn('mb-6 last:mb-0 lg:sticky lg:top-[calc(6rem+var(--i)*5rem)]', className)}>
    <div data-stack-card className="origin-top will-change-transform">
      {children}
    </div>
  </div>
);
