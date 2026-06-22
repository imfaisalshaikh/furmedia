import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ProjectCaseStudy, 
  PROJECTS_CASE_STUDIES 
} from "../data";
import { 
  X, 
  Maximize2, 
  Sliders, 
  Compass, 
  Grid, 
  Layers, 
  Sparkles, 
  Clock, 
  Search, 
  ZoomIn, 
  ZoomOut, 
  Palette, 
  Printer, 
  Filter, 
  Check, 
  Copy, 
  Maximize,
  Briefcase,
  ExternalLink,
  Zap,
  Tag
} from "lucide-react";

// Curated high-resolution visual mockups of our 8 core projects matching the vibrant, minimal aesthetic
interface GalleryImage {
  id: string;
  projectId: string;
  projectName: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  techSpecs: {
    resolution: string;
    aspectRatio: string;
    primaryColor: string;
    accentGlow: string;
    colorPalette: { hex: string; name: string }[];
    fontStack: string;
    leadDesigner: string;
    complexityScore: string;
  };
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "gal-ledger-1",
    projectId: "project-ledger",
    projectName: "Sovereign Ledger",
    title: "Global Wealth Analytics Dashboard",
    description: "Ultra-precise dark canvas compiling cross-border high-net-worth portfolio balances. Engineered with client-balanced telemetry graphs, zero-latency localized ledger computations, and custom financial indicators.",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
    tags: ["Fintech", "Dark Mode", "High-Contrast", "Analytics"],
    techSpecs: {
      resolution: "3840 x 2160 (Native 4K UHD)",
      aspectRatio: "16:9 Cinema",
      primaryColor: "#050505",
      accentGlow: "rgba(0, 255, 153, 0.4)", // Cyber green
      colorPalette: [
        { hex: "#050505", name: "Absolute Pitch Black" },
        { hex: "#00FF99", name: "Cyber Radiant Mint" },
        { hex: "#1A202C", name: "Slate Charcoal" },
        { hex: "#E2E8F0", name: "Ice White" }
      ],
      fontStack: "Space Grotesk & Fira Code Mono",
      leadDesigner: "Faisal Shaheen",
      complexityScore: "A++ Enterprise"
    }
  },
  {
    id: "gal-vitality-1",
    projectId: "project-vitality",
    projectName: "Stay Vitality",
    title: "Circadian Health & Step Radar Interface",
    description: "A bright, elegant biomonitoring radar widget conveying steps progress, active steps targets, and sleep trends. Seamlessly renders circadian curves, heart beats rhythms, and background sync nodes.",
    imageUrl: "https://images.unsplash.com/photo-1510017805730-c307007daf07?auto=format&fit=crop&q=80&w=1200",
    tags: ["Biosensing", "Light Theme", "Micro-Animations", "Minimalist"],
    techSpecs: {
      resolution: "2560 x 1600 (Studio Retina)",
      aspectRatio: "16:10 Studio",
      primaryColor: "#FFFFFF",
      accentGlow: "rgba(0, 189, 174, 0.35)", // Vitality cyan
      colorPalette: [
        { hex: "#FFFFFF", name: "Pure Clinical White" },
        { hex: "#00BDAE", name: "Stay Vitality Cyan" },
        { hex: "#FF0055", name: "Heartbeat Crimson" },
        { hex: "#1C1C1E", name: "Charcoal Dark" }
      ],
      fontStack: "Inter Sans & SF Pro Display",
      leadDesigner: "Marcus Aurelius",
      complexityScore: "High-Fidelity Passive Sync"
    }
  },
  {
    id: "gal-apex-1",
    projectId: "project-apex-vigor",
    projectName: "Apex Vigor",
    title: "Immersive Athletic Macro Calories Ledger",
    description: "Specially formulated training ledger featuring dynamic kinetic calory logs, macro nutrient splits, and customizable exercise progression indices wrapped in sports brutalist typography.",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200",
    tags: ["Athletic", "Brutalist", "High-Vibrant", "Dark Mode"],
    techSpecs: {
      resolution: "3200 x 2000 (120Hz Ultra)",
      aspectRatio: "16:10 Studio",
      primaryColor: "#0A0A0C",
      accentGlow: "rgba(255, 45, 85, 0.4)", // Cyber Pink/Orange
      colorPalette: [
        { hex: "#0A0A0C", name: "Sports Graphite" },
        { hex: "#FF0055", name: "Apex Kinetic Pink" },
        { hex: "#FFD700", name: "Calory Gold" },
        { hex: "#7F8C8D", name: "Anodized Grey" }
      ],
      fontStack: "Outfit Bold & JetBrains Mono",
      leadDesigner: "Sarah Jenkins & Riyadh Lab",
      complexityScore: "A+ Macro Engine"
    }
  },
  {
    id: "gal-aero-1",
    projectId: "project-aerovoyage",
    projectName: "AeroVoyage",
    title: "Luxury Airline Altitude Control & Seat HUD",
    description: "Premium flight deck control system and private passenger HUD. Features dynamic weather navigation paths, spatial seat selectors, and curated in-cabin service widgets styled in luxurious duotone gold.",
    imageUrl: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1200",
    tags: ["Luxury Aviation", "Duotone Gold", "Premium", "3D GIS"],
    techSpecs: {
      resolution: "3840 x 2160 (Cinema Gold)",
      aspectRatio: "16:9 Cinema",
      primaryColor: "#0D0D15",
      accentGlow: "rgba(212, 175, 55, 0.35)", // Imperial Gold
      colorPalette: [
        { hex: "#0D0D15", name: "Deep Midnight Stratosphere" },
        { hex: "#D4AF37", name: "Imperial Burnished Gold" },
        { hex: "#FFFFFF", name: "Clouds White" },
        { hex: "#1F2937", name: "Cockpit Graphite" }
      ],
      fontStack: "Playfair Display & Inter Light",
      leadDesigner: "Nora Al-Ahmad",
      complexityScore: "Luxury Duotone Matrix"
    }
  },
  {
    id: "gal-boat-1",
    projectId: "project-boatscout",
    projectName: "Boat Scout",
    title: "Coastal Maritime Telemetry Mapper",
    description: "Comprehensive coastal navigation interface integrating tide schedules, water depth telemetry overlays, localized GPS signals, and boat specs index cards on a beautiful indigo naval theme.",
    imageUrl: "https://images.unsplash.com/photo-1520262454111-282f1d544af3?auto=format&fit=crop&q=80&w=1200",
    tags: ["Maritime", "Navigation", "Coastal Map", "Responsive Blueprints"],
    techSpecs: {
      resolution: "2560 x 1440 (Wide Naval HD)",
      aspectRatio: "16:9 Cinema",
      primaryColor: "#0B0F19",
      accentGlow: "rgba(59, 130, 246, 0.4)", // Ocean Blue
      colorPalette: [
        { hex: "#0B0F19", name: "Deep Marine Indigo" },
        { hex: "#3B82F6", name: "Signal Ocean Blue" },
        { hex: "#22C55E", name: "Beacon Signal Green" },
        { hex: "#E5E7EB", name: "Sea Salt Grey" }
      ],
      fontStack: "Fira Code & SF Mono Pro",
      leadDesigner: "Faisal Shaheen",
      complexityScore: "Telemetry Overlay Suite"
    }
  },
  {
    id: "gal-rentease-1",
    projectId: "project-rentease",
    projectName: "RentEase Pro",
    title: "Unified Real-Estate PMS Property Deck",
    description: "Elegantly configured boutique Property Management System. Displays active listing cards, support issues grids, and rental ledger collections wrapped in a warm organic sage-green palette.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    tags: ["Real Estate", "Boutique", "Sage Green", "Ecosystem"],
    techSpecs: {
      resolution: "3000 x 1800 (Studio Wide)",
      aspectRatio: "16:10 Studio",
      primaryColor: "#FCFBF9",
      accentGlow: "rgba(132, 154, 131, 0.35)", // Sage Green
      colorPalette: [
        { hex: "#FCFBF9", name: "Warm Alabaster Stone" },
        { hex: "#849A83", name: "Earthy Organic Sage" },
        { hex: "#2D2A26", name: "Charred Timber" },
        { hex: "#EAE4D8", name: "Clay Mortar" }
      ],
      fontStack: "Inter Medium & Space Grotesk",
      leadDesigner: "Nora Al-Ahmad",
      complexityScore: "Multi-Unit PMS Cluster"
    }
  },
  {
    id: "gal-reeldine-1",
    projectId: "project-reeldine",
    projectName: "ReelDine Social",
    title: "Short-Video Review Social Gastronomy Hub",
    description: "High-octane social gastronomy platform combining mobile loop feeds, interactive food review clips, and spatial location guides in a beautiful, rich pitch-black theme.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200",
    tags: ["Social", "Short-Video", "Gastronomy", "Pink Accents"],
    techSpecs: {
      resolution: "1440 x 2880 (Mobile Portrait HD)",
      aspectRatio: "9:16 Story",
      primaryColor: "#111111",
      accentGlow: "rgba(255, 0, 85, 0.45)", // Vibrant pink
      colorPalette: [
        { hex: "#111111", name: "Obsidian Black" },
        { hex: "#FF0055", name: "ReelDine Radiant Crimson" },
        { hex: "#F5F5F7", name: "Mercury Crisp Off-White" },
        { hex: "#F59E0B", name: "Warm Gourmet Honey" }
      ],
      fontStack: "Outfit Black & Inter Regular",
      leadDesigner: "Faisal Shaheen",
      complexityScore: "Social Streaming Engine"
    }
  },
  {
    id: "gal-kidmeal-1",
    projectId: "project-kidmeal",
    projectName: "KidMeal App",
    title: "Dietitian-Verified Student Meal Planner",
    description: "Prism of fun and nutrition. Displays organic protein sliders, rainbow fresh items, parent billing models, and campus delivery logistics maps safely managed for student accounts.",
    imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1200",
    tags: ["Youth Nutrition", "Light Theme", "School Delivery", "Vibrant Design"],
    techSpecs: {
      resolution: "1200 x 2400 (Fluid Student Portal)",
      aspectRatio: "9:16 Story",
      primaryColor: "#F8FAFF",
      accentGlow: "rgba(37, 99, 235, 0.35)", // Vibrant Blue
      colorPalette: [
        { hex: "#F8FAFF", name: "Cloud Blue" },
        { hex: "#2563EB", name: "Deep Parent Blue" },
        { hex: "#F59E0B", name: "Golden Honey Seed" },
        { hex: "#1A2B49", name: "Imperial Dark Navy" }
      ],
      fontStack: "Inter Sans & Space Grotesk Black",
      leadDesigner: "QuickFoodie Labs",
      complexityScore: "Campus Class Logistics System"
    }
  }
];

export default function ProjectGallery() {
  // Filter variables
  const [selectedProjectFilter, setSelectedProjectFilter] = useState<string>("all");
  const [selectedTagFilter, setSelectedTagFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [galleryLayout, setGalleryLayout] = useState<"bento" | "grid" | "carousel">("bento");

  // Lightbox / Zoom variables
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryImage | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState<number>(1);
  const [lightboxLens, setLightboxLens] = useState<"original" | "blueprint" | "neon" | "amber" | "contrast">("original");
  const [showRuler, setShowRuler] = useState<boolean>(false);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Auto-calculated unique tags
  const allUniqueTags = useMemo(() => {
    const tagsSet = new Set<string>();
    GALLERY_IMAGES.forEach(img => img.tags.forEach(t => tagsSet.add(t)));
    return Array.from(tagsSet);
  }, []);

  // Filtered visuals list
  const filteredImages = useMemo(() => {
    return GALLERY_IMAGES.filter(img => {
      // Project filter match
      const projectMatch = selectedProjectFilter === "all" || img.projectId === selectedProjectFilter;
      // Tag filter match
      const tagMatch = selectedTagFilter === "all" || img.tags.includes(selectedTagFilter);
      // Search term match
      const searchStr = `${img.title} ${img.projectName} ${img.description} ${img.tags.join(" ")}`.toLowerCase();
      const termMatch = !searchTerm || searchStr.includes(searchTerm.toLowerCase());

      return projectMatch && tagMatch && termMatch;
    });
  }, [selectedProjectFilter, selectedTagFilter, searchTerm]);

  // Color Copy utility with dynamic feedback
  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  // Adjust lens classes for real-time visual styling
  const getLensFilterClasses = (lens: string) => {
    switch (lens) {
      case "blueprint":
        return "filter grayscale brightness-75 contrast-125 sepia hue-rotate-[190deg] saturate-[300%]"; // High blueprint contrast blue hue
      case "neon":
        return "filter saturate-[200%] contrast-150 brightness-90 hue-rotate-[90deg]"; // Cyber green/blue shift
      case "amber":
        return "filter sepia contrast-110 brightness-90 saturate-[150%] hue-rotate-15"; // Golden vintage look
      case "contrast":
        return "filter contrast-200 saturate-150 brightness-90"; // Extremely punchy high-contrast
      default:
        return "";
    }
  };

  return (
    <div className="space-y-8 bg-neutral-950/20 rounded-3xl border border-white/[0.05] p-6 lg:p-8 relative overflow-hidden backdrop-blur-xl">
      
      {/* Aesthetic grid highlight layer */}
      <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />

      {/* Lab Header block */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00FF99] animate-pulse"></span>
            <span className="font-mono text-[9px] tracking-widest text-[#00FF99] uppercase font-semibold">HD Media Lab</span>
          </div>
          <h2 className="text-xl md:text-3xl font-display font-medium text-white tracking-tight mt-1">
            Dynamic Design Systems & High-Format Previews
          </h2>
          <p className="text-xs text-brand-muted mt-1 max-w-2xl font-light">
            An immersive diagnostic gallery highlighting typographic pairings, color values, and digital layout metrics. Select any preview board to launch the high-vibrant Cinema Lightbox.
          </p>
        </div>

        {/* Dynamic Layout selectors */}
        <div className="flex gap-1 bg-white/[0.03] border border-white/10 p-1 rounded-xl h-fit w-fit self-start md:self-end">
          {(["bento", "grid", "carousel"] as const).map(l => (
            <button
              key={l}
              onClick={() => setGalleryLayout(l)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wide uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                galleryLayout === l
                  ? "bg-white text-black font-extrabold shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {l === "bento" && <Layers className="w-3.5 h-3.5" />}
              {l === "grid" && <Grid className="w-3.5 h-3.5" />}
              {l === "carousel" && <Compass className="w-3.5 h-3.5" />}
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Control Bar: Filters, Search & Metadata Indicators */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Search Input bar */}
        <div className="md:col-span-4 relative group">
          <span className="absolute left-3.5 top-2.5 text-gray-450 group-focus-within:text-[#00FF99] transition-colors">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search screens, design systems, colors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-[#00FF99] rounded-xl pl-9.5 pr-4 py-2 text-xs font-sans text-white placeholder-gray-500 outline-none transition-all"
          />
        </div>

        {/* Project filtering drop */}
        <div className="md:col-span-4 flex items-center gap-2">
          <span className="font-mono text-[9px] text-[#8a8a8a] uppercase shrink-0">Project</span>
          <select
            value={selectedProjectFilter}
            onChange={(e) => setSelectedProjectFilter(e.target.value)}
            className="w-full bg-white/[0.02] border border-white/50 focus:border-[#00FF99] text-white text-xs font-sans p-2 rounded-xl border-white/10 outline-none cursor-pointer"
          >
            <option value="all" className="bg-neutral-900 text-white">All Active Systems</option>
            {PROJECTS_CASE_STUDIES.map(st => (
              <option key={st.id} value={st.id} className="bg-neutral-900 text-white">
                {st.title.split(":")[0]}
              </option>
            ))}
          </select>
        </div>

        {/* Tag filtering drop */}
        <div className="md:col-span-4 flex items-center gap-2">
          <span className="font-mono text-[9px] text-[#8a8a8a] uppercase shrink-0">Style</span>
          <select
            value={selectedTagFilter}
            onChange={(e) => setSelectedTagFilter(e.target.value)}
            className="w-full bg-white/[0.02] border border-white/50 focus:border-[#00FF99] text-white text-xs font-sans p-2 rounded-xl border-white/10 outline-none cursor-pointer"
          >
            <option value="all" className="bg-neutral-900 text-white">All Aesthetic Genres</option>
            {allUniqueTags.map(tag => (
              <option key={tag} value={tag} className="bg-neutral-900 text-white">{tag}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Responsive Grid Layout Container */}
      <div className="relative z-10 min-h-[300px]">
        {filteredImages.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-white/[0.04] bg-white/[0.01]">
            <span className="text-3xl">🧩</span>
            <h4 className="text-white font-medium text-sm mt-3 font-display">No Visual Specifications Match Your Selector</h4>
            <p className="text-xs text-brand-muted mt-1 max-w-md font-light">
              Try adjusting your lookup text or resetting style category to see more HD blueprints.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedProjectFilter("all");
                setSelectedTagFilter("all");
              }}
              className="mt-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono px-4 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : galleryLayout === "carousel" ? (
          /* High-vibrant horizontal card stack loop */
          <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar snap-x snap-mandatory">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() => {
                  setActiveLightboxImage(img);
                  setLightboxZoom(1);
                  setLightboxLens("original");
                }}
                className="snap-start shrink-0 w-[290px] md:w-[480px] bg-white/[0.01] border border-white/10 hover:border-[#00FF99]/30 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group relative flex flex-col justify-between"
              >
                {/* Visual card header */}
                <div className="p-4 border-b border-white/[0.05] bg-white/[0.01] flex justify-between items-center bg-zinc-950/20">
                  <span className="font-mono text-[9px] text-gray-400 font-extrabold uppercase tracking-widest leading-none">
                    {img.projectName}
                  </span>
                  <span className="text-[9px] bg-[#00FF99]/10 text-[#00FF99] font-mono border border-[#00FF99]/20 px-2.5 py-0.5 rounded-full">
                    {img.techSpecs.aspectRatio}
                  </span>
                </div>

                {/* Aspect ratio frame visual */}
                <div className="relative aspect-[16/10] bg-zinc-900 border-b border-white/[0.05] overflow-hidden">
                  <img
                    src={img.imageUrl}
                    referrerPolicy="no-referrer"
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark layout overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-80" />

                  {/* Interactive zoom state indicator on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xxs">
                    <div className="bg-white/9 text-black px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 shadow-xl border border-white/25">
                      <Maximize className="w-3.5 h-3.5" />
                      Expand Cinema View
                    </div>
                  </div>
                </div>

                {/* Description details body */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1 text-left">
                    <h3 className="font-display font-medium text-sm text-white tracking-tight leading-snug group-hover:text-[#00FF99] transition-colors">
                      {img.title}
                    </h3>
                    <p className="text-[11px] text-[#adadad] line-clamp-2 leading-relaxed font-light">
                      {img.description}
                    </p>
                  </div>

                  {/* Curated visual tag list */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {img.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/[0.05] text-[9px] font-mono px-2 py-0.5 rounded-md text-gray-400 uppercase tracking-widest leading-none">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : galleryLayout === "grid" ? (
          /* Flat symmetric high-contrast technical grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() => {
                  setActiveLightboxImage(img);
                  setLightboxZoom(1);
                  setLightboxLens("original");
                }}
                className="bg-zinc-950/35 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group hover:-translate-y-1 relative"
              >
                <div className="relative aspect-video overflow-hidden border-b border-white/[0.05]">
                  <img
                    src={img.imageUrl}
                    referrerPolicy="no-referrer"
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-[8px] font-mono tracking-widest text-[#00FF99] border border-white/10 px-2 py-0.4 rounded uppercase font-bold leading-none">
                    {img.projectName}
                  </div>
                </div>
                <div className="p-4 text-left space-y-2">
                  <h4 className="font-display font-medium text-xs text-white max-w-[95%] tracking-tight leading-tight line-clamp-1 group-hover:text-[#00FF99] transition-colors">
                    {img.title}
                  </h4>
                  <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono font-bold leading-none select-none">
                    <span>{img.techSpecs.resolution}</span>
                    <span className="text-white/60">★ DETAILS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Bento High-Art Asymmetrical Masonry Matrix */
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 grid-flow-row-dense">
            {filteredImages.map((img, index) => {
              // Alternate grid layout sizes for custom bento aesthetic rhythm
              const isLargeCard = index % 3 === 0;
              const isWideCard = index % 5 === 1;

              let colSpan = "md:col-span-2";
              let rowHeight = "h-[360px]";

              if (isLargeCard) {
                colSpan = "md:col-span-4";
                rowHeight = "h-[400px]";
              } else if (isWideCard) {
                colSpan = "md:col-span-4";
                rowHeight = "h-[360px]";
              }

              return (
                <div
                  key={img.id}
                  onClick={() => {
                    setActiveLightboxImage(img);
                    setLightboxZoom(1);
                    setLightboxLens("original");
                  }}
                  className={`${colSpan} ${rowHeight} bg-white/[0.015] border border-white/[0.08] hover:border-[#00FF99]/40 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group relative flex flex-col justify-between shadow-2xl`}
                >
                  {/* Absolute glowing aesthetic backdrop tag */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/75 opacity-90 z-0 pointer-events-none" />

                  {/* Absolute image canvas */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={img.imageUrl}
                      referrerPolicy="no-referrer"
                      alt={img.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-0.5"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/55" />
                  </div>

                  {/* Bento top-header spec block */}
                  <div className="relative z-10 p-5 flex justify-between items-center select-none pt-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: img.techSpecs.colorPalette[1].hex }} />
                      <span className="font-mono text-[9px] tracking-widest text-[#cfcfcf] uppercase font-extrabold pb-0.5">
                        {img.projectName}
                      </span>
                    </div>

                    <span className="text-[8px] bg-white/10 hover:bg-white/20 text-white font-mono border border-white/20 px-2.5 py-0.5 rounded leading-none transition-all uppercase tracking-wider font-extrabold">
                      {img.techSpecs.resolution}
                    </span>
                  </div>

                  {/* Bento details bottom panel */}
                  <div className="relative z-10 p-5 space-y-3 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="space-y-1 text-left">
                      <h3 className="font-display font-medium text-lg text-white leading-tight mt-1 group-hover:text-[#00FF99] transition-colors font-bold tracking-tight">
                        {img.title}
                      </h3>
                      <p className="text-[11px] text-brand-muted line-clamp-2 md:line-clamp-3 leading-relaxed font-light font-sans">
                        {img.description}
                      </p>
                    </div>

                    {/* Meta specs list row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-2 text-[9px] font-mono select-none">
                      <div className="flex gap-1">
                        {img.tags.slice(0, 2).map((t, idx) => (
                          <span key={idx} className="bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded tracking-wide leading-none uppercase">
                            {t}
                          </span>
                        ))}
                      </div>

                      <span className="text-[#00FF99] font-bold flex items-center gap-1">
                        <Maximize className="w-3.5 h-3.5 inline" /> Cinema Lightbox
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* --- SPECTACULAR ULTRA CINEMA LIGHTBOX SPECIFICATION VIEWER (MODAL) --- */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Dynamic pixel rule lines simulating high-grade structural blueprint design workspace */}
            {showRuler && (
              <div className="absolute inset-0 pointer-events-none z-10 opacity-30 select-none overflow-hidden text-neutral-550">
                {/* Horizontal ruler cross lines with tick marks every 50px */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-sky-500/30 font-mono text-[8px] flex justify-between px-4">
                  <span>L0_AXIS X: 50%</span>
                  <span>ALIGN: SAFE GRID ZONE</span>
                  <span>R0_AXIS X: 100%</span>
                </div>
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-sky-500/30" />
                {/* Crosshairs coordinate lines */}
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 border border-sky-400/20" />
                <div className="absolute top-[80px] left-[10px] font-mono text-[7px] text-[#00FF99]/85 uppercase leading-none bg-[#050505]/80 px-2 py-1 rounded border border-white/10">
                  HUD SYSTEM ENGAGED // LAYOUT_RULER_SCALE: 1.0 // GRID_LOCK: TRUE
                </div>
              </div>
            )}

            {/* LIGHTBOX UPPER CONTROLS HEADER */}
            <div className="relative z-20 border-b border-white/10 bg-black/60 px-6 py-4 flex justify-between items-center">
              <div className="text-left flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#00FF99]" />
                <div>
                  <span className="font-mono text-[8px] tracking-widest text-[#00FF99] uppercase font-bold leading-none block">
                    {activeLightboxImage.projectName} // LITE SPEC HUD
                  </span>
                  <h2 className="text-sm md:text-base font-display font-medium text-white tracking-tight mt-0.5">
                    {activeLightboxImage.title}
                  </h2>
                </div>
              </div>

              {/* Close Button trigger */}
              <button
                onClick={() => {
                  setActiveLightboxImage(null);
                  setShowRuler(false);
                }}
                className="bg-white/10 hover:bg-red-500/20 hover:text-red-500 border border-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all cursor-pointer"
                title="Exit Cinema (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* CORE INTERACTIVE TWO-COLUMN VIEWPORT CENTER */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0 select-none">
              {/* Left Column: Visual canvas frame with filters, zooming, panning */}
              <div className="lg:col-span-8 flex flex-col justify-between items-center p-6 relative bg-zinc-950/40 border-r border-white/5 overflow-hidden">
                
                {/* Visual diagnostic lens modes bar */}
                <div className="w-full flex flex-wrap gap-2 justify-center mb-4 relative z-20">
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest self-center mr-2">Lens Filter:</span>
                  {[
                    { id: "original", label: "Studio Default" },
                    { id: "blueprint", label: "CAD Blue Blueprint" },
                    { id: "neon", label: "Vibrant Cyan-Shift" },
                    { id: "amber", label: "Golden Filament" },
                    { id: "contrast", label: "Ultra Spec Contrast" }
                  ].map(specLens => (
                    <button
                      key={specLens.id}
                      onClick={() => setLightboxLens(specLens.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                        lightboxLens === specLens.id
                          ? "bg-white text-black font-extrabold border-white"
                          : "bg-white/5 border border-white/5 text-gray-400 hover:text-white"
                      }`}
                    >
                      {lightboxLens === specLens.id ? "● " : ""} {specLens.label}
                    </button>
                  ))}
                </div>

                {/* Main high resolution zoomable image frame window */}
                <div className="flex-1 w-full max-w-4xl relative flex items-center justify-center overflow-hidden border border-white/10 rounded-2xl bg-black">
                  <motion.div
                    animate={{ scale: lightboxZoom }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                    className="relative max-h-[70vh] aspect-[16/10] overflow-hidden rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center"
                  >
                    <img
                      src={activeLightboxImage.imageUrl}
                      referrerPolicy="no-referrer"
                      alt={activeLightboxImage.title}
                      className={`max-w-full max-h-full object-contain transition-all duration-300 ${getLensFilterClasses(lightboxLens)}`}
                    />
                    
                    {/* Simulated cyber grid lines floating above */}
                    {lightboxLens === "blueprint" && (
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none" />
                    )}
                  </motion.div>
                </div>

                {/* Multi-Format Canvas controls */}
                <div className="w-full flex justify-between items-center mt-4 relative z-10 leading-none">
                  {/* Dynamic Zoom levers */}
                  <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1 shrink-0">
                    <button
                      disabled={lightboxZoom <= 0.8}
                      onClick={() => setLightboxZoom(prev => Math.max(0.8, prev - 0.2))}
                      className="w-7 h-7 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg flex items-center justify-center cursor-pointer disabled:opacity-30 transition-all font-bold"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono text-white text-center w-12 select-none">
                      {Math.round(lightboxZoom * 100)}%
                    </span>
                    <button
                      disabled={lightboxZoom >= 4.0}
                      onClick={() => setLightboxZoom(prev => Math.min(4.0, prev + 0.2))}
                      className="w-7 h-7 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg flex items-center justify-center cursor-pointer disabled:opacity-30 transition-all font-bold"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Toggle ruler lines tool */}
                  <button
                    onClick={() => setShowRuler(!showRuler)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-mono tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                      showRuler 
                        ? "bg-[#00FF55]/15 text-[#00FF55] border border-[#00FF55]/45" 
                        : "bg-white/5 text-gray-400 border border-white/10 hover:text-white"
                    }`}
                  >
                    <span>📐</span> {showRuler ? "Ruler Lines Active" : "Interactive Blueprint Overlay"}
                  </button>

                  <p className="hidden md:block text-[9px] font-mono text-gray-500 uppercase">
                    Use Mouse-Slider controls or drag to inspect vector alignments
                  </p>
                </div>
              </div>

              {/* Right Column: Architectural HUD metrics and Copy Colors */}
              <div className="lg:col-span-4 bg-black/60 p-6 space-y-6 overflow-y-auto border-t lg:border-t-0 border-white/10 text-left">
                
                {/* Meta details header heading */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF99] animate-pulse"></span>
                    <span className="font-mono text-[9px] tracking-widest text-[#00FF99] uppercase font-bold">SPECIFICATIONS MATRIX</span>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-gray-400 font-bold block uppercase leading-none">Project Objective</span>
                    <h3 className="text-xl font-display font-medium text-white tracking-tight leading-snug">
                      {activeLightboxImage.title}
                    </h3>
                  </div>

                  <p className="text-xs text-brand-muted leading-relaxed font-light font-sans pt-1">
                    {activeLightboxImage.description}
                  </p>
                </div>

                <div className="h-[1.5px] bg-white/10 w-full" />

                {/* Interactive Hex Color Palette copier */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-extrabold block">Design Swatches Palette</span>
                    <span className="font-mono text-[8px] text-gray-500 uppercase">(Click swatch to copy hex)</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {activeLightboxImage.techSpecs.colorPalette.map((color, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleCopyColor(color.hex)}
                        style={{ borderLeftColor: color.hex }}
                        className="bg-white/[0.02] border-l-4 border-y border-r border-white/10 hover:border-white/20 p-2.5 rounded-r-xl flex justify-between items-center cursor-pointer transition-all hover:bg-white/[0.04]"
                      >
                        <div className="flex items-center gap-3">
                          {/* Colored circular dot */}
                          <div
                            className="w-4 h-4 rounded-full border border-white/20 shrink-0 shadow-sm"
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="leading-none text-left">
                            <span className="text-[10px] font-mono font-bold text-white block">{color.hex}</span>
                            <span className="text-[8px] text-gray-400 font-light block mt-1">{color.name}</span>
                          </div>
                        </div>

                        {/* Clipboard icon copy feedback */}
                        <div className="text-gray-400 hover:text-white transition-colors">
                          {copiedColor === color.hex ? (
                            <span className="text-[9px] font-mono text-[#00FF99] font-bold flex items-center gap-1 bg-[#00FF99]/10 border border-[#00FF55]/20 px-2 py-0.5 rounded leading-none">
                              <Check className="w-3 h-3 text-[#00FF99]" /> Copied!
                            </span>
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-[1.5px] bg-white/10 w-full" />

                {/* Technical Meta Table specifications log */}
                <div className="space-y-3">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-extrabold block">Layout Metadata Specs</span>
                  
                  <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden text-[10px] font-mono">
                    {[
                      { label: "Target Canvas", val: activeLightboxImage.techSpecs.resolution },
                      { label: "Aspect Scale", val: activeLightboxImage.techSpecs.aspectRatio },
                      { label: "Core Typeface", val: activeLightboxImage.techSpecs.fontStack },
                      { label: "Lead Designer", val: activeLightboxImage.techSpecs.leadDesigner },
                      { label: "Verification Score", val: activeLightboxImage.techSpecs.complexityScore }
                    ].map((row, rIdx) => (
                      <div
                        key={rIdx}
                        className={`flex justify-between p-2.5 ${
                          rIdx !== 4 ? "border-b border-white/[0.08]" : ""
                        }`}
                      >
                        <span className="text-gray-450 uppercase">{row.label}</span>
                        <span className="text-white text-right font-medium">{row.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA triggers */}
                <div className="pt-2">
                  <div className="bg-[#00FF99]/5 border border-[#00FF99]/20 p-4 rounded-2xl text-center space-y-2 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[#00FF99]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="block text-2xl">⚡</span>
                    <h5 className="font-display font-bold text-xs text-white">Full-Stack Design Integrators</h5>
                    <p className="text-[10px] text-brand-muted leading-relaxed font-light">
                      This layout has been audited and certified as pixel-perfect with our native visual layouts. Let's inspect the active live build!
                    </p>
                    <button
                      onClick={() => {
                        // Close lightbox, and navigate/scroll to study tab
                        const targetId = activeLightboxImage.projectId;
                        const idx = PROJECTS_CASE_STUDIES.findIndex(sc => sc.id === targetId);
                        if (idx !== -1) {
                          // Try to select
                          const clickTrigger = document.getElementById(`case-tab-${idx}`);
                          if (clickTrigger) {
                            clickTrigger.click();
                            clickTrigger.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                        setActiveLightboxImage(null);
                        setShowRuler(false);
                      }}
                      className="bg-[#00FF99] hover:bg-[#00e1cf] text-black font-extrabold text-[10px] tracking-wider uppercase py-2 px-4 rounded-xl w-full cursor-pointer shadow-md inline-flex items-center justify-center gap-1.5 transition-all mt-1 leading-none"
                    >
                      Launch Case Simulator <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* LIGHTBOX STATUS FOOTER */}
            <div className="relative z-20 border-t border-white/10 bg-black/60 px-6 py-2.5 flex justify-between text-[8px] font-mono text-gray-500 uppercase leading-none shrink-0">
              <span>ACTIVE SCHEMA // UUID: {activeLightboxImage.id} // SECURE CLIENT REPO</span>
              <span>VERIFIED SPECTRAL CONTRAST ACCURACY: 100%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
