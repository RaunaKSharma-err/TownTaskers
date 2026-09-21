import { PageHeader } from '@/components/PageHeader';
import { CTASection } from '@/components/CTASection';
import { ClientLogos } from '@/components/ClientLogos';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { clientCategories } from '@/lib/clients';

export const metadata = generateMetadata({
  title: 'Our Clients — Trusted by Homes & Businesses',
  description:
    'TownTaskers is trusted by residential, commercial, office, and institutional clients for professional cleaning services.',
  path: '/clients',
});

export default function ClientsPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Clients', path: '/clients' },
      ])} />

      <PageHeader
        title="Trusted by Our Clients"
        subtitle="We provide cleaning services across residential, commercial, office, and institutional spaces."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Clients', path: '/clients' },
        ]}
      />

      {/* Client Categories */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {clientCategories.map((category) => (
              <div
                key={category.name}
                className="rounded-2xl border border-border bg-white p-6 text-center shadow-soft"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {category.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />

      <section className="section-py">
        <div className="container-mx container-px">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-secondary/20 p-8 text-center">
            <h2 className="font-heading text-xl font-bold text-foreground">
              Become a TownTaskers Client
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Whether you need a one-time deep clean or recurring service for your space, we&apos;re ready to help. Reach out to us through WhatsApp to get started.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        description="Contact us today to discuss your cleaning needs."
        primaryLabel="Book on WhatsApp"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
