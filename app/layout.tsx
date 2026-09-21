import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SkipLink } from '@/components/SkipLink';
import { JsonLd } from '@/components/JsonLd';
import { 
  generateLocalBusinessJsonLd, 
  generateOrganizationJsonLd, 
  generateWebSiteJsonLd 
} from '@/lib/seo';
import { company } from '@/lib/config';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter', 
  display: 'swap',
  preload: true,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: `${company.companyName} | Professional Cleaning Services in Birgunj`,
    template: `%s | ${company.companyName}`,
  },
  description:
    'Professional cleaning and facility service solutions in Birgunj, Nepal. Residential, commercial, specialized cleaning, housekeeping, cleaning supplies and professional training.',
  keywords: [
    'cleaning service Birgunj',
    'cleaning company Birgunj',
    'professional cleaning Birgunj',
    'house cleaning Birgunj',
    'office cleaning Birgunj',
    'sofa cleaning Birgunj',
    'carpet cleaning Birgunj',
    'deep cleaning Birgunj',
    'bathroom cleaning Birgunj',
    'commercial cleaning Birgunj',
    'cleaning company Parsa',
    'housekeeping Birgunj',
    'Town Taskers',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: `${company.companyName} | Professional Cleaning Services in Birgunj`,
    description:
      'Residential, commercial and specialized cleaning solutions in Birgunj, Nepal. Professional manpower, equipment and service standards.',
    siteName: company.companyName,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Town Taskers Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: company.companyName,
    description: 'Professional cleaning and facility service solutions in Birgunj, Nepal.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/icon-192.png',
    other: {
      rel: 'manifest',
      url: '/manifest.json',
    },
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body className="font-sans">
        <SkipLink />
        <JsonLd data={[
          generateLocalBusinessJsonLd(),
          generateOrganizationJsonLd(),
          generateWebSiteJsonLd(),
        ]} />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
        <ScrollReveal />
      </body>
    </html>
  );
}