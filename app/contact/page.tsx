import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata, generateBreadcrumbJsonLd, generateLocalBusinessJsonLd } from '@/lib/seo';
import { company } from '@/lib/config';
import { getWhatsAppUrl, getGeneralWhatsAppUrl } from '@/lib/whatsapp';
import { ContactForm } from '@/components/ContactForm';

export const metadata = generateMetadata({
  title: 'Contact Us — Get in Touch for Cleaning Services',
  description:
    'Contact TownTaskers for professional cleaning services. Reach us through WhatsApp, phone, or email. Book your cleaning service today.',
  path: '/contact',
});

export default function ContactPage() {
  const generalWhatsAppUrl = getGeneralWhatsAppUrl();

  return (
    <>
      <JsonLd data={[
        generateLocalBusinessJsonLd(),
        generateBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]),
      ]} />

      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us through WhatsApp, phone, or email. We&apos;re here to help with your cleaning needs."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

      <section className="section-py">
        <div className="container-mx container-px">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                WhatsApp is the fastest way to reach us. Send us a message and we&apos;ll get back to you with service details, pricing, and booking information.
              </p>

              {/* WhatsApp CTA */}
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-4 rounded-2xl bg-accent p-5 text-white shadow-soft transition-all hover:bg-accent-600 hover:shadow-soft-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-heading text-base font-semibold">Chat With Us on WhatsApp</p>
                  <p className="text-sm text-white/80">Fastest response — click to start a chat</p>
                </div>
              </a>

              {/* Contact Details */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Phone</p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">{company.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">WhatsApp</p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">{company.whatsappNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">{company.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Location</p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">{company.address.line2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Business Hours</p>
                    <ul className="mt-1.5 space-y-1">
                      {company.businessHours.map((bh) => (
                        <li key={bh.day} className="flex justify-between text-sm">
                          <span className="text-foreground">{bh.day}</span>
                          <span className="text-muted-foreground">{bh.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft md:p-8">
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you. For faster response, use WhatsApp.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
