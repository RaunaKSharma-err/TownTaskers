import { Check, MessageCircle, HelpCircle } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { CTASection } from '@/components/CTASection';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { pricingTiers } from '@/lib/content';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata = generateMetadata({
  title: 'Cleaning Service Pricing',
  description:
    'Explore our cleaning service packages. Basic, Standard, Deep, and Custom cleaning options. Get a personalised quote through WhatsApp.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Pricing', path: '/pricing' },
      ])} />

      <PageHeader
        title="Cleaning Service Pricing"
        subtitle="We offer flexible cleaning packages for different needs. Since every space is different, we provide custom quotes based on your specific requirements."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ]}
      />

      {/* Pricing Tiers */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier) => {
              const whatsappUrl = getWhatsAppUrl(`${tier.name} Package`);
              return (
                <div
                  key={tier.name}
                  className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-soft transition-all hover:shadow-soft-md ${
                    tier.highlight ? 'border-primary shadow-soft-md lg:scale-105' : 'border-border'
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {tier.description}
                  </p>

                  <div className="my-5">
                    <div className="font-heading text-3xl font-bold text-primary">
                      Get a Quote
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Pricing varies by space size and condition
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Suitable For
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tier.suitableFor.map((item) => (
                        <span key={item} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="mb-6 space-y-2.5 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      tier.highlight
                        ? 'bg-primary text-white hover:bg-primary-600'
                        : 'border border-border text-foreground hover:border-primary hover:text-primary'
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Get a Quote
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why no fixed prices */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-white p-8 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Why don&apos;t we display fixed prices?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Cleaning requirements vary significantly from one space to another. Instead of giving you an arbitrary number that might not match your actual needs, we provide personalised quotes based on:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span><strong>Space size</strong> — the total area to be cleaned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span><strong>Condition</strong> — the current state of the space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span><strong>Service type</strong> — the specific cleaning service required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span><strong>Frequency</strong> — one-time, weekly, or monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span><strong>Additional requirements</strong> — any special requests or focus areas</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  This approach ensures you only pay for what you actually need, rather than being locked into a package that doesn&apos;t match your space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Your Personalised Quote Today"
        description="Send us a message on WhatsApp with your cleaning requirements and we'll get back to you with a quote."
        primaryLabel="Get a Quote on WhatsApp"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
