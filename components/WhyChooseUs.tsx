import { whyChooseUs } from '@/lib/content';
import {
  Users,
  Search,
  SlidersHorizontal,
  MessageCircle,
  Eye,
  Heart,
} from 'lucide-react';

const iconMap: Record<string, typeof Users> = {
  Users,
  Search,
  SlidersHorizontal,
  MessageCircle,
  Eye,
  Heart,
};

export function WhyChooseUs() {
  return (
    <section className="section-py">
      <div className="container-mx container-px">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Why Choose TownTaskers?
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            We focus on the things that matter — reliable service, attention to detail, and a straightforward booking experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] || Users;
            return (
              <div
                key={index}
                className="reveal group rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:shadow-soft-md"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
