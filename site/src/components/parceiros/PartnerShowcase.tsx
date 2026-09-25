import catracaImg from '@public/images/projetos/projeto-catraca-expedidora-posto-apolo-araquari-rio-grande-do-sul.webp';
import comandasImg from '@public/images/projetos/projeto-comandas-eletronicas-panificadora-divipan-distrito-federal.webp';
import hotDogImg from '@public/images/projetos/projeto-totens-autoatendimento-hot-dog-expresso-parana.webp';
import prensadaoImg from '@public/images/projetos/projeto-totens-autoatendimento-o-prensadao-parana.webp';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import { StarIcon } from '../shared/BrandIcons';

const cases = [
  { name: 'Hot Dog Expresso', image: hotDogImg },
  { name: 'Panificadora Divipan', image: comandasImg },
  { name: 'O Prensadão', image: prensadaoImg },
  { name: 'Posto Apolo Araquari', image: catracaImg },
];

const PartnerShowcase = () => {
  return (
    <section className="relative isolate py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="vertical" />
      <div className="main-container space-y-12 md:space-y-14">
        <div className="mx-auto max-w-[680px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">
              <StarIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              NEXTCARD em operação
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>
              Quem já confia na <strong>NEXTCARD</strong>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>Soluções presentes em negócios que buscam mais controle, agilidade e eficiência em suas operações.</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {cases.map((item, index) => (
            <RevealAnimation key={item.name} delay={(index % 4) * 0.1} start="top 95%">
              <div className="group">
                <figure className="bg-background-3 dark:bg-background-7 relative aspect-square w-full overflow-hidden rounded-[20px]">
                  <Image
                    src={item.image}
                    alt={`Projeto NEXTCARD em operação na ${item.name}`}
                    sizes="(min-width: 1024px) 280px, 50vw"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </figure>
                <p className="text-tagline-1 text-secondary dark:text-accent mt-3 text-center font-medium">
                  {item.name}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerShowcase;
