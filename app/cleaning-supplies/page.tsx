import Image from 'next/image';
import Link from 'next/link';
import { Package, Truck, Shield, Check, ArrowRight, MessageCircle, Factory, Home, Building2 } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { CTASection } from '@/components/CTASection';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { company } from '@/lib/config';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata = generateMetadata({
  title: 'Cleaning Materials & Supplies in Birgunj',
  description:
    'Cleaning materials and supplies for residential, commercial, and institutional use in Birgunj. Request product information, bulk pricing, and supply requirements.',
  path: '/cleaning-supplies',
  keywords: [
    'cleaning supplies Birgunj',
    'cleaning materials Birgunj',
    'janitorial supplies Birgunj',
    'bulk cleaning products Birgunj',
    'commercial cleaning supplies Birgunj',
  ],
});

const supplyCategories = [
  {
    icon: Package,
    title: 'General Cleaning Supplies',
    description: 'Everyday cleaning products for routine maintenance across all surface types.',
    items: ['All-purpose cleaners', 'Glass and window cleaners', 'Floor cleaners and disinfectants', 'Bathroom and toilet cleaners', 'Kitchen degreasers', 'Dusting and polishing products'],
  },
  {
    icon: Shield,
    title: 'Specialised & Professional Products',
    description: 'Professional-grade solutions for specific cleaning challenges and surfaces.',
    items: ['Carpet and upholstery shampoos', 'Tile and grout cleaners', 'Stain removers and spot treatments', 'Descalers and limescale removers', 'Mould and mildew treatments', 'Wood and leather care products'],
  },
  {
    icon: Factory,
    title: 'Equipment & Tools',
    description: 'Cleaning equipment for efficient and thorough results.',
    items: ['Vacuum cleaners (wet/dry)', 'Floor scrubbers and polishers', 'Steam cleaning machines', 'Pressure washers', 'Microfibre cloth and mop systems', 'Cleaning trolleys and caddies', 'Personal protective equipment (PPE)'],
  },
  {
    icon: Truck,
    title: 'Bulk & Institutional Supply',
    description: 'Large-quantity supply options for commercial and institutional clients.',
    items: ['Commercial-size containers', 'Dilution control systems', 'Dispenser systems (soap, paper, sanitiser)', 'Waste bags and bin liners', 'Paper products (towels, tissues, rolls)', 'Custom supply schedules'],
  },
];

const targetAudiences = [
  { icon: Home, title: 'Residential', description: 'Homeowners needing quality cleaning products for daily use.' },
  { icon: Building2, title: 'Offices & Corporate', description: 'Businesses requiring regular janitorial supplies for facility maintenance.' },
  { icon: Factory, title: 'Hotels & Hospitality', description: 'Hotels needing guest-room and public-area cleaning supplies at scale.' },
  { icon: Building2, title: 'Schools & Colleges', description: 'Educational institutions with ongoing cleaning and hygiene requirements.' },
  { icon: Shield, title: 'Healthcare Facilities', description: 'Hospitals and clinics requiring compliant cleaning and sanitising products.' },
  { icon: Factory, title: 'Factories & Warehouses', description: 'Industrial sites needing heavy-duty degreasers and floor care products.' },
];

const whyChooseUs = [
  { title: 'Quality Products', description: 'We supply reliable cleaning products that deliver consistent results.' },
  { title: 'Bulk Pricing', description: 'Competitive rates for commercial and institutional volume orders.' },
  { title: 'Expert Guidance', description: 'Our team can recommend the right products for your specific needs.' },
  { title: 'Flexible Delivery', description: 'Scheduled deliveries to match your consumption and storage capacity.' },
  { title: 'Local Availability', description: 'Based in Birgunj — we understand local supply requirements.' },
  { title: 'Ongoing Support', description: 'Not just a one-time sale — we support your long-term supply needs.' },
];

export default function CleaningSuppliesPage() {
  const whatsappUrl = getWhatsAppUrl('Cleaning Materials & Supplies');

  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Cleaning Materials & Supplies', path: '/cleaning-supplies' },
      ])} />

      <PageHeader
        title="Cleaning Materials & Supplies"
        subtitle="Quality cleaning products, equipment, and bulk supplies for homes, offices, hotels, and institutions in Birgunj. Request product information or bulk pricing."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Cleaning Materials & Supplies', path: '/cleaning-supplies' },
        ]}
      />

      {/* Supply Categories */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Our Supply Categories
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              From everyday cleaners to professional equipment — we stock what you need.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supplyCategories.map((category, index) => (
              <div
                key={category.title}
                className="reveal group rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:shadow-soft-md"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {category.items.map((item, i) => (
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
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Who We Supply
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Our cleaning materials serve clients across residential, commercial, and institutional sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {targetAudiences.map((audience, index) => (
              <div
                key={audience.title}
                className="reveal rounded-2xl border border-border bg-white p-6 shadow-soft"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <audience.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {audience.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Why Source From Town Taskers?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason, index) => (
              <div
                key={reason.title}
                className="reveal rounded-2xl border border-border bg-white p-6 shadow-soft"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <h3 className="font-heading text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground md:text-3xl">
            How to Order
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 1, title: 'Tell Us Your Needs', description: 'Share your cleaning requirements, volumes, and preferred products.' },
              { step: 2, title: 'Product Recommendation', description: 'We suggest suitable products based on your surfaces and usage.' },
              { step: 3, title: 'Quote & Agreement', description: 'Receive pricing for your order volume and delivery schedule.' },
              { step: 4, title: 'Delivery & Support', description: 'Supplies delivered to your location with ongoing reorder support.' },
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
        title="Request a Product Quote"
        description="Need cleaning supplies for your home, office, or institution? Tell us what you're looking for and we'll provide pricing and availability."
        primaryLabel="Request Product Quote"
        primaryService="Cleaning Materials & Supplies"
        secondaryLabel="View Cleaning Services"
        secondaryHref="/services"
      />
    </>
  );
}