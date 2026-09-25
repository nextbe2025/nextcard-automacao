import { ComponentType } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import { CheckCircleIcon, TicketIcon, TurnstileIcon } from '../shared/BrandIcons';

const steps: { id: number; icon: ComponentType<{ className?: string }>; title: string; text: string }[] = [
  {
    id: 1,
    icon: TurnstileIcon,
    title: 'Entrada',
    text: 'O cliente chega, a catraca expedidora libera a passagem e entrega a comanda.',
  },
  {
    id: 2,
    icon: TicketIcon,
    title: 'Consumo',
    text: 'Tudo o que ele consome fica registrado na comanda, do início ao fim.',
  },
  {
    id: 3,
    icon: CheckCircleIcon,
    title: 'Saída',
    text: 'Na saída, a catraca receptora recebe a comanda e libera a passagem após o pagamento.',
  },
];

const CatracaFlow = () => {
  return (
    <section className="relative isolate py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="grid" />
      <div className="main-container space-y-12 md:space-y-14">
        <div className="mx-auto max-w-[680px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">
              <TurnstileIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              Como funciona
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Da entrada à saída</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>Um caminho simples para o cliente e muito mais controle para a sua operação.</p>
          </RevealAnimation>
        </div>
        <ol className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map(({ id, icon: Icon, title, text }, index) => (
            <RevealAnimation key={id} delay={index * 0.12} start="top 95%">
              <li className="h-full">
                <div className="group bg-secondary relative h-full overflow-hidden rounded-[20px] p-7 text-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(35,35,31,0.25)]">
                  <div
                    aria-hidden
                    className="bg-primary-500/30 absolute -top-16 -right-16 size-44 rounded-full blur-3xl"
                  />
                  <div className="relative mb-6 flex items-center justify-between">
                    <span className="bg-primary-500 flex size-12 items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:scale-110">
                      <Icon className="size-6" />
                    </span>
                    <span className="text-heading-4 text-white/25">0{id}</span>
                  </div>
                  <h3 className="text-heading-6 relative mb-2 text-white">{title}</h3>
                  <p className="text-tagline-1 relative text-white/85">{text}</p>
                </div>
              </li>
            </RevealAnimation>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CatracaFlow;
