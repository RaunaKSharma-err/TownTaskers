import { Star } from 'lucide-react';
import { testimonials } from '@/lib/testimonials';

export function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft">
      <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-border text-border'}`}
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-4 border-t border-border pt-4">
        <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
        {(testimonial.location || testimonial.service) && (
          <p className="mt-0.5 text-xs text-muted-foreground">
            {[testimonial.location, testimonial.service].filter(Boolean).join(' · ')}
          </p>
        )}
      </div>
      {testimonial.isPlaceholder && (
        <span className="mt-3 inline-block w-fit rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
          Placeholder
        </span>
      )}
    </div>
  );
}
