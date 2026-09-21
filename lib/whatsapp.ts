import { company } from '@/lib/config';

/**
 * Generates a WhatsApp deep link with a pre-filled, service-specific message.
 */
export function generateWhatsAppMessage(serviceName?: string): string {
  if (serviceName) {
    return (
      `Hello ${company.shortName}, I am interested in ${serviceName}. I would like to know more about the service.`
    );
  }
  return (
    `Hello ${company.shortName}, I would like to know more about your cleaning services.`
  );
}

/**
 * Opens WhatsApp with an optional service-specific pre-filled message.
 */
export function openWhatsApp(service?: string): void {
  const message = generateWhatsAppMessage(service);
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${company.whatsappNumber}?text=${encoded}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Returns the WhatsApp URL without opening it (for use in <a href> attributes).
 */
export function getWhatsAppUrl(service?: string): string {
  const message = generateWhatsAppMessage(service);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${company.whatsappNumber}?text=${encoded}`;
}

/**
 * Returns a general WhatsApp URL (for the floating button, contact page, etc.)
 */
export function getGeneralWhatsAppUrl(): string {
  const message = generateWhatsAppMessage();
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${company.whatsappNumber}?text=${encoded}`;
}
