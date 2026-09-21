import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { CTASection } from '@/components/CTASection';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { projects, beforeAfterItems } from '@/lib/projects';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';

export const metadata = generateMetadata({
  title: 'Our Work — Cleaning Projects & Transformations',
  description:
    'See our cleaning work in action. Before and after transformations, project showcases, and examples of our professional cleaning results.',
  path: '/our-work',
});

export default function OurWorkPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Our Work', path: '/our-work' },
      ])} />

      <PageHeader
        title="Our Work"
        subtitle="A look at the cleaning projects we've completed. From deep cleaning to restoration, see the results for yourself."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Our Work', path: '/our-work' },
        ]}
      />

      {/* Before & After Preview */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Before &amp; After
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Drag the slider to compare before and after results.
              </p>
            </div>
            <Link
              href="/our-work/before-after"
              className="hidden items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-600 sm:flex"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {beforeAfterItems.slice(0, 2).map((item) => (
              <div key={item.id}>
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  beforeAlt={item.beforeAlt}
                  afterImage={item.afterImage}
                  afterAlt={item.afterAlt}
                  label={item.service}
                />
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/our-work/before-after"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              View All Before &amp; After
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Projects
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A selection of our completed cleaning projects.
              </p>
            </div>
            <Link
              href="/our-work/projects"
              className="hidden items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-600 sm:flex"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                href="/our-work/projects"
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-1.5 font-heading text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/our-work/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Want Results Like These?"
        description="Book a cleaning service today and see the difference for yourself."
        primaryLabel="Book on WhatsApp"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
