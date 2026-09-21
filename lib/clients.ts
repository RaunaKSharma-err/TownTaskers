export interface ClientCategory {
  name: string;
  count: string;
}

export const clientCategories: ClientCategory[] = [
  { name: 'Corporate', count: 'Companies & Businesses' },
  { name: 'Education', count: 'Schools & Colleges' },
  { name: 'Hospitality', count: 'Hotels' },
  { name: 'Banking', count: 'Banks' },
];

export const clientLogos: { name: string; category: string }[] = [
  { name: 'Surya Nepal Pvt. Ltd.', category: 'Corporate' },
  { name: 'Angel World School', category: 'Education' },
  { name: 'Birgunj Public College', category: 'Education' },
  { name: 'Hotel Iccha', category: 'Hospitality' },
  { name: 'Siddharth Diyalo', category: 'Corporate' },
  { name: 'Surya Nepal Ventures', category: 'Corporate' },
  { name: 'Sunlight ESS +2 School', category: 'Education' },
  { name: 'Studify International', category: 'Education' },
  { name: 'Kumari Bank — Adarshnagar Branch', category: 'Banking' },
  { name: 'Prabhu Bank — Adarshnagar Branch', category: 'Banking' },
];
