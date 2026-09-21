import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Check, Phone } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { company } from '@/lib/config';

const trustIndicators = [
  'Professional Manpower',
  'Appropriate Equipment',
  'Service Standards',
  'Reliable & Trusted',
];

export function Hero() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="relative overflow-hidden bg-gradient-clean">
      {/* Decorative bubbles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="float-bubble absolute right-[10%] top-[15%] h-32 w-32 rounded-full bg-primary-50" />
        <div className="float-bubble absolute right-[25%] top-[60%] h-20 w-20 rounded-full bg-primary-100/60" style={{ animationDelay: '1s' }} />
        <div className="float-bubble absolute left-[5%] bottom-[10%] h-16 w-16 rounded-full bg-accent-50" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-mx container-px relative py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Professional Cleaning &amp; Facility Service Solutions
            </div>

            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              Professional Cleaning. Reliable Service.{' '}
              <span className="text-primary">Better Spaces.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Residential, commercial and specialized cleaning solutions delivered with professional manpower, equipment and service standards.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-primary-600 hover:shadow-soft-md"
              >
                Book a Service
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-soft"
              >
                Request a Quote
              </Link>
            </div>

            {/* Contact quick links */}
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <a
                href={`tel:${company.phone}`}
                className="flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                Call: {company.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {trustIndicators.map((indicator) => (
                <div key={indicator} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-100">
                    <Check className="h-3 w-3 text-accent-600" />
                  </span>
                  {indicator}
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative" style={{ transitionDelay: '150ms' }}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft-lg">
              <Image
                src="https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&w=940&h=700"
                alt="Professional cleaner vacuuming a bright, modern living room in Birgunj"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-lift md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold text-foreground">Birgunj</div>
                  <div className="text-xs text-muted-foreground">Based in Parsa, Nepal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
