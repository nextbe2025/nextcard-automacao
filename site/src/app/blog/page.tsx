import BlogCta from '@/components/blog/BlogCta';
import BlogList from '@/components/blog/BlogList';
import { LayersIcon, StarIcon } from '@/components/shared/BrandIcons';
import FloatingCard from '@/components/shared/FloatingCard';
import PageBanner from '@/components/shared/PageBanner';
import { blogPosts } from '@/data/blog-posts';
import { defaultMetadata } from '@/utils/generateMetaData';
import bannerImg from '@public/images/ambientes/totens-autoatendimento-branco-e-preto-lanchonete.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog | NEXTCARD',
  description:
    'Dicas e boas práticas para otimizar processos no seu estabelecimento gastronômico com automação comercial: totens, comandas, catracas e gestão.',
};

const page = () => {
  return (
    <main className="dark:bg-background-8 bg-white">
      <PageBanner
        image={bannerImg}
        imagePosition="center 40%"
        badge="Blog"
        badgeIcon={<StarIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />}
        title="Dicas para otimizar o seu negócio"
        description="Receba as melhores dicas e soluções para os processos do seu estabelecimento gastronômico com automação comercial."
        location="blog_banner"
        primaryCta={{ label: 'Ver artigos', href: '#artigos', id: 'blog_banner_artigos' }}>
        <FloatingCard
          icon={<LayersIcon />}
          title="Totens, comandas e catracas"
          subtitle="Conteúdo para food service"
          direction="left"
          className="top-24 -right-3 hidden lg:flex xl:-right-14"
        />
      </PageBanner>
      <BlogList posts={blogPosts} />
      <BlogCta />
    </main>
  );
};

export default page;
