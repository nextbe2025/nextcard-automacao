import RevealAnimation from '../animation/RevealAnimation';
import BrazilMap from '../home/BrazilMap';
import BackgroundLines from '../shared/BackgroundLines';
import { CheckCircleIcon, MapPinIcon } from '../shared/BrandIcons';

const profiles = [
  'Empresas de software de PDV para Food Service',
  'Empresa de software de academia, hospitais, clínicas',
  'Revendas de automação comercial',
  'Revendas de equipamentos para controle de acesso',
  'Empresas de tecnologia para restaurantes',
  'Empresas de projetos/implantação de restaurantes',
  'Franqueadoras e consultorias de franquia',
  'Consultorias especializadas em Food Service',
  'Representantes comerciais para Food Service',
];

const PartnerMap = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 relative isolate py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="vertical" />
      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealAnimation delay={0.2} start="top 90%">
            <div className="order-2 lg:order-1">
              <BrazilMap />
            </div>
          </RevealAnimation>
          <div className="order-1 space-y-6 lg:order-2">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary">
                <MapPinIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
                Em expansão pelo Brasil
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>Seu negócio pode ser o próximo ponto no mapa</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Buscamos parceiros com visão comercial, bons relacionamentos e vontade de crescer junto com uma marca
                de tecnologia e automação.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {profiles.map((profile) => (
                  <li key={profile} className="text-secondary dark:text-accent flex items-start gap-2.5 text-[16px]">
                    <CheckCircleIcon className="text-primary-500 mt-0.5 size-5 shrink-0" />
                    {profile}
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerMap;
