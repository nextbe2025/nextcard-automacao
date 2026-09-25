import CTA from '@/components/about/CTA';
import PoliticaPrivacidadeContent from '@/components/politica-privacidade/PoliticaPrivacidadeContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Política de Privacidade | NEXTCARD Automação Comercial',
  description: 'Saiba como a NEXTCARD coleta, usa e protege as suas informações.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <PoliticaPrivacidadeContent />
      <CTA />
    </main>
  );
};

export default page;
