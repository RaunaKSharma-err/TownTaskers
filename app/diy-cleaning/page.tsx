import { AlertTriangle, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { CTASection } from '@/components/CTASection';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { diyTips } from '@/lib/content';
import Link from 'next/link';
import {
  Utensils,
  ShowerHead,
  Sofa,
  Grid3x3,
  Droplet,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

const iconMap: Record<string, typeof Utensils> = {
  Utensils,
  ShowerHead,
  Sofa,
  Grid3x3,
  Droplet,
  ShieldCheck,
  Wrench,
};

export const metadata = generateMetadata({
  title: 'DIY Cleaning Hub — Cleaning Tips & Advice',
  description:
    'Simple cleaning knowledge for everyday problems. Tips for kitchen, bathroom, sofa, tile, stain removal, cleaning safety, and home maintenance.',
  path: '/diy-cleaning',
});

export default function DIYCleaningPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'DIY Cleaning', path: '/diy-cleaning' },
      ])} />

      <PageHeader
        title="DIY Cleaning Hub"
        subtitle="Simple cleaning knowledge for everyday problems. Learn the right approach for common cleaning tasks around your home or office."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'DIY Cleaning', path: '/diy-cleaning' },
        ]}
      />

      {/* Safety Warning */}
      <section className="container-mx container-px pt-8">
        <div className="flex items-start gap-4 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-yellow-600" />
          <div>
            <p className="text-sm font-semibold text-foreground">
              Important Safety Warning
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Never mix household cleaning chemicals unless the product instructions explicitly state they can be combined. Some combinations — like bleach and vinegar, or bleach and ammonia — produce toxic gases that can cause serious harm.
            </p>
          </div>
        </div>
      </section>

      {/* DIY Tips Grid */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {diyTips.map((tip) => {
              const Icon = iconMap[tip.icon] || Wrench;
              return (
                <article
                  key={tip.id}
                  className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:shadow-soft-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {tip.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-sm">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Problem</p>
                      <p className="mt-1 text-foreground">{tip.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Recommended Approach</p>
                      <p className="mt-1 text-foreground">{tip.approach}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Things to Avoid</p>
                      <p className="mt-1 text-foreground">{tip.avoid}</p>
                    </div>
                    <div className="rounded-lg bg-secondary/60 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Safety Note</p>
                      <p className="mt-1 text-foreground">{tip.safety}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Link to Cleaning Code Generator */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Need a Personalised Cleaning Plan?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Try our Cleaning Code Generator — enter your space type, problem, and severity to get a custom cleaning recommendation.
            </p>
            <Link
              href="/diy-cleaning/cleaning-code-generator"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-primary-600 hover:shadow-soft-md"
            >
              Try the Cleaning Code Generator
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer Professional Cleaning?"
        description="If the job is too big or you'd rather leave it to the experts, our team is ready to help."
        primaryLabel="Book on WhatsApp"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
