'use client';

import {
  Beer,
  Bike,
  Building2,
  ChefHat,
  Coffee,
  Cookie,
  CookingPot,
  Flame,
  Fuel,
  IceCreamBowl,
  IceCreamCone,
  type LucideIcon,
  Pizza,
  Salad,
  Sandwich,
  Store,
  Truck,
  UtensilsCrossed,
  Wheat,
} from 'lucide-react';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import { StoreIcon } from '../shared/BrandIcons';

type Segment = { name: string; icon: LucideIcon };

const segments: Segment[] = [
  { name: 'Açaiteria', icon: IceCreamBowl },
  { name: 'Bar ou pub', icon: Beer },
  { name: 'Bistrô', icon: UtensilsCrossed },
  { name: 'Cafeteria', icon: Coffee },
  { name: 'Churrascaria', icon: Flame },
  { name: 'Delivery', icon: Bike },
  { name: 'Doceria', icon: Cookie },
  { name: 'Food truck', icon: Truck },
  { name: 'Hamburgueria', icon: Sandwich },
  { name: 'Lanchonete', icon: Sandwich },
  { name: 'Marmitaria', icon: Salad },
  { name: 'Padaria', icon: Wheat },
  { name: 'Pastelaria', icon: ChefHat },
  { name: 'Pizzaria', icon: Pizza },
  { name: 'Restaurante', icon: UtensilsCrossed },
  { name: 'Rede ou franquia de alimentação', icon: Building2 },
  { name: 'Salgaderia', icon: CookingPot },
  { name: 'Sorveteria', icon: IceCreamCone },
  { name: 'Posto de combustível', icon: Fuel },
  { name: 'Loja de conveniência', icon: Store },
];

const SegmentsSection = ({ subtitle }: { subtitle: string }) => {
  return (
    <section className="relative isolate py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="grid" />
      <div className="main-container space-y-10 md:space-y-12">
        <div className="mx-auto max-w-[800px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">
              <StoreIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              Setores atendidos
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="md:whitespace-nowrap">Feito para o seu tipo de negócio</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>{subtitle}</p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.3}>
          <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <Marquee gradient={false} speed={32} pauseOnHover autoFill>
              {segments.map((segment) => {
                const Icon = segment.icon;
                return (
                  <div
                    key={segment.name}
                    className="group border-secondary/10 bg-background-1 dark:bg-background-6 hover:border-primary-500/40 mx-2.5 flex items-center gap-3 rounded-2xl border py-3.5 pr-5 pl-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(35,35,31,0.1)]">
                    <span className="bg-primary-500/10 text-primary-500 flex size-10 shrink-0 items-center justify-center rounded-xl">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <p className="text-tagline-2 text-secondary dark:text-accent font-medium whitespace-nowrap">
                      {segment.name}
                    </p>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default SegmentsSection;
