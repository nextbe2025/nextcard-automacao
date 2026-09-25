import Image from 'next/image';

const BrazilMap = () => {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <Image
        src="/images/mapa-brasil.png"
        alt="Mapa do Brasil com a NEXTCARD presente em todos os estados"
        fill
        sizes="420px"
        className="object-contain"
      />
    </div>
  );
};

export default BrazilMap;
