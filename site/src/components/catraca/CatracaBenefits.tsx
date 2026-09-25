import { ComponentType } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import BackgroundMark from '../shared/BackgroundMark';
import {
  ClockIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  SlidersIcon,
  TrendingUpIcon,
  TurnstileIcon,
} from '../shared/BrandIcons';

const benefits: { id: number; icon: ComponentType<{ className?: string }>; title: string; text: string }[] = [
  {
    id: 1,
    icon: TrendingUpIcon,
    title: 'Menos evasão de receita',
    text: 'Diminuição da evasão: o cliente só sai depois de acertar o consumo da comanda.',
  },
  {
    id: 2,
    icon: TurnstileIcon,
    title: 'Controle preciso',
    text: 'Precisão no controle de acesso, com entrada e saída registradas.',
  },
  {
    id: 3,
    icon: ShieldCheckIcon,
    title: 'Mais segurança',
    text: 'Ambiente seguro para a sua equipe, para os clientes e para o seu patrimônio.',
  },
  {
    id: 4,
    icon: SlidersIcon,
    title: 'Gestão mais fácil',
    text: 'Processos automatizados, com mais facilidade na gestão e no desempenho do negócio.',
  },
  {
    id: 5,
    icon: ClockIcon,
    title: 'Fluxo ágil',
    text: 'Agilidade na entrada e na saída dos clientes, sem fila e sem confusão.',
  },
  {
    id: 6,
    icon: CreditCardIcon,
    title: 'Custos menores',
    text: 'Automatizar o controle reduz custos operacionais e a dependência de conferência manual.',
  },
];

const CatracaBenefits = () => {
  return (
    <section className="relative isolate py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="grid" />
      <BackgroundMark className="text-secondary dark:text-accent w-[420px]" position="right-[4%] bottom-[6%]" />
      <div className="main-container space-y-12 md:space-y-14">
        <div className="mx-auto max-w-[720px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">
              <ShieldCheckIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              Mais segurança
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Fluxo de clientes sob controle</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>
              O sistema oferece um ambiente seguro, automatiza processos, reduz custos e evita a perda de receita,
              proporcionando uma experiência tranquila aos consumidores.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ id, icon: Icon, title, text }, index) => (
            <RevealAnimation key={id} delay={(index % 3) * 0.1} start="top 95%">
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

export default CatracaBenefits;
