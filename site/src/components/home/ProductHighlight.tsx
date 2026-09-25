import totemImg from '@public/images/product/totem-detalhe.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const features = [
  {
    number: 1,
    title: 'Tela touch de alta resolução',
    description: 'Cardápio ou catálogo claro, com fotos e categorias fáceis de navegar.',
    top: '16%',
    left: '50%',
  },
  {
    number: 2,
    title: 'Leitor de proximidade',
    description: 'Aproximação para identificação ou pagamento, sem contato físico.',
    top: '30%',
    left: '39%',
  },
  {
    number: 3,
    title: 'Impressora térmica',
    description: 'Comprovante ou senha impressos na hora, sem esperar.',
    top: '32%',
    left: '48%',
  },
  {
    number: 4,
    title: 'Maquininha integrada',
    description: 'Cartão, aproximação e Pix direto no totem, sem equipamento extra.',
    top: '31%',
    left: '59%',
  },
];

const ProductHighlight = () => {
  return (
    <section className="bg-background-1 dark:bg-background-5 py-[50px] lg:py-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary">Totem de Autoatendimento</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mt-4 max-w-[440px] text-heading-4 xl:text-heading-3">
                Feito para o dia a dia da operação
              </h2>
            </RevealAnimation>
            <ul className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <RevealAnimation key={feature.number} delay={0.3 + index * 0.1}>
                  <li className="flex gap-4">
                    <span className="bg-primary-500 text-tagline-2 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full font-medium text-white">
                      {feature.number}
                    </span>
                    <div>
                      <p className="text-secondary dark:text-accent text-tagline-1 font-medium">{feature.title}</p>
                      <p className="text-tagline-2 mt-0.5">{feature.description}</p>
                    </div>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <RevealAnimation delay={0.3} offset={40}>
              <div className="bg-background-3 dark:bg-background-7 relative mx-auto aspect-[3/4] w-full max-w-[420px] rounded-[20px] p-8">
                <div className="relative size-full">
                  <Image src={totemImg} alt="Totem de Autoatendimento NEXTCARD, com detalhes numerados" className="size-full object-contain" />
                  {features.map((feature) => (
                    <span
                      key={feature.number}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ top: feature.top, left: feature.left }}>
                      <span className="bg-secondary dark:bg-background-8 absolute inset-0 m-auto size-6 animate-ping rounded-full opacity-40" />
                      <span className="bg-primary-500 text-tagline-2 relative flex size-6 items-center justify-center rounded-full font-medium text-white ring-4 ring-white/80">
                        {feature.number}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
