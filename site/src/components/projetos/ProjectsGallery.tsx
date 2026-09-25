import bgImg from '@public/images/backgrounds/fundo-preto-vermelho-luzes-diagonais.webp';
import catraca from '@public/images/projetos/projeto-catraca-expedidora-posto-apolo-araquari-rio-grande-do-sul.webp';
import comandas from '@public/images/projetos/projeto-comandas-eletronicas-panificadora-divipan-distrito-federal.webp';
import hotDog from '@public/images/projetos/projeto-totens-autoatendimento-hot-dog-expresso-parana.webp';
import prensadao from '@public/images/projetos/projeto-totens-autoatendimento-o-prensadao-parana.webp';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import Cta from '../shared/tracking/Cta';
import { KioskIcon, MapPinIcon, TicketIcon, TurnstileIcon } from '../shared/BrandIcons';
import { ComponentType } from 'react';

type Item = {
  name: string;
  place: string;
  product: string;
  icon: ComponentType<{ className?: string }>;
  image: StaticImageData;
  alt: string;
};

const items: Item[] = [
  {
    name: 'Hot Dog Expresso',
    place: 'Paraná',
    product: 'Totens de autoatendimento',
    icon: KioskIcon,
    image: hotDog,
    alt: 'Totens de autoatendimento NEXTCARD personalizados para o Hot Dog Expresso',
  },
  {
    name: 'O Prensadão',
    place: 'Paraná',
    product: 'Totens de autoatendimento',
    icon: KioskIcon,
    image: prensadao,
    alt: 'Totens de autoatendimento NEXTCARD personalizados para O Prensadão',
  },
  {
    name: 'Panificadora Divipan',
    place: 'Distrito Federal',
    product: 'Comandas eletrônicas',
    icon: TicketIcon,
    image: comandas,
    alt: 'Comandas eletrônicas NEXTCARD personalizadas para a Panificadora Divipan',
  },
  {
    name: 'Posto Apolo Araquari',
    place: 'Rio Grande do Sul',
    product: 'Catraca expedidora',
    icon: TurnstileIcon,
    image: catraca,
    alt: 'Catraca expedidora de comandas NEXTCARD no Posto Apolo Araquari',
  },
];

const ProjectsGallery = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 relative isolate py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="vertical" />
      <div className="main-container space-y-12 md:space-y-14">
        <div className="mx-auto max-w-[680px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">
              <KioskIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              Na prática
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>A cara de cada cliente</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>Totens, comandas e catracas personalizados com a identidade visual de cada estabelecimento.</p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-40 pt-28 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-6 lg:pt-32">
          {items.map(({ name, place, product, icon: Icon, image, alt }, index) => (
            <RevealAnimation key={name} delay={(index % 4) * 0.1} start="top 95%">
              <div className="h-full">
                <div className="group bg-background-1 dark:bg-background-6 border-secondary/10 hover:border-primary-500/40 flex h-full flex-col rounded-[30px] border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(35,35,31,0.16)]">
                  <div className="pointer-events-none relative z-10 -mx-[12.5%] -mt-[47.5%] aspect-square w-[125%]">
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 55vw, 110vw"
                      className="object-contain drop-shadow-[0_24px_24px_rgba(35,35,31,0.25)] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <span className="text-tagline-2 text-primary-500 inline-flex items-center gap-1.5 font-medium">
                      <Icon className="size-4" />
                      {product}
                    </span>
                    <h3 className="text-heading-6">{name}</h3>
                    <p className="text-tagline-2 flex items-center gap-1.5">
                      <MapPinIcon className="size-3.5" />
                      {place}
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.1} start="top 92%">
          <div className="bg-secondary relative isolate overflow-hidden rounded-[24px] px-6 py-10 text-white md:px-12 md:py-12">
            <Image src={bgImg} alt="" aria-hidden fill sizes="1240px" className="-z-10 object-cover object-right" />
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <h3 className="text-heading-4 text-white">Cada projeto começa com uma conversa</h3>
                <p className="max-w-[640px] text-white/90">
                  Conte como funciona a sua operação e desenhamos o projeto ideal, do diagnóstico à instalação.
                </p>
              </div>
              <Cta
                href="#cotacao"
                id="projetos_galeria_cta"
                location="projetos_galeria"
                className="btn btn-primary hover:btn-white btn-lg shrink-0">
                <span>Falar com um especialista</span>
              </Cta>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ProjectsGallery;
