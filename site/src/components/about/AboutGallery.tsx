import catracasImg from '@public/images/ambientes/catracas-expedidora-e-receptora-de-comanda.webp';
import totensBancadaImg from '@public/images/ambientes/totens-autoatendimento-de-bancada-restaurante.webp';
import totensImg from '@public/images/ambientes/totens-autoatendimento-branco-e-preto-lanchonete.webp';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import { KioskIcon, TurnstileIcon } from '../shared/BrandIcons';
import FloatingCard from '../shared/FloatingCard';

const imageHover = 'transition-transform duration-700 ease-out group-hover:scale-105';

const AboutGallery = () => {
  return (
    <section className="relative isolate overflow-x-clip pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <BackgroundLines variant="vertical" />
      <div className="main-container space-y-12 md:space-y-16">
        <div className="mx-auto max-w-[620px] space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary mb-5">
              <KioskIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              Na prática
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Nossas soluções em ação</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>Totens, catracas e comandas funcionando juntos na operação dos nossos clientes.</p>
          </RevealAnimation>
        </div>
        <article className="grid grid-cols-12 gap-x-8 gap-y-8">
          <div className="relative col-span-12 flex md:col-span-6">
            <RevealAnimation delay={0.2} instant={true}>
              <figure className="group relative min-h-[320px] flex-1 overflow-hidden rounded-[20px]">
                <Image
                  src={totensImg}
                  alt="Totens de autoatendimento NEXTCARD branco e preto em lanchonete"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`object-cover object-[45%_center] ${imageHover}`}
                />
              </figure>
            </RevealAnimation>
            <FloatingCard
              icon={<KioskIcon />}
              title="Totem de autoatendimento"
              subtitle="Pedido e pagamento no ponto"
              className="hidden -bottom-6 left-4 sm:flex md:-left-8 xl:-left-14 2xl:-left-24"
            />
          </div>
          <div className="col-span-12 space-y-8 md:col-span-6">
            <div className="relative">
              <RevealAnimation delay={0.3} instant={true}>
                <figure className="group overflow-hidden rounded-[20px]">
                  <Image
                    src={catracasImg}
                    alt="Catracas expedidora e receptora de comanda NEXTCARD"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={`h-auto w-full object-cover ${imageHover}`}
                  />
                </figure>
              </RevealAnimation>
              <FloatingCard
                icon={<TurnstileIcon />}
                title="Catracas e comandas"
                subtitle="Entrada e saída integradas"
                slow
                direction="right"
                className="hidden -top-6 right-4 sm:flex md:-right-8 xl:-right-14 2xl:-right-24"
              />
            </div>
            <RevealAnimation delay={0.4} instant={true}>
              <figure className="group overflow-hidden rounded-[20px]">
                <Image
                  src={totensBancadaImg}
                  alt="Totens de autoatendimento de bancada NEXTCARD em restaurante"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`h-auto w-full object-cover ${imageHover}`}
                />
              </figure>
            </RevealAnimation>
          </div>
        </article>
      </div>
    </section>
  );
};

AboutGallery.displayName = 'AboutGallery';
export default AboutGallery;
