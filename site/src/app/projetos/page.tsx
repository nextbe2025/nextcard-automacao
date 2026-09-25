import OurSuccess from '@/components/about/OurSuccess';
import ProjectsFeatured from '@/components/projetos/ProjectsFeatured';
import ProjectsGallery from '@/components/projetos/ProjectsGallery';
import { LayersIcon, MapPinIcon, StarIcon } from '@/components/shared/BrandIcons';
import FloatingCard from '@/components/shared/FloatingCard';
import LeadSection from '@/components/shared/LeadSection';
import PageBanner from '@/components/shared/PageBanner';
import { contactPageFields } from '@/data/lead-forms';
import { defaultMetadata } from '@/utils/generateMetaData';
import bannerImg from '@public/images/ambientes/fluxo-entrada-comanda-autoatendimento-saida-restaurante.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Projetos e Cases de Sucesso | NEXTCARD',
  description:
    'Conheça projetos da NEXTCARD em restaurantes, panificadoras, postos e lojas de conveniência: totens, catracas e comandas em todo o Brasil.',
};

const page = () => {
  return (
    <main className="dark:bg-background-8 bg-white">
      <PageBanner
        image={bannerImg}
        imagePosition="center"
        badge="Projetos"
        badgeIcon={<StarIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />}
        title="Projetos que transformam operações"
        description="Projetos completos em parceria com nossos clientes, para otimizar processos e melhorar a experiência de quem consome."
        location="projetos_banner"
        primaryCta={{ label: 'Ver cases', href: '#cases', id: 'projetos_banner_cases' }}
        secondaryCta={{ label: 'Falar com um especialista', href: '#cotacao', id: 'projetos_banner_contato' }}>
        <FloatingCard
          icon={<LayersIcon />}
          title="Sob medida"
          subtitle="Projeto para cada operação"
          direction="left"
          className="top-24 -right-3 hidden lg:flex xl:-right-14"
        />
        <FloatingCard
          icon={<MapPinIcon />}
          title="Todo o Brasil"
          subtitle="Do Paraná ao Distrito Federal"
          slow
          delay={0.8}
          className="right-20 -bottom-8 hidden lg:flex xl:right-44"
        />
      </PageBanner>
      <ProjectsFeatured />
      <ProjectsGallery />
      <OurSuccess />
      <LeadSection
        product="contato"
        productLabel="Projetos"
        fields={contactPageFields}
        title="Vamos falar do seu projeto?"
        description="Conte um pouco sobre a sua operação e nossa equipe entra em contato para desenhar a solução ideal."
      />
    </main>
  );
};

export default page;
