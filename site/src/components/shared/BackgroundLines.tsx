import { cn } from '@/utils/cn';

type Variant = 'grid' | 'vertical';

interface BackgroundLinesProps {
  variant?: Variant;
  className?: string;
}

const patterns: Record<Variant, { backgroundImage: string; backgroundSize: string }> = {
  grid: {
    backgroundImage:
      'linear-gradient(to right, rgba(35,35,31,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(35,35,31,0.08) 1px, transparent 1px)',
    backgroundSize: '72px 72px',
  },
  vertical: {
    backgroundImage: 'linear-gradient(to right, rgba(35,35,31,0.09) 1px, transparent 1px)',
    backgroundSize: '25% 100%',
  },
};

const mask = 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 25%, transparent 78%)';

// The parent section must be `relative isolate` so the lines sit behind its content.
const BackgroundLines = ({ variant = 'grid', className }: BackgroundLinesProps) => (
  <div
    aria-hidden
    className={cn('pointer-events-none absolute inset-0 -z-10', className)}
    style={{ ...patterns[variant], maskImage: mask, WebkitMaskImage: mask }}
  />
);

export default BackgroundLines;
