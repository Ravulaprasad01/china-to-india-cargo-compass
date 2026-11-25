export interface ServiceItem {
  num: string;
  title: string;
  description: string;
}

export interface JourneyStage {
  step: number;
  title: string;
  description: string;
  location: string;
  dayLabel: string;
  progress: number;
  status: string;
}

export interface IndustryHub {
  hub: string;
  title: string;
  points: string[];
  highlight: string;
}

export interface DeliveryCase {
  route: string;
  title: string;
  description: string;
  tags: string[];
}

export interface TestimonialItem {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

export interface GuideArticle {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  takeaways: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#journey" },
  { label: "What we import", href: "#products" },
  { label: "China trips", href: "#trips" },
  { label: "Guides", href: "#guides" },
  { label: "Contact", href: "#contact" },
] as const;

export const CORRIDOR_ROUTES = [
  { from: "Yiwu", to: "Adilabad" },
  { from: "Foshan", to: "Hyderabad" },
  { from: "Shenzhen", to: "Siddipet" },
  { from: "Guangzhou", to: "Chennai" },
  { from: "Shanghai", to: "Nhava Sheva" },
  { from: "Guzhen", to: "Vizag" },
  { from: "Ningbo", to: "Mumbai" },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    num: "01",
    title: "Product sourcing",
    description:
      "We find verified manufacturers across Yiwu, Guangzhou, Shenzhen and Foshan, and negotiate prices on your behalf.",
  },
  {
    num: "02",
    title: "Factory inspection",
    description:
      "Our team visits the factory in person. We check licences, samples and production capacity before you pay.",
  },
  {
    num: "03",
    title: "Quality control",
    description:
      "Pre-shipment checks with photo and video reports, done before the container is sealed.",
  },
  {
    num: "04",
    title: "Shipping & logistics",
    description:
      "Full-container and shared-container sea freight from Chinese ports, plus air cargo for urgent orders.",
  },
  {
    num: "05",
    title: "Customs clearance",
    description:
      "Documentation, duties, GST and clearance at Indian ports. No surprises when the ship lands.",
  },
  {
    num: "06",
    title: "Doorstep delivery",
    description:
      "From the port straight to your shop, warehouse, villa or site, with the container unloaded on location.",
  },
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: 1,
    title: "Source the right factory",
    description:
      "Tell us the product. We shortlist verified manufacturers and get you real prices, not middleman quotes.",
    location: "Yiwu / Foshan / Shenzhen",
    dayLabel: "Day 1–3",
    progress: 0.06,
    status: "Factory shortlist verified",
  },
  {
    step: 2,
    title: "Inspect & approve samples",
    description:
      "Our team visits the factory and checks samples. You approve over video call.",
    location: "Factory floor · China",
    dayLabel: "Day 5–9",
    progress: 0.22,
    status: "Live sample sign-off",
  },
  {
    step: 3,
    title: "Quality check & loading",
    description:
      "Every carton is checked and counted. Then the cranes load your container onto the ship.",
    location: "Shanghai Yangshan Port",
    dayLabel: "Day 14",
    progress: 0.42,
    status: "Container sealed & loaded",
  },
  {
    step: 4,
    title: "Ocean freight",
    description:
      "Your container sails from Shanghai to India, and we track it the whole way.",
    location: "Malacca Strait · At sea",
    dayLabel: "Day 15–28",
    progress: 0.68,
    status: "Vessel in transit to India",
  },
  {
    step: 5,
    title: "Customs clearance",
    description:
      "Duties, GST and paperwork are handled at the Indian port, so the container is released quickly.",
    location: "Chennai / Nhava Sheva Port",
    dayLabel: "Day 30–32",
    progress: 0.88,
    status: "Customs & GST cleared",
  },
  {
    step: 6,
    title: "Delivered to your door",
    description:
      "The container is unloaded and trucked to your shop, warehouse or site.",
    location: "Hyderabad · Pan-India",
    dayLabel: "Day 34",
    progress: 1,
    status: "Unloaded at destination",
  },
];

export const INDUSTRY_HUBS: IndustryHub[] = [
  {
    hub: "Foshan hub",
    title: "Furniture & interiors",
    points: [
      "Complete home and villa furniture",
      "Office desks and executive chairs",
      "Banquet hall and hotel fit-outs",
    ],
    highlight: "Height-adjustable desk from ₹45,000 · MOQ 1",
  },
  {
    hub: "Shenzhen hub",
    title: "Electronics & tech",
    points: [
      "LED screens and digital signage",
      "Mobile accessories in bulk",
      "Power bank rental kiosks",
    ],
    highlight: "Business ideas India doesn't have yet",
  },
  {
    hub: "Guangzhou hub",
    title: "EV & automotive",
    points: [
      "Electric scooters as kits for assembly in India",
      "Battery cells sourced separately",
      "Car LED lights with your own brand",
    ],
    highlight: "Car LED private label · MOQ 500",
  },
  {
    hub: "Guzhen hub",
    title: "Lighting",
    points: [
      "Decorative and architectural lighting",
      "Commercial LED fixtures",
      "Custom designs for projects",
    ],
    highlight: "Direct from the lighting capital of China",
  },
  {
    hub: "Yiwu hub",
    title: "Supermarket & general goods",
    points: [
      "Complete store stock in one container",
      "Home, kitchen, toys and gifts",
      "Choose products over video call",
    ],
    highlight: "World's largest small-goods market",
  },
  {
    hub: "Pan-China",
    title: "Machinery & automation",
    points: [
      "Production and packaging machines",
      "Smart vending and robotic kiosks",
      "Spares and after-sales support",
    ],
    highlight: "Tell us the machine, we find the factory",
  },
];

export const TRIP_CITIES = [
  "Guangzhou",
  "Shenzhen",
  "Yiwu",
  "Foshan",
  "Macau",
  "Glass bridge",
] as const;

export const TRIP_INCLUSIONS = [
  "Visa guidance & invitation letter",
  "Hotels close to the fair",
  "Indian food daily, veg & non-veg",
  "Guides & translators",
  "Factory visits you choose",
  "Sightseeing between markets",
] as const;

export const DELIVERIES: DeliveryCase[] = [
  {
    route: "Foshan → Villa",
    title: "Complete villa furniture",
    description:
      "Sofas, dining sets, office furniture and pergolas, all in one container delivered to a luxury villa.",
    tags: ["Full container", "Door delivery"],
  },
  {
    route: "Yiwu → Adilabad",
    title: "Sagar Supermarket",
    description:
      "Complete supermarket stock sourced from Yiwu over video calls and delivered to the client's warehouse.",
    tags: ["Retail", "Video sourcing"],
  },
  {
    route: "China → Convention",
    title: "Sreeman Convention Centre",
    description:
      "Cots, beds, dining sets and office furniture for a convention venue, with better finish for the same budget.",
    tags: ["Hospitality", "Bulk order"],
  },
  {
    route: "China → Hyderabad",
    title: "Smart office desks",
    description:
      "Motorised height-adjustable L-shaped desks, imported even as a single piece.",
    tags: ["MOQ 1", "~30 days"],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "I came to source LED screens and electronics. The Guangzhou and Shenzhen markets were easy to navigate, and hotels, food and travel were all taken care of.",
    initials: "S",
    name: "Sai",
    role: "Ad-tech startup · Siddipet",
  },
  {
    quote:
      "Twelve days covering the Canton Fair and factories of my choice. Visa, guidance, Indian food every day. It felt like a personal trip, not a business tour.",
    initials: "M",
    name: "Mahender Reddy",
    role: "Canton Fair trip client",
  },
  {
    quote:
      "We picked our products on video calls, and the container came straight from Yiwu to our warehouse. The whole process was hassle-free.",
    initials: "SS",
    name: "Sagar Supermarket",
    role: "Retail · Adilabad",
  },
];

export const GUIDES: GuideArticle[] = [
  {
    id: "how-to-import",
    category: "Import guides",
    title: "How to Import from China to India in 2026: A Step-by-Step Guide",
    date: "18 November 2026",
    readTime: "7 min read",
    excerpt:
      "From getting your IEC to receiving the container at your door, here is the full import process explained in plain language for first-time importers.",
    takeaways: [
      "Register your Import Export Code (IEC) and GST before placing a commercial factory order.",
      "Verify the factory licence and request a live video sample check before transferring a deposit.",
      "Calculate landed cost upfront: FOB factory price + sea/air freight + basic customs duty + IGST + local trucking.",
      "Use a Shanghai-registered trading entity for traceable factory contracts and pre-shipment quality reports.",
    ],
  },
  {
    id: "choosing-market",
    category: "Wholesale markets",
    title: "Yiwu, Guangzhou or Foshan? Choosing the Right Chinese Market for Your Product",
    date: "12 November 2026",
    readTime: "6 min read",
    excerpt:
      "China has a different manufacturing hub for almost every industry. Going to the right one can cut your costs and save days of searching.",
    takeaways: [
      "Foshan is unmatched for residential, villa, office and hotel furniture with direct factory showrooms.",
      "Yiwu International Trade City lets you consolidate 50+ supermarket and general-goods SKUs into one container.",
      "Shenzhen and Guangzhou lead in LED screens, electronics, EV kits, and private-label automotive accessories.",
      "Guzhen produces decorative and architectural lighting direct from specialized family-run factories.",
    ],
  },
  {
    id: "importing-furniture",
    category: "Product guides",
    title: "Importing Furniture from China: Costs, MOQ and What to Check",
    date: "5 November 2026",
    readTime: "6 min read",
    excerpt:
      "Premium designs at a better price. Here is what villa owners, offices and hotels should know before importing furniture from Foshan.",
    takeaways: [
      "Many Foshan showrooms allow single-piece or mixed-room orders consolidated into a shared or full container.",
      "Always inspect wood moisture, foam density, marble veining and hardware tolerances before crating.",
      "Protective wooden crating for glass, stone and curved pieces prevents transit damage during ocean freight.",
      "Plan 30–40 days door-to-door from order sign-off to unloading inside your villa or office site.",
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Can I import just one piece?",
    answer:
      "Yes, for many products. Furniture like height-adjustable desks can be imported with a minimum order of one piece. Private-label products, such as car LED lights, usually start from around 500 units.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Most sea shipments reach your door in about 30 to 40 days, depending on the product, the factory's production time and the destination port. Air cargo is faster for urgent orders.",
  },
  {
    question: "Do you handle customs and GST?",
    answer:
      "Yes. We prepare the documentation and manage duties, GST and clearance at the Indian port, then deliver to your address.",
  },
  {
    question: "Do I need an Import Export Code (IEC)?",
    answer:
      "For commercial imports, yes. If you don't have one yet, we'll guide you through getting it.",
  },
  {
    question: "Can I visit the factories myself?",
    answer:
      "Absolutely. Join one of our guided China business trips, or we can arrange visits to the factories you've shortlisted.",
  },
  {
    question: "What's the best business to start by importing from China?",
    answer:
      "It depends on your interests and budget. Popular choices with our clients include furniture, EV scooters, car accessories, lighting and supermarket goods. Talk to us and we'll suggest options that fit your market.",
  },
];

export const QUOTE_CATEGORIES = [
  "Furniture & interiors",
  "Electronics & tech",
  "EV & automotive",
  "Lighting",
  "Supermarket & general goods",
  "Machinery",
  "China business trip / Canton Fair",
  "Something else",
] as const;

export const QUOTE_BUDGETS = [
  "Under ₹1 lakh",
  "₹1–5 lakh",
  "₹5–25 lakh",
  "₹25 lakh+",
] as const;