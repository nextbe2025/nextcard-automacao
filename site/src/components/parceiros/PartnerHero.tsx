import RevealAnimation from '../animation/RevealAnimation';
import SplitHeading from '../animation/SplitHeading';
import { GlobeIcon, HeadsetIcon, LayersIcon } from '../shared/BrandIcons';
import Cta from '../shared/tracking/Cta';
import bgImg from '@public/images/ambientes/ambiente-restaurante-moderno-iluminacao-vermelha.webp';
import Image from 'next/image';

const stats = [
  { icon: LayersIcon, title: '2 modalidades', text: 'Indicação ou revenda' },
  { icon: GlobeIcon, title: 'Brasil inteiro', text: 'Atuação em qualquer estado' },
  { icon: HeadsetIcon, title: 'Suporte próximo', text: 'Do comercial ao pós-venda' },
];

const PartnerHero = () => {
  return (
    <section className="overflow-x-clip pt-[90px] pb-12 xl:pb-[100px]">
      <div className="relative mx-auto max-w-[600px] md:max-w-[700px] lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
        <div className="relative z-10 mt-4 overflow-hidden rounded-4xl border-white sm:border-[10px]">
          <div aria-hidden className="bg-secondary absolute inset-0 z-0">
            <Image src={bgImg} alt="" fill sizes="100vw" className="object-cover opacity-80" priority />
          </div>
          <div
            aria-hidden
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(35,35,31,0.85) 0%, rgba(35,35,31,0.7) 45%, rgba(200,33,39,0.4) 100%)',
            }}
          />
          <div className="relative z-20 flex flex-col items-center px-6 pt-[90px] pb-14 text-center md:pt-[120px] md:pb-16">
            <div className="mb-8 space-y-5 sm:mb-10">
              <RevealAnimation delay={0.1}>
                <span className="badge text-secondary bg-white">
                  <LayersIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
                  Programa de Parceiros <strong>NEXTCARD</strong>
                </span>
              </RevealAnimation>
              <div className="space-y-3">
                <SplitHeading
                  text="Transforme oportunidades em novas receitas"
                  className="mx-auto max-w-[360px] text-white sm:max-w-[520px] md:max-w-[680px] xl:max-w-[820px]"
                />
                <RevealAnimation delay={0.6}>
                  <p className="text-accent/80 mx-auto max-w-[350px] sm:max-w-[560px] xl:max-w-[640px]">
                    Escolha como quer atuar: revenda diretamente as soluções NEXTCARD ou indique clientes e receba
                    comissionamento pelas vendas geradas. Conte com suporte especializado e um portfólio pronto para
                    crescer em todo o Brasil.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <RevealAnimation delay={0.8}>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Cta
                  href="#cotacao"
                  id="parceiros_hero_quero_ser_parceiro"
                  location="parceiros_hero"
                  className="btn btn-primary hover:btn-white btn-lg">
                  <span>Quero ser parceiro</span>
                </Cta>
                <Cta
                  href="#portfolio"
                  id="parceiros_hero_conhecer_solucoes"
                  location="parceiros_hero"
                  className="btn btn-white-v2 hover:btn-primary btn-lg">
                  <span>Conhecer as soluções</span>
                </Cta>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.9}>
              <div className="mt-12 grid grid-cols-1 gap-8 border-t border-white/15 pt-8 sm:grid-cols-3 sm:gap-10">
                {stats.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex flex-col items-center gap-2 sm:items-start sm:text-left">
                    <span className="bg-primary-500 flex size-10 items-center justify-center rounded-full text-white">
                      <Icon className="size-5" />
                    </span>
                    <p className="text-tagline-1 font-medium text-white">{title}</p>
                    <p className="text-tagline-2 text-white/70">{text}</p>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerHero;
