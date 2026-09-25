import Ecosystem from '@/components/home/Ecosystem';
import Faq from '@/components/home/Faq';
import FinalCta from '@/components/home/FinalCta';
import Hero from '@/components/home/Hero';
import Process from '@/components/home/Process';
import Reviews from '@/components/home/Reviews';
import Services from '@/components/home/Services';
import Solutions from '@/components/home/Solutions';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import PaperNotes from '@/components/shared/PaperNotes';
import SegmentsSection from '@/components/shared/SegmentsSection';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
};

const page = () => {
  return (
    <main className="bg-background-4 dark:bg-background-9">
      <Hero />
      <Solutions />
      <SegmentsSection subtitle="Totens, catracas e comandas se adaptam a cada tipo de operação, do balcão ao salão." />
      <WhyChooseUs />
      <Ecosystem />
      <PaperNotes />
      <Process />
      <Services />
      <Reviews />
      <Faq />
      <FinalCta />
    </main>
  );
};

export default page;
