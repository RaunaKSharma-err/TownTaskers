import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/services';

interface ServiceGridProps {
  servicesList?: typeof services;
}

export function ServiceGrid({ servicesList = services }: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {servicesList.map((service) => (
        <ServiceCard
          key={service.slug}
          slug={service.slug}
          name={service.name}
          description={service.description}
          image={service.image}
          imageAlt={service.imageAlt}
          iconName={service.icon}
        />
      ))}
    </div>
  );
}
