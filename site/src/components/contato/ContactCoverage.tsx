import RevealAnimation from '../animation/RevealAnimation';
import BrazilMap from '../home/BrazilMap';
import BackgroundLines from '../shared/BackgroundLines';
import BackgroundMark from '../shared/BackgroundMark';
import { CheckCircleIcon, GlobeIcon, MapPinIcon } from '../shared/BrandIcons';

const points = [
  'Entrega e instalação em todas as regiões do Brasil',
  'Projeto sob medida para cada operação',
  'Suporte especializado em todas as etapas',
];

const ContactCoverage = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 relative isolate py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="vertical" />
      <BackgroundMark className="text-secondary dark:text-accent w-[360px]" position="left-[1%] bottom-[2%]" />
      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary">
                <GlobeIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
                Todo o Brasil
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>Expansão nacional</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                A <strong>NEXTCARD</strong> nasceu em Pinhais, no Paraná, e atende clientes de food service e lojas de
                conveniência em todas as regiões.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <ul className="space-y-3">
                {points.map((point) => (
                  <li key={point} className="text-secondary text-tagline-1 flex items-start gap-3 font-medium">
                    <CheckCircleIcon className="text-primary-500 mt-0.5 size-5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.2} start="top 90%">
            <div className="relative">
              <BrazilMap />
              <span className="bg-secondary text-tagline-2 absolute bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 font-medium text-white shadow-lg lg:left-6 lg:translate-x-0">
                <MapPinIcon className="size-4" />
                Sede em Pinhais, PR
              </span>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactCoverage;
