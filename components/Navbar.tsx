'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Building2,
  Sparkles,
  ShowerHead,
  Grid3x3,
  Sofa,
  Settings,
  Square,
  Droplets,
  Utensils,
  Image as ImageIcon,
  Wrench,
  Phone,
  Users,
  Package,
  GraduationCap,
} from 'lucide-react';
import { services } from '@/lib/services';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const serviceIcons: Record<string, typeof Home> = {
  Home,
  Building2,
  Sparkles,
  ShowerHead,
  Grid3x3,
  Sofa,
  Settings,
  Square,
  Droplets,
  Utensils,
};

const navLinkBase = 'text-sm font-medium transition-colors hover:text-primary';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [ourWorkOpen, setOurWorkOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileOurWorkOpen, setMobileOurWorkOpen] = useState(false);
  const [mobileDiyOpen, setMobileDiyOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileMoreOpen(false);
    setMobileOurWorkOpen(false);
    setMobileDiyOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const moreLinks = [
    { name: 'Housekeeping & Maid Services', path: '/housekeeping', icon: Users },
    { name: 'Cleaning Materials & Supplies', path: '/cleaning-supplies', icon: Package },
    { name: 'Professional Cleaning Training', path: '/cleaning-training', icon: GraduationCap },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? 'border-border bg-white/90 shadow-soft backdrop-blur-md'
            : 'border-transparent bg-white'
        }`}
      >
        <nav className="container-mx container-px flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Town Taskers Home">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white md:h-10 md:w-10">
              <Droplets className="h-5 w-5 md:h-6 md:w-6" />
            </span>
            <span className={`font-heading font-bold leading-tight ${scrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
              Town<span className="text-primary">Taskers</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={`rounded-md px-3 py-2 ${navLinkBase} ${isActive('/') ? 'text-primary' : 'text-foreground'}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 rounded-md px-3 py-2 ${navLinkBase} ${
                  isActive('/services') ? 'text-primary' : 'text-foreground'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-72 rounded-xl border border-border bg-white p-2 shadow-soft-lg max-h-[70vh] overflow-y-auto">
                    <Link
                      href="/services"
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary"
                    >
                      <Sparkles className="h-4 w-4 text-primary" />
                      All Services
                    </Link>
                    <div className="my-1 h-px bg-border" />
                    {services.map((service) => {
                      const Icon = serviceIcons[service.icon] || Settings;
                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-primary-50 hover:text-primary"
                        >
                          <Icon className="h-4 w-4 text-primary" />
                          {service.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* More Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                className={`flex items-center gap-1 rounded-md px-3 py-2 ${navLinkBase} ${
                  isActive('/housekeeping') || isActive('/cleaning-supplies') || isActive('/cleaning-training') ? 'text-primary' : 'text-foreground'
                }`}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                More
                <ChevronDown className={`h-4 w-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-64 rounded-xl border border-border bg-white p-2 shadow-soft-lg">
                    {moreLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.path}
                          href={link.path}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-primary-50 hover:text-primary"
                        >
                          <Icon className="h-4 w-4 text-primary" />
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className={`rounded-md px-3 py-2 ${navLinkBase} ${isActive('/pricing') ? 'text-primary' : 'text-foreground'}`}
            >
              Pricing
            </Link>

            {/* DIY Cleaning */}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
            </div>

            {/* Our Work Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOurWorkOpen(true)}
              onMouseLeave={() => setOurWorkOpen(false)}
            >
              <button
                className={`flex items-center gap-1 rounded-md px-3 py-2 ${navLinkBase} ${
                  isActive('/our-work') ? 'text-primary' : 'text-foreground'
                }`}
                aria-expanded={ourWorkOpen}
                aria-haspopup="true"
              >
                Our Work
                <ChevronDown className={`h-4 w-4 transition-transform ${ourWorkOpen ? 'rotate-180' : ''}`} />
              </button>
              {ourWorkOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-56 rounded-xl border border-border bg-white p-2 shadow-soft-lg">
                    <Link
                      href="/our-work"
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary"
                    >
                      <ImageIcon className="h-4 w-4 text-primary" />
                      Overview
                    </Link>
                    <Link
                      href="/our-work/before-after"
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-primary-50 hover:text-primary"
                    >
                      <Sparkles className="h-4 w-4 text-primary" />
                      Before &amp; After
                    </Link>
                    <Link
                      href="/our-work/projects"
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-primary-50 hover:text-primary"
                    >
                      <Building2 className="h-4 w-4 text-primary" />
                      Projects
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/clients"
              className={`rounded-md px-3 py-2 ${navLinkBase} ${isActive('/clients') ? 'text-primary' : 'text-foreground'}`}
            >
              Clients
            </Link>
            <Link
              href="/about"
              className={`rounded-md px-3 py-2 ${navLinkBase} ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`rounded-md px-3 py-2 ${navLinkBase} ${isActive('/contact') ? 'text-primary' : 'text-foreground'}`}
            >
              Contact
            </Link>
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-primary-600 hover:shadow-soft-md lg:flex"
            >
              Book a Service
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                  <Droplets className="h-5 w-5" />
                </span>
                <span className="font-heading font-bold text-lg">
                  Town<span className="text-primary">Taskers</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col px-3 py-4">
              <Link href="/" className={`rounded-lg px-4 py-3 text-sm font-medium ${isActive('/') ? 'bg-primary-50 text-primary' : 'text-foreground'}`}>
                Home
              </Link>

              {/* Services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground"
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 flex flex-col border-l border-border pl-3 max-h-[40vh] overflow-y-auto">
                  <Link href="/services" className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-primary">
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* More Services accordion */}
              <button
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground"
                aria-expanded={mobileMoreOpen}
              >
                More Services
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileMoreOpen && (
                <div className="ml-4 flex flex-col border-l border-border pl-3">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/pricing" className={`rounded-lg px-4 py-3 text-sm font-medium ${isActive('/pricing') ? 'bg-primary-50 text-primary' : 'text-foreground'}`}>
                Pricing
              </Link>

              {/* DIY Cleaning accordion */}
              <button
                onClick={() => setMobileDiyOpen(!mobileDiyOpen)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground"
                aria-expanded={mobileDiyOpen}
              >
                DIY Cleaning
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileDiyOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileDiyOpen && (
                <div className="ml-4 flex flex-col border-l border-border pl-3">
                  <Link href="/diy-cleaning" className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-primary">
                    DIY Cleaning Hub
                  </Link>
                  <Link href="/diy-cleaning/cleaning-code-generator" className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-primary">
                    Cleaning Code Generator
                  </Link>
                </div>
              )}

              {/* Our Work accordion */}
              <button
                onClick={() => setMobileOurWorkOpen(!mobileOurWorkOpen)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground"
                aria-expanded={mobileOurWorkOpen}
              >
                Our Work
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileOurWorkOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileOurWorkOpen && (
                <div className="ml-4 flex flex-col border-l border-border pl-3">
                  <Link href="/our-work" className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-primary">
                    Overview
                  </Link>
                  <Link href="/our-work/before-after" className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-primary">
                    Before &amp; After
                  </Link>
                  <Link href="/our-work/projects" className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-primary">
                    Projects
                  </Link>
                </div>
              )}

              <Link href="/clients" className={`rounded-lg px-4 py-3 text-sm font-medium ${isActive('/clients') ? 'bg-primary-50 text-primary' : 'text-foreground'}`}>
                Clients
              </Link>
              <Link href="/about" className={`rounded-lg px-4 py-3 text-sm font-medium ${isActive('/about') ? 'bg-primary-50 text-primary' : 'text-foreground'}`}>
                About Us
              </Link>
              <Link href="/contact" className={`rounded-lg px-4 py-3 text-sm font-medium ${isActive('/contact') ? 'bg-primary-50 text-primary' : 'text-foreground'}`}>
                Contact
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-600"
              >
                <Phone className="h-4 w-4" />
                Book a Service
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
