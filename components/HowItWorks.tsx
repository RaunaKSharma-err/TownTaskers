import { howItWorks } from '@/lib/content';

export function HowItWorks() {
  return (
    <section className="section-py bg-secondary/30">
      <div className="container-mx container-px">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Getting your space cleaned is simple. Here is how the process works.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-border" />
            <div className="relative grid grid-cols-4 gap-6">
              {howItWorks.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center reveal" style={{ transitionDelay: `${step.step * 80}ms` }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-primary text-white font-heading text-xl font-bold shadow-soft">
                    {String(step.step).padStart(2, '0')}
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          <div className="relative pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border" />
            {howItWorks.map((step) => (
              <div key={step.step} className="relative pb-8 last:pb-0">
                <div className="absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-primary text-xs font-bold text-white shadow-soft">
                  {step.step}
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
