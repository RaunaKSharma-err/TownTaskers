import { getWhatsAppUrl } from '@/lib/whatsapp';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryService?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel = 'Book on WhatsApp',
  primaryService,
  secondaryLabel = 'View Services',
  secondaryHref = '/services',
}: CTASectionProps) {
  const whatsappUrl = getWhatsAppUrl(primaryService);

  return (
    <section className="section-py">
      <div className="container-mx container-px">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-fresh px-6 py-12 text-center shadow-soft-lg md:px-12 md:py-16">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute left-10 top-8 h-24 w-24 rounded-full border-8 border-white" />
            <div className="absolute right-16 bottom-10 h-16 w-16 rounded-full border-6 border-white" />
            <div className="absolute right-10 top-12 h-10 w-10 rounded-full bg-white" />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-heading text-2xl font-bold text-white text-balance md:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent-600 hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                {primaryLabel}
              </a>
              <Link
                href={secondaryHref}
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-white/90 hover:shadow-md"
              >
                {secondaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
