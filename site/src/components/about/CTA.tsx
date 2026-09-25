import RevealAnimation from '@/components/animation/RevealAnimation';
import BackgroundLines from '@/components/shared/BackgroundLines';
import CTACheckList from '@/components/shared/cta/CTACheckList';
import LinkButton from '@/components/ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="relative isolate pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <BackgroundLines variant="grid" />
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mx-auto mb-3 max-w-[810px] text-center">Vamos conversar sobre a sua operação?</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto mb-8 lg:max-w-[430px]">
              Conte pra gente o desafio do seu negócio e receba um projeto de automação sob medida.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="text-center md:inline-block">
              <div>
                <LinkButton
                  href="/cotacao"
                  className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md text-tagline-2 mx-auto block w-full text-center md:mx-0 md:inline-block md:w-auto">
                  Solicitar cotação
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
          <CTACheckList
            listClass="gap-3"
            listAnimationDelay={0.3}
            className="mt-5 flex flex-wrap items-center justify-center gap-[42px] max-lg:gap-5 md:mt-8"
            ctaCheckListData={[
              {
                id: '1',
                text: 'Presente em todas as regiões do Brasil',
              },
              {
                id: '2',
                text: 'Suporte especializado',
              },
              {
                id: '3',
                text: 'Projetos sob medida',
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;
