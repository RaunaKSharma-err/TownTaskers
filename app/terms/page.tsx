import { PageHeader } from '@/components/PageHeader';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata = generateMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and conditions for TownTaskers Sewa & Solution Pvt. Ltd. services and website usage.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Terms & Conditions', path: '/terms' },
      ])} />

      <PageHeader
        title="Terms &amp; Conditions"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Terms & Conditions', path: '/terms' },
        ]}
      />

      <section className="section-py">
        <div className="container-mx container-px">
          <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p className="text-base text-foreground">
              These terms and conditions govern the use of TownTaskers Sewa &amp; Solution Pvt. Ltd. services and website.
            </p>

            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">Service Agreements</h2>
              <p className="mt-2">
                Specific terms related to cleaning services, including scope, pricing, and scheduling, are confirmed at the time of booking through WhatsApp or other communication channels.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">Website Use</h2>
              <p className="mt-2">
                This website is provided for informational purposes. Content related to services, pricing, and availability may change without notice.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">Limitation of Liability</h2>
              <p className="mt-2">
                TownTaskers Sewa &amp; Solution Pvt. Ltd. is not liable for damages arising from the use of this website. Service-related liabilities are addressed in individual service agreements.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">Contact</h2>
              <p className="mt-2">
                For questions about these terms, please contact us through our contact page.
              </p>
            </div>

            <p className="text-xs text-muted-foreground/60">
              These terms are a placeholder. Replace with your full legal terms and conditions before launching.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
