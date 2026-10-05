export interface ProjectData {
  id: string;
  title: string;
  category:
    | "Residential"
    | "Office"
    | "Bathroom"
    | "Sofa"
    | "Deep Cleaning"
    | "Commercial"
    | "Institutional";
  description: string;
  image: string;
  imageAlt: string;
  services: string[];
}

export const projects: ProjectData[] = [
  {
    id: "p1",
    title: "3BHK Apartment Deep Clean — Birgunj",
    category: "Residential",
    description:
      "Complete deep cleaning for a 3-bedroom apartment in Birgunj including kitchen deep clean, bathroom descaling, and all living areas.",
    image:
      "https://images.pexels.com/photos/8146207/pexels-photo-8146207.jpeg?auto=compress&cs=tinysrgb&w=940&h=650",
    imageAlt: "Bright living room after professional deep cleaning in Birgunj",
    services: [
      "Deep Cleaning",
      "House Cleaning",
      "Bathroom Cleaning",
      "Kitchen Cleaning",
    ],
  },
  {
    id: "p2",
    title: "Corporate Office Cleaning — Birgunj",
    category: "Office",
    description:
      "Recurring office cleaning for a corporate workspace in Birgunj including workstations, meeting rooms, restrooms, and pantry areas.",
    image:
      "https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&w=940&h=650",
    imageAlt: "Clean modern office workspace after professional cleaning",
    services: [
      "Office Cleaning",
      "Floor Cleaning",
      "Glass Cleaning",
      "Pantry Cleaning",
    ],
  },
  {
    id: "p3",
    title: "Master Bathroom Restoration — Birgunj",
    category: "Bathroom",
    description:
      "Deep bathroom cleaning including descaling, grout cleaning, and fixture polishing for a residential master bathroom in Birgunj.",
    image:
      "https://images.pexels.com/photos/6587860/pexels-photo-6587860.jpeg?auto=compress&cs=tinysrgb&w=940&h=650",
    imageAlt: "Sparkling clean bathroom after professional restoration",
    services: ["Bathroom Cleaning", "Tile Cleaning", "Glass & Window Cleaning"],
  },
  {
    id: "p4",
    title: "Fabric Sofa Refresh — Birgunj",
    category: "Sofa",
    description:
      "Upholstery cleaning for a 5-seater fabric sofa — stain treatment, deodorising, and deep vacuum for a Birgunj residence.",
    image:
      "https://images.pexels.com/photos/4401538/pexels-photo-4401538.jpeg?auto=compress&cs=tinysrgb&w=940&h=650",
    imageAlt: "Professional sofa cleaning in progress",
    services: ["Sofa Cleaning", "Carpet / Rug Cleaning"],
  },
  {
    id: "p5",
    title: "Post-Renovation Deep Clean — Birgunj",
    category: "Deep Cleaning",
    description:
      "Comprehensive post-renovation cleaning for a 4-bedroom home in Birgunj including dust removal, surface sanitising, and floor scrubbing.",
    image:
      "https://images.pexels.com/photos/4099470/pexels-photo-4099470.jpeg?auto=compress&cs=tinysrgb&w=940&h=650",
    imageAlt: "Professional cleaning post-renovation in Birgunj",
    services: ["Deep Cleaning", "Floor Cleaning", "Glass & Window Cleaning"],
  },
  {
    id: "p6",
    title: "Commercial Retail Space Clean — Birgunj",
    category: "Commercial",
    description:
      "Full cleaning service for a retail space in Birgunj including floors, glass partitions, storage areas, and restrooms.",
    image:
      "https://images.pexels.com/photos/4534504/pexels-photo-4534504.jpeg?auto=compress&cs=tinysrgb&w=940&h=650",
    imageAlt: "Clean commercial retail space in Birgunj",
    services: [
      "Commercial Space Cleaning",
      "Floor Cleaning",
      "Glass & Window Cleaning",
    ],
  },
  {
    id: "p7",
    title: "School Campus Cleaning — Birgunj",
    category: "Institutional",
    description:
      "Regular cleaning contract for a school campus in Birgunj covering classrooms, corridors, restrooms, and common areas.",
    image:
      "https://images.pexels.com/photos/6587860/pexels-photo-6587860.jpeg?auto=compress&cs=tinysrgb&w=940&h=650",
    imageAlt: "Clean school corridor after professional cleaning",
    services: [
      "Commercial Space Cleaning",
      "Floor Cleaning",
      "Bathroom Cleaning",
    ],
  },
  {
    id: "p8",
    title: "Hotel Room Turnover Service — Birgunj",
    category: "Commercial",
    description:
      "Daily room turnover and deep cleaning service for a hotel in Birgunj including guest rooms, lobby, and dining areas.",
    image:
      "https://images.pexels.com/photos/8146207/pexels-photo-8146207.jpeg?auto=compress&cs=tinysrgb&w=940&h=650",
    imageAlt: "Clean hotel room after professional turnover service",
    services: ["Commercial Space Cleaning", "Deep Cleaning", "Floor Cleaning"],
  },
];

export const projectCategories = [
  "All",
  "Residential",
  "Office",
  "Bathroom",
  "Sofa",
  "Deep Cleaning",
  "Commercial",
  "Institutional",
] as const;

export interface BeforeAfterData {
  id: string;
  service: string;
  description: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
}

export const beforeAfterItems: BeforeAfterData[] = [
  {
    id: "ba1",
    service: "Sofa Deep Cleaning",
    description:
      "Soap scum and hard water stain removal from sofa and fixtures.",
    beforeImage:
      "https://res.cloudinary.com/cco6q5ha/image/upload/v1791173465/WhatsApp_Image_2026-10-02_at_1.13.09_PM.jpg",
    beforeAlt: "Sofa before professional cleaning",
    afterImage:
      "https://res.cloudinary.com/cco6q5ha/image/upload/v1791173465/WhatsApp_Image_2026-10-02_at_1.13.09_PM_1.jpg",
    afterAlt: "Sparkling clean Sofa after professional cleaning",
  },
  {
    id: "ba2",
    service: "Tile and Grout Cleaning",
    description:
      "Embedded dirt and discoloration removal from floor tiles and grout lines.",
    beforeImage:
      "https://res.cloudinary.com/cco6q5ha/image/upload/v1791177896/Screenshot_2026-10-05_110710.png",
    beforeAlt: "Floor tiles before cleaning",
    afterImage:
      "https://res.cloudinary.com/cco6q5ha/image/upload/v1791177896/Screenshot_2026-10-05_110725.png",
    afterAlt: "Shiny clean floor tiles after professional cleaning",
  },
];
