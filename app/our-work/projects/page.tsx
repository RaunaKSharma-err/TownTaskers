import { PageHeader } from '@/components/PageHeader';
import { CTASection } from '@/components/CTASection';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { ProjectsClient } from './ProjectsClient';

export const metadata = generateMetadata({
  title: 'Our Projects — Cleaning Projects in Birgunj',
  description:
    'A selection of completed cleaning projects by Town Taskers in Birgunj — residential, office, bathroom, sofa, deep cleaning, and commercial transformations.',
  path: '/our-work/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Our Work', path: '/our-work' },
        { name: 'Projects', path: '/our-work/projects' },
      ])} />

      <PageHeader
        title="Projects"
        subtitle="A selection of cleaning projects we've completed across residential, office, and commercial spaces."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Our Work', path: '/our-work' },
          { name: 'Projects', path: '/our-work/projects' },
        ]}
      />

      <ProjectsClient />

      <CTASection
        title="Want to Be Our Next Success Story?"
        description="Book a cleaning service and let us deliver the same quality results for your space."
        primaryLabel="Book on WhatsApp"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
