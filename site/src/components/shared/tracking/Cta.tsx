'use client';
import { track } from '@/utils/track';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface CtaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  id: string;
  location: string;
  className?: string;
  children: ReactNode;
}

/** Standardized CTA link. Fires `cta_click` with a stable id + the section it was clicked from. */
const Cta = ({ href, id, location, className, children, onClick, ...props }: CtaProps) => {
  const handleClick: CtaProps['onClick'] = (e) => {
    track('cta_click', { cta_id: id, cta_location: location, cta_href: href });
    onClick?.(e);
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

Cta.displayName = 'Cta';
export default Cta;
