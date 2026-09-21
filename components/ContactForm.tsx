'use client';

import { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number';
    if (!form.message.trim()) newErrors.message = 'Please enter a message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Compose WhatsApp message and open it
    const message =
      `Hello TownTaskers Sewa & Solution Pvt. Ltd.,\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      (form.email ? `Email: ${form.email}\n` : '') +
      (form.service ? `Service: ${form.service}\n` : '') +
      `\nMessage: ${form.message}`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center rounded-xl bg-accent-50 p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
          Message Ready!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ve opened WhatsApp with your message. If it didn&apos;t open, please reach us directly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', phone: '', email: '', service: '', message: '' });
          }}
          className="mt-4 text-sm font-medium text-primary hover:text-primary-600"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
          Name <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary ${
            errors.name ? 'border-destructive' : 'border-border'
          }`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
          Phone <span className="text-destructive">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary ${
            errors.phone ? 'border-destructive' : 'border-border'
          }`}
          placeholder="Your phone number"
        />
        {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
          placeholder="Your email (optional)"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
          Service
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => handleChange('service', e.target.value)}
          className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
        >
          <option value="">Select a service (optional)</option>
          <option value="House Cleaning">House Cleaning</option>
          <option value="Office Cleaning">Office Cleaning</option>
          <option value="Deep Cleaning">Deep Cleaning</option>
          <option value="Bathroom Cleaning">Bathroom Cleaning</option>
          <option value="Tile Cleaning">Tile Cleaning</option>
          <option value="Sofa Cleaning">Sofa Cleaning</option>
          <option value="Other Services">Other Services</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary ${
            errors.message ? 'border-destructive' : 'border-border'
          }`}
          placeholder="Tell us about your cleaning needs..."
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-primary-600 hover:shadow-soft-md"
      >
        <Send className="h-4 w-4" />
        Send via WhatsApp
      </button>
    </form>
  );
}
