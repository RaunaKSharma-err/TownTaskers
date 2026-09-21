import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { ServiceGrid } from '@/components/ServiceGrid';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { HowItWorks } from '@/components/HowItWorks';
import { CTASection } from '@/components/CTASection';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { ClientLogos } from '@/components/ClientLogos';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateLocalBusinessJsonLd, generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/seo';
import { beforeAfterItems } from '@/lib/projects';
import { company } from '@/lib/config';
import Link from 'next/link';
import { ArrowRight, Users, Package, GraduationCap } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata = generateMetadata({
  title: 'Town Taskers | Professional Cleaning Services in Birgunj',
  description:
    'Professional cleaning and facility service solutions in Birgunj, Nepal. Residential, commercial, specialized cleaning, housekeeping, supplies and training.',
  path: '/',
  keywords: [
    'cleaning service Birgunj',
    'cleaning company Birgunj',
    'professional cleaning Birgunj',
    'house cleaning Birgunj',
    'office cleaning Birgunj',
    'deep cleaning Birgunj',
    'commercial cleaning Birgunj',
    'housekeeping Birgunj',
  ],
});

const additionalServices = [
  {
    icon: Users,
    title: 'Housekeeping & Maid Services',
    description: 'Maid services, housekeeping, pantry support, and contract-based cleaning manpower for recurring requirements.',
    href: '/housekeeping',
    cta: 'Discuss Your Requirement',
  },
  {
    icon: Package,
    title: 'Cleaning Materials & Supplies',
    description: 'Cleaning materials and supplies available. View products, request information, or ask about bulk pricing.',
    href: '/cleaning-supplies',
    cta: 'Request Product Quote',
  },
  {
    icon: GraduationCap,
    title: 'Professional Cleaning Training',
    description: 'Cleaning training programs covering procedures, chemical handling, equipment, safety, and housekeeping standards.',
    href: '/cleaning-training',
    cta: 'Enquire About Training',
  },
];

export default function HomePage() {
  const featuredBeforeAfter = beforeAfterItems[0];

  return (
    <>
      <JsonLd data={[
        generateLocalBusinessJsonLd(),
        generateOrganizationJsonLd(),
        generateWebSiteJsonLd(),
      ]} />

      <Hero />

      <Stats />

      {/* Services Section */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Our Cleaning Services
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Residential, commercial, and specialized cleaning solutions delivered with professional manpower and equipment in Birgunj.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Beyond Cleaning
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Town Taskers offers more than just cleaning — from housekeeping manpower to cleaning supplies and professional training.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:shadow-soft-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-600"
                >
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <HowItWorks />

      {/* Before & After Preview */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              See the Difference
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Drag the slider to see the before and after results of our professional cleaning.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <BeforeAfterSlider
              beforeImage={featuredBeforeAfter.beforeImage}
              beforeAlt={featuredBeforeAfter.beforeAlt}
              afterImage={featuredBeforeAfter.afterImage}
              afterAlt={featuredBeforeAfter.afterAlt}
              label={featuredBeforeAfter.service}
            />
            <div className="mt-8 text-center">
              <Link
                href="/our-work/before-after"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-soft"
              >
                View More Transformations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      <CTASection
        title="Ready for a Cleaner Space?"
        description="Tell us what needs cleaning and our team will help you find the right service."
        primaryLabel="Book a Service"
        secondaryLabel="Request a Quote"
        secondaryHref="/contact"
      />
    </>
  );
}
