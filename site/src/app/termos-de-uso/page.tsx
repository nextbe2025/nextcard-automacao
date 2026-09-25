import CTA from '@/components/about/CTA';
import TermosDeUsoContent from '@/components/termos-de-uso/TermosDeUsoContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Termos de Uso | NEXTCARD Automação Comercial',
  description: 'Termos e condições de uso do site e dos serviços da NEXTCARD.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <TermosDeUsoContent />
      <CTA />
    </main>
  );
};

export default page;
