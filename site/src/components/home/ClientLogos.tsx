import aquabeat from '@public/images/clients/Logo-Aquabeat.png';
import cabe from '@public/images/clients/Logo-CABE.png';
import cargoSoft from '@public/images/clients/Logo-Cargo-Soft.png';
import coritiba from '@public/images/clients/Logos-Coritiba-Foot-Ball-Club.png';
import foxlux from '@public/images/clients/Logos-Foxlux.png';
import hardRock from '@public/images/clients/Hard-Rock.png';
import postoTulio from '@public/images/clients/Posto-Tulio.png';
import postosTioZico from '@public/images/clients/Postos-Tio-Zico.png';
import proTork from '@public/images/clients/ProTork.png';
import samsung from '@public/images/clients/Samsung.png';
import siena from '@public/images/clients/Siena-Alimentos.png';
import soledade from '@public/images/clients/Soledade-2.png';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';

const logos: { src: StaticImageData; alt: string }[] = [
  { src: samsung, alt: 'Samsung' },
  { src: hardRock, alt: 'Hard Rock Cafe' },
  { src: coritiba, alt: 'Coritiba Foot Ball Club' },
  { src: postoTulio, alt: 'Posto Tulio' },
  { src: cabe, alt: 'CABE' },
  { src: proTork, alt: 'ProTork' },
  { src: siena, alt: 'Siena Alimentos' },
  { src: postosTioZico, alt: 'Postos Tio Zico' },
  { src: cargoSoft, alt: 'Cargo Soft' },
  { src: aquabeat, alt: 'Aquabeat' },
  { src: foxlux, alt: 'Foxlux' },
  { src: soledade, alt: 'Soledade' },
];

const ClientLogos = () => {
  return (
    <div className="mt-10">
      <Marquee gradient={false} speed={35} pauseOnHover>
        {logos.map((logo) => (
          <div key={logo.alt} className="mx-8 flex h-12 w-[120px] items-center justify-center grayscale">
            <Image src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientLogos;
