import ContactCoverage from '@/components/contato/ContactCoverage';
import ContactMain from '@/components/contato/ContactMain';
import { ClockIcon, WhatsAppIcon } from '@/components/shared/BrandIcons';
import FloatingCard from '@/components/shared/FloatingCard';
import PageBanner from '@/components/shared/PageBanner';
import { defaultMetadata } from '@/utils/generateMetaData';
import bannerImg from '@public/images/ambientes/ambiente-restaurante-moderno-iluminacao-vermelha.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contato | NEXTCARD',
  description:
    'Fale com a NEXTCARD: telefone, WhatsApp, e-mail e formulário. Automação comercial para food service e lojas de conveniência em todo o Brasil.',
};

const page = () => {
  return (
    <main className="dark:bg-background-8 bg-white">
      <PageBanner
        image={bannerImg}
        imagePosition="center"
        badge="Contato"
        badgeIcon={<WhatsAppIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />}
        title="Fale com a NEXTCARD"
        description="Tire dúvidas, peça informações ou converse com um especialista sobre totens, catracas e comandas."
        location="contato_banner"
        primaryCta={{ label: 'Enviar mensagem', href: '#formulario', id: 'contato_banner_formulario' }}>
        <FloatingCard
          icon={<WhatsAppIcon />}
          title="WhatsApp"
          subtitle="(41) 99550-7759"
          direction="left"
          className="top-24 -right-3 hidden lg:flex xl:-right-14"
        />
        <FloatingCard
          icon={<ClockIcon />}
          title="Atendimento"
          subtitle="Seg. a sex., a partir das 8h"
          slow
          delay={0.8}
          className="right-20 -bottom-8 hidden lg:flex xl:right-44"
        />
      </PageBanner>
      <ContactMain />
      <ContactCoverage />
    </main>
  );
};

export default page;
