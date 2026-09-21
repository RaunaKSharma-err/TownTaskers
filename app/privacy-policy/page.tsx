import { PageHeader } from '@/components/PageHeader';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata = generateMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for TownTaskers Sewa & Solution Pvt. Ltd. website.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
      ])} />

      <PageHeader
        title="Privacy Policy"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ]}
      />

      <section className="section-py">
        <div className="container-mx container-px">
          <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p className="text-base text-foreground">
              This privacy policy describes how TownTaskers Sewa &amp; Solution Pvt. Ltd. handles information collected through this website.
            </p>

            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">Information We Collect</h2>
              <p className="mt-2">
                When you contact us through our website, WhatsApp, or contact form, we may collect your name, phone number, email address, and any information you provide about your cleaning requirements.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">How We Use Your Information</h2>
              <p className="mt-2">
                We use the information you provide to respond to your enquiries, provide quotes, schedule services, and communicate with you about your booking.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">Information Sharing</h2>
              <p className="mt-2">
                We do not sell or share your personal information with third parties for marketing purposes. Your information is used solely for providing our cleaning services to you.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">Data Security</h2>
              <p className="mt-2">
                We take reasonable measures to protect your personal information from unauthorised access or disclosure.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">Contact</h2>
              <p className="mt-2">
                If you have questions about this privacy policy, please contact us through our contact page.
              </p>
            </div>

            <p className="text-xs text-muted-foreground/60">
              This privacy policy is a placeholder. Replace with your full legal privacy policy before launching.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
