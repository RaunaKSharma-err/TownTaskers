import { MetadataRoute } from 'next';
import { company } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/', '/*.json$', '/*.xml$'],
    },
    sitemap: `${company.website}/sitemap.xml`,
  };
}