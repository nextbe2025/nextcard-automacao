import bgImg from '@public/images/backgrounds/fundo-preto-vermelho-luzes-diagonais.webp';
import catracasImg from '@public/images/ambientes/catracas-expedidora-e-receptora-de-comanda.webp';
import ambienteImg from '@public/images/ambientes/ambiente-restaurante-moderno-iluminacao-vermelha.webp';
import totemImg from '@public/images/ambientes/totem-autoatendimento-pedestal-restaurante.webp';
import totensImg from '@public/images/ambientes/totens-autoatendimento-de-bancada-restaurante.webp';
import Image, { StaticImageData } from 'next/image';
import { ComponentType } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { StackCardItem, StackCards } from '../animation/StackCards';
import BackgroundLines from '../shared/BackgroundLines';
import { EyeIcon, HeadsetIcon, KioskIcon, LayersIcon, SlidersIcon, StarIcon } from '../shared/BrandIcons';
import Cta from '../shared/tracking/Cta';

type Step = {
  id: number;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  chip: string;
  image: StaticImageData;
  alt: string;
};

const steps: Step[] = [
  {
    id: 1,
    icon: EyeIcon,
    title: 'Avaliamos a operação',
    description: 'Avaliamos a sua operação de ponta a ponta, do fluxo de clientes ao fechamento de caixa.',
    chip: 'Análise completa',
    image: ambienteImg,
    alt: 'Ambiente de restaurante moderno onde a NEXTCARD avalia a operação',
  },
  {
    id: 2,
    icon: KioskIcon,
    title: 'Indicamos os equipamentos',
    description: 'Indicamos os equipamentos certos pro seu negócio: totem, catracas, comandas ou a combinação ideal.',
    chip: 'Equipamentos certos',
    image: totensImg,
    alt: 'Totens de autoatendimento de bancada NEXTCARD em restaurante',
  },
  {
    id: 3,
    icon: LayersIcon,
    title: 'Integramos ao seu PDV',
    description: 'Integramos tudo com o seu PDV e meios de pagamento, sem operação paralela.',
    chip: 'Integração total',
    image: totemImg,
    alt: 'Totem de autoatendimento NEXTCARD integrado ao PDV de um restaurante',
  },
  {
    id: 4,
    icon: HeadsetIcon,
    title: 'Acompanhamos a instalação',
    description: 'Acompanhamos do planejamento até a instalação, com suporte especializado em cada etapa.',
    chip: 'Suporte especializado',
    image: catracasImg,
    alt: 'Catracas expedidora e receptora de comanda NEXTCARD instaladas',
  },
];

const WhyChooseUsV2 = () => {
  return (
    <section
      className="bg-background-4 dark:bg-background-9 relative isolate py-[60px] lg:py-[100px]"
      aria-label="Projeto personalizado">
      <BackgroundLines variant="grid" />
      <div className="main-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
            <div className="space-y-5">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-primary">
                  <SlidersIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
                  Projeto sob medida
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[500px]">Cada operação é diferente</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[460px]">
                  A solução também precisa ser. A <strong>NEXTCARD</strong> entende a sua operação, identifica os
                  equipamentos necessários, integra as soluções entre si e estrutura o projeto do início ao fim.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="bg-background-1 border-secondary/10 text-tagline-2 text-secondary inline-flex items-center gap-2 rounded-full border px-4 py-2 font-medium">
                    <StarIcon className="text-primary-500 size-4" />
                    100% personalizado
                  </span>
                  <span className="bg-background-1 border-secondary/10 text-tagline-2 text-secondary inline-flex items-center gap-2 rounded-full border px-4 py-2 font-medium">
                    <HeadsetIcon className="text-primary-500 size-4" />8+ anos de experiência
                  </span>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <Cta
                  href="/contato"
                  id="home_custom_project_cta"
                  location="home_custom_project"
                  className="btn btn-primary hover:btn-secondary btn-lg mt-4 inline-block">
                  <span>Fale com um especialista</span>
                </Cta>
              </RevealAnimation>
            </div>
          </div>

          <StackCards className="lg:col-span-7">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <StackCardItem key={step.id} index={index}>
                  <article className="bg-secondary relative isolate grid overflow-hidden rounded-[24px] text-white shadow-[0_30px_80px_rgba(35,35,31,0.28)] ring-1 ring-white/10 md:grid-cols-[1.15fr_0.85fr]">
                    <Image
                      src={bgImg}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(min-width: 1024px) 700px, 100vw"
                      className="-z-10 object-cover opacity-45"
                    />
                    <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />
                    <div className="flex flex-col gap-5 p-6 md:min-h-[300px] md:justify-between md:p-7">
                      <div className="flex items-center gap-4">
                        <span className="bg-primary-500 flex size-11 shrink-0 items-center justify-center rounded-full text-white">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="text-heading-6 flex-1 leading-tight font-medium text-white">{step.title}</h3>
                      </div>
                      <p className="text-[17px] leading-[1.6] text-white">{step.description}</p>
                    </div>
                    <div className="relative min-h-[190px] md:min-h-full">
                      <span className="text-tagline-2 absolute top-4 right-4 z-10 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 font-bold text-white backdrop-blur-xl">
                        {String(step.id).padStart(2, '0')}
                      </span>
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        sizes="(min-width: 1024px) 300px, 100vw"
                        className="object-cover"
                      />
                      <span className="text-tagline-2 absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3.5 py-2 font-medium text-white backdrop-blur-xl">
                        <Icon className="size-4" />
                        {step.chip}
                      </span>
                    </div>
                  </article>
                </StackCardItem>
              );
            })}
          </StackCards>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsV2;
