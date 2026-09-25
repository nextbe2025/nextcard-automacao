import { ComponentType } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import BackgroundMark from '../shared/BackgroundMark';
import {
  ClockIcon,
  CreditCardIcon,
  HeartIcon,
  LayersIcon,
  MapPinIcon,
  SlidersIcon,
  StarIcon,
  TrendingUpIcon,
} from '../shared/BrandIcons';

const benefits: { id: number; icon: ComponentType<{ className?: string }>; title: string; text: string }[] = [
  {
    id: 1,
    icon: TrendingUpIcon,
    title: 'Mais vendas',
    text: 'Aumento de vendas e do ticket médio, com o cliente escolhendo com calma no próprio ritmo.',
  },
  {
    id: 2,
    icon: HeartIcon,
    title: 'Clientes satisfeitos',
    text: 'Maior satisfação e alcance de novos clientes, com um atendimento moderno e sem espera.',
  },
  {
    id: 3,
    icon: CreditCardIcon,
    title: 'Menos custo',
    text: 'Redução de custos operacionais ao distribuir o atendimento entre os totens e o caixa.',
  },
  {
    id: 4,
    icon: SlidersIcon,
    title: 'Processos automáticos',
    text: 'Otimização e automação de processos, do pedido ao pagamento.',
  },
  {
    id: 5,
    icon: LayersIcon,
    title: 'Fácil integração',
    text: 'Integração simples com o sistema NEXTBE e com o seu PDV, sem operação paralela.',
  },
  {
    id: 6,
    icon: ClockIcon,
    title: 'Filas menores',
    text: 'Redução das filas de espera nos caixas, com mais agilidade em cada pedido.',
  },
  {
    id: 7,
    icon: StarIcon,
    title: 'A cara do seu negócio',
    text: 'Personalização com a identidade visual do seu estabelecimento.',
  },
  {
    id: 8,
    icon: MapPinIcon,
    title: 'Entrega em todo o Brasil',
    text: 'Levamos o projeto até você, em todas as regiões do país.',
  },
];

const TotemBenefits = () => {
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
            <h2>Mais vendas, menos filas</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>
              Se você procura soluções práticas e eficientes para otimizar o atendimento ao seu público com
              autoatendimento ou autopagamento, você está no lugar certo.
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

export default TotemBenefits;
