import { cn } from '@/utils/cn';
import { ReactNode } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface FloatingCardProps {
  title: string;
  subtitle?: string;
  icon?: string | ReactNode;
  variant?: 'glass' | 'primary';
  slow?: boolean;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const FloatingCard = ({
  title,
  subtitle,
  icon,
  variant = 'glass',
  slow = false,
  delay = 0.6,
  direction = 'up',
  className,
}: FloatingCardProps) => {
  const isPrimary = variant === 'primary';

  return (
    <RevealAnimation delay={delay} direction={direction} offset={50} start="top 95%">
      <div
        className={cn(
          'absolute z-30 flex items-center gap-3 rounded-[16px] border border-white/20 px-4 py-3 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl',
          isPrimary ? 'bg-primary-500/80' : 'bg-secondary/60',
          slow ? 'animate-float-slow' : 'animate-float',
          className,
        )}>
        {icon && (
          <div
            className={cn(
              'flex size-10 shrink-0 items-center justify-center rounded-full',
              isPrimary ? 'bg-white/25' : 'bg-primary-500',
            )}>
            {typeof icon === 'string' ? <span className={cn(icon, 'text-[20px] text-white')} /> : icon}
          </div>
        )}
        <div>
          <p className="text-tagline-1 font-medium text-white">{title}</p>
          {subtitle && <p className="text-tagline-2 text-white/75">{subtitle}</p>}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default FloatingCard;
