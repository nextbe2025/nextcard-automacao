import CatracaBenefits from '@/components/catraca/CatracaBenefits';
import CatracaFlow from '@/components/catraca/CatracaFlow';
import CatracaModels from '@/components/catraca/CatracaModels';
import { KioskIcon, ShieldCheckIcon, TicketIcon, TrendingUpIcon, TurnstileIcon } from '@/components/shared/BrandIcons';
import FaqSection from '@/components/shared/FaqSection';
import FloatingCard from '@/components/shared/FloatingCard';
import LeadSection from '@/components/shared/LeadSection';
import PageBanner from '@/components/shared/PageBanner';
import RelatedSolutions from '@/components/shared/RelatedSolutions';
import SegmentsSection from '@/components/shared/SegmentsSection';
import { catracaFormFields } from '@/data/lead-forms';
import { defaultMetadata } from '@/utils/generateMetaData';
import bannerImg from '@public/images/ambientes/catracas-expedidora-e-receptora-de-comandas-posto-tulio.webp';
import comandasImg from '@public/images/ambientes/comandas-eletronicas-nextcard-sobre-a-mesa.webp';
import totemImg from '@public/images/ambientes/totem-autoatendimento-pedestal-restaurante.webp';
import { Metadata } from 'next';

const catracaFaqItems = [
  {
    id: '1',
    question: 'Qual a diferença entre catraca expedidora e receptora?',
    answer:
      'A expedidora libera a entrada e entrega a comanda eletrônica ao cliente. A receptora confirma o pagamento na saída e libera a passagem, fechando o ciclo de consumo.',
  },
  {
    id: '2',
    question: 'A catraca ajuda a reduzir a evasão de receita?',
    answer:
      'Sim. Como a saída só é liberada depois da confirmação do pagamento, a catraca reduz os casos de consumo sem pagamento na saída.',
  },
  {
    id: '3',
    question: 'Dá para usar a catraca só como controle de acesso, sem comanda?',
    answer:
      'Sim. A catraca também funciona como controle de acesso isolado, sem estar necessariamente integrada ao fluxo de comandas.',
  },
  {
    id: '4',
    question: 'A catraca funciona em posto de combustível ou loja de conveniência?',
    answer:
      'Sim. Além de restaurantes e casas noturnas, a catraca é usada em postos de combustível e lojas de conveniência para controlar entrada e consumo.',
  },
  {
    id: '5',
    question: 'Quanto tempo leva para instalar uma catraca?',
    answer:
      'Depende do número de unidades e da estrutura do local. Esse prazo é definido junto com o cliente na etapa de diagnóstico do projeto.',
  },
];

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Catraca Expedidora e Receptora de Comandas | NEXTCARD',
  description:
    'Catracas expedidoras e receptoras de comandas NEXTCARD para food service e lojas de conveniência: controle de acesso, mais segurança e menos evasão de receita.',
};

const page = () => {
  return (
    <main className="dark:bg-background-8 bg-white">
      <PageBanner
        image={bannerImg}
        imagePosition="center 40%"
        badge="Catracas NEXTCARD"
        badgeIcon={<TurnstileIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />}
        title="Catraca expedidora e receptora de comandas"
        description="Garanta o controle de acesso e o fluxo de clientes no seu estabelecimento, com segurança e facilidade."
        location="catraca_banner"
        primaryCta={{ label: 'Solicitar cotação', href: '#cotacao', id: 'catraca_banner_cotacao' }}
        secondaryCta={{ label: 'Ver modelos', href: '#modelos', id: 'catraca_banner_modelos' }}>
        <FloatingCard
          icon={<ShieldCheckIcon />}
          title="Mais segurança"
          subtitle="Controle de acesso preciso"
          direction="left"
          className="top-24 -right-3 hidden lg:flex xl:-right-14"
        />
        <FloatingCard
          icon={<TrendingUpIcon />}
          title="Menos evasão"
          subtitle="Receita protegida"
          slow
          delay={0.8}
          className="right-20 -bottom-8 hidden lg:flex xl:right-44"
        />
      </PageBanner>
      <CatracaBenefits />
      <CatracaFlow />
      <CatracaModels />
      <SegmentsSection subtitle="Do food service às lojas de conveniência, as catracas se adaptam ao formato de cada operação." />
      <FaqSection items={catracaFaqItems} />
      <LeadSection
        product="catraca"
        productLabel="Catracas expedidora e receptora"
        fields={catracaFormFields}
        badgeIcon={<TurnstileIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />}
        description="Conte um pouco sobre a sua operação e receba uma proposta com as catracas certas para o seu negócio."
      />
      <RelatedSolutions
        page="catracas"
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
            id: 'totens',
            title: 'Totens de Autoatendimento',
            text: 'Mais vendas e menos filas, com pedido e pagamento feitos pelo próprio cliente.',
            href: '/totem-autoatendimento',
            image: totemImg,
            alt: 'Totem de autoatendimento NEXTCARD em restaurante',
            icon: <KioskIcon className="size-5" />,
          },
        ]}
      />
    </main>
  );
};

export default page;
