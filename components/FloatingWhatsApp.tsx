'use client';

import { useState, useEffect } from 'react';
import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';

export function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <a
      href={getGeneralWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-4 right-4 z-50 flex items-center gap-2 md:bottom-6 md:right-6"
    >
      <span className="pointer-events-none hidden whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background opacity-0 shadow-soft-md transition-opacity group-hover:opacity-100 md:block">
        Chat with us on WhatsApp
      </span>
      <span className="pulse-ring flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform group-hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.599 5.392l-.999 3.648 3.81-1.017zm5.488-5.556l-.408-.375c-.864-.732-1.621-1.275-2.331-1.977-.641-.641-1.216-1.319-1.728-2.021-.438-.604-.69-1.071-.69-1.071s.69-1.207 1.69-1.207c.864 0 1.449.776 1.449.776s.331.464.331.776c0 .312-.173.468-.173.468s.173.261.173.518c0 .257-.202.528-.202.528s.172.173.172.345c0 .172-.144.296-.144.296s.058.246-.172.516z" />
        </svg>
      </span>
    </a>
  );
}
