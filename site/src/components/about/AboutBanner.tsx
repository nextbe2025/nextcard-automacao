import bannerImg from '@public/images/ambientes/ambiente-restaurante-moderno-iluminacao-vermelha.webp';
import Image from 'next/image';
import Parallax from '../animation/Parallax';
import RevealAnimation from '../animation/RevealAnimation';
import SplitHeading from '../animation/SplitHeading';
import { CalendarIcon, KioskIcon } from '../shared/BrandIcons';
import FloatingCard from '../shared/FloatingCard';

const AboutBanner = () => {
  return (
    <section className="pt-[90px]">
      <div className="relative mx-auto max-w-[600px] md:max-w-[700px] lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
        <div className="relative z-10 mt-4 min-h-[320px] overflow-hidden rounded-4xl border-white sm:border-[10px] md:min-h-[420px]">
          <div aria-hidden className="bg-secondary absolute inset-0 z-0 overflow-hidden">
            <Parallax>
              <Image src={bannerImg} alt="" priority fill sizes="100vw" className="object-cover" />
            </Parallax>
          </div>
          <div
            aria-hidden
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(35,35,31,0.55) 0%, rgba(35,35,31,0.35) 50%, rgba(200,33,39,0.35) 100%)',
            }}
          />
          <div className="relative z-20 flex min-h-[320px] flex-col items-center justify-center px-6 py-[60px] text-center md:min-h-[420px] md:py-[80px]">
            <RevealAnimation delay={0.1}>
              <span className="badge text-secondary mb-5 bg-white">
                <KioskIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
                Quem somos
              </span>
            </RevealAnimation>
            <SplitHeading text="Automação comercial com propósito" className="mx-auto max-w-[700px] text-white" />
          </div>
        </div>
        <FloatingCard
          icon={<CalendarIcon />}
          title="Desde 2018"
          subtitle="Pinhais, PR"
          className="right-10 -bottom-7 hidden md:flex xl:right-16"
        />
      </div>
    </section>
  );
};

AboutBanner.displayName = 'AboutBanner';
export default AboutBanner;
