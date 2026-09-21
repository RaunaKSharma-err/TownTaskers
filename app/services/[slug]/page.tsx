import { notFound } from 'next/navigation';
import { ServicePageTemplate, generateServiceMetadata } from '@/components/ServicePageTemplate';
import { services, getService } from '@/lib/services';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return generateServiceMetadata(service);
}

export default function ServicePage({ params }: PageProps) {
  const service = getService(params.slug);
  if (!service) notFound();

  return <ServicePageTemplate service={service} />;
}
