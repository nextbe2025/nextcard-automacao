'use client';

import { useEffect, useState } from 'react';
import { ArrowUpIcon } from './BrandIcons';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Voltar ao topo"
      className={`bg-primary-500 hover:bg-primary-600 fixed bottom-6 left-6 z-40 flex size-11 items-center justify-center rounded-full text-white shadow-[0_10px_30px_rgba(200,33,39,0.4)] transition-all duration-300 ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}>
      <ArrowUpIcon className="size-5" />
    </a>
  );
};

export default BackToTop;
