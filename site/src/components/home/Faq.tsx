import FaqSection from '@/components/shared/FaqSection';

const faqItems = [
  {
    id: '1',
    question: (
      <>
        O Totem <strong>NEXTCARD</strong> integra com meu PDV?
      </>
    ),
    answer:
      'Sim. O Totem de Autoatendimento troca informações com o seu ponto de venda, então os pedidos feitos no totem entram direto no fluxo do PDV, sem lançamento manual.',
  },
  {
    id: '2',
    question: 'Como funciona a Catraca Expedidora?',
    answer:
      'A Catraca Expedidora libera o acesso do cliente e entrega a comanda eletrônica no momento da entrada, iniciando o registro do consumo dali para frente.',
  },
  {
    id: '3',
    question: 'É possível usar comandas com catracas?',
    answer:
      'Sim, é a combinação mais comum. A Catraca Expedidora entrega a comanda na entrada e a Catraca Receptora confirma o pagamento e libera a saída, as duas soluções foram feitas para funcionar juntas.',
  },
  {
    id: '4',
    question: (
      <>
        A <strong>NEXTCARD</strong> faz o projeto completo?
      </>
    ),
    answer: (
      <>
        Sim. A <strong>NEXTCARD</strong> avalia a operação, identifica quais equipamentos fazem sentido, integra as
        soluções entre si e acompanha desde o planejamento até a implementação.
      </>
    ),
  },
  {
    id: '5',
    question: 'Quais sistemas são compatíveis?',
    answer: (
      <>
        A <strong>NEXTCARD</strong> integra com PDVs, sistemas de gestão e meios de pagamento já usados pelo cliente.
        Fale com um especialista para confirmar a compatibilidade com o seu sistema específico.
      </>
    ),
  },
];

const Faq = () => <FaqSection items={faqItems} />;

export default Faq;
