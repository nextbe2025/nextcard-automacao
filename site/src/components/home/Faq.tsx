import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

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
      'Sim, é a combinação mais comum. A Catraca Expedidora entrega a comanda na entrada e a Catraca Receptora confirma o pagamento e libera a saída — as duas soluções foram feitas para funcionar juntas.',
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

const Faq = () => {
  return (
    <section
      className="bg-background-1 dark:bg-background-5 relative isolate py-[50px] lg:py-[100px]"
      aria-label="Perguntas frequentes">
      <BackgroundLines variant="vertical" />
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">FAQ</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[500px]" id="faq-heading">
              Perguntas frequentes
            </h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.3}>
          <Accordion className="mx-auto w-full max-w-[720px]" defaultValue="1">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger
                  className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                  titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                  value={item.id}
                  iconType="arrow">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent value={item.id}>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Faq;
