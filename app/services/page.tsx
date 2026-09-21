import { PageHeader } from '@/components/PageHeader';
import { ServiceGrid } from '@/components/ServiceGrid';
import { CTASection } from '@/components/CTASection';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { services, serviceCategories, getServicesByCategory } from '@/lib/services';
import Link from 'next/link';
import { ArrowRight, Users, Package, GraduationCap } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Professional Cleaning Services in Birgunj',
  description:
    'Explore our professional cleaning services in Birgunj — residential, commercial, and specialized cleaning. House deep cleaning, office cleaning, bathroom, kitchen, sofa, carpet, tile, glass, water tank cleaning and more.',
  path: '/services',
  keywords: [
    'cleaning services Birgunj',
    'house cleaning Birgunj',
    'office cleaning Birgunj',
    'deep cleaning Birgunj',
    'sofa cleaning Birgunj',
    'bathroom cleaning Birgunj',
    'carpet cleaning Birgunj',
    'tile cleaning Birgunj',
    'commercial cleaning Birgunj',
  ],
});

const additionalServices = [
  {
    icon: Users,
    title: 'Housekeeping & Maid Services',
    description: 'Maid services, housekeeping, pantry support, and contract-based cleaning manpower.',
    href: '/housekeeping',
    cta: 'Discuss Your Requirement',
  },
  {
    icon: Package,
    title: 'Cleaning Materials & Supplies',
    description: 'Cleaning materials and supplies. Request product information or bulk pricing.',
    href: '/cleaning-supplies',
    cta: 'Request Product Quote',
  },
  {
    icon: GraduationCap,
    title: 'Professional Cleaning Training',
    description: 'Training programs for cleaning companies, hotels, schools, and individual workers.',
    href: '/cleaning-training',
    cta: 'Enquire About Training',
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
      ])} />

      <PageHeader
        title="Professional Cleaning Services"
        subtitle="Residential, commercial, and specialized cleaning solutions delivered with professional manpower and equipment in Birgunj, Nepal."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />

      {serviceCategories.map((category) => {
        const categoryServices = getServicesByCategory(category.name);
        if (categoryServices.length === 0) return null;
        return (
          <section key={category.name} className="section-py">
            <div className="container-mx container-px">
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  {category.label}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {category.name === 'Residential' && 'Professional cleaning services for homes and apartments.'}
                  {category.name === 'Commercial' && 'Cleaning services for offices, businesses, and commercial properties.'}
                  {category.name === 'Specialized' && 'Specialized cleaning services for specific surfaces and requirements.'}
                </p>
              </div>
              <ServiceGrid servicesList={categoryServices} />
            </div>
          </section>
        );
      })}

      {/* Additional Services */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              More Services
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Beyond cleaning — housekeeping manpower, cleaning supplies, and professional training.
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

      <CTASection
        title="Not Sure Which Service You Need?"
        description="Tell us about your space and we will help you find the right cleaning solution."
        primaryLabel="Book a Service"
        secondaryLabel="Get Custom Quote"
        secondaryHref="/pricing"
      />
    </>
  );
}
