import { Breadcrumbs } from '@/components/Breadcrumbs';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbItems: { name: string; path: string }[];
}

export function PageHeader({ title, subtitle, breadcrumbItems }: PageHeaderProps) {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <section className="border-b border-border bg-gradient-clean">
        <div className="container-mx container-px py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl font-bold text-balance text-foreground md:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
