/**
 * FURmedia — Core Structured Data (SEO & AEO Optimized)
 * This file serves as the single source of truth for corporate information,
 * metadata representations, and rich services mapping.
 */

export interface ServiceDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  keyAspects: string[];
  metrics?: string;
  division: "digital" | "physical";
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  image: string;
  division: "digital" | "physical";
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  milestone: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  duration: string;
  stats: { label: string; value: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const COMPANY_PROFILE = {
  name: "FURmedia",
  founder: "Faisal Ur Rehman Shaikh",
  role: "Founder & Director",
  tagline: "We Craft Silent Luxuries & Digital Masterpieces.",
  mission: "To construct high-performance digital ecosystems while concurrently formulating highly aesthetic, premium physical products. We optimize for both natural Search Engines (SEO) and Answer Engines (AEO) to build future-proof, discoverable brands.",
  aboutBrief: "FURmedia sits at the intersection of high-fidelity software engineering, data-backed marketing, and artisanal luxury manufacturing. Operating as a dual-engine enterprise, we serve global enterprise clients through our Digital Services Division while launching pristine, high-concept visual brands via our Physical Products Division.",
  philosophy: "We believe in extreme aesthetic restraint, rigorous mathematical data models, and absolute design consistency. Across code and cosmetics, strategy and scent, we execute with uncompromising craftsmanship.",
  foundedYear: 2022,
  hq: "Canada & Pakistan",
  email: "furmediainc@gmail.com",
  phone: "+1 647 866 5481",
};

export const SERVICES_DATA: ServiceDetail[] = [
  // Digital
  {
    id: "app-development",
    name: "Cross Platform App Development",
    tagline: "Android & iOS Native Excellence",
    description: "Designing and engineering next-generation mobile applications utilizing React Native, Flutter, Swift, and Kotlin. We establish highly resilient, cloud-integrated structures with custom layout architectures, ensuring identical performance, safety, and seamless experience on both major operating systems.",
    keyAspects: [
      "Modular state management and fast rendering architectures",
      "Near-zero cold start optimization and localized encryption",
      "Fully responsive touch surfaces with high-performance animations",
      "Integrated analytics, push channels, and background execution loops"
    ],
    metrics: "99.9% Crash-Free Rate",
    division: "digital"
  },
  {
    id: "seo-marketing",
    name: "SEO, Paid Media & Email Marketing",
    tagline: "Omnichannel Scale, Zero Friction",
    description: "Multi-channel compound acceleration engines. We execute pristine, intent-driven SEO strategies coupled with high-efficiency paid media loops on Google, Meta, and LinkedIn. Behind the ads, we construct highly personalized, automated lifecycle newsletters that maximize lifetime value.",
    keyAspects: [
      "Natural Language AEO search answer optimization",
      "Sophisticated cookie-less advertising and lookalike attribution",
      "High-converting visual template design and copy writing",
      "Algorithmic keyword clusters targeting maximum-intent consumers"
    ],
    metrics: "+340% Organic Traffic Growth",
    division: "digital"
  },
  {
    id: "funnel-analytics",
    name: "Funnel Strategy & Insights",
    tagline: "Data-Backed Conversion Engineering",
    description: "Unlocking hidden vectors within the conversion loop. We auditing and constructing advanced, multi-tier landing experiences and high-conversion checkouts. Backed by clickstream logs, visual heatmaps, and precise cohort analysis, we replace marketing hypotheses with cold math.",
    keyAspects: [
      "Multi-variable A/B checkout experimentation flows",
      "Live cart drop-off recovery sequences and micro-moment triggers",
      "Dwell time analytics and layout bottleneck detection",
      "Real-time custom visual business intelligence dashboards"
    ],
    metrics: "Average +4.8% Checkout Conversion Rate",
    division: "digital"
  },
  // Physical
  {
    id: "fragrance-pure",
    name: "Fragrance Pure. Elegant. Halal.",
    tagline: "The Art of Non-Alcoholic Aromatics",
    description: "Primal, deeply evocative aromatic compositions engineered without alcohol. Formulated from premium biological resins, luxurious essential oud wood extract, royal ambergris, and steam-distilled damask roses. A pure, clean projection that honors luxury lifestyle cultures.",
    keyAspects: [
      "100% Halal certified, non-alcoholic perfume carrier base",
      "Over 30% concentration of natural botanical oil extracts",
      "Sustainably sourced royal oud chips, hand-sorted in Cambodia",
      "Artisanal heavy-gauge basalt stone containers topped with solid brass caps"
    ],
    metrics: "36-Hour Continuous Scent Projection",
    division: "physical"
  },
  {
    id: "fashion-culture",
    name: "Fashion Style. Culture. Confidence.",
    tagline: "Uncompromised Minimalist Tailoring",
    description: "An elegant, cross-cultural statement in textile luxury. We engineer apparel garments that combine heavy-drape biological linens, raw silk weaves, and hand-stitched reinforcements. Tailored with strict architectural guidelines, designed to exude silent, effortless authority.",
    keyAspects: [
      "Zero-carbon, sustainable luxury fabrics and trace-certified dyeing",
      "Ergonomically engineered shoulder patterns encouraging fluid posture",
      "Clean visual geometries designed with hidden double-seams",
      "Made-to-order low-waste production model respecting human crafts"
    ],
    metrics: "100% Hand-Finished Italian Linens",
    division: "physical"
  },
  {
    id: "cosmetics-clean",
    name: "Cosmetics Clean. Bold. Beautiful.",
    tagline: "Highly Reflective Physiological Beauty",
    description: "A gorgeous luxury cosmetic collection formulated on pure skin-loving carrier oils. Cruelty-free, vegan pigments that blend smoothly across any complexion. Safe, deeply nourishing, and unapologetically bold.",
    keyAspects: [
      "Zero petrochemicals, parabens, or synthetic fragrance oils",
      "Infused with bioactive squalane, hyaluronic acid, and rosehip extract",
      "High-density mineral pigments offering rich single-swipe coverage",
      "All-glass circular packaging with clean bamboo applicator tips"
    ],
    metrics: " Dermatologically Tested Clean Formulations",
    division: "physical"
  },
  {
    id: "interior-design",
    name: "Interior Design Design. Comfort. Vibe.",
    tagline: "Atmospheric Spaces of Pure Restraint",
    description: "High-end interior design and architectural space curation. We craft custom premium living zones, dynamic corporate work lounges, and bespoke conceptual environments. Focusing on micro-textured microcement, brushed raw metal, and architectural soft indirect lighting.",
    keyAspects: [
      "Mathematical layout layout grid systems optimizing physical flow",
      "Custom timber partitions built with absolute sound-dampening specs",
      "Multi-circuit ambient lighting models matching biological rhythms",
      "Curated modernist furniture from elite global design houses"
    ],
    metrics: "32 Award-Nominated Spaces Curation",
    division: "physical"
  },
  {
    id: "health-wellness",
    name: "Health & Wellness Strength. Balance. Vitality.",
    tagline: "Bio-Harmonious Nutrient & Physical Curation",
    description: "A functional collective for systemic optimization. From pure cold-pressed botanical adaptogens to advanced myofascial physical recovery gear, we design wellness systems to elevate performance, maintain focus balance, and restore true vitality.",
    keyAspects: [
      "Wild-harvested cold-pressed adaptogens maximizing cell absorption",
      "Physiological-compression apparel supporting oxygen flow rate",
      "Nootropics with clinically backed zero-crash focus curves",
      "Holistic wellness calendars matching daily circadian patterns"
    ],
    metrics: "100% Organic USDA Verified Powders",
    division: "physical"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "digital-01",
    title: "Verv Premium Lifestyle App",
    category: "Cross Platform Mobile Systems",
    description: "Crafted a gorgeous, secure, high-end wellness app on Android and iOS using React Native. It features an offline biometric lock, sleek dark user controls, and advanced localized data sync.",
    details: ["React Native", "Secure Enclave Encrypt", "Tailwind styling", "99.98% crash-free index"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    division: "digital"
  },
  {
    id: "digital-02",
    title: "The Scent Lab — Omnichannel Scale",
    category: "SEO & Growth Engine",
    description: "Constructed targeted SEO content structure paired with bespoke paid media vectors, raising organic index metrics for an artisan fragrance house. Designed custom newsletters converting shoppers.",
    details: ["AEO Keyword Auditing", "Paid Media optimization", "Predictive CRO", "+280% organic scale"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    division: "digital"
  },
  {
    id: "physical-01",
    title: "Pure Oud Extract 'Al-Munasabah'",
    category: "Fragrance Pure. Elegant.",
    description: "A rich non-alcoholic oud elixir formulated inside basalt containers. Featuring rich saffron spice and cedar base chords, it represents luxury culture.",
    details: ["Oud Wood extraction", "Non-alcoholic", "Basalt raw casing", "36-Hour continuous hold"],
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
    division: "physical"
  },
  {
    id: "physical-02",
    title: "The Raw Silk Kimono Robe",
    category: "Fashion Culture & confidence",
    description: "Constructed with uncolored luxury silk with neat dual stitching, this unstructured piece provides supreme posture flow and timeless elegance.",
    details: ["Raw Silk fiber", "Bespoke tailoring", "Biological dye extraction", "Low waste outline"],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    division: "physical"
  },
  {
    id: "physical-03",
    title: "Bio-Nourishing Oil Foundation",
    category: "Cosmetics Clean. Bold.",
    description: "Deeply pigmented clean foundation infused with pure squalane. It offers 14-hour skin protection and high-vibrancy glow metrics.",
    details: ["Vegan squalane base", "Zero synthetic scent", "High minerals", "Safe skin barrier protection"],
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    division: "physical"
  },
  {
    id: "physical-04",
    title: "Penthouse G Curation",
    category: "Interior Design. Comfort. Vibe.",
    description: "A complete interior design reconstruction for a private owner in London. Combining raw concrete styling, micro-textured panels, and soft lighting grids.",
    details: ["Screed concrete", "Silent wall dividers", "LED temperature balance", "Bespoke brass hardware"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    division: "physical"
  }
];

export const PROJECTS_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "project-ledger",
    title: "Sovereign Ledger: Engineering a Secure Cross-Platform Wealth and Analytics Engine",
    client: "Sovereign Capital Group",
    milestone: "Cross-Platform Fintech Architecture",
    challenge: "The client required an elegant, high-performance financial tracking system to manage cross-border wealth metrics securely, while maintaining absolute localized data isolation and delivering ultra-fast analytics compilation speeds without cloud latency dependency.",
    solution: "We engineered a dual-canvas budgeting and expense system utilizing React Native and localized SQlite structures. Crafted custom high-fidelity reports, responsive category expense logs with custom visual meters, and secure PDF analytics exports that compile in sub-100 milliseconds.",
    outcomes: [
      "Secured 100% client-side local data encryption utilizing hardware-level secure enclaves",
      "Eradicated dashboard statistics latency, rendering live expense tracking at a continuous 120 FPS",
      "Achieved a 99.98% runtime crash-free rating across complex high-frequency transactions"
    ],
    duration: "2 Months",
    stats: [
      { label: "Local Gen Latency", value: "<100ms" },
      { label: "Data Security", value: "E2EE AES" },
      { label: "Device Stability", value: "99.98%" }
    ]
  },
  {
    id: "project-vitality",
    title: "Stay Vitality: Translating IoT Biosensing Signals into Harmonious Daily Rituals",
    client: "Vitality Labs LLC",
    milestone: "IoT Wearable Integration & Core UI",
    challenge: "With hundreds of thousands of users seeking synchronous health monitoring, the client needed real-time visual step indicators, personalized notification toggles, and seamless background Bluetooth sync without heavy battery drain.",
    solution: "Constructed a streamlined, high-contrast biosensing companion dashboard with modular visual widgets, live step targets, fluid circular progress rings, and a rapid settings control surface managing account credentials and connected devices.",
    outcomes: [
      "Synchronized real-time heartbeat and step inputs with absolute zero-delay responsiveness",
      "Improved daily user interaction retention by 145% using circadian micro-animations",
      "Substantially optimized battery usage by 38% under high passive biosensing Bluetooth intervals"
    ],
    duration: "2 Months",
    stats: [
      { label: "Metric Latency", value: "Zero-Delay" },
      { label: "Active Retention", value: "+145%" },
      { label: "Battery Drain Opt", value: "+38%" }
    ]
  },
  {
    id: "project-apex-vigor",
    title: "Apex Vigor: Designing Immersive Athletic Calorie & Kinetic Training Orchestrations",
    client: "Apex Physical Systems",
    milestone: "Immersive Caloric & Gym Companion UI",
    challenge: "Traditional athletic apps failed to connect detailed macro-nutritional planning and specific exercise schedules dynamically, ending in disjointed user sessions and sudden drops in active habits.",
    solution: "We formulated a dark-mode training platform that bundles a macro-diet ledger, chronological activity tracks, adaptive meal menus, and guided gym workout loops featuring high-impact typography and rich responsive video controls.",
    outcomes: [
      "Maintained a stellar 4.9 average App Store review rating across thousands of active lifters",
      "Halved visual page transition times by integrating custom cached image pipelines",
      "Assisted over 80,000 certified athletes in successfully completing active weekly programs"
    ],
    duration: "1 Month",
    stats: [
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Transition Speeds", value: "-50%" },
      { label: "Active Athletes", value: "80,000+" }
    ]
  },
  {
    id: "project-aerovoyage",
    title: "AeroVoyage: Orchestrating an Elite Cross-Platform Flight Scheduler & Luxury Booking Portal",
    client: "AeroVoyage International",
    milestone: "Enterprise Travel Management",
    challenge: "Travellers were overwhelmed by convoluted flight filters and multi-step airline checkout flows, which reduced active sales conversions and heightened user resistance.",
    solution: "Engineered a minimalist, dual-axis airline booking scheduler that allows passengers to customize multi-city schedules, filter top-tier flight classes (Qatar, Emirates), compare seat specifications, and checkout in three quick actions.",
    outcomes: [
      "Streamlined reservation workflows, cutting manual checkout configurations down to a 3-step system",
      "Boosted conversion ratios by 68% in the first fiscal quarter of production deployment",
      "Integrated secure background flight status synchronization running silently on remote servers"
    ],
    duration: "2 Months",
    stats: [
      { label: "Checkout Process", value: "3 Steps" },
      { label: "Active Bookings", value: "+68%" },
      { label: "API Endpoint Speed", value: "<150ms" }
    ]
  },
  {
    id: "project-boatscout",
    title: "Boat Scout: Developing a Pristine Marine Fleet Allocation & Yacht Rental System",
    client: "Yacht Scout Club",
    milestone: "Maritime Asset Intelligence Portal",
    challenge: "The private club manual scheduling system led to frequent vessel allocation conflicts, slow charter reservation dispatching times, and inaccurate rent history reporting.",
    solution: "Launched deep fleet optimization dashboards complete with dynamic boat profile tiles (Yellowfin, Scout, Everglades), automated availability check flags, renter identity logs, and instant vessel search mechanics.",
    outcomes: [
      "Eliminated 100% of boat schedule clashing conflicts with atomic transaction validation rules",
      "Substantially reduced checkout administrative overhead for captains and yacht charter providers",
      "Supported 110% YoY growth in boat reservations across global ports and yacht basins"
    ],
    duration: "2 Months",
    stats: [
      { label: "Schedule Clashes", value: "0%" },
      { label: "YoY Growth", value: "+110%" },
      { label: "Listed Vessels", value: "500+" }
    ]
  },
  {
    id: "project-rentease",
    title: "RentEase: Engineering Hearth & Lease's Unified Real Estate Ecosystem",
    client: "Hearth & Lease Group LLC",
    milestone: "Multi-Platform Property PMS Curation",
    challenge: "Property owners and asset managers struggle with disjointed workflows across billing systems, tenant applications, maintenance logging, and message routing. Creating high operating overheads, this forced real-estate groups to rely on confusing manual email sequences and slow spreadsheets.",
    solution: "We engineered the RentEase (Hearth & Lease) property ecosystem, linking unified real-time dashboard analytics, instant rent processing registers, automated maintenance trackers, customizable tenant directories, secure document locker vaults, and real-time localized team message logs in high-fidelity mobile containers.",
    outcomes: [
      "Eradicated property management clerical errors by over 94% through real-time double-entry payment ledger structures",
      "Slashed maintenance ticket resolution times from 3.2 days down to 4.2 hours with automated route-casting profiles",
      "Raised direct lease renewal intent metrics by 32% via integrated multi-tenant chat channels and shared lease locks"
    ],
    duration: "2 Months",
    stats: [
      { label: "Ledger Discrepancy", value: "0%" },
      { label: "Resolution Time", value: "4.2 Hours" },
      { label: "Contract Renewals", value: "+32%" }
    ]
  },
  {
    id: "project-reeldine",
    title: "ReelDine: Engineering Savor's Viral Video & Localized Discovery PMS",
    client: "Savor Saudi Group / ReelDine Labs",
    milestone: "Full-Stack Short-Video Culinary Map Ecosystem",
    challenge: "Traditional restaurant directory portals rely on static text descriptions, outdated pictures, and manipulated review matrices. Modern, video-first food lovers crave immersive, authentic, short-form visual validation content tied to maps; however, typical video apps lack precise geographical mapping, custom menu checkouts, or streamlined recording templates.",
    solution: "We designed and engineered the ReelDine mobile suite. It integrates gorgeous full-screen vertical review feeds, live social notification streams, geolocated map finders, detailed digital menus with checkout highlights, fully-featured user profiles highlighting reviews/saved clips, and native camera-recording panels with real-time soundscapes, creating a high-fidelity visual app layout.",
    outcomes: [
      "Secured an incredible 4.2x increase in daily active user engagements via fluid, low-latency, buffering-free vertical reel loops",
      "Elevated actual in-person restaurant walk-in reservations by 42% through interactive geolocated map discovery cards",
      "Slashed mobile recording-to-publishing speeds to under 14 seconds via in-context quick-capture widgets"
    ],
    duration: "2 Months",
    stats: [
      { label: "User Engagement", value: "x4.2 Score" },
      { label: "Walk-in Bookings", value: "+42%" },
      { label: "Recording to Publish", value: "<14 Seconds" }
    ]
  },
  {
    id: "project-kidmeal",
    title: "KidMeal: Building QuickFoodie's Premium Child Nutrition & School Delivery Platform",
    client: "QuickFoodie Labs / KidMeal Inc",
    milestone: "Full-Stack Parent Portal & Campus Logistics Ecosystem",
    challenge: "Parents struggle to find healthy, dietitian-approved, kid-friendly meal options daily, and school drop-offs are marred by logistically chaotic deliveries and complex nutrition tracking requirements.",
    solution: "We formulated the pristine KidMeal platform: an intuitive, high-fidelity parent control suite featuring child nutrition discovery dashboards, itemized dish customizers, school delivery coordinates, multi-student profiles, and detailed transaction histories.",
    outcomes: [
      "Secured a flawless 98.7% on-time classroom delivery success rate across 42 partner school campuses",
      "Enabled parents to save over 12 hours weekly on meal prep with flexible, customizable subscriptions",
      "Increased healthy vegetable intake among student profiles by 65% via dietitian-verified menu selections"
    ],
    duration: "2 Months",
    stats: [
      { label: "Delivery Success", value: "98.7%" },
      { label: "Prep Time Saved", value: "12+ Hours" },
      { label: "Healthy Food Intake", value: "+65%" }
    ]
  }
];

export const FAQS_AEO_DATA: FAQItem[] = [
  {
    question: "What makes FURmedia's dual-engine model unique?",
    answer: "Unlike typical static portfolios or traditional agencies, FURmedia integrates an elite Digital Services division with an in-house Physical Products wing (specializing in Halal Fragrances, Sustainable Fashion, Clean Cosmetics, and Interior Design). This dual system allows us to test our conversion models on our own physical inventory first before introducing high-impact formulas to our enterprise clients. This means our insights are directly backed by real financial risk and real customers."
  },
  {
    question: "What is AEO (Answer Engine Optimization) and why is it critical?",
    answer: "AEO is the practice of optimizing digital assets for next-generation conversational AI systems like Google Gemini, SearchGPT, Perplexity, and Apple Intelligence. Standard SEO relies purely on keyword structures, page rank, and static backlinks. AEO requires high-fidelity semantic data schemas, highly structured question-and-answer pairs, pristine clear terminology, and flawless mobile experiences, ensuring that your corporate answers are delivered directly to users inquiring in chat overlays."
  },
  {
    question: "How does FURmedia maintain Halal compliance in its Fragrances?",
    answer: "Our Physical Products Division operates on clean, certified manufacturing procedures. We formulated our perfumes entirely alcohol-free, utilizing organic botanical oils, pure agarwood resins, warm ambergris bases, and steam-distilled floral extractions. This preserves high-concentration olfactory projection (extending up to 36 hours) without violating physiological halal rules."
  },
  {
    question: "What methodologies does Faisal Ur Rehman Shaikh apply to digital systems?",
    answer: "Faisal Ur Rehman Shaikh, our Founder and Director, leads with a philosophy of absolute aesthetic restraint and cold mathematical execution. In app engineering, we maintain near-zero rendering delays, lightweight bundles, and clear state logic. In media investment, we implement cookie-less tracking, high-intent targeting clusters, and continuous multi-variable testing schemes to secure the highest possible ROI."
  }
];
