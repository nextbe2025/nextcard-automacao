import catracasImg from '@public/images/ambientes/catracas-expedidora-e-receptora-de-comandas-nextcard.webp';
import comandasImg from '@public/images/ambientes/comandas-eletronicas-nextcard-sobre-a-mesa.webp';
import totemImg from '@public/images/ambientes/totens-autoatendimento-parede-pedestal-bancada-nextcard.webp';
import Image from 'next/image';
import { ComponentType } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import { KioskIcon, LayersIcon, TicketIcon, TurnstileIcon } from '../shared/BrandIcons';
import Cta from '../shared/tracking/Cta';

const solutions: {
  id: string;
  title: string;
  description: string;
  href: string;
  image: typeof totemImg;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    id: 'totem',
    title: 'Totens',
    description:
      'Autoatendimento e autopagamento: mais autonomia para o cliente, redução de filas e agilidade nos pedidos.',
    href: '/totem-autoatendimento',
    image: totemImg,
    icon: KioskIcon,
  },
  {
    id: 'catracas',
    title: 'Catraca Expedidora e Receptora',
    description: 'Automatize a entrada, a entrega de comandas e o controle da saída da operação.',
    href: '/catracas',
    image: catracasImg,
    icon: TurnstileIcon,
  },
  {
    id: 'comandas',
    title: 'Comandas Eletrônicas',
    description: 'Mais controle e segurança durante toda a jornada de consumo.',
    href: '/comandas-eletronicas',
    image: comandasImg,
    icon: TicketIcon,
  },
];

const Solutions = () => {
  return (
    <section
      id="solucoes"
      className="bg-background-1 dark:bg-background-5 relative isolate py-[50px] lg:py-[100px]">
      <BackgroundLines variant="grid" />
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">
              <LayersIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              Nossas soluções
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[600px]">Três linhas, um ecossistema</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[560px]">
              Totem, catracas e comandas trabalham juntos: um único ecossistema para a jornada completa do cliente.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <RevealAnimation key={solution.id} delay={0.2 + index * 0.1}>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <div className="group bg-background-3 dark:bg-background-7 flex h-full flex-col justify-between gap-6 overflow-hidden rounded-[20px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(35,35,31,0.16)]">
                  <figure className="bg-background-1 dark:bg-background-5 relative aspect-square w-full overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={`${solution.title} NEXTCARD`}
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      placeholder="blur"
                    />
                    <span className="bg-primary-500 absolute top-4 left-4 flex size-11 items-center justify-center rounded-full text-white shadow-lg">
                      <Icon className="size-5" />
                    </span>
                  </figure>
                  <div className="flex flex-1 flex-col justify-between gap-6 px-8 pb-8">
                    <div className="space-y-3">
                      <h3 className="text-heading-6">{solution.title}</h3>
                      <p className="text-tagline-2">{solution.description}</p>
                    </div>
                    <Cta
                      href={solution.href}
                      id={`solution_card_${solution.id}`}
                      location="home_solutions"
                      className="text-primary-500 hover:text-primary-600 text-tagline-2 inline-flex items-center gap-1 font-medium transition-all duration-300 group-hover:gap-2.5">
                      Saiba mais
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </Cta>
                  </div>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
        <RevealAnimation delay={0.7}>
          <div className="mt-10 text-center">
            <Cta
              href="/cotacao"
              id="home_solutions_cta"
              location="home_solutions"
              className="btn btn-primary hover:btn-secondary btn-lg">
              <span>Fale sobre a sua operação</span>
            </Cta>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Solutions;
