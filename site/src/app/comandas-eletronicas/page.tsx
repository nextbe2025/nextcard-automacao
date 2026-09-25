import { comandaFormFields } from '@/data/lead-forms';
import ComandaBenefits from '@/components/comanda/ComandaBenefits';
import ComandaModels from '@/components/comanda/ComandaModels';
import { KioskIcon, LayersIcon, TicketIcon, TrendingUpIcon, TurnstileIcon } from '@/components/shared/BrandIcons';
import FloatingCard from '@/components/shared/FloatingCard';
import LeadSection from '@/components/shared/LeadSection';
import PageBanner from '@/components/shared/PageBanner';
import PaperNotes from '@/components/shared/PaperNotes';
import RelatedSolutions from '@/components/shared/RelatedSolutions';
import SegmentsSection from '@/components/shared/SegmentsSection';
import { defaultMetadata } from '@/utils/generateMetaData';
import bannerImg from '@public/images/ambientes/comandas-eletronicas-nextcard-sobre-a-mesa.webp';
import catracasImg from '@public/images/ambientes/catracas-expedidora-e-receptora-de-comandas-nextcard.webp';
import totemImg from '@public/images/ambientes/totem-autoatendimento-pedestal-restaurante.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Comandas Eletrônicas | NEXTCARD',
  description:
    'Comandas eletrônicas NEXTCARD para food service e lojas de conveniência: menos erros no atendimento, ticket médio maior e integração com o seu PDV.',
};

const page = () => {
  return (
    <main className="dark:bg-background-8 bg-white">
      <PageBanner
        image={bannerImg}
        imagePosition="center 60%"
        badge="Comandas NEXTCARD"
        badgeIcon={<TicketIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />}
        title="Comandas eletrônicas"
        description="Ofereça uma nova experiência de consumo aos seus clientes, com menos erros no atendimento e ticket médio maior."
        location="comanda_banner"
        primaryCta={{ label: 'Solicitar cotação', href: '#cotacao', id: 'comanda_banner_cotacao' }}
        secondaryCta={{ label: 'Ver modelos', href: '#modelos', id: 'comanda_banner_modelos' }}>
        <FloatingCard
          icon={<TrendingUpIcon />}
          title="Ticket médio maior"
          subtitle="Consumo sem fricção"
          direction="left"
          className="top-24 -right-3 hidden lg:flex xl:-right-14"
        />
        <FloatingCard
          icon={<LayersIcon />}
          title="Integra ao PDV"
          subtitle="Sem operação paralela"
          slow
          delay={0.8}
          className="right-20 -bottom-8 hidden lg:flex xl:right-44"
        />
      </PageBanner>
      <ComandaBenefits />
      <PaperNotes ctaHref="#cotacao" ctaId="comanda_paper_notes_cta" location="comanda_paper_notes" />
      <ComandaModels />
      <SegmentsSection subtitle="Do food service às lojas de conveniência, a comanda eletrônica se adapta ao formato de cada operação." />
      <LeadSection
        product="comanda"
        productLabel="Comandas eletrônicas"
        fields={comandaFormFields}
        badgeIcon={<TicketIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />}
        description="Conte um pouco sobre a sua operação e receba uma proposta com as comandas certas para o seu negócio."
      />
      <RelatedSolutions
        page="comandas"
        items={[
          {
            id: 'totens',
            title: 'Totens de Autoatendimento',
            text: 'Mais vendas e menos filas, com pedido e pagamento feitos pelo próprio cliente.',
            href: '/totem-autoatendimento',
            image: totemImg,
            alt: 'Totem de autoatendimento NEXTCARD em restaurante',
            icon: <KioskIcon className="size-5" />,
          },
          {
            id: 'catracas',
            title: 'Catraca Expedidora e Receptora',
            text: 'Automatize a entrada, a entrega de comandas e o controle da saída da operação.',
            href: '/catracas',
            image: catracasImg,
            alt: 'Catracas expedidora e receptora de comandas NEXTCARD',
            icon: <TurnstileIcon className="size-5" />,
          },
        ]}
      />
    </main>
  );
};

export default page;
