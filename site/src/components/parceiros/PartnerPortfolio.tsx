import catracasImg from '@public/images/ambientes/catracas-expedidora-e-receptora-de-comandas-nextcard.webp';
import comandasImg from '@public/images/ambientes/comandas-eletronicas-nextcard-sobre-a-mesa.webp';
import totemImg from '@public/images/ambientes/totens-autoatendimento-parede-pedestal-bancada-nextcard.webp';
import Image from 'next/image';
import { ComponentType } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import { KioskIcon, LayersIcon, TicketIcon, TurnstileIcon } from '../shared/BrandIcons';
import Cta from '../shared/tracking/Cta';

const products: {
  id: string;
  title: string;
  text: string;
  href: string;
  image: typeof totemImg;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    id: 'totem',
    title: 'Totens',
    text: 'Soluções para autoatendimento e autopagamento que agilizam pedidos, reduzem filas e aumentam a autonomia do consumidor.',
    href: '/totem-autoatendimento',
    image: totemImg,
    icon: KioskIcon,
  },
  {
    id: 'comandas',
    title: 'Comandas Eletrônicas',
    text: 'A comanda eletrônica vai muito além de registrar o consumo: ela traz mais controle, segurança e eficiência para toda a operação.',
    href: '/comandas-eletronicas',
    image: comandasImg,
    icon: TicketIcon,
  },
  {
    id: 'catracas',
    title: 'Catraca Expedidora e Receptora',
    text: 'Mais agilidade na entrada e na saída, controle das comandas, redução de perdas e eficiência para toda a operação.',
    href: '/catracas',
    image: catracasImg,
    icon: TurnstileIcon,
  },
];

const PartnerPortfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-background-3 dark:bg-background-7 relative isolate scroll-mt-24 py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="grid" />
      <div className="main-container space-y-12 md:space-y-14">
        <div className="mx-auto max-w-[680px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">
              <LayersIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              Portfólio de soluções
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Produtos que modernizam a operação dos seus clientes</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>Três frentes comerciais com aplicação prática, valor percebido e oportunidades em diversos segmentos.</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <RevealAnimation key={product.id} delay={0.2 + index * 0.1}>
                <div className="group bg-background-1 dark:bg-background-6 flex h-full flex-col justify-between gap-6 overflow-hidden rounded-[20px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(35,35,31,0.16)]">
                  <figure className="bg-background-3 dark:bg-background-5 relative aspect-square w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`${product.title} NEXTCARD`}
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
                      <h3 className="text-heading-6">{product.title}</h3>
                      <p className="text-tagline-2">{product.text}</p>
                    </div>
                    <Cta
                      href={product.href}
                      id={`parceiros_portfolio_${product.id}`}
                      location="parceiros_portfolio"
                      className="text-primary-500 hover:text-primary-600 text-tagline-2 inline-flex items-center gap-1 font-medium transition-all duration-300 group-hover:gap-2.5">
                      Saiba mais
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </Cta>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerPortfolio;
