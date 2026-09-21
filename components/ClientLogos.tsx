import { clientLogos } from '@/lib/clients';

export function ClientLogos() {
  return (
    <section className="section-py">
      <div className="container-mx container-px">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Trusted by Our Clients
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex h-16 items-center justify-center rounded-xl border border-border bg-white px-4"
            >
              <span className="text-sm font-semibold text-muted-foreground/70">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
