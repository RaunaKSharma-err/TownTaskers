export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  category: 'Residential' | 'Commercial' | 'Specialized' | 'Housekeeping' | 'Supplies' | 'Training';
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  includes: string[];
  benefits: { title: string; description: string }[];
  idealFor: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  // === RESIDENTIAL ===
  {
    slug: 'house-deep-cleaning',
    name: 'House Deep Cleaning',
    shortName: 'House Deep Cleaning',
    icon: 'Home',
    category: 'Residential',
    tagline: 'Professional deep cleaning for residential spaces',
    description:
      'Professional deep cleaning for residential spaces in Birgunj and surrounding areas. Our team handles every room with attention to detail — from kitchens and bathrooms to living areas and bedrooms.',
    image: 'https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Professional cleaner deep cleaning a residential living room in Birgunj',
    includes: [
      'Detailed surface cleaning and sanitising',
      'Kitchen deep cleaning including appliances',
      'Bathroom deep cleaning and descaling',
      'Floor scrubbing and mopping',
      'Dust removal from high surfaces and corners',
      'Window sill and ledge cleaning',
      'Light fixture and fan dusting',
      'Switch and door handle sanitising',
    ],
    benefits: [
      { title: 'Thorough Clean', description: 'Reaches areas that everyday cleaning often overlooks.' },
      { title: 'Healthier Home', description: 'Deep sanitising helps reduce hidden dirt and bacteria.' },
      { title: 'Fresh Appearance', description: 'Ideal for seasonal cleaning or special occasions.' },
    ],
    idealFor: ['Homes', 'Apartments', 'Move-in / Move-out', 'Post-Renovation', 'Periodic Maintenance'],
    process: [
      { step: 1, title: 'Requirement Discussion', description: 'We discuss your priorities and assess the scope of cleaning needed.' },
      { step: 2, title: 'Preparation', description: 'We bring the necessary equipment and supplies.' },
      { step: 3, title: 'Deep Cleaning', description: 'Room-by-room deep cleaning with attention to detail.' },
      { step: 4, title: 'Final Quality Check', description: 'We review each area with you to ensure satisfaction.' },
    ],
    faqs: [
      { question: 'How long does house deep cleaning take?', answer: 'The duration depends on the size and condition of your home. Our team can provide an estimated time when you discuss your requirements with us.' },
      { question: 'Do I need to provide cleaning equipment?', answer: 'Our team brings the necessary cleaning supplies and equipment. Specific details can be confirmed when booking.' },
      { question: 'Can I book a one-time deep cleaning?', answer: 'Yes, one-time deep cleaning is available. Contact us to schedule a visit.' },
      { question: 'Do you serve areas outside Birgunj?', answer: 'We are based in Birgunj and serve the surrounding areas. Contact us to confirm service availability for your location.' },
    ],
    metaTitle: 'House Deep Cleaning Services in Birgunj',
    metaDescription: 'Professional house deep cleaning in Birgunj, Nepal. Detailed cleaning for kitchens, bathrooms, floors, and all living areas with professional equipment.',
  },
  {
    slug: 'bathroom-cleaning',
    name: 'Bathroom Cleaning',
    shortName: 'Bathroom Cleaning',
    icon: 'ShowerHead',
    category: 'Residential',
    tagline: 'Thorough bathroom cleaning and sanitation',
    description:
      'Specialised bathroom cleaning that tackles soap scum, hard water stains, grout, and germs. We leave your bathroom sparkling clean and hygienically fresh.',
    image: 'https://images.pexels.com/photos/6587860/pexels-photo-6587860.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Clean modern bathroom after professional cleaning in Birgunj',
    includes: [
      'Toilet cleaning and sanitising',
      'Shower and bathtub descaling',
      'Sink and faucet polishing',
      'Tile and grout cleaning',
      'Mirror and glass cleaning',
      'Floor scrubbing and drying',
      'Fixture and fitting detail cleaning',
      'Ventilation fan dusting',
    ],
    benefits: [
      { title: 'Spotless Results', description: 'Removes soap scum, water stains, and grime for a sparkling finish.' },
      { title: 'Better Hygiene', description: 'Sanitising reduces bacteria and keeps your bathroom healthier.' },
      { title: 'Easier Maintenance', description: 'Regular deep cleaning makes everyday upkeep simpler.' },
    ],
    idealFor: ['Homes', 'Apartments', 'Offices', 'Hotels', 'Commercial Spaces'],
    process: [
      { step: 1, title: 'Inspection', description: 'We assess the bathroom condition and identify problem areas.' },
      { step: 2, title: 'Pre-Treatment', description: 'We apply appropriate cleaning solutions for stains and buildup.' },
      { step: 3, title: 'Deep Cleaning', description: 'Scrubbing, descaling, and sanitising all surfaces and fixtures.' },
      { step: 4, title: 'Final Check', description: 'We ensure every surface is clean, dry, and fresh.' },
    ],
    faqs: [
      { question: 'Can you remove hard water stains?', answer: 'We use appropriate cleaning methods to treat hard water stains and soap scum. Results may vary depending on the severity and surface type.' },
      { question: 'Do you clean grout?', answer: 'Yes, grout cleaning is included as part of our bathroom cleaning service.' },
      { question: 'How often should bathrooms be professionally cleaned?', answer: 'Frequency depends on usage. Contact us to discuss a schedule that works for you.' },
    ],
    metaTitle: 'Bathroom Cleaning Services in Birgunj',
    metaDescription: 'Professional bathroom cleaning in Birgunj. Soap scum, hard water stain removal, tile and grout cleaning with professional results.',
  },
  {
    slug: 'kitchen-cleaning',
    name: 'Kitchen Cleaning',
    shortName: 'Kitchen Cleaning',
    icon: 'Utensils',
    category: 'Residential',
    tagline: 'Cleaning of kitchen surfaces and areas',
    description:
      'Professional kitchen cleaning that removes grease, grime, and food residue from surfaces, appliances, and fixtures. We leave your kitchen clean and hygienic.',
    image: 'https://images.pexels.com/photos/4099470/pexels-photo-4099470.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Professional kitchen cleaning service in Birgunj',
    includes: [
      'Countertop cleaning and sanitising',
      'Stovetop and range hood degreasing',
      'Sink and faucet cleaning',
      'Appliance exterior cleaning',
      'Cabinet and drawer front wiping',
      'Backsplash cleaning',
      'Floor scrubbing and mopping',
      'Waste area cleaning',
    ],
    benefits: [
      { title: 'Grease Removal', description: 'Removes built-up grease from cooking surfaces and appliances.' },
      { title: 'Food Safety', description: 'Sanitising helps maintain a hygienic food preparation area.' },
      { title: 'Fresh Appearance', description: 'A clean kitchen looks and feels better for your family.' },
    ],
    idealFor: ['Homes', 'Apartments', 'Restaurants', 'Hotels', 'Offices'],
    process: [
      { step: 1, title: 'Assessment', description: 'We assess the kitchen condition and identify problem areas.' },
      { step: 2, title: 'Degreasing', description: 'We apply degreasers to stovetops, hoods, and greasy surfaces.' },
      { step: 3, title: 'Deep Cleaning', description: 'All surfaces, appliances, and floors are cleaned and sanitised.' },
      { step: 4, title: 'Final Check', description: 'We ensure every surface is clean and ready for use.' },
    ],
    faqs: [
      { question: 'Can you clean inside appliances?', answer: 'Interior appliance cleaning can be included as part of a deep cleaning package. Contact us to discuss your requirements.' },
      { question: 'Are the cleaning products food-safe?', answer: 'We use standard professional cleaning products. If you have specific product preferences, please let us know when booking.' },
      { question: 'How long does kitchen cleaning take?', answer: 'The duration depends on the kitchen size and condition. Contact us for an estimate.' },
    ],
    metaTitle: 'Kitchen Cleaning Services in Birgunj',
    metaDescription: 'Professional kitchen cleaning in Birgunj. Grease removal, surface sanitising, and appliance cleaning for homes and businesses.',
  },
  {
    slug: 'sofa-cleaning',
    name: 'Sofa Cleaning',
    shortName: 'Sofa Cleaning',
    icon: 'Sofa',
    category: 'Residential',
    tagline: 'Professional sofa and upholstery cleaning',
    description:
      'Deep sofa and upholstery cleaning that removes dust, stains, and odours. We use appropriate methods for different fabric types to refresh your furniture.',
    image: 'https://images.pexels.com/photos/4401538/pexels-photo-4401538.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Professional sofa cleaning service in Birgunj',
    includes: [
      'Fabric assessment and pre-inspection',
      'Vacuuming and dust removal',
      'Stain pre-treatment',
      'Deep upholstery cleaning',
      'Cushion and pillow cleaning',
      'Armrest and back cleaning',
      'Deodorising',
      'Post-cleaning inspection',
    ],
    benefits: [
      { title: 'Fresh Appearance', description: 'Removes visible dirt and stains for a refreshed look.' },
      { title: 'Odour Removal', description: 'Deep cleaning helps eliminate trapped odours from fabric.' },
      { title: 'Extended Furniture Life', description: 'Regular cleaning helps maintain fabric quality and appearance.' },
    ],
    idealFor: ['Homes', 'Apartments', 'Offices', 'Hotels', 'Restaurants'],
    process: [
      { step: 1, title: 'Fabric Inspection', description: 'We identify the fabric type and assess stains and condition.' },
      { step: 2, title: 'Pre-Treatment', description: 'We apply appropriate pre-treatment for stains and spots.' },
      { step: 3, title: 'Deep Cleaning', description: 'We use suitable methods for the fabric type to clean thoroughly.' },
      { step: 4, title: 'Drying & Inspection', description: 'We ensure proper drying and inspect the final results.' },
    ],
    faqs: [
      { question: 'Can you clean all types of sofa fabric?', answer: 'We clean most common upholstery fabrics. The cleaning method is chosen based on the fabric type.' },
      { question: 'How long does it take for the sofa to dry?', answer: 'Drying time depends on the fabric type, cleaning method, and ventilation. Our team can provide an estimate.' },
      { question: 'Can you remove all stains?', answer: 'Many stains can be reduced or removed. Results depend on the stain type, age, and fabric.' },
    ],
    metaTitle: 'Sofa Cleaning Services in Birgunj',
    metaDescription: 'Professional sofa and upholstery cleaning in Birgunj. Remove dust, stains, and odours with methods suited to your fabric type.',
  },
  {
    slug: 'carpet-rug-cleaning',
    name: 'Carpet / Rug Cleaning',
    shortName: 'Carpet Cleaning',
    icon: 'Grid3x3',
    category: 'Residential',
    tagline: 'Cleaning for carpets and rugs',
    description:
      'Professional carpet and rug cleaning that removes embedded dirt, dust mites, and stains. We restore the freshness and appearance of your carpets and rugs.',
    image: 'https://images.pexels.com/photos/7513165/pexels-photo-7513165.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Professional carpet cleaning service in Birgunj',
    includes: [
      'Vacuuming and dust removal',
      'Stain pre-treatment',
      'Deep carpet cleaning',
      'Rug cleaning and refresh',
      'Deodorising',
      'Edge and corner cleaning',
      'Post-cleaning inspection',
    ],
    benefits: [
      { title: 'Fresh Appearance', description: 'Removes embedded dirt and stains for refreshed carpets.' },
      { title: 'Healthier Environment', description: 'Reduces dust mites and allergens trapped in carpet fibers.' },
      { title: 'Extended Carpet Life', description: 'Regular cleaning helps maintain carpet quality and appearance.' },
    ],
    idealFor: ['Homes', 'Apartments', 'Offices', 'Hotels', 'Commercial Spaces'],
    process: [
      { step: 1, title: 'Inspection', description: 'We assess the carpet or rug type, condition, and stains.' },
      { step: 2, title: 'Pre-Treatment', description: 'We apply appropriate pre-treatment for stains and high-traffic areas.' },
      { step: 3, title: 'Deep Cleaning', description: 'We use suitable methods for the carpet or rug type.' },
      { step: 4, title: 'Drying & Inspection', description: 'We ensure proper drying and inspect the results.' },
    ],
    faqs: [
      { question: 'Can you clean all types of carpets and rugs?', answer: 'We clean most common carpet and rug types. Contact us to discuss your specific carpet or rug.' },
      { question: 'How long does it take to dry?', answer: 'Drying time depends on the carpet type, cleaning method, and ventilation. Contact us for an estimate.' },
    ],
    metaTitle: 'Carpet & Rug Cleaning Services in Birgunj',
    metaDescription: 'Professional carpet and rug cleaning in Birgunj. Remove embedded dirt, dust mites, and stains from carpets and rugs.',
  },
  {
    slug: 'tile-cleaning',
    name: 'Tile Cleaning',
    shortName: 'Tile Cleaning',
    icon: 'Grid3x3',
    category: 'Residential',
    tagline: 'Tile and floor cleaning/scrubbing',
    description:
      'Professional tile and grout cleaning that removes embedded dirt, stains, and discoloration. We restore the original look of your floors, walls, and tiled surfaces.',
    image: 'https://images.pexels.com/photos/7513165/pexels-photo-7513165.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Professional tile and floor cleaning in Birgunj',
    includes: [
      'Tile surface deep cleaning',
      'Grout line scrubbing and restoration',
      'Stain and discoloration treatment',
      'Floor tile cleaning and polishing',
      'Wall tile cleaning',
      'Sealing (where applicable)',
      'Edge and corner detail cleaning',
      'Floor drying and finishing',
    ],
    benefits: [
      { title: 'Restored Appearance', description: 'Removes embedded dirt and stains to bring back the original look.' },
      { title: 'Extended Tile Life', description: 'Regular professional cleaning helps maintain tile and grout condition.' },
      { title: 'Hygienic Surfaces', description: 'Deep cleaning removes mould and bacteria from grout lines.' },
    ],
    idealFor: ['Homes', 'Kitchens', 'Bathrooms', 'Commercial Spaces', 'Outdoor Areas'],
    process: [
      { step: 1, title: 'Tile Assessment', description: 'We inspect the tile type, condition, and problem areas.' },
      { step: 2, title: 'Pre-Treatment', description: 'We apply suitable cleaning solutions for the tile and grout type.' },
      { step: 3, title: 'Deep Cleaning', description: 'Mechanical scrubbing and extraction of dirt from tiles and grout.' },
      { step: 4, title: 'Finishing', description: 'Optional sealing and final inspection for lasting results.' },
    ],
    faqs: [
      { question: 'Can you clean all types of tiles?', answer: 'We clean most common tile types including ceramic, porcelain, and vitrified tiles.' },
      { question: 'Will grout cleaning restore the original colour?', answer: 'Grout cleaning can significantly improve the appearance, though results depend on the age and condition of the grout.' },
    ],
    metaTitle: 'Tile Cleaning Services in Birgunj',
    metaDescription: 'Professional tile and grout cleaning in Birgunj. Remove embedded dirt, stains, and discoloration from floors, walls, and tiled surfaces.',
  },
  {
    slug: 'glass-window-cleaning',
    name: 'Glass & Window Cleaning',
    shortName: 'Glass & Window Cleaning',
    icon: 'Square',
    category: 'Residential',
    tagline: 'Cleaning of windows and glass surfaces',
    description:
      'Professional glass and window cleaning that removes dust, water spots, and smudges. We leave your windows and glass surfaces clear and streak-free.',
    image: 'https://images.pexels.com/photos/8413089/pexels-photo-8413089.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Professional glass and window cleaning service in Birgunj',
    includes: [
      'Window glass cleaning',
      'Glass partition cleaning',
      'Frame and sill wiping',
      'Mirror cleaning',
      'Streak-free finishing',
      'Screen cleaning (where applicable)',
    ],
    benefits: [
      { title: 'Clear Results', description: 'Streak-free glass that lets in more natural light.' },
      { title: 'Professional Finish', description: 'Proper tools and techniques for spotless glass surfaces.' },
      { title: 'Improved Appearance', description: 'Clean windows improve the overall look of your space.' },
    ],
    idealFor: ['Homes', 'Apartments', 'Offices', 'Commercial Spaces', 'Hotels'],
    process: [
      { step: 1, title: 'Assessment', description: 'We assess the glass surfaces and identify problem areas.' },
      { step: 2, title: 'Cleaning', description: 'We clean glass using appropriate tools and solutions.' },
      { step: 3, title: 'Finishing', description: 'We ensure a streak-free finish on all glass surfaces.' },
      { step: 4, title: 'Final Check', description: 'We inspect from multiple angles to ensure quality.' },
    ],
    faqs: [
      { question: 'Can you clean high windows?', answer: 'We can clean windows at various heights depending on accessibility. Contact us to discuss your specific requirements.' },
      { question: 'Do you clean window frames and sills?', answer: 'Yes, frame and sill wiping is included as part of our window cleaning service.' },
    ],
    metaTitle: 'Glass & Window Cleaning Services in Birgunj',
    metaDescription: 'Professional glass and window cleaning in Birgunj. Streak-free cleaning for windows, glass partitions, and mirrors.',
  },
  {
    slug: 'water-tank-cleaning',
    name: 'Water Tank Cleaning',
    shortName: 'Water Tank Cleaning',
    icon: 'Droplets',
    category: 'Residential',
    tagline: 'Professional water tank cleaning',
    description:
      'Professional water tank cleaning that removes sediment, algae, and contamination. We help ensure your water storage is clean and safe for use.',
    image: 'https://images.pexels.com/photos/8413089/pexels-photo-8413089.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Professional water tank cleaning service in Birgunj',
    includes: [
      'Tank inspection and assessment',
      'Water drainage',
      'Sediment and sludge removal',
      'Interior scrubbing and cleaning',
      'Disinfection',
      'Rinsing and refilling support',
    ],
    benefits: [
      { title: 'Clean Water Storage', description: 'Removes sediment and contamination from your water tank.' },
      { title: 'Healthier Water', description: 'Disinfection helps reduce bacteria and algae growth.' },
      { title: 'Regular Maintenance', description: 'Periodic cleaning helps maintain water quality over time.' },
    ],
    idealFor: ['Homes', 'Apartments', 'Schools', 'Hotels', 'Commercial Buildings'],
    process: [
      { step: 1, title: 'Inspection', description: 'We inspect the tank condition and assess cleaning requirements.' },
      { step: 2, title: 'Drainage & Cleaning', description: 'We drain the tank and remove sediment, then scrub and disinfect.' },
      { step: 3, title: 'Disinfection', description: 'We apply appropriate disinfection methods for the tank interior.' },
      { step: 4, title: 'Final Check', description: 'We ensure the tank is clean and ready for refilling.' },
    ],
    faqs: [
      { question: 'How often should water tanks be cleaned?', answer: 'Regular cleaning is recommended to maintain water quality. Contact us to discuss a suitable schedule.' },
      { question: 'Do you clean both overhead and underground tanks?', answer: 'We clean various types of water tanks. Contact us to discuss your specific tank.' },
    ],
    metaTitle: 'Water Tank Cleaning Services in Birgunj',
    metaDescription: 'Professional water tank cleaning in Birgunj. Sediment removal, disinfection, and cleaning for residential and commercial water tanks.',
  },
  {
    slug: 'move-in-move-out-cleaning',
    name: 'Move-in / Move-out Cleaning',
    shortName: 'Move-in / Move-out Cleaning',
    icon: 'Home',
    category: 'Residential',
    tagline: 'Cleaning support for moving into or leaving a property',
    description:
      'Comprehensive cleaning for when you are moving into a new space or leaving one. We ensure the property is clean and ready for its next occupants.',
    image: 'https://images.pexels.com/photos/8146207/pexels-photo-8146207.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Move-in move-out cleaning service in Birgunj',
    includes: [
      'Full surface cleaning and sanitising',
      'Kitchen deep cleaning',
      'Bathroom deep cleaning',
      'Floor cleaning and mopping',
      'Window sill and ledge cleaning',
      'Cabinet interior cleaning',
      'Dust removal throughout',
      'Fixture and fitting cleaning',
    ],
    benefits: [
      { title: 'Ready to Move In', description: 'A clean space from day one when moving into a new property.' },
      { title: 'Hassle-Free Move-Out', description: 'Leave the cleaning to us when vacating a property.' },
      { title: 'Comprehensive Coverage', description: 'Every room and surface is covered.' },
    ],
    idealFor: ['Homes', 'Apartments', 'Rental Properties', 'Offices'],
    process: [
      { step: 1, title: 'Requirement Discussion', description: 'We discuss the property and your cleaning priorities.' },
      { step: 2, title: 'Preparation', description: 'We bring the necessary equipment and supplies.' },
      { step: 3, title: 'Full Cleaning', description: 'Comprehensive cleaning of all rooms and surfaces.' },
      { step: 4, title: 'Final Quality Check', description: 'We review the results with you before wrapping up.' },
    ],
    faqs: [
      { question: 'How do I book a move-in or move-out cleaning?', answer: 'Contact us through WhatsApp or phone with your moving date and property details. We will arrange the cleaning accordingly.' },
      { question: 'Can you clean on the same day as the move?', answer: 'We try to accommodate scheduling needs. Contact us to discuss timing.' },
    ],
    metaTitle: 'Move-in / Move-out Cleaning in Birgunj',
    metaDescription: 'Professional move-in and move-out cleaning in Birgunj. Comprehensive cleaning for properties being occupied or vacated.',
  },
  {
    slug: 'general-house-cleaning',
    name: 'General House Cleaning',
    shortName: 'General House Cleaning',
    icon: 'Home',
    category: 'Residential',
    tagline: 'Regular/general residential cleaning services',
    description:
      'Regular house cleaning for everyday maintenance. Our team handles dusting, floor cleaning, surface wiping, and room-by-room attention so your home stays fresh and welcoming.',
    image: 'https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'General house cleaning service in Birgunj',
    includes: [
      'Dusting of surfaces, shelves, and fixtures',
      'Floor cleaning (sweeping, mopping, vacuuming)',
      'Surface wiping and sanitising',
      'Kitchen area cleaning',
      'Bedroom cleaning and tidying',
      'Common area and hallway cleaning',
      'Window sill and ledge wiping',
      'Light switch and door handle sanitising',
    ],
    benefits: [
      { title: 'More Free Time', description: 'Spend your time doing what you enjoy instead of cleaning.' },
      { title: 'Consistent Results', description: 'The same attention to detail on every visit.' },
      { title: 'Healthier Indoor Air', description: 'Regular dust and allergen removal for a healthier home.' },
    ],
    idealFor: ['Homes', 'Apartments', 'Busy Families', 'Rental Properties'],
    process: [
      { step: 1, title: 'Inspection & Discussion', description: 'We assess your home and discuss your cleaning priorities.' },
      { step: 2, title: 'Cleaning Preparation', description: 'We bring the necessary supplies and prepare each room.' },
      { step: 3, title: 'Professional Cleaning', description: 'Room-by-room cleaning with attention to detail.' },
      { step: 4, title: 'Final Quality Check', description: 'We review the results with you before wrapping up.' },
    ],
    faqs: [
      { question: 'Can I book recurring house cleaning?', answer: 'Yes, weekly, bi-weekly, and monthly recurring cleaning options are available. Contact us to discuss a schedule.' },
      { question: 'Do I need to provide cleaning equipment?', answer: 'Our team brings the necessary cleaning supplies and equipment. Contact us for details.' },
    ],
    metaTitle: 'General House Cleaning Services in Birgunj',
    metaDescription: 'Regular house cleaning in Birgunj, Nepal. Dusting, floor cleaning, kitchen and bathroom areas handled with care.',
  },

  // === COMMERCIAL ===
  {
    slug: 'office-cleaning',
    name: 'Office Cleaning',
    shortName: 'Office Cleaning',
    icon: 'Building2',
    category: 'Commercial',
    tagline: 'A clean workspace is a productive workspace',
    description:
      'Keep your office looking professional and your team comfortable. We clean workstations, common areas, restrooms, and meeting rooms with minimal disruption to your workday.',
    image: 'https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Professional office cleaning service in Birgunj',
    includes: [
      'Workstation and desk surface cleaning',
      'Floor cleaning and vacuuming',
      'Meeting room sanitising',
      'Reception and common area cleaning',
      'Restroom cleaning and restocking',
      'Kitchen and pantry area cleaning',
      'Glass and partition wiping',
      'Door handle and light switch sanitising',
    ],
    benefits: [
      { title: 'Professional Appearance', description: 'A clean office makes the right impression on clients and visitors.' },
      { title: 'Fewer Sick Days', description: 'Regular sanitising reduces the spread of germs in shared spaces.' },
      { title: 'Flexible Scheduling', description: 'Cleaning before, after, or during office hours to suit your operations.' },
    ],
    idealFor: ['Small Offices', 'Corporate Offices', 'Co-working Spaces', 'Commercial Buildings', 'Banks'],
    process: [
      { step: 1, title: 'Site Assessment', description: 'We visit your office to understand the layout and cleaning needs.' },
      { step: 2, title: 'Custom Cleaning Plan', description: 'We create a cleaning schedule that fits your office operations.' },
      { step: 3, title: 'Professional Cleaning', description: 'Our team executes the plan with minimal disruption.' },
      { step: 4, title: 'Quality Review', description: 'Regular quality checks ensure consistent standards.' },
    ],
    faqs: [
      { question: 'Can you clean outside office hours?', answer: 'Yes, we offer flexible scheduling including before and after office hours. Contact us to discuss timing.' },
      { question: 'Do you offer daily office cleaning?', answer: 'Daily, weekly, and custom frequency cleaning schedules are available. Contact us to discuss a plan.' },
      { question: 'Can you handle corporate cleaning contracts?', answer: 'Yes, we provide recurring cleaning services for offices and corporate spaces. Request a corporate proposal through WhatsApp.' },
    ],
    metaTitle: 'Office Cleaning Services in Birgunj',
    metaDescription: 'Professional office cleaning in Birgunj for workstations, common areas, restrooms, and meeting rooms. Flexible scheduling for businesses.',
  },
  {
    slug: 'commercial-space-cleaning',
    name: 'Commercial Space Cleaning',
    shortName: 'Commercial Space Cleaning',
    icon: 'Building2',
    category: 'Commercial',
    tagline: 'Cleaning for shops, retail and commercial properties',
    description:
      'Full cleaning service for commercial spaces including retail stores, showrooms, and commercial properties. We handle floors, glass, fixtures, and common areas.',
    image: 'https://images.pexels.com/photos/4534504/pexels-photo-4534504.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Commercial space cleaning service in Birgunj',
    includes: [
      'Floor cleaning and mopping',
      'Glass and display cleaning',
      'Fixture and fitting cleaning',
      'Restroom cleaning',
      'Storage area cleaning',
      'Common area cleaning',
      'Regular maintenance cleaning',
      'Deep cleaning options',
    ],
    benefits: [
      { title: 'Professional Image', description: 'A clean commercial space attracts and retains customers.' },
      { title: 'Flexible Contracts', description: 'One-time or recurring cleaning arrangements available.' },
      { title: 'Comprehensive Coverage', description: 'All areas of your commercial space are covered.' },
    ],
    idealFor: ['Retail Stores', 'Showrooms', 'Banks', 'Hotels', 'Schools', 'Colleges', 'Institutions'],
    process: [
      { step: 1, title: 'Site Assessment', description: 'We visit your commercial space to understand the layout and needs.' },
      { step: 2, title: 'Custom Plan', description: 'We create a cleaning plan tailored to your space and operations.' },
      { step: 3, title: 'Professional Cleaning', description: 'Our team delivers thorough cleaning with appropriate equipment.' },
      { step: 4, title: 'Quality Review', description: 'We ensure consistent results with regular quality checks.' },
    ],
    faqs: [
      { question: 'Do you provide cleaning for schools and colleges?', answer: 'Yes, we provide cleaning services for educational institutions. Contact us to discuss your requirements.' },
      { question: 'Can you handle hotel cleaning?', answer: 'Yes, we provide cleaning services for hotels including rooms, common areas, and restrooms. Contact us to discuss your needs.' },
      { question: 'Do you offer recurring commercial cleaning contracts?', answer: 'Yes, we offer both one-time and recurring cleaning arrangements for commercial properties. Request a corporate proposal.' },
    ],
    metaTitle: 'Commercial Cleaning Services in Birgunj',
    metaDescription: 'Professional commercial cleaning in Birgunj for retail stores, banks, hotels, schools, colleges, and institutions. Flexible contracts available.',
  },

  // === SPECIALIZED ===
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    shortName: 'Deep Cleaning',
    icon: 'Sparkles',
    category: 'Specialized',
    tagline: 'When a regular clean is not enough',
    description:
      'A thorough, top-to-bottom deep cleaning that reaches areas regular cleaning might miss. Ideal for periodic maintenance, post-construction, or spaces that need extra attention.',
    image: 'https://images.pexels.com/photos/4099470/pexels-photo-4099470.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Professional deep cleaning service in Birgunj',
    includes: [
      'Detailed surface cleaning and sanitising',
      'Hard-to-reach area cleaning',
      'Kitchen deep cleaning including appliances',
      'Bathroom deep cleaning and descaling',
      'Interior window and frame cleaning',
      'Fixture and fitting detail cleaning',
      'Floor scrubbing and stain treatment',
      'Dust removal from high surfaces and corners',
    ],
    benefits: [
      { title: 'Thorough Clean', description: 'Reaches areas that everyday cleaning often overlooks.' },
      { title: 'Refreshed Space', description: 'Ideal for seasonal cleaning, post-renovation, or move-in/move-out.' },
      { title: 'Improved Hygiene', description: 'Deep sanitising helps reduce hidden dirt, grime, and bacteria.' },
    ],
    idealFor: ['Homes', 'Apartments', 'Offices', 'Post-Construction', 'Move-in / Move-out', 'Periodic Maintenance'],
    process: [
      { step: 1, title: 'Requirement Discussion', description: 'We discuss your priorities and assess the scope of deep cleaning needed.' },
      { step: 2, title: 'Preparation', description: 'We bring specialised tools and supplies for deep cleaning tasks.' },
      { step: 3, title: 'Deep Cleaning', description: 'Area-by-area deep cleaning with attention to detail.' },
      { step: 4, title: 'Final Quality Check', description: 'We review each area with you to ensure satisfaction.' },
    ],
    faqs: [
      { question: 'How is deep cleaning different from regular cleaning?', answer: 'Deep cleaning covers areas that regular cleaning might not reach, including inside appliances, descaling, and detailed attention to fixtures and fittings.' },
      { question: 'How long does deep cleaning take?', answer: 'Deep cleaning typically takes longer than regular cleaning due to the level of detail. Contact us for an estimate.' },
      { question: 'Do you offer deep cleaning for offices?', answer: 'Yes, deep cleaning is available for both residential and commercial spaces. Contact us to discuss your requirements.' },
    ],
    metaTitle: 'Deep Cleaning Services in Birgunj',
    metaDescription: 'Thorough deep cleaning in Birgunj that reaches areas regular cleaning misses. For homes, offices, post-construction, and move-in/move-out.',
  },
  {
    slug: 'fabric-partition-cleaning',
    name: 'Fabric Partition Cleaning',
    shortName: 'Fabric Partition Cleaning',
    icon: 'Settings',
    category: 'Specialized',
    tagline: 'Cleaning for office fabric partitions and panels',
    description:
      'Professional cleaning for fabric partitions, acoustic panels, and office dividers. We remove dust and refresh fabric surfaces in office and commercial environments.',
    image: 'https://images.pexels.com/photos/8413089/pexels-photo-8413089.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Professional fabric partition cleaning service in Birgunj',
    includes: [
      'Vacuuming and dust removal',
      'Stain treatment',
      'Fabric refresh',
      'Deodorising',
      'Post-cleaning inspection',
    ],
    benefits: [
      { title: 'Refreshed Appearance', description: 'Removes visible dust and stains from fabric partitions.' },
      { title: 'Improved Office Environment', description: 'Clean partitions contribute to a healthier workspace.' },
    ],
    idealFor: ['Offices', 'Corporate Spaces', 'Banks', 'Commercial Buildings'],
    process: [
      { step: 1, title: 'Inspection', description: 'We assess the fabric type and condition of partitions.' },
      { step: 2, title: 'Cleaning', description: 'We vacuum and treat stains using appropriate methods.' },
      { step: 3, title: 'Finishing', description: 'We deodorise and inspect the results.' },
      { step: 4, title: 'Final Check', description: 'We ensure all partitions are clean and refreshed.' },
    ],
    faqs: [
      { question: 'Can you clean fabric partitions during office hours?', answer: 'We can schedule cleaning before or after office hours to minimise disruption. Contact us to discuss timing.' },
    ],
    metaTitle: 'Fabric Partition Cleaning in Birgunj',
    metaDescription: 'Professional fabric partition and panel cleaning for offices and commercial spaces in Birgunj.',
  },
  {
    slug: 'chair-cleaning',
    name: 'Chair Cleaning',
    shortName: 'Chair Cleaning',
    icon: 'Sofa',
    category: 'Specialized',
    tagline: 'Professional cleaning for office and home chairs',
    description:
      'Professional chair cleaning for office chairs, dining chairs, and other seating. We remove dust, stains, and odours from fabric, leather, and mesh surfaces.',
    image: 'https://images.pexels.com/photos/4401538/pexels-photo-4401538.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Professional chair cleaning service in Birgunj',
    includes: [
      'Surface dusting and vacuuming',
      'Stain treatment',
      'Upholstery cleaning',
      'Armrest and back cleaning',
      'Deodorising',
    ],
    benefits: [
      { title: 'Fresh Seating', description: 'Removes dust and stains from frequently used chairs.' },
      { title: 'Professional Appearance', description: 'Clean chairs improve the look of your office or dining area.' },
    ],
    idealFor: ['Offices', 'Corporate Spaces', 'Hotels', 'Homes', 'Restaurants'],
    process: [
      { step: 1, title: 'Inspection', description: 'We assess the chair material and condition.' },
      { step: 2, title: 'Cleaning', description: 'We clean using methods appropriate for the material type.' },
      { step: 3, title: 'Finishing', description: 'We deodorise and inspect the results.' },
      { step: 4, title: 'Final Check', description: 'We ensure all chairs are clean and refreshed.' },
    ],
    faqs: [
      { question: 'Can you clean office chairs in bulk?', answer: 'Yes, we can clean multiple chairs as part of an office cleaning contract. Contact us to discuss your requirements.' },
    ],
    metaTitle: 'Chair Cleaning Services in Birgunj',
    metaDescription: 'Professional chair cleaning for office and home chairs in Birgunj. Fabric, leather, and mesh chair cleaning services.',
  },
  {
    slug: 'floor-cleaning',
    name: 'Floor Cleaning',
    shortName: 'Floor Cleaning',
    icon: 'Grid3x3',
    category: 'Specialized',
    tagline: 'Professional floor cleaning and scrubbing',
    description:
      'Professional floor cleaning and scrubbing for all floor types. We remove dirt, stains, and scuff marks to restore the appearance of your floors.',
    image: 'https://images.pexels.com/photos/7513165/pexels-photo-7513165.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    imageAlt: 'Professional floor cleaning and scrubbing in Birgunj',
    includes: [
      'Floor scrubbing',
      'Stain removal',
      'Mopping and finishing',
      'Tile and grout cleaning',
      'Marble and stone floor care',
      'Vinyl and laminate cleaning',
    ],
    benefits: [
      { title: 'Restored Appearance', description: 'Removes embedded dirt and stains for cleaner floors.' },
      { title: 'Slip Reduction', description: 'Proper cleaning and finishing helps reduce slip hazards.' },
      { title: 'Extended Floor Life', description: 'Regular maintenance helps preserve floor condition.' },
    ],
    idealFor: ['Offices', 'Commercial Spaces', 'Homes', 'Hotels', 'Schools', 'Institutions'],
    process: [
      { step: 1, title: 'Floor Assessment', description: 'We inspect the floor type and condition.' },
      { step: 2, title: 'Pre-Treatment', description: 'We apply appropriate cleaning solutions for the floor type.' },
      { step: 3, title: 'Scrubbing', description: 'We scrub and extract dirt using professional equipment.' },
      { step: 4, title: 'Finishing', description: 'We finish and inspect for a clean, polished result.' },
    ],
    faqs: [
      { question: 'What floor types do you clean?', answer: 'We clean tile, marble, stone, vinyl, laminate, and other common floor types. Contact us to discuss your specific floor.' },
    ],
    metaTitle: 'Floor Cleaning & Scrubbing Services in Birgunj',
    metaDescription: 'Professional floor cleaning and scrubbing in Birgunj. For tile, marble, stone, vinyl, and laminate floors in homes and businesses.',
  },
];

export const serviceCategories = [
  { name: 'Residential', label: 'Residential Cleaning' },
  { name: 'Commercial', label: 'Commercial Cleaning' },
  { name: 'Specialized', label: 'Specialized Cleaning' },
  { name: 'Housekeeping', label: 'Housekeeping & Maid Services' },
  { name: 'Supplies', label: 'Cleaning Materials & Supplies' },
  { name: 'Training', label: 'Professional Cleaning Training' },
] as const;

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string): ServiceData[] {
  return services.filter((s) => s.category === category);
}
