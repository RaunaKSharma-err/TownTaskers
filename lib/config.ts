export const company = {
  companyName: 'Town Taskers Sewa & Solutions Pvt. Ltd.',
  shortName: 'Town Taskers',
  tagline: 'Professional Cleaning & Facility Service Solutions',
  founder: 'Redam Baniya Chhetri',
  founderTitle: 'Founder & CEO',
  phone: '9825290834',
  phone2: '9709681213',
  whatsappNumber: '9779825290834',
  email: 'info@towntaskers.com',
  address: {
    line1: 'Murli-12, Birgunj',
    line2: 'Birgunj, Parsa, Nepal',
    region: 'Birgunj, Parsa',
    country: 'Nepal',
  },
  businessHours: [
    { day: 'Monday – Friday', hours: 'Contact us for details' },
    { day: 'Saturday', hours: 'Contact us for details' },
    { day: 'Sunday', hours: 'Contact us for details' },
  ],
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    youtube: '',
  },
  website: 'https://www.towntaskers.com',
  achievements: [
    'Hult Prize BPC On-Campus Winner 2024',
    '3rd Position — Madhesh Startup Conference Pitch Competition',
  ],
} as const;

export type Company = typeof company;
