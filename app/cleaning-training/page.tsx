import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Award, Users, Building2, BookOpen, Check, ArrowRight, MessageCircle, Shield, Target, Clock, Factory } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { CTASection } from '@/components/CTASection';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { company } from '@/lib/config';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata = generateMetadata({
  title: 'Professional Cleaning Training in Birgunj',
  description:
    'Professional cleaning training programs for cleaning companies, hotels, schools, offices, and individual workers. General cleaning, advanced techniques, chemical handling, equipment, safety, and certification.',
  path: '/cleaning-training',
  keywords: [
    'cleaning training Birgunj',
    'professional cleaning course Birgunj',
    'housekeeping training Birgunj',
    'cleaning certification Nepal',
    'janitorial training Birgunj',
    'chemical handling training',
  ],
});

const trainingPrograms = [
  {
    icon: BookOpen,
    title: 'General Cleaning Training',
    description: 'Foundation course covering basic cleaning principles, techniques, and standards for entry-level staff.',
    duration: '1-2 Days',
    includes: ['Cleaning fundamentals and terminology', 'Surface identification and care', 'Basic tool and equipment usage', 'Standard cleaning procedures', 'Time management and efficiency', 'Customer service basics'],
  },
  {
    icon: Award,
    title: 'Advanced Cleaning Training',
    description: 'Specialised techniques for complex cleaning challenges and premium service delivery.',
    duration: '2-3 Days',
    includes: ['Deep cleaning methodologies', 'Stain identification and removal', 'Restoration cleaning techniques', 'High-touch point sanitisation', 'Quality inspection standards', 'Advanced equipment operation'],
  },
  {
    icon: Shield,
    title: 'Chemical Handling & Safety',
    description: 'Essential safety training for proper chemical selection, handling, storage, and regulatory compliance.',
    duration: '1 Day',
    includes: ['Chemical classification and labelling', 'Safety Data Sheets (SDS) reading', 'PPE selection and usage', 'Dilution ratios and mixing safety', 'Hazard communication', 'Spill response and first aid', 'Storage and disposal guidelines'],
  },
  {
    icon: Target,
    title: 'Equipment Operation & Maintenance',
    description: 'Hands-on training for professional cleaning equipment operation, care, and troubleshooting.',
    duration: '1-2 Days',
    includes: ['Vacuum cleaner types and maintenance', 'Floor machine operation (scrubbers, polishers)', 'Steam cleaner usage and safety', 'Pressure washer handling', 'Equipment inspection routines', 'Basic troubleshooting and repairs'],
  },
  {
    icon: Clock,
    title: 'Cleaning Procedures & Standards',
    description: 'Standardised operating procedures for consistent, high-quality cleaning across different environments.',
    duration: '1-2 Days',
    includes: ['Room cleaning sequences', 'Checklist and inspection systems', 'Colour-coding and cross-contamination prevention', 'Waste segregation and handling', 'Green cleaning practices', 'Documentation and reporting'],
  },
  {
    icon: Users,
    title: 'Housekeeping Standards & Management',
    description: 'Comprehensive housekeeping management training for supervisors and team leads in hospitality and institutional settings.',
    duration: '2-3 Days',
    includes: ['Room inspection and quality control', 'Linen and laundry management', 'Inventory and supply control', 'Staff scheduling and supervision', 'Guest communication and service recovery', 'Budget and cost management', 'Health and safety compliance'],
  },
];

const targetAudiences = [
  { icon: Building2, title: 'Cleaning Companies', description: 'Upskill your workforce with certified training programs.' },
  { icon: Building2, title: 'Hotels & Resorts', description: 'Elevate housekeeping standards with professional training.' },
  { icon: GraduationCap, title: 'Schools & Colleges', description: 'Train in-house maintenance and cleaning staff.' },
  { icon: Building2, title: 'Offices & Corporate', description: 'Develop facility management team capabilities.' },
  { icon: Shield, title: 'Hospitals & Clinics', description: 'Specialised healthcare cleaning and infection control training.' },
  { icon: Users, title: 'Individual Workers', description: 'Career development for cleaning professionals seeking certification.' },
  { icon: Target, title: 'In-House Teams', description: 'Custom training for internal facility and housekeeping departments.' },
  { icon: Factory, title: 'Industrial Facilities', description: 'Industrial cleaning safety and procedure training.' },
];

const trainingFeatures = [
  { icon: Award, title: 'Certification', description: 'Participants receive certificates upon successful completion.' },
  { icon: Users, title: 'Practical Demonstrations', description: 'Hands-on practice with real equipment and scenarios.' },
  { icon: BookOpen, title: 'Training Materials', description: 'Comprehensive manuals and reference guides provided.' },
  { icon: Shield, title: 'Safety-First Approach', description: 'All training emphasises safe work practices and compliance.' },
  { icon: Target, title: 'Customisable Content', description: 'Programs tailored to your specific industry and requirements.' },
  { icon: Clock, title: 'Flexible Scheduling', description: 'Training delivered at your premises or our facility, on your schedule.' },
];

export default function CleaningTrainingPage() {
  const whatsappUrl = getWhatsAppUrl('Professional Cleaning Training');

  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Professional Cleaning Training', path: '/cleaning-training' },
      ])} />

      <PageHeader
        title="Professional Cleaning Training"
        subtitle="Comprehensive training programs covering general cleaning, advanced techniques, chemical handling, equipment operation, safety, and housekeeping standards. Certificates awarded upon completion."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Professional Cleaning Training', path: '/cleaning-training' },
        ]}
      />

      {/* Training Programs */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Training Programs
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Structured courses designed for different skill levels and industry requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainingPrograms.map((program, index) => (
              <div
                key={program.title}
                className="reveal group rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:shadow-soft-md"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <program.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary-50 px-2.5 py-1 rounded-full">
                    {program.duration}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {program.includes.map((item, i) => (
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
              Who Should Attend
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Our training programs serve organisations and individuals across multiple sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Training Features */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              What Makes Our Training Different
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainingFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="reveal rounded-2xl border border-border bg-white p-6 shadow-soft"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground md:text-3xl">
            How to Enrol
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 1, title: 'Contact Us', description: 'Share your training needs, participant count, and preferred dates.' },
              { step: 2, title: 'Program Design', description: 'We customise the curriculum for your industry and skill level.' },
              { step: 3, title: 'Schedule & Deliver', description: 'Training conducted at your site or our facility with practical sessions.' },
              { step: 4, title: 'Certification', description: 'Participants assessed and certified upon successful completion.' },
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
        title="Enquire About Training Programs"
        description="Invest in your team's skills with professional cleaning training. Contact us to discuss your requirements and get a customised proposal."
        primaryLabel="Enquire About Training"
        primaryService="Professional Cleaning Training"
        secondaryLabel="View Cleaning Services"
        secondaryHref="/services"
      />
    </>
  );
}