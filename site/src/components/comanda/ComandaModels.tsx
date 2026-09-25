import bgImg from '@public/images/backgrounds/fundo-preto-vermelho-luzes-diagonais.webp';
import sizesImg from '@public/images/produtos/comandas-eletronicas-nextcard-tres-tamanhos.webp';
import Image from 'next/image';
import { ComponentType } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import { CheckCircleIcon, CpuIcon, LayersIcon, ShieldCheckIcon, TicketIcon, ZapIcon } from '../shared/BrandIcons';
import FloatingCard from '../shared/FloatingCard';
import Cta from '../shared/tracking/Cta';

const models = [
  {
    name: 'Comanda Eletrônica 9 × 7',
    tag: 'Compacta',
    text: 'Indicada para bares, cafeterias, hamburguerias e pizzarias.',
    note: 'Garantia de 5 anos contra quebra da base de ABS.',
  },
  {
    name: 'Comanda Eletrônica 14 × 8',
    tag: 'Intermediária',
    text: 'Indicada para padarias e restaurantes.',
  },
  {
    name: 'Comanda Eletrônica 15 × 10',
    tag: 'Grande',
    text: 'Indicada para açaiterias, conveniências e temakerias.',
  },
  {
    name: 'Cartão Comanda',
    tag: '54 × 86 mm',
    text: 'Produzido em PVC laminado, com o processo fabril de um cartão de crédito.',
  },
];

const technologies: { icon: ComponentType<{ className?: string }>; title: string; text: string }[] = [
  {
    icon: LayersIcon,
    title: 'Código de barras',
    text: 'Leitura simples e rápida, compatível com os leitores do mercado.',
  },
  { icon: ZapIcon, title: 'QR Code', text: 'Identificação prática, direto na comanda.' },
  { icon: CpuIcon, title: 'Chip de proximidade', text: 'RFID ou Mifare, com leitura por aproximação.' },
  { icon: ShieldCheckIcon, title: 'Chip antifurto', text: 'Mais segurança para o seu patrimônio.' },
];

const ComandaModels = () => {
  return (
    <section
      id="modelos"
      className="bg-background-3 dark:bg-background-7 relative isolate scroll-mt-24 py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="vertical" />
      <div className="main-container space-y-12 md:space-y-16">
        <div className="mx-auto max-w-[680px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">
              <TicketIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              Linha NEXTCARD
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Nossos modelos</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>Três tamanhos de comanda eletrônica e o cartão comanda, para cada tipo de operação.</p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <RevealAnimation delay={0.1} start="top 90%">
            <div className="relative lg:col-span-5">
              <div className="from-background-2 to-background-1 border-secondary/10 relative flex items-center justify-center rounded-[28px] border bg-gradient-to-b px-6 py-10 sm:px-10">
                <Image
                  src={sizesImg}
                  alt="Comandas eletrônicas NEXTCARD nos tamanhos 9 × 7, 14 × 8 e 15 × 10"
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="h-auto w-full max-w-[460px] object-contain"
                />
              </div>
              <FloatingCard
                icon={<ShieldCheckIcon />}
                title="Garantia de 5 anos"
                subtitle="Base de ABS"
                slow
                direction="left"
                className="-right-2 -bottom-6 hidden sm:flex xl:-right-10"
              />
            </div>
          </RevealAnimation>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {models.map((model, index) => (
              <RevealAnimation key={model.name} delay={(index % 2) * 0.1} start="top 95%">
                <div className="h-full">
                  <div className="group bg-background-1 dark:bg-background-6 border-secondary/10 hover:border-primary-500/40 flex h-full flex-col gap-3 rounded-[20px] border p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(35,35,31,0.12)]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="bg-primary-500 flex size-11 items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:scale-110">
                        <TicketIcon className="size-5" />
                      </span>
                      <span className="text-tagline-3 border-secondary/10 bg-background-2 text-secondary rounded-full border px-3 py-1.5 font-medium">
                        {model.tag}
                      </span>
                    </div>
                    <h3 className="text-heading-6">{model.name}</h3>
                    <p className="text-tagline-1">{model.text}</p>
                    {model.note && (
                      <p className="text-tagline-2 text-secondary mt-auto flex items-start gap-2 pt-1 font-medium">
                        <CheckCircleIcon className="text-primary-500 mt-0.5 size-4 shrink-0" />
                        {model.note}
                      </p>
                    )}
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        <RevealAnimation delay={0.1} start="top 92%">
          <div className="bg-secondary relative isolate overflow-hidden rounded-[24px] px-6 py-10 text-white md:px-12 md:py-14">
            <Image src={bgImg} alt="" aria-hidden fill sizes="1240px" className="-z-10 object-cover opacity-60" />
            <div aria-hidden className="absolute inset-0 -z-10 bg-black/35" />
            <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <h3 className="text-heading-4 text-white">Tecnologias disponíveis</h3>
                <p className="text-white/90">Escolha a leitura que combina com a sua operação.</p>
              </div>
              <Cta
                href="#cotacao"
                id="comanda_tecnologias_cta"
                location="comanda_modelos"
                className="btn btn-primary hover:btn-white btn-lg">
                <span>Solicitar cotação</span>
              </Cta>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {technologies.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-tagline-1 font-medium text-white">{title}</p>
                    <p className="text-[16px] leading-[1.5] text-white/85">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ComandaModels;
