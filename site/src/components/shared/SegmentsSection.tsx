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
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BackgroundLines from '../shared/BackgroundLines';
import { StoreIcon } from '../shared/BrandIcons';
import { cn } from '@/utils/cn';

type Segment = { name: string; icon: LucideIcon };

const categories: { id: string; label: string; segments: Segment[] }[] = [
  {
    id: 'alimentacao',
    label: 'Alimentação e Gastronomia',
    segments: [
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
    ],
  },
  {
    id: 'conveniencia',
    label: 'Lojas de Conveniência',
    segments: [
      { name: 'Posto de combustível', icon: Fuel },
      { name: 'Loja de conveniência', icon: Store },
    ],
  },
];

const SegmentsSection = ({ subtitle }: { subtitle: string }) => {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <section className="relative isolate py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <BackgroundLines variant="grid" />
      <div className="main-container space-y-10 md:space-y-12">
        <div className="mx-auto max-w-[680px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">
              <StoreIcon className="-mt-0.5 mr-2 inline-block size-4 align-middle" />
              Setores atendidos
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Feito para o seu tipo de negócio</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>{subtitle}</p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Categoria de segmentos">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeId === category.id}
                onClick={() => setActiveId(category.id)}
                className={cn(
                  'text-tagline-2 cursor-pointer rounded-full border px-5 py-2.5 font-medium transition-colors duration-300',
                  activeId === category.id
                    ? 'bg-primary-500 border-primary-500 text-white'
                    : 'bg-background-1 dark:bg-background-6 border-secondary/10 text-secondary dark:text-accent hover:border-primary-500/50 hover:text-primary-500',
                )}>
                {category.label}
              </button>
            ))}
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {active.segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <RevealAnimation key={segment.name} delay={(index % 8) * 0.05} start="top 95%">
                <div className="group border-secondary/10 bg-background-1 dark:bg-background-6 hover:border-primary-500/40 flex h-full flex-col items-center gap-3 rounded-2xl border p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(35,35,31,0.1)]">
                  <span className="bg-primary-500/10 text-primary-500 flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <p className="text-tagline-2 text-secondary dark:text-accent font-medium">{segment.name}</p>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
