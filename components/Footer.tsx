import Link from 'next/link';
import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { company } from '@/lib/config';
import { services } from '@/lib/services';

const socialLinks = [
  { icon: Facebook, href: company.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: company.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: company.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: company.social.twitter, label: 'Twitter' },
].filter((s) => s.href);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container-mx container-px py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <Droplets className="h-5 w-5" />
              </span>
              <span className="font-heading font-bold text-lg">
                Town<span className="text-primary">Taskers</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Professional cleaning and facility service solutions for homes, offices, and institutions in Birgunj, Nepal.
            </p>
            {socialLinks.length > 0 && (
              <div className="mt-4 flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Company</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Work', path: '/our-work' },
                { name: 'Clients', path: '/clients' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Services</h3>
            <ul className="space-y-2.5">
              {services.slice(0, 8).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services / Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">More &amp; Resources</h3>
            <ul className="space-y-2.5">
              {services.slice(8).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/housekeeping" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Housekeeping &amp; Maid Services
                </Link>
              </li>
              <li>
                <Link href="/cleaning-supplies" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Cleaning Materials &amp; Supplies
                </Link>
              </li>
              <li>
                <Link href="/cleaning-training" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Professional Cleaning Training
                </Link>
              </li>
              <li>
                <Link href="/diy-cleaning" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  DIY Cleaning Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${company.phone}`} className="transition-colors hover:text-primary">{company.phone}</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${company.phone2}`} className="transition-colors hover:text-primary">{company.phone2}</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-primary">{company.email}</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{company.address.line1}, {company.address.line2}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {company.companyName}. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
