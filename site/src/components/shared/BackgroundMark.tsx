import { cn } from '@/utils/cn';

interface BackgroundMarkProps {
  className?: string;
  /** Tailwind position classes for the mark's box (default: bottom-right, bleeding off the section). */
  position?: string;
}

// The NEXTCARD "X" symbol, isolated from the main logo artwork (viewBox 0 0 361 89),
// reused as a soft background watermark. The parent section must be `relative isolate`.
const BackgroundMark = ({ className, position = '-right-[10%] -bottom-[18%]' }: BackgroundMarkProps) => (
  <svg
    aria-hidden
    viewBox="8 7 80 72"
    className={cn('pointer-events-none absolute -z-10 h-auto w-[560px] max-w-none opacity-[0.05] select-none', position, className)}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M48.6,30.3l16-19.9c0.3-0.4,0.8-0.6,1.3-0.6h18.7c0.8,0,1.1,0.5,0.6,1.1L59,42.1c-0.4,0.4-0.4,0.9,0,1.3l26.2,31.1c0.5,0.6,0.2,1.1-0.6,1.1H65.8c-0.5,0-0.9-0.1-1.3-0.6c-8.1-10.2-17.2-21.4-25.9-31.2c-0.4-0.5-0.8-0.7-0.3-1.4L48.6,30.3z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#C82127"
      d="M48.3,30.3l-16-19.9c-0.3-0.4-0.8-0.6-1.3-0.6H12.3c-0.8,0-1.1,0.5-0.6,1.1l26.1,31.2c0.4,0.4,0.4,0.9,0,1.3L11.7,74.4c-0.5,0.6-0.2,1.1,0.6,1.1H31c0.5,0,0.9-0.1,1.3-0.6c8.1-10.2,17.2-21.4,25.9-31.2c0.4-0.5,0.8-0.7,0.3-1.4L48.3,30.3z"
    />
  </svg>
);

export default BackgroundMark;
