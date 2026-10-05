import type { Metadata } from 'next';
import type { ServiceData } from '@/lib/services';
import { company } from '@/lib/config';

export const siteConfig = {
  name: company.shortName,
  fullName: company.companyName,
  url: company.website,
  description:
    'Professional cleaning and facility service solutions in Birgunj, Nepal. Residential, commercial, specialized cleaning, housekeeping, supplies and training.',
};

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}

const defaultOgImage = `${siteConfig.url}/og-image.png`;

export function generateMetadata({ title, description, path, keywords, image }: SeoOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || defaultOgImage;
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${company.companyName}`,
      description,
      url,
      siteName: company.companyName,
      type: 'website',
      locale: 'en_US',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${company.companyName}`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${company.website}#localbusiness`,
    name: company.companyName,
    alternateName: company.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${company.website}/icon-512.png`,
    email: company.email,
    telephone: `+${company.whatsappNumber}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.line1,
      addressLocality: 'Birgunj',
      addressRegion: 'Parsa',
      addressCountry: 'NP',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Birgunj',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Parsa',
      },
      {
        '@type': 'Country',
        name: 'Nepal',
      },
    ],
    sameAs: [],
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${company.website}#organization`,
    name: company.companyName,
    alternateName: company.shortName,
    url: siteConfig.url,
    logo: `${company.website}/icon-512.png`,
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+${company.whatsappNumber}`,
      contactType: 'customer service',
      areaServed: 'NP',
    },
  };
}

export function generateServiceJsonLd(service: ServiceData) {
  const serviceUrl = `${siteConfig.url}/services/${service.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${company.website}#localbusiness`,
      name: company.companyName,
      url: siteConfig.url,
    },
    serviceType: service.name,
    areaServed: {
      '@type': 'City',
      name: 'Birgunj',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl,
      servicePhone: `+${company.whatsappNumber}`,
    },
  };
}

export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function generateWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${company.website}#website`,
    url: siteConfig.url,
    name: company.companyName,
    alternateName: company.shortName,
    description: siteConfig.description,
    publisher: {
      '@id': `${company.website}#organization`,
    },
  };
}
