import Image from 'next/image';
import { Check, Target, Eye, Heart, Award, Users, Building2, Lightbulb } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { CTASection } from '@/components/CTASection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd, generateLocalBusinessJsonLd, generateOrganizationJsonLd } from '@/lib/seo';
import { company } from '@/lib/config';

export const metadata = generateMetadata({
  title: 'About Us — Town Taskers Sewa & Solutions Pvt. Ltd.',
  description:
    'Learn about Town Taskers Sewa & Solutions Pvt. Ltd. — professional cleaning and facility service solutions company. Our approach: People + Process + Equipment + Technology + Customer Service. Founder: Redam Baniya Chhetri.',
  path: '/about',
});

const values = [
  { title: 'Reliability', description: 'We show up when we say we will and deliver what we promise.' },
  { title: 'Professionalism', description: 'Trained, courteous, and respectful service every time.' },
  { title: 'Cleanliness', description: 'We hold ourselves to the same standards we bring to your space.' },
  { title: 'Integrity', description: 'Honest communication about what we can and cannot do.' },
  { title: 'Customer Satisfaction', description: 'Your experience matters from booking to completion.' },
  { title: 'Attention to Detail', description: 'We focus on the small things that make a big difference.' },
];

const approachPillars = [
  { icon: Users, title: 'People', description: 'Trained, professional manpower who take pride in their work.' },
  { icon: Lightbulb, title: 'Process', description: 'Standardised procedures for consistent, high-quality results.' },
  { icon: Building2, title: 'Equipment', description: 'Appropriate tools and machinery for every cleaning task.' },
  { icon: Target, title: 'Technology', description: 'Modern systems for scheduling, quality control, and communication.' },
  { icon: Heart, title: 'Customer Service', description: 'Responsive, transparent, and focused on your experience.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[
        generateOrganizationJsonLd(),
        generateBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]),
      ]} />

      <PageHeader
        title="About Town Taskers"
        subtitle="Professional cleaning and facility service solutions delivered with care, reliability, and attention to detail in Birgunj, Nepal."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]}
      />

      {/* Who We Are */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="reveal">
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Who We Are
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                <strong>{company.companyName}</strong> is a professional cleaning and facility service solutions company
                providing services for homes, offices, schools, colleges, banks, hotels, corporate organisations, and
                commercial properties in Birgunj and surrounding areas.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our approach is built on five pillars — <strong>People + Process + Equipment + Technology + Customer Service</strong>.
                We believe that a clean space contributes to a healthier, more comfortable, and more productive environment.
              </p>
            </div>
            <div className="reveal relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft-md" style={{ transitionDelay: '100ms' }}>
              <Image
                src="https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg?auto=compress&cs=tinysrgb&w=940&h=700"
                alt="Professional cleaning team in uniform"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Our Approach
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Five pillars that define how we deliver professional cleaning and facility services.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {approachPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="reveal rounded-2xl border border-border bg-white p-6 shadow-soft text-center"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To make clean, healthy, and well-maintained spaces more accessible through dependable service.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-8 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To become a trusted name in professional cleaning and facility service solutions across Nepal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="reveal relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft-md" style={{ transitionDelay: '100ms' }}>
              <Image
                src="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=940&h=700"
                alt="Business leader portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="reveal">
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Founder & CEO
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                <strong>{company.founder}</strong> — {company.founderTitle}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Redam Baniya Chhetri founded Town Taskers with a vision to bring professional cleaning and facility
                service standards to Birgunj and the surrounding region. Under his leadership, the company has grown
                to serve a diverse client base across residential, commercial, institutional, and hospitality sectors.
              </p>
              <div className="mt-6 space-y-3">
                {company.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                      <Award className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py">
        <div className="container-mx container-px">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-100">
                    <Check className="h-4 w-4 text-accent-600" />
                  </span>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <CTASection
        title="Let's Get Started"
        description="Reach out to us through WhatsApp and let's discuss how we can help with your cleaning needs."
        primaryLabel="Book on WhatsApp"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}