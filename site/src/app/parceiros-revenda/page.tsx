import { partnerFormFields } from '@/data/lead-forms';
import { LayersIcon } from '@/components/shared/BrandIcons';
import LeadSection from '@/components/shared/LeadSection';
import PartnerHero from '@/components/parceiros/PartnerHero';
import PartnerMap from '@/components/parceiros/PartnerMap';
import PartnerModalities from '@/components/parceiros/PartnerModalities';
import PartnerPortfolio from '@/components/parceiros/PartnerPortfolio';
import PartnerShowcase from '@/components/parceiros/PartnerShowcase';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Programa de Parceiros | NEXTCARD',
  description:
    'Torne-se parceiro NEXTCARD: indique clientes e receba comissionamento ou revenda nossas soluções de automação comercial com condições competitivas em todo o Brasil.',
};

const page = () => {
  return (
    <main className="dark:bg-background-8 bg-white">
      <PartnerHero />
      <PartnerModalities />
      <PartnerPortfolio />
      <PartnerShowcase />
      <PartnerMap />
      <LeadSection
        product="parceria"
        productLabel="Programa de Parceiros"
        fields={partnerFormFields}
        badgeIcon={<LayersIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />}
        title="Faça parte da nossa rede de parceiros"
        description="Escolha entre indicação e revenda e conte com a estrutura da NEXTCARD para transformar oportunidades em novos negócios."
      />
    </main>
  );
};

export default page;
