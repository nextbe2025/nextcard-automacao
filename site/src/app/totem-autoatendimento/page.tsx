import { totemFormFields } from '@/data/lead-forms';
import LeadSection from '@/components/shared/LeadSection';
import PageBanner from '@/components/shared/PageBanner';
import { CreditCardIcon, KioskIcon, TicketIcon, TurnstileIcon } from '@/components/shared/BrandIcons';
import FloatingCard from '@/components/shared/FloatingCard';
import RelatedSolutions from '@/components/shared/RelatedSolutions';
import TotemBenefits from '@/components/totem/TotemBenefits';
import TotemModels from '@/components/totem/TotemModels';
import SegmentsSection from '@/components/shared/SegmentsSection';
import { defaultMetadata } from '@/utils/generateMetaData';
import bannerImg from '@public/images/ambientes/totem-autoatendimento-pedestal-restaurante.webp';
import catracasImg from '@public/images/ambientes/catracas-expedidora-e-receptora-de-comandas-nextcard.webp';
import comandasImg from '@public/images/ambientes/comandas-eletronicas-nextcard-sobre-a-mesa.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Totem de Autoatendimento e Autopagamento | NEXTCARD',
  description:
    'Totens de autoatendimento e autopagamento NEXTCARD para food service e lojas de conveniência: mais vendas, menos filas e integração com o seu PDV.',
};

const page = () => {
  return (
    <main className="dark:bg-background-8 bg-white">
      <PageBanner
        image={bannerImg}
        imagePosition="78% 8%"
        badge="Totens NEXTCARD"
        badgeIcon={<KioskIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />}
        title="Totens de autoatendimento e autopagamento"
        description="Soluções práticas e eficientes para otimizar o atendimento ao seu público: mais agilidade, mais vendas e menos filas."
        location="totem_banner"
        primaryCta={{ label: 'Solicitar cotação', href: '#cotacao', id: 'totem_banner_cotacao' }}
        secondaryCta={{ label: 'Ver modelos', href: '#modelos', id: 'totem_banner_modelos' }}>
        <FloatingCard
          icon={<KioskIcon />}
          title="Autoatendimento"
          subtitle="Pedido feito pelo cliente"
          direction="left"
          className="top-24 -right-3 hidden lg:flex xl:-right-14"
        />
        <FloatingCard
          icon={<CreditCardIcon />}
          title="Autopagamento"
          subtitle="Pagamento no próprio totem"
          slow
          delay={0.8}
          className="right-20 -bottom-8 hidden lg:flex xl:right-44"
        />
      </PageBanner>
      <TotemBenefits />
      <TotemModels />
      <SegmentsSection subtitle="Do food service às lojas de conveniência, o totem se adapta ao formato de cada operação." />
      <LeadSection
        product="totem"
        productLabel="Totens de autoatendimento e autopagamento"
        fields={totemFormFields}
        badgeIcon={<KioskIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />}
        description="Conte um pouco sobre a sua operação e receba uma proposta com os totens certos para o seu negócio."
      />
      <RelatedSolutions
        page="totem"
        items={[
          {
            id: 'comandas',
            title: 'Comandas Eletrônicas',
            text: 'Mais controle e segurança durante toda a jornada de consumo, sem papel e sem erro manual.',
            href: '/comandas-eletronicas',
            image: comandasImg,
            alt: 'Comandas eletrônicas NEXTCARD sobre a mesa',
            icon: <TicketIcon className="size-5" />,
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
