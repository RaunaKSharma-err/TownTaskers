import Link from 'next/link';
import { Droplets, ArrowRight, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gradient-clean px-4">
      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-50">
          <Droplets className="h-10 w-10 text-primary" />
        </div>

        <p className="mt-6 font-heading text-6xl font-bold text-primary md:text-7xl">404</p>

        <h1 className="mt-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
          Looks Like This Space Hasn&apos;t Been Cleaned Yet.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
          The page you&apos;re looking for couldn&apos;t be found. Let us help you find what you need.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-primary-600 hover:shadow-soft-md"
          >
            Back Home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-soft"
          >
            <Sparkles className="h-4 w-4" />
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
