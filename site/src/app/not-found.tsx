import RevealAnimation from '@/components/animation/RevealAnimation';
import BackgroundMark from '@/components/shared/BackgroundMark';
import LinkButton from '@/components/ui/button/LinkButton';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Página não encontrada | NEXTCARD',
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <section className="section-reveal pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-40 xl:pt-60 xl:pb-52">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <div className="bg-background-3 dark:bg-background-5 dark:border-background-9 relative flex flex-col items-center justify-center overflow-hidden rounded-4xl border-[10px] border-white py-10 pr-2.5 text-center md:py-20 lg:py-[100px]">
              <BackgroundMark className="text-secondary dark:text-accent" position="right-[2%] bottom-[4%]" />
              <RevealAnimation delay={0.3}>
                <h1 className="text-[80px] leading-[1.1] font-medium md:text-[120px] lg:!text-[180px] xl:!text-[200px]">
                  404
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <h2 className="pt-6 pb-3">
                  Ops! <br />
                  Página não encontrada
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <p className="mb-10 md:mb-14">O endereço pode ter mudado. Vamos te ajudar a encontrar o caminho.</p>
              </RevealAnimation>
              <RevealAnimation delay={0.6} instant>
                <div>
                  <LinkButton href="/" className="btn btn-lg btn-primary hover:btn-secondary dark:hover:btn-accent">
                    Voltar para o início
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
};

export default page;
