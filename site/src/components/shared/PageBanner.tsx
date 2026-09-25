import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import Parallax from '../animation/Parallax';
import RevealAnimation from '../animation/RevealAnimation';
import SplitHeading from '../animation/SplitHeading';
import Cta from './tracking/Cta';

type CtaConfig = { label: string; href: string; id: string };

interface PageBannerProps {
  image: StaticImageData;
  imagePosition?: string;
  badge: string;
  badgeIcon?: ReactNode;
  title: string;
  description?: string;
  location: string;
  primaryCta?: CtaConfig;
  secondaryCta?: CtaConfig;
  // FloatingCard elements, positioned relative to the banner
  children?: ReactNode;
}

const PageBanner = ({
  image,
  imagePosition = 'center',
  badge,
  badgeIcon,
  title,
  description,
  location,
  primaryCta,
  secondaryCta,
  children,
}: PageBannerProps) => {
  return (
    <section className="overflow-x-clip pt-[90px] pb-12 md:pb-16">
      <div className="relative mx-auto max-w-[600px] md:max-w-[700px] lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
        <div className="relative z-10 mt-4 min-h-[440px] overflow-hidden rounded-4xl border-white sm:border-[10px] md:min-h-[540px]">
          <div aria-hidden className="bg-secondary absolute inset-0 z-0 overflow-hidden">
            <Parallax>
              <Image
                src={image}
                alt=""
                priority
                fill
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: imagePosition }}
              />
            </Parallax>
          </div>
          <div aria-hidden className="bg-secondary/55 absolute inset-0 z-10 lg:bg-transparent" />
          <div
            aria-hidden
            className="absolute inset-0 z-10 max-lg:hidden"
            style={{
              background:
                'linear-gradient(90deg, rgba(35,35,31,0.88) 0%, rgba(35,35,31,0.6) 42%, rgba(35,35,31,0.1) 100%)',
            }}
          />
          <div className="relative z-20 flex min-h-[440px] flex-col items-center justify-center px-6 py-[70px] text-center md:min-h-[540px] lg:items-start lg:px-16 lg:text-left">
            <div className="max-w-[620px] space-y-5">
              <RevealAnimation delay={0.1}>
                <span className="badge text-secondary bg-white">
                  {badgeIcon}
                  {badge}
                </span>
              </RevealAnimation>
              <SplitHeading text={title} className="text-white" />
              {description && (
                <RevealAnimation delay={0.5}>
                  <p className="text-accent/85 max-w-[520px] max-lg:mx-auto">{description}</p>
                </RevealAnimation>
              )}
              {(primaryCta || secondaryCta) && (
                <RevealAnimation delay={0.7}>
                  <div className="flex flex-wrap items-center gap-3 pt-2 max-lg:justify-center">
                    {primaryCta && (
                      <Cta
                        href={primaryCta.href}
                        id={primaryCta.id}
                        location={location}
                        className="btn btn-primary hover:btn-white btn-lg">
                        <span>{primaryCta.label}</span>
                      </Cta>
                    )}
                    {secondaryCta && (
                      <Cta
                        href={secondaryCta.href}
                        id={secondaryCta.id}
                        location={location}
                        className="btn btn-white-v2 hover:btn-primary btn-lg">
                        <span>{secondaryCta.label}</span>
                      </Cta>
                    )}
                  </div>
                </RevealAnimation>
              )}
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default PageBanner;
