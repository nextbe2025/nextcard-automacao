import { ReactNode } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import BackgroundLines from '@/components/shared/BackgroundLines';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export interface FaqItem {
  id: string;
  question: ReactNode;
  answer: ReactNode;
}

interface FaqSectionProps {
  items: FaqItem[];
  heading?: string;
}

const FaqSection = ({ items, heading = 'Perguntas frequentes' }: FaqSectionProps) => {
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
              {heading}
            </h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.3}>
          <Accordion className="mx-auto w-full max-w-[720px]" defaultValue={items[0]?.id}>
            {items.map((item) => (
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

export default FaqSection;
