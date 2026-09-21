export const stats = [
  { id: 's1', value: '6', label: 'Service Areas', isPlaceholder: false },
  { id: 's2', value: '10', label: 'Client Partners', isPlaceholder: false },
  { id: 's3', value: '22', label: 'Cleaning Services', isPlaceholder: false },
  { id: 's4', value: 'Birgunj', label: 'Based in Parsa, Nepal', isPlaceholder: false },
] as const;

export const whyChooseUs = [
  {
    icon: 'Users',
    title: 'Professional Team',
    description: 'Professional manpower focused on delivering reliable cleaning services.',
  },
  {
    icon: 'Wrench',
    title: 'Appropriate Equipment',
    description: 'Use of appropriate cleaning equipment for the required service.',
  },
  {
    icon: 'Layers',
    title: 'Multiple Services',
    description: 'Residential, commercial, specialized, housekeeping, supplies and training services.',
  },
  {
    icon: 'Building2',
    title: 'Residential & Corporate',
    description: 'Services for both individual customers and organizations.',
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Flexible Service',
    description: 'Service options based on different customer requirements.',
  },
  {
    icon: 'Heart',
    title: 'Customer Focus',
    description: 'Focus on customer requirements and service experience.',
  },
] as const;

export const howItWorks = [
  { step: 1, title: 'Choose Your Service', description: 'Browse our services and pick the one that fits your needs.' },
  { step: 2, title: 'Tell Us What You Need', description: 'Share your requirements through WhatsApp for a quick response.' },
  { step: 3, title: 'Confirm Your Booking', description: 'We confirm the details and schedule your cleaning.' },
  { step: 4, title: 'Enjoy a Cleaner Space', description: 'Our team delivers a thorough, professional clean.' },
] as const;

export const diyTips = [
  {
    id: 'kitchen',
    title: 'Kitchen Cleaning Tips',
    icon: 'Utensils',
    problem: 'Grease buildup on stovetops, counters, and appliances.',
    approach: 'Wipe surfaces after each use. Use warm soapy water for daily cleaning and a degreaser for stubborn buildup.',
    avoid: 'Do not mix degreasers with bleach-based products. Do not use abrasive scouring pads on non-stick or delicate surfaces.',
    safety: 'Ensure good ventilation when using cleaning sprays. Wash hands after handling cleaning products.',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Cleaning Tips',
    icon: 'ShowerHead',
    problem: 'Soap scum, hard water stains, and mould in showers and sinks.',
    approach: 'Squeegee glass after each shower. Clean weekly with a bathroom cleaner to prevent buildup.',
    avoid: 'Do not mix bleach with vinegar or ammonia-based products — this creates toxic gases.',
    safety: 'Always read product labels. Wear gloves and ensure ventilation when using strong bathroom cleaners.',
  },
  {
    id: 'sofa',
    title: 'Sofa Care',
    icon: 'Sofa',
    problem: 'Dust, stains, and odours trapped in upholstery fabric.',
    approach: 'Vacuum weekly with an upholstery attachment. Blot spills immediately — do not rub.',
    avoid: 'Do not soak fabric. Avoid harsh scrubbing which can damage fibers. Check manufacturer care labels.',
    safety: 'Test any cleaning product on an inconspicuous area first. Allow proper drying to prevent mould.',
  },
  {
    id: 'tile',
    title: 'Tile Maintenance',
    icon: 'Grid3x3',
    problem: 'Dirt and grime buildup in tile grout lines.',
    approach: 'Sweep or vacuum tiles regularly. Mop with a mild cleaner. For grout, use a dedicated grout cleaner.',
    avoid: 'Do not use acidic cleaners on natural stone tiles. Avoid bleach on coloured grout.',
    safety: 'Rinse thoroughly after cleaning to prevent residue buildup that can make floors slippery.',
  },
  {
    id: 'stain',
    title: 'Stain Removal',
    icon: 'Droplet',
    problem: 'Spills and stains on fabrics, carpets, and surfaces.',
    approach: 'Act quickly. Blot (do not rub) liquid spills. Identify the stain type and use the appropriate remover.',
    avoid: 'Do not mix stain removal products. Do not use hot water on protein-based stains (blood, dairy) — it can set the stain.',
    safety: 'Test products on a small hidden area first. Some stain removers require gloves and ventilation.',
  },
  {
    id: 'safety',
    title: 'Cleaning Safety',
    icon: 'ShieldCheck',
    problem: 'Risks from improper use or mixing of cleaning chemicals.',
    approach: 'Read and follow product label instructions. Store products in their original containers, away from children.',
    avoid: 'Never mix household cleaning chemicals unless the product instructions explicitly state they can be combined.',
    safety: 'Ensure ventilation when cleaning. Wear gloves for prolonged contact. Keep products away from food surfaces.',
  },
  {
    id: 'maintenance',
    title: 'Home Maintenance',
    icon: 'Wrench',
    problem: 'Dust, dirt, and wear accumulating over time in living spaces.',
    approach: 'Follow a simple routine: daily tidying, weekly cleaning, and seasonal deep cleaning.',
    avoid: 'Do not neglect ventilation — dust and moisture buildup can lead to mould and allergens.',
    safety: 'Check smoke detectors and ensure cleaning tools are in good condition.',
  },
] as const;

export const pricingTiers = [
  {
    name: 'Basic Cleaning',
    description: 'For routine cleaning requirements',
    suitableFor: ['Small homes', 'Regular upkeep', 'Single rooms'],
    features: ['Surface dusting and wiping', 'Floor sweeping and mopping', 'Basic bathroom cleaning', 'Kitchen surface cleaning', 'Waste removal'],
    highlight: false,
    priceType: 'quote' as const,
    price: null as string | null,
    cta: 'Get Custom Quote',
  },
  {
    name: 'Standard Cleaning',
    description: 'For more detailed cleaning',
    suitableFor: ['Apartments', 'Family homes', 'Weekly cleaning'],
    features: ['Everything in Basic', 'Detailed bathroom cleaning', 'Kitchen appliance exterior', 'Window sill cleaning', 'Light fixture dusting', 'Switch and handle sanitising'],
    highlight: true,
    priceType: 'quote' as const,
    price: null as string | null,
    cta: 'Get Custom Quote',
  },
  {
    name: 'Deep Cleaning',
    description: 'For intensive cleaning requirements',
    suitableFor: ['Full homes', 'Periodic maintenance', 'Move-in / move-out'],
    features: ['Everything in Standard', 'Inside appliance cleaning', 'Grout and tile scrubbing', 'Hard-to-reach areas', 'Interior window cleaning', 'Detailed fixture cleaning'],
    highlight: false,
    priceType: 'quote' as const,
    price: null as string | null,
    cta: 'Get Custom Quote',
  },
  {
    name: 'Custom / Corporate',
    description: 'For offices, hotels, institutions and large-area cleaning',
    suitableFor: ['Offices', 'Commercial spaces', 'Hotels', 'Institutions', 'Corporate properties'],
    features: ['Custom cleaning plan', 'Flexible scheduling', 'Area-specific focus', 'Recurring options available', 'Dedicated cleaning team', 'Priority support'],
    highlight: false,
    priceType: 'quote' as const,
    price: null as string | null,
    cta: 'Request Corporate Proposal',
  },
] as const;
