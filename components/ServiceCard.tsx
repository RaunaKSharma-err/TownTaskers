import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface ServiceCardProps {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  iconName: string;
}

import {
  Home,
  Building2,
  ShowerHead,
  Grid3x3,
  Sofa,
  Settings,
} from 'lucide-react';

const iconMap: Record<string, typeof Home> = {
  Home,
  Building2,
  Sparkles,
  ShowerHead,
  Grid3x3,
  Sofa,
  Settings,
};

export function ServiceCard({ slug, name, description, image, imageAlt, iconName }: ServiceCardProps) {
  const Icon = iconMap[iconName] || Sparkles;
  const whatsappUrl = getWhatsAppUrl(name);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Link href={`/services/${slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 shadow-soft">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          <Link href={`/services/${slug}`} className="transition-colors hover:text-primary">
            {name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <Link
            href={`/services/${slug}`}
            className="group/link flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-600"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto rounded-lg bg-accent px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-600"
          >
            Book Now
          </a>
        </div>
      </div>
    </article>
  );
}
