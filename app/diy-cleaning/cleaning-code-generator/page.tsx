import { PageHeader } from '@/components/PageHeader';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { CleaningCodeGeneratorClient } from './CleaningCodeGeneratorClient';

export const metadata = generateMetadata({
  title: 'Cleaning Code Generator — Personalised Cleaning Recommendations',
  description:
    'Generate a personalised cleaning code based on your space type, cleaning problem, severity, and frequency. Get recommended steps, tools, and safety tips.',
  path: '/diy-cleaning/cleaning-code-generator',
});

export default function CleaningCodeGeneratorPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'DIY Cleaning', path: '/diy-cleaning' },
        { name: 'Cleaning Code Generator', path: '/diy-cleaning/cleaning-code-generator' },
      ])} />

      <PageHeader
        title="Cleaning Code Generator"
        subtitle="Enter your space type, cleaning problem, severity, and frequency to get a personalised cleaning recommendation with a unique code."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'DIY Cleaning', path: '/diy-cleaning' },
          { name: 'Cleaning Code Generator', path: '/diy-cleaning/cleaning-code-generator' },
        ]}
      />

      <CleaningCodeGeneratorClient />
    </>
  );
}
