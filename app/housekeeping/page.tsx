import Image from 'next/image';
import Link from 'next/link';
import { Users, Building2, Utensils, ClipboardList, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { CTASection } from '@/components/CTASection';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { company } from '@/lib/config';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata = generateMetadata({
  title: 'Housekeeping & Maid Services in Birgunj',
  description:
    'Professional housekeeping and maid services for homes, offices, hotels, and institutions in Birgunj. Maid services, housekeeping, pantry support, and contract-based cleaning manpower.',
  path: '/housekeeping',
  keywords: [
    'housekeeping Birgunj',
    'maid services Birgunj',
    'cleaning manpower Birgunj',
    'pantry support Birgunj',
    'contract cleaning staff Birgunj',
  ],
});

const housekeepingServices = [
  {
    icon: Users,
    title: 'Maid Services',
    description: 'Trained domestic helpers for daily household cleaning, dusting, sweeping, mopping, and general upkeep.',
    includes: ['Daily cleaning routines', 'Dusting and surface wiping', 'Floor sweeping and mopping', 'Laundry and ironing support', 'Kitchen and bathroom cleaning'],
  },
  {
    icon: Utensils,
    title: 'Pantry Support',
    description: 'Dedicated pantry staff for office and institutional canteens — cleaning, stocking, beverage service, and hygiene maintenance.',
    includes: ['Pantry cleaning and sanitising', 'Beverage and snack replenishment', 'Dishwashing and utensil cleaning', 'Waste management', 'Hygiene compliance'],
  },
  {
    icon: Building2,
    title: 'Housekeeping Services',
    description: 'Comprehensive housekeeping for hotels, offices, and institutions including room servicing, public area cleaning, and linen management.',
    includes: ['Room cleaning and turn-down', 'Public area maintenance', 'Linen and laundry coordination', 'Guest supply replenishment', 'Quality inspections'],
  },
  {
    icon: ClipboardList,
    title: 'Contract-Based Cleaning Manpower',
    description: 'Flexible staffing solutions for recurring cleaning needs — daily, weekly, or monthly contracts with supervised teams.',
    includes: ['Trained cleaning personnel', 'Supervised service delivery', 'Flexible contract terms', 'Backup staff availability', 'Performance monitoring'],
  },
];

const differencePoints = [
  {
    title: 'One-Time Cleaning',
    description: 'A single, thorough cleaning session for a specific occasion or need.',
    points: ['Deep cleaning for move-in/move-out', 'Post-renovation cleanup', 'Seasonal deep cleaning', 'Event preparation cleaning', 'One-off bathroom/kitchen deep clean'],
    icon: Check,
  },
  {
    title: 'Recurring Housekeeping / Manpower',
    description: 'Ongoing cleaning support with dedicated staff on a scheduled basis.',
    points: ['Daily or weekly scheduled visits', 'Dedicated maid/housekeeper assignment', 'Pantry and canteen staffing', 'Hotel and office housekeeping teams', 'Contract-based with supervision'],
    icon: Users,
  },
];

export default function HousekeepingPage() {
  const whatsappUrl = getWhatsAppUrl('Housekeeping & Maid Services');

  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Housekeeping & Maid Services', path: '/housekeeping' },
      ])} />

      <PageHeader
        title="Housekeeping & Maid Services"
        subtitle="Professional maid services, housekeeping, pantry support, and contract-based cleaning manpower for homes, offices, hotels, and institutions in Birgunj."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Housekeeping & Maid Services', path: '/housekeeping' },
        ]}
      />

      {/* Service Cards */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {housekeepingServices.map((service, index) => (
              <div
                key={service.title}
                className="reveal group rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:shadow-soft-md"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time vs Recurring */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              One-Time Cleaning vs. Recurring Housekeeping
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Choose the right approach for your needs. We offer both options with professional standards.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {differencePoints.map((point, index) => (
              <div
                key={point.title}
                className="reveal rounded-2xl border border-border bg-white p-6 shadow-soft"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary">
                    <point.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{point.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
                <ul className="mt-4 space-y-2">
                  {point.points.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Ideal For
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Our housekeeping and manpower services serve a wide range of clients.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Homes & Apartments',
              'Offices & Corporate Spaces',
              'Hotels & Resorts',
              'Schools & Colleges',
              'Hospitals & Clinics',
              'Banks & Financial Institutions',
              'Restaurants & Cafes',
              'Factories & Warehouses',
            ].map((audience, index) => (
              <span
                key={index}
                className="rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground md:text-3xl">
            How We Work
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 1, title: 'Requirement Discussion', description: 'We understand your staffing needs, schedule, and scope of work.' },
              { step: 2, title: 'Staff Selection', description: 'We match trained personnel suited to your environment.' },
              { step: 3, title: 'Onboarding', description: 'Staff are briefed on your standards, protocols, and expectations.' },
              { step: 4, title: 'Ongoing Supervision', description: 'Regular quality checks and performance reviews ensure consistency.' },
            ].map((step, index) => (
              <div key={step.step} className="reveal relative" style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white font-heading text-lg font-bold shadow-soft">
                  {String(step.step).padStart(2, '0')}
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                {index < 3 && (
                  <ArrowRight className="absolute -right-3 top-4 hidden h-6 w-6 text-border lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Discuss Your Housekeeping Requirements"
        description="Whether you need a daily maid, pantry staff, or a full housekeeping team, we're ready to help. Contact us for a customised proposal."
        primaryLabel="Discuss Your Requirement"
        primaryService="Housekeeping & Maid Services"
        secondaryLabel="View Cleaning Services"
        secondaryHref="/services"
      />
    </>
  );
}