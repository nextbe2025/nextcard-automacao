'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import BackgroundLines from '@/components/shared/BackgroundLines';
import { StarIcon } from '@/components/shared/BrandIcons';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const reviews = [
  {
    id: 1,
    quote: 'Excelente, muito bem atendido e o sistema de automação é ótimo, já uso a 2 anos.',
    name: 'Wesley Marques Ragazzi',
    position: 'Avaliação no Google',
  },
  {
    id: 2,
    quote: 'Produto de boa qualidade, ótimo atendimento, entrega rápida.',
    name: 'Larissa Moura',
    position: 'Avaliação no Google',
  },
  {
    id: 3,
    quote: 'Excelente pontualidade e atendimento. Parabéns pelo trabalho.',
    name: 'Jhonattan Salatiel',
    position: 'Avaliação no Google',
  },
  {
    id: 4,
    quote: 'Foi surpreendente nossa experiência com a NEXTCARD. Trabalho maravilhoso. Super indico.',
    name: 'Eliete Nonnemacher Pitol',
    position: 'Avaliação no Google',
  },
  {
    id: 5,
    quote: 'Excelentes profissionais. Muito satisfeito com atendimento e resultado final das comandas.',
    name: 'Ricardo Souza',
    position: 'Avaliação no Google',
  },
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const Reviews = () => {
  return (
    <section className="bg-background-3 dark:bg-background-8 relative isolate pt-14 pb-24 md:pt-16 md:pb-36 lg:pt-[88px] lg:pb-44 xl:pt-[100px] xl:pb-[200px]">
      <BackgroundLines variant="grid" />
      <div className="main-container flex flex-col gap-[70px] max-[426px]:gap-10">
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary mb-5">
              <StarIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              Quem confia na <strong>NEXTCARD</strong>
            </span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto mb-4 max-w-[750px] max-[426px]:mb-3">Avaliações reais de clientes</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-[426px]:text-tagline-2 max-w-[490px] max-[426px]:max-w-[320px]">
              Avaliações públicas no Google, de operações que usam a <strong>NEXTCARD</strong> no dia a dia.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="relative">
            <Swiper
              className="swiper reviews-swiper"
              spaceBetween={20}
              slidesPerView={1.15}
              centeredSlides={true}
              loop={true}
              speed={1500}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24, centeredSlides: false },
                1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: true },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              navigation={false}
              pagination={false}
              scrollbar={false}>
              <div className="swiper-wrapper">
                {reviews.map((review) => (
                  <SwiperSlide key={review.id} className="swiper-slide">
                    <div className="bg-background-2 dark:bg-background-5 relative z-0 mx-1 flex flex-col gap-y-8 overflow-hidden rounded-[20px] p-8 sm:mx-0">
                      <div className="bg-primary-500 flex size-14 items-center justify-center rounded-full text-tagline-1 font-medium text-white">
                        {initials(review.name)}
                      </div>
                      <p className="text-secondary/60 dark:text-accent/60 review-text line-clamp-2">
                        &quot;{review.quote}&quot;
                      </p>
                      <div>
                        <p className="text-secondary dark:text-accent review-name text-lg leading-[1.5] font-medium">
                          {review.name}
                        </p>
                        <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                          {review.position}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Reviews;
