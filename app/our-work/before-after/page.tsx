import { PageHeader } from '@/components/PageHeader';
import { CTASection } from '@/components/CTASection';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { beforeAfterItems } from '@/lib/projects';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';

export const metadata = generateMetadata({
  title: 'Before & After — Cleaning Transformations',
  description:
    'See before and after photos of our cleaning work. Bathroom deep cleaning, kitchen cleaning, tile restoration, and more transformations.',
  path: '/our-work/before-after',
});

export default function BeforeAfterPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Our Work', path: '/our-work' },
        { name: 'Before & After', path: '/our-work/before-after' },
      ])} />

      <PageHeader
        title="Before & After"
        subtitle="Drag the slider on each image to see the transformation from before to after our professional cleaning."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Our Work', path: '/our-work' },
          { name: 'Before & After', path: '/our-work/before-after' },
        ]}
      />

      <section className="section-py">
        <div className="container-mx container-px">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {beforeAfterItems.map((item) => (
              <div key={item.id}>
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  beforeAlt={item.beforeAlt}
                  afterImage={item.afterImage}
                  afterAlt={item.afterAlt}
                  label={item.service}
                />
                <div className="mt-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.service}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for Your Own Transformation?"
        description="Book a cleaning service and see the difference in your space."
        primaryLabel="Book on WhatsApp"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
