'use client';
import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Fragment, useRef } from 'react';

interface SplitHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  delay?: number;
}

const SplitHeading = ({ text, as: Tag = 'h1', className, delay = 0.2 }: SplitHeadingProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = text.split(' ');

  useGSAP(
    () => {
      const targets = ref.current?.querySelectorAll('[data-word]');
      if (!targets?.length) {
        return;
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(targets, { autoAlpha: 1, yPercent: 0 });
        return;
      }

      gsap.fromTo(
        targets,
        { autoAlpha: 0, yPercent: 115 },
        { autoAlpha: 1, yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.09, delay },
      );
    },
    { scope: ref, dependencies: [delay] },
  );

  return (
    <Tag ref={ref} aria-label={text} className={cn(className)}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span aria-hidden className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom">
            <span data-word className="inline-block will-change-transform" style={{ opacity: 0 }}>
              {word}
            </span>
          </span>
          {index < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  );
};

export default SplitHeading;
