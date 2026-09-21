import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import { JsonLd } from '@/components/JsonLd';
import {
  generateMetadata,
  generateServiceJsonLd,
  generateFaqJsonLd,
  generateBreadcrumbJsonLd,
} from '@/lib/seo';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import type { ServiceData } from '@/lib/services';

export function generateServiceMetadata(service: ServiceData) {
  return generateMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

interface ServicePageTemplateProps {
  service: ServiceData;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const whatsappUrl = getWhatsAppUrl(service.name);
  const quoteUrl = getWhatsAppUrl(service.name);

  return (
    <>
      <JsonLd data={[
        generateServiceJsonLd(service),
        generateFaqJsonLd(service.faqs),
        generateBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.name, path: `/services/${service.slug}` },
        ]),
      ]} />

      <PageHeader
        title={service.name + ' Services'}
        subtitle={service.tagline}
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      {/* Hero section */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="reveal">
              <p className="text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-primary-600 hover:shadow-soft-md"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book This Service
                </a>
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-soft"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
            <div className="reveal relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft-md" style={{ transitionDelay: '100ms' }}>
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground md:text-3xl">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100">
                  <Check className="h-3.5 w-3.5 text-accent-600" />
                </span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-py">
        <div className="container-mx container-px">
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Benefits
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <h2 className="mb-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Ideal For
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.idealFor.map((item, index) => (
              <span
                key={index}
                className="rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py">
        <div className="container-mx container-px">
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Our Process
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white font-heading text-lg font-bold shadow-soft">
                  {String(step.step).padStart(2, '0')}
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                {index < service.process.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-4 hidden h-6 w-6 text-border lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <FAQ items={service.faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Need ${service.name}?`}
        description="Book your cleaning through WhatsApp — it's quick and easy."
        primaryLabel="Book This Service"
        primaryService={service.name}
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </>
  );
}
