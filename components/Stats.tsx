import { stats } from '@/lib/content';

export function Stats() {
  return (
    <section className="border-y border-border bg-primary-50/50">
      <div className="container-mx container-px py-12 md:py-16">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center reveal">
              <div className="font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
