import { ComponentType } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import BackgroundMark from '../shared/BackgroundMark';
import { CreditCardIcon, GlobeIcon, HeadsetIcon, StarIcon, TrendingUpIcon } from '../shared/BrandIcons';

const modalities: {
  id: number;
  icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
  tag: string;
}[] = [
  {
    id: 1,
    icon: CreditCardIcon,
    title: 'Indique e ganhe',
    text: 'Indique clientes para a NEXTCARD e receba comissionamento sobre as vendas geradas pelas suas indicações.',
    tag: 'Modalidade: indicação',
  },
  {
    id: 2,
    icon: TrendingUpIcon,
    title: 'Revenda com liberdade',
    text: 'Compre direto da fábrica, defina sua estratégia comercial e revenda com margens competitivas.',
    tag: 'Modalidade: revenda',
  },
  {
    id: 3,
    icon: GlobeIcon,
    title: 'Atuação nacional',
    text: 'Atenda clientes em qualquer estado e encontre oportunidades em todo o Brasil.',
    tag: 'Para as duas modalidades',
  },
  {
    id: 4,
    icon: HeadsetIcon,
    title: 'Suporte especializado',
    text: 'Conte com apoio para apresentar soluções, estruturar propostas e conduzir negociações.',
    tag: 'Para as duas modalidades',
  },
];

const PartnerModalities = () => {
  return (
    <section className="relative isolate py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="grid" />
      <BackgroundMark className="text-secondary dark:text-accent w-[420px]" position="right-[4%] bottom-[6%]" />
      <div className="main-container space-y-12 md:space-y-14">
        <div className="mx-auto max-w-[680px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">
              <StarIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              Uma parceria para crescer junto
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>
              Você abre caminhos. A <strong>NEXTCARD</strong> entrega a estrutura.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>
              Escolha a modalidade que combina com o seu negócio. Você pode indicar oportunidades e receber
              comissionamento ou revender nossas soluções diretamente, com condições comerciais competitivas.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modalities.map(({ id, icon: Icon, title, text, tag }, index) => (
            <RevealAnimation key={id} delay={(index % 4) * 0.1} start="top 95%">
              <div className="h-full">
                <div className="group bg-background-1 dark:bg-background-6 border-secondary/10 hover:border-primary-500/40 flex h-full flex-col rounded-[20px] border p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(35,35,31,0.12)]">
                  <span className="bg-primary-500 mb-5 flex size-12 items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-heading-6 mb-2">{title}</h3>
                  <p className="text-tagline-1 flex-1">{text}</p>
                  <span className="text-tagline-3 border-secondary/10 bg-background-2 dark:bg-background-7 text-secondary/70 dark:text-accent/70 mt-5 inline-flex w-fit items-center rounded-full border px-3 py-1.5 font-medium uppercase">
                    {tag}
                  </span>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerModalities;
