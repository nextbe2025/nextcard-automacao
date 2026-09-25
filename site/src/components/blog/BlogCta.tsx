import bgImg from '@public/images/backgrounds/fundo-concreto-escuro-neon-vermelho.webp';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import Cta from '../shared/tracking/Cta';

const BlogCta = ({ location = 'blog_cta' }: { location?: string }) => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px]">
      <div className="main-container">
        <RevealAnimation delay={0.1} start="top 92%">
          <div className="bg-secondary relative isolate overflow-hidden rounded-[28px] px-6 py-12 text-center md:px-12 md:py-16">
            <Image src={bgImg} alt="" aria-hidden fill sizes="1240px" className="-z-10 object-cover opacity-70" />
            <div aria-hidden className="absolute inset-0 -z-10 bg-black/40" />
            <div className="mx-auto max-w-[620px] space-y-4">
              <h2 className="text-white">Quer aplicar isso na sua operação?</h2>
              <p className="text-white/90">
                Fale com um especialista da <strong>NEXTCARD</strong> e receba uma proposta sob medida para o seu
                negócio.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <Cta
                  href="/contato"
                  id={`${location}_contato`}
                  location={location}
                  className="btn btn-primary hover:btn-white btn-lg">
                  <span>Falar com um especialista</span>
                </Cta>
                <Cta
                  href="/projetos"
                  id={`${location}_projetos`}
                  location={location}
                  className="btn btn-lg border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20">
                  <span>Ver projetos</span>
                </Cta>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default BlogCta;
