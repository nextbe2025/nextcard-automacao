import { contactPageFields } from '@/data/lead-forms';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import Image from 'next/image';
import { ComponentType } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import { ClockIcon, MailIcon, PhoneIcon, WhatsAppIcon } from '../shared/BrandIcons';
import LeadForm from '../shared/LeadForm';

const channels: {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  lines: { text: string; href?: string }[];
}[] = [
  {
    id: 'telefone',
    icon: PhoneIcon,
    title: 'Telefone',
    lines: [{ text: '(41) 3732-0275', href: 'tel:+554137320275' }],
  },
  {
    id: 'whatsapp',
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    lines: [{ text: '(41) 99550-7759', href: 'https://wa.me/5541995507759' }],
  },
  {
    id: 'email',
    icon: MailIcon,
    title: 'E-mail',
    lines: [{ text: 'comercial@nextcard.com.br', href: 'mailto:comercial@nextcard.com.br' }],
  },
  {
    id: 'horario',
    icon: ClockIcon,
    title: 'Horário de atendimento',
    lines: [{ text: 'Segunda a quinta, das 8h às 18h' }, { text: 'Sexta-feira, das 8h às 17h' }],
  },
];

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/nextcardautomacao/', icon: instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/nextcardautomacao/', icon: linkedin },
  { label: 'Facebook', href: 'https://www.facebook.com/nextcardautomacao', icon: facebook },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCDiEj2EG-KmWUJD8qxzWmFw/featured', icon: youtube },
];

const ContactMain = () => {
  return (
    <section id="formulario" className="relative isolate scroll-mt-24 py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="grid" />
      <div className="main-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-14">
          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-4">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-primary">
                  <WhatsAppIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
                  Fale com a gente
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2>Como podemos ajudar?</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>
                  Tire dúvidas, peça informações ou fale com um especialista da <strong>NEXTCARD</strong>. Escolha o
                  canal que for melhor para você.
                </p>
              </RevealAnimation>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map(({ id, icon: Icon, title, lines }, index) => (
                <RevealAnimation key={id} delay={0.1 + index * 0.08} start="top 95%">
                  <li className="h-full">
                    <div className="group bg-background-1 dark:bg-background-6 border-secondary/10 hover:border-primary-500/40 flex h-full items-start gap-4 rounded-[20px] border p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(35,35,31,0.12)]">
                      <span className="bg-primary-500 flex size-12 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:scale-110">
                        <Icon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-tagline-2 text-secondary/70">{title}</p>
                        {lines.map(({ text, href }) =>
                          href ? (
                            <a
                              key={text}
                              href={href}
                              target={href.startsWith('http') ? '_blank' : undefined}
                              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-tagline-1 text-secondary hover:text-primary-500 block font-medium break-words transition-colors">
                              {text}
                            </a>
                          ) : (
                            <p key={text} className="text-tagline-1 text-secondary font-medium">
                              {text}
                            </p>
                          ),
                        )}
                      </div>
                    </div>
                  </li>
                </RevealAnimation>
              ))}
            </ul>

            <RevealAnimation delay={0.2} start="top 95%">
              <div className="flex items-center gap-4">
                <p className="text-tagline-2 text-secondary font-medium">Siga a NEXTCARD</p>
                <ul className="flex items-center gap-2">
                  {socials.map(({ label, href, icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary hover:bg-primary-500 flex size-11 items-center justify-center rounded-full transition-colors duration-300">
                        <span className="sr-only">{label}</span>
                        <Image src={icon} alt="" className="size-6" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3} start="top 90%">
            <div className="border-secondary/10 bg-background-1 dark:bg-background-6 rounded-[24px] border p-6 shadow-[0_30px_80px_rgba(35,35,31,0.12)] sm:p-8 lg:col-span-7 lg:self-center">
              <h3 className="text-heading-5 mb-1">Envie uma mensagem</h3>
              <p className="text-tagline-1 mb-6">Retornamos o mais breve possível, no horário de atendimento.</p>
              <LeadForm
                product="contato"
                productLabel="Contato"
                fields={contactPageFields}
                submitLabel="Enviar mensagem"
                successTitle="Mensagem enviada!"
                successText={
                  <>
                    Obrigado por falar com a <strong>NEXTCARD</strong>. Nossa equipe vai responder o mais breve
                    possível.
                  </>
                }
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
