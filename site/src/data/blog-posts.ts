import catracasImg from '@public/images/ambientes/catracas-expedidora-e-receptora-de-comandas-nextcard.webp';
import comandasImg from '@public/images/ambientes/comandas-eletronicas-nextcard-sobre-a-mesa.webp';
import restauranteImg from '@public/images/ambientes/ambiente-restaurante-moderno-iluminacao-vermelha.webp';
import totemBancadaImg from '@public/images/ambientes/totens-autoatendimento-de-bancada-restaurante.webp';
import totemLanchoneteImg from '@public/images/ambientes/totens-autoatendimento-branco-e-preto-lanchonete.webp';
import totemPedestalImg from '@public/images/ambientes/totem-autoatendimento-pedestal-restaurante.webp';
import { StaticImageData } from 'next/image';

export type BlogCategory = 'Totens' | 'Comandas' | 'Controle de acesso' | 'Gestão e automação';

export const blogCategories: BlogCategory[] = ['Totens', 'Comandas', 'Controle de acesso', 'Gestão e automação'];

export type BlogBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'dl'; items: { term: string; text: string }[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  cover: StaticImageData;
  coverAlt: string;
  // Articles without a body still point to the published article on the current site until they are migrated.
  body?: BlogBlock[];
  // Solution page the article leads to at the end
  solution?: { label: string; href: string };
};

const solutionByCategory: Record<BlogCategory, { label: string; href: string } | undefined> = {
  Totens: { label: 'Conheça os totens NEXTCARD', href: '/totem-autoatendimento' },
  Comandas: { label: 'Conheça as comandas eletrônicas', href: '/comandas-eletronicas' },
  'Controle de acesso': { label: 'Conheça as catracas NEXTCARD', href: '/catracas' },
  'Gestão e automação': undefined,
};

const coverByCategory = (category: BlogCategory, index: number): { cover: StaticImageData; coverAlt: string } => {
  switch (category) {
    case 'Totens': {
      const options = [
        { cover: totemPedestalImg, coverAlt: 'Totem de autoatendimento NEXTCARD em restaurante' },
        { cover: totemBancadaImg, coverAlt: 'Totens de autoatendimento de bancada NEXTCARD' },
        { cover: totemLanchoneteImg, coverAlt: 'Totens de autoatendimento NEXTCARD em lanchonete' },
      ];
      return options[index % options.length];
    }
    case 'Comandas':
      return { cover: comandasImg, coverAlt: 'Comandas eletrônicas NEXTCARD sobre a mesa' };
    case 'Controle de acesso':
      return { cover: catracasImg, coverAlt: 'Catracas expedidora e receptora de comandas NEXTCARD' };
    default:
      return { cover: restauranteImg, coverAlt: 'Ambiente de restaurante moderno com iluminação vermelha' };
  }
};

type Draft = Omit<BlogPost, 'cover' | 'coverAlt' | 'solution'>;

const drafts: Draft[] = [
  {
    slug: 'comanda-de-bar-eletronica-o-que-e-beneficios-e-como-funciona',
    title: 'Comanda de bar eletrônica: o que é, benefícios e como funciona?',
    excerpt: 'Uma ótima alternativa para turbinar os negócios gastronômicos: entenda o que é e como implantar.',
    category: 'Comandas',
    body: [
      { type: 'h2', text: 'O que é comanda de bar?' },
      {
        type: 'p',
        text: 'A comanda de bar serve para controlar tudo o que o cliente consumiu durante a permanência no estabelecimento. A versão em papel é sujeita a erros, extravios e ainda pesa no meio ambiente. Já a comanda eletrônica automatiza o atendimento e organiza o trabalho em três frentes.',
      },
      {
        type: 'dl',
        items: [
          { term: 'Atendimento', text: 'o garçom registra os pedidos direto em um dispositivo móvel.' },
          { term: 'Produção', text: 'o pedido chega na hora ao bar ou à cozinha, sem recado e sem papel.' },
          { term: 'Caixa', text: 'o cliente apresenta a comanda e escolhe a forma de pagamento.' },
        ],
      },
      { type: 'h2', text: 'Quais são os benefícios da comanda eletrônica?' },
      {
        type: 'ul',
        items: [
          'Mais organização nas operações',
          'Menos erros e falhas manuais',
          'Processos mais ágeis',
          'Histórico de consumo de cada cliente',
          'Aumento do ticket médio',
          'Atendimento mais humanizado e fidelização',
          'Mais controle do caixa e fechamento mais rápido',
          'Relatórios estratégicos, controle de estoque e de vendas',
        ],
      },
      { type: 'h2', text: 'Como funciona a comanda eletrônica?' },
      {
        type: 'p',
        text: 'Você contrata uma empresa especializada em automação comercial, que fornece comandas personalizadas com o logotipo e as cores do seu estabelecimento. O cliente recebe uma comanda de PVC no lugar do papel, todos os pedidos são registrados nela e, ao final, ela é apresentada no caixa para a cobrança.',
      },
      { type: 'h2', text: 'O que é preciso para implantar?' },
      {
        type: 'dl',
        items: [
          {
            term: 'Sistema de gestão',
            text: 'software que registra o histórico do cliente e automatiza o fluxo interno.',
          },
          {
            term: 'Computador e dispositivos móveis',
            text: 'o computador para a gestão do caixa e os dispositivos para os garçons anotarem os pedidos.',
          },
          { term: 'Impressora', text: 'térmica, para cupons e notas de produção.' },
          { term: 'Internet', text: 'um roteador Wi-Fi de qualidade, para manter o fluxo rápido.' },
          {
            term: 'Totem de autoatendimento e autopagamento',
            text: 'opcional, mas ajuda a evitar filas e a fidelizar clientes.',
          },
        ],
      },
    ],
  },
  {
    slug: 'o-futuro-do-setor-de-alimentacao-a-tendencia-do-autoatendimento-em-2024',
    title: 'O futuro do setor de alimentação: a tendência do autoatendimento',
    excerpt:
      'A gastronomia passa por uma transformação impulsionada pela tecnologia, e o autoatendimento está no centro dela.',
    category: 'Totens',
  },
  {
    slug: 'totem-de-autoatendimento-como-escolher-o-melhor-para-o-meu-restaurante-e-aumentar-o-faturamento',
    title: 'Totem de autoatendimento: como escolher o melhor para o meu restaurante?',
    excerpt: 'Na era da automação comercial, veja o que avaliar para escolher o totem certo e aumentar o faturamento.',
    category: 'Totens',
  },
  {
    slug: 'totem-de-autoatendimento-sera-que-meu-estabelecimento-precisa-de-um',
    title: 'Totem de autoatendimento: será que meu estabelecimento precisa de um?',
    excerpt: 'O investimento em tecnologia é sempre uma ótima alternativa para prosperar, e o totem é uma delas.',
    category: 'Totens',
  },
  {
    slug: 'vale-a-pena-investir-em-um-totem-de-autopagamento',
    title: 'Vale a pena investir em um totem de autopagamento?',
    excerpt: 'Na busca por praticidade, o totem de autopagamento vem sendo usado em cada vez mais estabelecimentos.',
    category: 'Totens',
  },
  {
    slug: '5-vantagens-das-comandas-eletronicas-para-o-seu-restaurante',
    title: '5 vantagens das comandas eletrônicas para o seu restaurante',
    excerpt:
      'Os avanços da tecnologia já chegaram à maioria das atividades profissionais, inclusive ao salão do restaurante.',
    category: 'Comandas',
  },
  {
    slug: 'como-funciona-o-sistema-de-comanda-eletronica',
    title: 'Como funciona o sistema de comanda eletrônica?',
    excerpt:
      'Automatizar processos com tecnologia é sempre uma ideia inteligente para o seu estabelecimento prosperar.',
    category: 'Comandas',
  },
  {
    slug: 'qual-e-o-controle-de-acesso-ideal-para-minha-empresa',
    title: 'Qual é o controle de acesso ideal para o meu negócio?',
    excerpt: 'Ter atenção com o controle de acesso é essencial para garantir a segurança do estabelecimento.',
    category: 'Controle de acesso',
  },
  {
    slug: 'vale-a-pena-usar-crachas-e-cartoes-de-acesso-na-empresa',
    title: 'Vale a pena usar crachás e cartões de acesso?',
    excerpt: 'Muita gente ainda tem dúvidas sobre a importância dos crachás e cartões de acesso.',
    category: 'Controle de acesso',
  },
  {
    slug: 'potencialize-seu-restaurante-neste-natal-satisfacao-dos-clientes-e-eliminacao-de-filas',
    title: 'Potencialize seu restaurante no Natal: clientes satisfeitos e sem filas',
    excerpt:
      'Com as festividades, restaurantes e bares enchem: veja como manter o atendimento ágil na data mais movimentada.',
    category: 'Gestão e automação',
  },
  {
    slug: 'gestao-de-restaurantes-como-torna-lo-mais-eficiente',
    title: 'Gestão de restaurantes: como torná-la mais eficiente?',
    excerpt: 'Formas inovadoras e diferenciadas de promover uma excelente gestão do seu restaurante.',
    category: 'Gestão e automação',
  },
  {
    slug: '6-maneiras-de-automatizar-o-atendimento-ao-cliente-no-restaurante',
    title: '6 maneiras de automatizar o atendimento ao cliente no restaurante',
    excerpt: 'A tecnologia no atendimento tem se mostrado uma verdadeira vantagem competitiva no mercado.',
    category: 'Gestão e automação',
  },
  {
    slug: '5-dicas-para-promover-um-bom-atendimento-no-restaurante',
    title: '5 dicas para promover um bom atendimento no restaurante',
    excerpt: 'A maneira como o cliente é atendido é um dos fatores que mais pesam na decisão de voltar.',
    category: 'Gestão e automação',
  },
  {
    slug: 'mitos-e-verdades-sobre-o-sistema-de-gestao',
    title: 'Mitos e verdades sobre o sistema de gestão',
    excerpt:
      'Investir em tecnologia é ótimo para turbinar os negócios, mas nem tudo o que se diz sobre gestão é verdade.',
    category: 'Gestão e automação',
  },
  {
    slug: 'software-de-gestao-para-restaurante-o-que-e-e-como-escolher',
    title: 'Software de gestão para restaurante: o que é e como escolher?',
    excerpt: 'Bar, cafeteria, restaurante ou padaria: entenda o que avaliar antes de escolher o seu sistema.',
    category: 'Gestão e automação',
  },
  {
    slug: 'como-aumentar-o-ticket-medio-da-minha-empresa',
    title: 'Como aumentar o ticket médio do meu negócio?',
    excerpt: 'O ticket médio é o valor que cada cliente gasta, em média, no seu estabelecimento. Veja como aumentá-lo.',
    category: 'Gestão e automação',
  },
  {
    slug: 'a-automacao-comercial-reduz-os-custos-operacionais',
    title: 'A automação comercial reduz os custos operacionais?',
    excerpt: 'Entenda como as ferramentas tecnológicas automatizam as tarefas do dia a dia da operação.',
    category: 'Gestão e automação',
  },
  {
    slug: 'como-a-tecnologia-facilita-o-controle-de-restaurantes-e-padarias',
    title: 'Como a tecnologia facilita o controle de restaurantes e padarias?',
    excerpt: 'Um bom planejamento estratégico é importante para se destacar da concorrência e garantir resultados.',
    category: 'Gestão e automação',
  },
];

export const blogPosts: BlogPost[] = drafts.map((draft, index) => ({
  ...draft,
  ...coverByCategory(draft.category, index),
  solution: solutionByCategory[draft.category],
}));

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

// Old address of each article on the current site, used while an article has no migrated body yet.
export const legacyPostUrl = (slug: string) => `https://nextcard.com.br/${slug}/`;
