import catracasImg from '@public/images/ambientes/catracas-expedidora-e-receptora-de-comanda.webp';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import { EyeIcon, SlidersIcon, StarIcon, TargetIcon } from '../shared/BrandIcons';
import FloatingCard from '../shared/FloatingCard';

const OurMission = () => {
  return (
    <section className="relative isolate overflow-hidden pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <BackgroundLines variant="vertical" />
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-0 xl:gap-x-28">
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-primary mb-5">
                  <TargetIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
                  Nossa missão
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2>Multiplicar o poder das empresas</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p>
                  Desenvolver soluções inovadoras e personalizadas de Automação Comercial para multiplicar o poder das
                  empresas, otimizar processos e melhorar os seus resultados.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.5}>
              <div className="border-secondary/10 mt-10 flex items-start gap-4 border-t pt-8">
                <span className="bg-secondary flex size-12 shrink-0 items-center justify-center rounded-full text-white">
                  <EyeIcon className="size-6" />
                </span>
                <div>
                  <h3 className="text-heading-6 mb-1">Nossa visão</h3>
                  <p>
                    Ser referência no mercado de Automação Comercial através de pessoas, negócios, soluções e melhores
                    resultados para nossos clientes.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[560px]">
              <RevealAnimation delay={0.4}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-[20px]">
                  <Image
                    src={catracasImg}
                    alt="Catracas expedidora e receptora de comanda NEXTCARD"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </figure>
              </RevealAnimation>
              <FloatingCard
                icon={<SlidersIcon />}
                title="Projetos sob medida"
                subtitle="Do diagnóstico à instalação"
                className="hidden -bottom-6 left-4 sm:flex md:-left-8 xl:-left-14 2xl:-left-24"
              />
              <FloatingCard
                icon={<StarIcon />}
                title="Referência em automação"
                subtitle="Pessoas, negócios e resultados"
                slow
                direction="right"
                className="hidden -top-6 right-4 sm:flex md:-right-8 xl:-right-14 2xl:-right-24"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

OurMission.displayName = 'OurMission';
export default OurMission;
