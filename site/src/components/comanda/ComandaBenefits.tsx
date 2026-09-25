import { ComponentType } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import BackgroundMark from '../shared/BackgroundMark';
import {
  ClockIcon,
  LayersIcon,
  ShieldCheckIcon,
  SlidersIcon,
  StarIcon,
  TicketIcon,
  TrendingUpIcon,
  UsersIcon,
} from '../shared/BrandIcons';

const benefits: { id: number; icon: ComponentType<{ className?: string }>; title: string; text: string }[] = [
  {
    id: 1,
    icon: ClockIcon,
    title: 'Pedidos ágeis',
    text: 'Realização de pedidos rápida e conveniente, com um serviço mais veloz do início ao fim.',
  },
  {
    id: 2,
    icon: UsersIcon,
    title: 'Menos erros',
    text: 'Redução de erros de comunicação entre os setores e no atendimento.',
  },
  {
    id: 3,
    icon: TrendingUpIcon,
    title: 'Ticket médio maior',
    text: 'Mais vendas e aumento do ticket médio de consumo em cada visita.',
  },
  {
    id: 4,
    icon: LayersIcon,
    title: 'Integra ao seu PDV',
    text: 'Integração com sistemas PDV, sem operação paralela e sem retrabalho.',
  },
  {
    id: 5,
    icon: SlidersIcon,
    title: 'Gestão do consumo',
    text: 'Mais controle sobre o que cada cliente consome durante a jornada.',
  },
  {
    id: 6,
    icon: StarIcon,
    title: 'A cara do seu negócio',
    text: 'Comandas personalizadas com a identidade visual do seu estabelecimento.',
  },
  {
    id: 7,
    icon: ShieldCheckIcon,
    title: 'Garantia de 5 anos',
    text: 'Materiais de qualidade, com garantia contra quebra da base de ABS.',
  },
  {
    id: 8,
    icon: TicketIcon,
    title: 'Vários modelos',
    text: 'Diferentes tamanhos e tecnologias para cada tipo de operação.',
  },
];

const ComandaBenefits = () => {
  return (
    <section className="relative isolate py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="grid" />
      <BackgroundMark className="text-secondary dark:text-accent w-[420px]" position="right-[4%] bottom-[6%]" />
      <div className="main-container space-y-12 md:space-y-14">
        <div className="mx-auto max-w-[720px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">
              <TrendingUpIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />A melhor solução
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Mais eficiência, clientes encantados</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>
              Ofereça uma nova experiência de consumo aos seus clientes, com menos erros no atendimento e mais controle
              para a sua operação.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ id, icon: Icon, title, text }, index) => (
            <RevealAnimation key={id} delay={(index % 4) * 0.1} start="top 95%">
              <div className="h-full">
                <div className="group bg-background-1 dark:bg-background-6 border-secondary/10 hover:border-primary-500/40 h-full rounded-[20px] border p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(35,35,31,0.12)]">
                  <span className="bg-primary-500 mb-5 flex size-12 items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-heading-6 mb-2">{title}</h3>
                  <p className="text-tagline-1">{text}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComandaBenefits;
