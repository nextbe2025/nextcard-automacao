import bgImg from '@public/images/backgrounds/fundo-preto-vermelho-luzes-diagonais.webp';
import catracasImg from '@public/images/ambientes/catracas-expedidora-e-receptora-de-comandas-nextcard.webp';
import ambienteImg from '@public/images/ambientes/ambiente-restaurante-moderno-iluminacao-vermelha.webp';
import totemImg from '@public/images/ambientes/totem-autoatendimento-pedestal-restaurante.webp';
import totensImg from '@public/images/ambientes/totens-autoatendimento-de-bancada-restaurante.webp';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { StackCardItem, StackCards } from '../animation/StackCards';
import BackgroundLines from './BackgroundLines';
import { CheckCircleIcon, TicketIcon } from './BrandIcons';
import Cta from './tracking/Cta';

type Note = {
  id: number;
  title: string;
  items: string[];
  photo: StaticImageData;
  alt: string;
  caption: string;
};

const notes: Note[] = [
  {
    id: 1,
    title: 'Comanda de papel',
    items: ['Rasga, mancha ou some', 'Letra difícil de entender', 'Pedido errado na mesa'],
    photo: ambienteImg,
    alt: 'Ambiente de restaurante moderno, sem comandas de papel na operação',
    caption: 'Fácil de perder',
  },
  {
    id: 2,
    title: 'Conta na calculadora',
    items: ['Soma feita na mão, sob pressão', 'Erro de conta gera discussão', 'Cliente espera mais pra pagar'],
    photo: totensImg,
    alt: 'Totens de autoatendimento de bancada NEXTCARD substituindo a conta na calculadora',
    caption: 'Sujeita a erro',
  },
  {
    id: 3,
    title: 'Planilha paralela',
    items: ['Caderno ou Excel por fora do sistema', 'Dado que não bate com o caixa', 'Ninguém confia no número'],
    photo: totemImg,
    alt: 'Totem de autoatendimento NEXTCARD integrado ao PDV, sem planilha paralela',
    caption: 'Sem controle real',
  },
  {
    id: 4,
    title: 'Fechamento de caixa manual',
    items: ['Conferência demorada no fim do dia', 'Diferença de caixa sem explicação', 'Fecha tarde, todo dia'],
    photo: catracasImg,
    alt: 'Catracas expedidora e receptora de comanda NEXTCARD, fechamento de caixa automático',
    caption: 'Toda noite de novo',
  },
];

// Ruled notebook lines: 32px rhythm, aligned with the 32px checklist rows.
const paperStyle = {
  backgroundColor: '#fbf5e4',
  backgroundImage:
    'repeating-linear-gradient(to bottom, transparent 0, transparent 15px, rgba(70,110,170,0.22) 15px, rgba(70,110,170,0.22) 16px, transparent 16px, transparent 32px)',
} as const;

const RedCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden className="text-primary-500 size-6 shrink-0">
    <path d="M3.5 12.8 9 18.5 20.5 5" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface PaperNotesProps {
  ctaHref?: string;
  ctaId?: string;
  location?: string;
}

const PaperNotes = ({
  ctaHref = '/contato',
  ctaId = 'paper_notes_cta',
  location = 'paper_notes',
}: PaperNotesProps) => {
  return (
    <section className="bg-background-3 dark:bg-background-7 relative isolate py-[60px] lg:py-[100px]" aria-label="Chega de papelzinho">
      <BackgroundLines variant="vertical" />
      <div className="main-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
            <div className="space-y-5">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-primary">
                  <TicketIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
                  Fim do papelzinho
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[480px]">Chega de anotar no papelzinho</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[460px]">
                  Comanda de papel, conta na calculadora e fechamento de caixa na mão dão erro e atrasam o atendimento. A{' '}
                  <strong>NEXTCARD</strong> tira a operação do papel: do pedido ao pagamento, tudo integrado.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <Cta
                  href={ctaHref}
                  id={ctaId}
                  location={location}
                  className="btn btn-primary hover:btn-secondary btn-lg mt-4 inline-block">
                  <span>Fale com um especialista</span>
                </Cta>
              </RevealAnimation>
            </div>
          </div>

          <StackCards messy className="lg:col-span-7">
            {notes.map((note, index) => (
              <StackCardItem key={note.id} index={index}>
                <article
                  className="relative rounded-[6px] text-[#2b2a26] shadow-[0_22px_50px_rgba(35,35,31,0.22),0_2px_0_rgba(0,0,0,0.05)]"
                  style={paperStyle}>
                  {/* fita adesiva */}
                  <span
                    aria-hidden
                    className="absolute -top-3 left-1/2 z-20 h-7 w-24 -translate-x-1/2 -rotate-3 border border-black/5 bg-white/60 shadow-sm backdrop-blur-[2px]"
                  />
                  {/* margem vermelha e furos do caderno */}
                  <span aria-hidden className="bg-primary-500/35 absolute top-0 bottom-0 left-12 w-px" />
                  {[22, 50, 78].map((top) => (
                    <span
                      key={top}
                      aria-hidden
                      className="bg-background-3 absolute left-3 size-3 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)]"
                      style={{ top: `${top}%` }}
                    />
                  ))}
                  {/* etiqueta com o número da etapa */}
                  <span className="text-tagline-1 bg-primary-500 absolute -top-3 -right-3 z-20 flex size-11 rotate-12 items-center justify-center rounded-full font-bold text-white shadow-lg">
                    {String(note.id).padStart(2, '0')}
                  </span>

                  <div className="grid md:grid-cols-[1fr_auto] md:items-center">
                    <div className="pt-7 pr-6 pb-7 pl-[68px]">
                      <h3
                        className="mb-4 min-h-9 text-[32px] leading-9 font-bold text-[#2b2a26]"
                        style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                        {note.title}
                      </h3>
                      <ul>
                        {note.items.map((item) => (
                          <li
                            key={item}
                            className="flex min-h-8 items-center gap-2.5 text-[17px] leading-8 text-[#2b2a26]">
                            <RedCheck />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* foto colada com fita */}
                    <figure
                      className={`relative mx-6 mb-7 hidden w-[190px] shrink-0 bg-white p-2 pb-8 shadow-[0_10px_24px_rgba(35,35,31,0.25)] md:block ${
                        index % 2 === 0 ? 'rotate-3' : '-rotate-3'
                      }`}>
                      <span
                        aria-hidden
                        className="absolute -top-2.5 left-1/2 z-10 h-5 w-16 -translate-x-1/2 rotate-2 border border-black/5 bg-white/60 shadow-sm"
                      />
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image src={note.photo} alt={note.alt} fill sizes="190px" className="object-cover" />
                      </div>
                      <figcaption
                        className="absolute inset-x-0 bottom-1.5 text-center text-xl leading-none font-bold text-[#2b2a26]"
                        style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                        {note.caption}
                      </figcaption>
                    </figure>
                  </div>
                </article>
              </StackCardItem>
            ))}

            {/* fechamento: o "depois", no estilo tecnológico da marca */}
            <StackCardItem index={notes.length}>
              <article className="bg-secondary relative isolate overflow-hidden rounded-[24px] p-8 text-white shadow-[0_30px_80px_rgba(35,35,31,0.35)] ring-1 ring-white/10 md:p-10">
                <Image src={bgImg} alt="" aria-hidden fill sizes="700px" className="-z-10 object-cover opacity-50" />
                <div aria-hidden className="absolute inset-0 -z-10 bg-black/45" />
                <div className="flex items-center gap-4">
                  <span className="bg-primary-500 flex size-11 shrink-0 items-center justify-center rounded-full text-white">
                    <CheckCircleIcon className="size-5" />
                  </span>
                  <h3 className="text-heading-6 leading-tight font-medium text-white">Com a NEXTCARD, tudo integrado</h3>
                </div>
                <p className="mt-5 max-w-[520px] text-[17px] leading-[1.6] text-white">
                  Pedido, consumo e pagamento no mesmo fluxo, sem etapas manuais e sem divergência no fechamento de
                  caixa. Menos papel, menos erro, mais controle da operação.
                </p>
              </article>
            </StackCardItem>
          </StackCards>
        </div>
      </div>
    </section>
  );
};

export default PaperNotes;
