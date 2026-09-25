import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from './BackgroundLines';
import { LayersIcon } from './BrandIcons';
import Cta from './tracking/Cta';

export type RelatedItem = {
  id: string;
  title: string;
  text: string;
  href: string;
  image: StaticImageData;
  alt: string;
  icon: ReactNode;
};

interface RelatedSolutionsProps {
  page: string;
  items: RelatedItem[];
}

const RelatedSolutions = ({ page, items }: RelatedSolutionsProps) => {
  return (
    <section className="bg-background-3 dark:bg-background-7 relative isolate py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="vertical" />
      <div className="main-container space-y-12 md:space-y-14">
        <div className="mx-auto max-w-[680px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">
              <LayersIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              Soluções relacionadas
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Soluções que se completam</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>Combine com outras soluções e monte a jornada completa do seu cliente.</p>
          </RevealAnimation>
        </div>
        <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <RevealAnimation key={item.id} delay={index * 0.12} start="top 95%">
              <div className="h-full">
                <div className="group bg-background-1 dark:bg-background-6 border-secondary/10 flex h-full flex-col overflow-hidden rounded-[20px] border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(35,35,31,0.16)]">
                  <figure className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 480px, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="bg-primary-500 absolute top-4 left-4 flex size-11 items-center justify-center rounded-full text-white shadow-lg">
                      {item.icon}
                    </span>
                  </figure>
                  <div className="flex flex-1 flex-col justify-between gap-5 p-7">
                    <div className="space-y-2">
                      <h3 className="text-heading-6">{item.title}</h3>
                      <p className="text-tagline-1">{item.text}</p>
                    </div>
                    <Cta
                      href={item.href}
                      id={`${page}_related_${item.id}`}
                      location={`${page}_related`}
                      className="text-primary-500 hover:text-primary-600 text-tagline-2 inline-flex items-center gap-1 font-medium transition-all duration-300 group-hover:gap-2.5">
                      Saiba mais <span aria-hidden>→</span>
                    </Cta>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedSolutions;
