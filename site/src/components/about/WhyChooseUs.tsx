import totensImg from '@public/images/ambientes/totens-autoatendimento-de-bancada-restaurante.webp';
import Image from 'next/image';
import { ComponentType } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import BackgroundMark from '../shared/BackgroundMark';
import { HeadsetIcon, LayersIcon, MapPinIcon, SlidersIcon, StarIcon } from '../shared/BrandIcons';
import FloatingCard from '../shared/FloatingCard';

const reasons: { id: number; icon: ComponentType<{ className?: string }>; label: string }[] = [
  { id: 1, icon: SlidersIcon, label: 'Projeto 100% personalizado, do diagnóstico à instalação' },
  { id: 2, icon: LayersIcon, label: 'Equipamentos e software integrados ao seu PDV' },
  { id: 3, icon: HeadsetIcon, label: 'Suporte especializado em todas as etapas da operação' },
  { id: 4, icon: MapPinIcon, label: 'Presente em todas as regiões do Brasil' },
];

const WhyChooseUs = () => {
  return (
    <section className="relative isolate overflow-hidden pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <BackgroundLines variant="vertical" />
      <BackgroundMark className="text-secondary dark:text-accent w-[380px]" position="left-[1%] bottom-[2%]" />
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-x-12 gap-y-10 md:flex-row">
          <div>
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary mb-5">
                <StarIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
                Por que a NEXTCARD
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3">Um só parceiro</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="lg:max-w-[536px]">
                Uma plataforma completa de automação comercial: totens, catracas e comandas eletrônicas trabalhando
                juntos, com um único parceiro do diagnóstico à instalação.
              </p>
            </RevealAnimation>
            <ul className="mt-10 space-y-3 md:mt-14">
              {reasons.map(({ id, icon: Icon, label }, idx) => (
                <RevealAnimation key={id} delay={0.5 + idx * 0.1}>
                  <li className="flex list-none items-center gap-4">
                    <span className="bg-primary-500/10 text-primary-500 flex size-11 shrink-0 items-center justify-center rounded-full">
                      <Icon className="size-5" />
                    </span>
                    <strong className="text-tagline-1 text-secondary dark:text-accent font-medium">{label}</strong>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <div className="relative w-full md:max-w-[460px]">
            <RevealAnimation delay={0.3}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <Image
                  src={totensImg}
                  alt="Totens de autoatendimento de bancada NEXTCARD em restaurante"
                  fill
                  sizes="(min-width: 768px) 460px, 100vw"
                  className="object-cover object-[80%_center] transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </figure>
            </RevealAnimation>
            <FloatingCard
              icon={<LayersIcon />}
              title="Integração com PDV"
              subtitle="Sem operação paralela"
              className="hidden -bottom-6 left-4 sm:flex md:-left-10 lg:-left-16"
            />
            <FloatingCard
              variant="primary"
              icon={<HeadsetIcon />}
              title="Suporte especializado"
              subtitle="Do projeto à instalação"
              slow
              direction="right"
              className="hidden -top-6 right-4 sm:flex md:-right-8 xl:-right-14 2xl:-right-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

WhyChooseUs.displayName = 'WhyChooseUs';
export default WhyChooseUs;
