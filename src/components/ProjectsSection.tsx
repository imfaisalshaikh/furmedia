import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS_CASE_STUDIES, ProjectCaseStudy } from "../data";
import { 
  ArrowLeft, Clock, BarChart3, Star, Sparkles, Sliders,
  X, Info, Shield, Cpu, RefreshCw, Layers, Layout, Network, HardDrive, Terminal, Zap, CheckCircle2, Award
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
const ProjectGallery = lazy(() => import("./ProjectGallery"));

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);
  const currentCase: ProjectCaseStudy = PROJECTS_CASE_STUDIES[selectedCaseIdx];
  const [activeInsightsProject, setActiveInsightsProject] = useState<ProjectCaseStudy | null>(null);
  const [rentEaseScreen, setRentEaseScreen] = useState<string>("dashboard");
  const [rentEaseViewMode, setRentEaseViewMode] = useState<"emulator" | "large-grid">("large-grid");
  const [reelDineScreen, setReelDineScreen] = useState<string>("feed");
  const [reelDineViewMode, setReelDineViewMode] = useState<"emulator" | "large-grid">("large-grid");
  const [kidMealScreen, setKidMealScreen] = useState<string>("discovery");
  const [kidMealViewMode, setKidMealViewMode] = useState<"emulator" | "large-grid">("large-grid");

  // Enterprise BI Dashboard Sandbox states
  const [biSegment, setBiSegment] = useState<"all" | "perfumes" | "linens" | "consulting">("all");
  const [biForecast, setBiForecast] = useState<boolean>(true);

  const getTabLabel = (id: string, idx: number) => {
    switch (id) {
      case "project-ledger": return "Sovereign BI Suite";
      case "project-vitality": return "Scent Lab Analytics";
      case "project-apex-vigor": return "IoT Telemetry";
      case "project-aerovoyage": return "AeroVoyage Core";
      case "project-boatscout": return "Boat Scout DB";
      case "project-rentease": return "RentEase Pro";
      case "project-reeldine": return "ReelDine Social";
      case "project-kidmeal": return "KidMeal App";
      default: return `Study ${idx + 1}`;
    }
  };

  const renderRentEaseScreenContent = (screenName: string) => {
    switch (screenName) {
      case "dashboard":
        return (
          <div className="flex flex-col h-full justify-between">
            <div>
              {/* Header */}
              <div className="flex justify-between items-center pb-2 border-b border-[#eae4d8]">
                <div>
                  <span className="text-[7.5px] uppercase font-mono tracking-widest text-[#849a83]">Good morning, Sarah</span>
                  <h3 className="font-display font-extrabold text-[#2d2a26] text-xs leading-tight">Hearth & Lease</h3>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                  alt="Sarah"
                  referrerPolicy="no-referrer"
                  className="w-6.5 h-6.5 rounded-full border border-[#eae4d8]"
                />
              </div>

              {/* Revenue Card */}
              <div className="bg-white border border-[#eae4d8] rounded-xl p-2 mt-2 relative overflow-hidden">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[6px] font-mono text-gray-400 uppercase block">Total Revenue</span>
                    <span className="text-xs font-bold text-[#2d2a26]">$28,450.00</span>
                  </div>
                  <span className="text-[5.5px] text-[#849a83] bg-[#849a83]/10 px-1 py-0.2 rounded font-mono font-medium">📅 Last 6 Months</span>
                </div>
                {/* SVG Mini line chart */}
                <div className="h-8 mt-1.5 flex items-end">
                  <svg className="w-full h-6" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#849a83" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#849a83" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 25 Q 20 23, 40 18 T 80 12 T 100 8 L 100 30 L 0 30 Z"
                      fill="url(#chartGrad)"
                    />
                    <path
                      d="M 0 25 Q 20 23, 40 18 T 80 12 T 100 8"
                      fill="none"
                      stroke="#849a83"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                {/* Months Row */}
                <div className="flex justify-between text-[5px] text-gray-400 font-mono mt-0.5">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-2 mt-1.5">
                <div className="bg-white border border-[#eae4d8] p-1.5 rounded-lg">
                  <span className="text-[6px] font-mono text-gray-400 block uppercase leading-none">Occupancy</span>
                  <div className="font-bold text-[#2d2a26] text-[10px] mt-0.5">96.4%</div>
                  <span className="text-[5.5px] text-emerald-600 block mt-0.5 leading-none">+2.1% from last month</span>
                </div>
                <div className="bg-white border border-[#eae4d8] p-1.5 rounded-lg">
                  <span className="text-[6px] font-mono text-gray-400 block uppercase leading-none">On-Time Rent</span>
                  <div className="font-bold text-[#2d2a26] text-[10px] mt-0.5">92%</div>
                  <span className="text-[5.5px] text-amber-500 block mt-0.5 leading-none">3 pending payments</span>
                </div>
              </div>

              {/* Urgent Alerts */}
              <div className="mt-2.5 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[7px] font-mono uppercase tracking-wider text-gray-400 font-bold">Urgent Alerts</span>
                  <span className="text-[6px] text-[#849a83] font-bold cursor-pointer">View All</span>
                </div>
                {[
                  { title: "Water Leak Reported", subtitle: "Unit 4B – Maple Heights", color: "border-l-rose-500" },
                  { title: "Lease Expiring", subtitle: "The Willow Cottage – 15 days left", color: "border-l-amber-500" },
                  { title: "Maintenance Complete", subtitle: "Sage Garden Loft – HVAC Repair", color: "border-l-emerald-600" }
                ].map((alert, idx) => (
                  <div key={idx} className={`bg-white border border-[#eae4d8] border-l-2 ${alert.color} p-1 rounded flex justify-between items-center hover:bg-neutral-50 cursor-pointer`}>
                    <div className="min-w-0 pr-1">
                      <span className="font-bold text-[7.5px] text-[#2d2a26] leading-none block truncate">{alert.title}</span>
                      <span className="text-[6px] text-gray-400 block mt-0.5 truncate leading-none">{alert.subtitle}</span>
                    </div>
                    <span className="text-gray-400 text-[6px] shrink-0">›</span>
                  </div>
                ))}
              </div>

              {/* Portfolio Health Donut */}
              <div className="bg-white border border-[#eae4d8] p-1.5 rounded-lg mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[6px] font-mono text-gray-400 uppercase block leading-none">Portfolio Health</span>
                  <div className="space-y-[2px] mt-1 text-[6px]">
                    <div className="flex items-center gap-1 leading-none">
                      <span className="w-1 h-1 rounded-full bg-[#849a83]" />
                      <span className="text-gray-500">Occupied: <span className="font-bold text-gray-700">85.2%</span></span>
                    </div>
                    <div className="flex items-center gap-1 leading-none">
                      <span className="w-1 h-1 rounded-full bg-[#dfd9cd]" />
                      <span className="text-gray-500">Vacant: <span className="font-bold text-gray-700">7.5%</span></span>
                    </div>
                    <div className="flex items-center gap-1 leading-none">
                      <span className="w-1 h-1 rounded-full bg-rose-300" />
                      <span className="text-gray-500">Maint: <span className="font-bold text-gray-700">7.3%</span></span>
                    </div>
                  </div>
                </div>
                {/* SVG Donut Ring */}
                <div className="relative w-8 h-8 shrink-0">
                  <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#dfd9cd" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#849a83" strokeWidth="3" strokeDasharray="85.2 14.8" strokeDashoffset="0" />
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#fda4af" strokeWidth="3" strokeDasharray="7.3 92.7" strokeDashoffset="-85.2" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[5px] font-bold text-gray-800">
                    85%
                  </div>
                </div>
              </div>
            </div>

            {/* Float Active Docks */}
            <div className="pt-2">
              <button className="bg-[#849a83] text-white hover:bg-[#728471] font-bold py-1 w-full rounded-lg flex items-center justify-center gap-1 shadow-xs text-[7.5px] cursor-pointer">
                <span>➕</span> New Entry
              </button>
            </div>
          </div>
        );

      case "portfolio":
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-1.5">
              {/* Header */}
              <div className="flex justify-between items-center pb-1.5 border-b border-[#eae4d8]">
                <div>
                  <span className="text-[6.5px] uppercase font-mono tracking-widest text-[#849a83]">Hearth & Lease</span>
                  <h3 className="font-display font-extrabold text-[#2d2a26] text-xxs leading-none mt-0.5">My Portfolio</h3>
                </div>
                <span className="w-4 h-4 rounded-full bg-white border border-[#eae4d8] flex items-center justify-center text-[7px] cursor-pointer">🔍</span>
              </div>

              {/* Status Indicator Bar */}
              <div className="grid grid-cols-2 gap-1.5 my-0.5">
                <div className="bg-[#f0ece3] rounded-lg p-1 text-center border border-[#eae4d8]">
                  <span className="text-xs font-extrabold text-gray-800 leading-none block">12</span>
                  <span className="block text-[5px] text-gray-500 font-mono uppercase mt-0.5">Active Units</span>
                </div>
                <div className="bg-[#f0ece3] rounded-lg p-1 text-center border border-[#eae4d8]">
                  <span className="text-xs font-extrabold text-[#849a83] leading-none block font-mono">94%</span>
                  <span className="block text-[5px] text-gray-500 font-mono uppercase mt-0.5">Occupancy</span>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex gap-1 overflow-x-auto pb-1 max-w-full">
                {["All Units", "Vacant", "Maintenance", "Upcoming"].map((pill, i) => (
                  <span key={i} className={`px-1.5 py-0.2 rounded-full text-[5.5px] font-bold border shrink-0 cursor-pointer ${i === 0 ? "bg-[#849a83] text-white border-[#849a83]" : "bg-white text-gray-500 border-[#eae4d8]"}`}>
                    {i === 0 ? "✓ " : ""}{pill}
                  </span>
                ))}
              </div>

              {/* Scrollable list */}
              <div className="space-y-1 overflow-y-auto max-h-[155px] pr-1">
                {[
                  { name: "The Willow Cottage", rent: "$2,400", street: "122 Floral Lane, Austin", spec: "3 BD / 2 BA", status: "Occupied", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=250" },
                  { name: "Maple Heights Apt 4B", rent: "$1,850", street: "890 Maple St, Seattle", spec: "1 BD / 1 BA", status: "Vacant", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=250" },
                  { name: "Sage Garden Loft", rent: "$3,100", street: "45 Garden Blvd, Portland", spec: "2 BD / 2 BA", status: "Maintenance", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=250" },
                  { name: "Riverbend Duplex", rent: "$2,200", street: "12 River Rd, Asheville", spec: "2 BD / 1 BA", status: "Occupied", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=250" }
                ].map((item, index) => (
                  <div key={index} className="bg-white border border-[#eae4d8] rounded-lg overflow-hidden shadow-xxs flex flex-col justify-between">
                    <div className="relative h-10 w-full">
                      <img src={item.img} alt={item.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      <span className={`absolute top-1 right-1 px-1 py-0.2 rounded-full text-[5px] font-bold shadow-xs ${item.status === "Occupied" ? "bg-[#e2f5f0] text-[#0f8b70]" : item.status === "Vacant" ? "bg-amber-100 text-amber-800" : "bg-rose-100 text-rose-700"}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="p-1.5">
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-bold text-[7.5px] text-[#2d2a26] truncate max-w-[65%]">{item.name}</h4>
                        <span className="font-mono text-[7.5px] font-black text-[#849a83]">{item.rent}</span>
                      </div>
                      <p className="text-[5.5px] text-gray-500 truncate mt-0.2">📍 {item.street}</p>
                      <div className="flex justify-between items-center mt-1 pt-1 border-t border-[#f2ece5]">
                        <span className="text-[5.5px] text-[#849a83] font-mono leading-none">{item.spec}</span>
                        <button className="bg-[#fcfbf9] border border-[#eae4d8] text-gray-700 text-[5px] font-bold py-0.2 px-1 rounded transition-colors cursor-pointer leading-none">
                          Manage
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-1"></div>
          </div>
        );

      case "details":
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-1.5 overflow-y-auto max-h-[295px] pr-1">
              <div className="flex justify-between items-center pb-1 border-b border-[#eae4d8]">
                <div className="flex items-center gap-[2px]">
                  <span className="font-bold text-[7.5px] text-[#2d2a26]">Property Details</span>
                </div>
                <span className="bg-[#e4ebd3] text-[#4f6450] text-[5.5px] px-1 py-0.2 rounded font-mono font-bold leading-none">OCCUPIED</span>
              </div>

              {/* Main view */}
              <div className="relative h-14 w-full rounded-lg overflow-hidden border border-[#eae4d8]">
                <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=350" alt="Symmetric art" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-1.5">
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-[8px] leading-tight truncate">The Willow Cottage</h3>
                    <p className="text-gray-300 text-[5px] truncate mt-0.2">122 Floral Lane, Austin, TX 78701</p>
                  </div>
                </div>
              </div>

              {/* Detail fields grid */}
              <div className="grid grid-cols-2 gap-1">
                {[
                  { label: "Monthly Rent", val: "$2,400.00" },
                  { label: "Security Deposit", val: "$2,400.00" },
                  { label: "Beds / Baths", val: "3 BD / 2 BA" },
                  { label: "Sq Footage", val: "1,850 sqft" }
                ].map((f, i) => (
                  <div key={i} className="bg-white border border-[#eae4d8] p-1 rounded-lg">
                    <span className="text-[5px] text-gray-400 font-mono uppercase block">{f.label}</span>
                    <span className="font-extrabold text-[7px] text-[#2d2a26] leading-none mt-0.5 block">{f.val}</span>
                  </div>
                ))}
              </div>

              {/* Tenant Row */}
              <div className="bg-[#fcfaf5] border border-[#eae4d8] p-1.5 rounded-lg">
                <span className="text-[5.5px] font-mono text-gray-400 block uppercase mb-1 leading-none font-bold">Current Tenant</span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <div className="w-5 h-5 rounded-full bg-[#849a83] text-white flex items-center justify-center font-bold text-[7px] shrink-0">
                      AR
                    </div>
                    <div className="min-w-0">
                      <h5 className="font-bold text-[7.5px] text-gray-800 leading-none truncate">Alice Richardson</h5>
                      <span className="text-[5px] text-gray-400 block mt-0.5 font-mono">Expires Oct 2024</span>
                    </div>
                  </div>
                  <div className="flex gap-[2px] shrink-0">
                    <span className="w-4 h-4 rounded-full bg-white border border-[#eae4d8] flex items-center justify-center text-[6px] shadow-xxs">📞</span>
                    <span className="w-4 h-4 rounded-full bg-white border border-[#eae4d8] flex items-center justify-center text-[6px] shadow-xxs">💬</span>
                  </div>
                </div>
              </div>

              {/* Documents locker */}
              <div className="space-y-1">
                <span className="text-[5.5px] font-mono text-gray-400 uppercase font-bold block">Documents</span>
                {[
                  { name: "Standard_Lease_Agreement.pdf", date: "Jan 15, 2023" },
                  { name: "Pet_Addendum.pdf", date: "Jan 15, 2023" }
                ].map((doc, idx) => (
                  <div key={idx} className="bg-white border border-[#eae4d8] p-1 rounded flex justify-between items-center text-[6.5px]">
                    <span className="truncate max-w-[70%] font-bold text-gray-700">{doc.name}</span>
                    <span className="text-[5.5px] text-[#849a83] font-bold">📥 Download</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions BAR */}
            <div className="grid grid-cols-2 gap-1.5 pt-1.5 mt-1 border-t border-[#eae4d8]">
              <button className="bg-white text-gray-700 border border-[#eae4d8] font-bold py-1 rounded text-[7px] text-center cursor-pointer shadow-xxs">
                Log Request
              </button>
              <button className="bg-[#849a83] text-white font-bold py-1 rounded text-[7px] text-center cursor-pointer shadow-xxs">
                Track Payment
              </button>
            </div>
          </div>
        );

      case "add":
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-2 overflow-y-auto max-h-[295px] pr-1">
              <span className="font-bold text-[7.5px] text-gray-800 block">Add New Property</span>

              {/* Property Photos section */}
              <div className="space-y-1">
                <div className="bg-[#f3ece3]/50 border border-dashed border-[#dfd9cd] rounded-lg p-2.5 text-center cursor-pointer flex flex-col items-center justify-center">
                  <span className="text-[9px] mb-0.5">📷</span>
                  <span className="text-[7px] font-semibold text-gray-700 block leading-none">Add Photos</span>
                  <span className="text-[5px] text-gray-400 block mt-0.2">Up to 10 images</span>
                </div>
              </div>

              {/* Basic Details */}
              <div className="space-y-1">
                <span className="text-[6.5px] font-bold text-[#2d2a26] block leading-none">Basic Details</span>
                <input type="text" placeholder="e.g. The Willow Cottage" className="w-full pl-2 pr-1 py-1 text-[7px] border border-[#dfd9cd] rounded bg-[#faf8f5]/50 leading-none" readOnly />
                <input type="text" placeholder="123 Harmony Way" className="w-full pl-2 pr-1 py-1 text-[7px] border border-[#dfd9cd] rounded bg-[#faf8f5]/50 leading-none" readOnly />
                <div className="grid grid-cols-2 gap-1.5">
                  <input type="text" placeholder="Austin" className="w-full px-2 py-1 text-[7px] border border-[#dfd9cd] rounded bg-[#faf8f5]/50 leading-none" readOnly />
                  <input type="text" placeholder="78701" className="w-full px-2 py-1 text-[7px] border border-[#dfd9cd] rounded bg-[#faf8f5]/50 leading-none" readOnly />
                </div>
              </div>

              {/* Configuration */}
              <div className="space-y-1">
                <span className="text-[6.5px] font-bold text-[#2d2a26] block leading-none">Rooms & Amenities</span>
                <div className="grid grid-cols-2 gap-1.5">
                  <input type="text" placeholder="3 Bedrooms" className="w-full px-2 py-1 text-[7px] border border-[#dfd9cd] rounded bg-[#faf8f5]/50 leading-none" readOnly />
                  <input type="text" placeholder="2 Bathrooms" className="w-full px-2 py-1 text-[7px] border border-[#dfd9cd] rounded bg-[#faf8f5]/50 leading-none" readOnly />
                </div>
                <div className="flex gap-1 overflow-x-auto max-w-full leading-none">
                  {["✓ Single Family", "Apartment", "Condo", "Loft"].map((type, i) => (
                    <span key={i} className={`px-1 rounded-full text-[5.5px] shrink-0 border border-[#dfd9cd] ${i === 0 ? "bg-[#849a83] text-white border-[#849a83] font-bold" : "bg-white text-gray-500"}`}>
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing & Terms */}
              <div className="space-y-1">
                <span className="text-[6.5px] font-bold text-[#2d2a26] block leading-none">Pricing & Terms</span>
                <input type="text" placeholder="Monthly Rent: $0.00" className="w-full pl-2 pr-1 py-1 text-[7px] border border-[#dfd9cd] rounded bg-[#faf8f5]/50 leading-none" readOnly />
                <div className="bg-white border border-[#eae4d8] rounded p-1 flex items-center justify-between">
                  <span className="text-[6.5px] text-gray-600 leading-none">Utilities Included</span>
                  <div className="w-4 h-2 rounded-full bg-[#dfd9cd] p-0.2 flex justify-start items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xxs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-1.5 mt-1 border-t border-[#eae4d8]">
              <button className="bg-[#849a83] text-white font-bold py-1 rounded text-[7.5px] text-center w-full shadow-xs">
                Create Property
              </button>
            </div>
          </div>
        );

      case "maintenance":
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-1.5 font-sans">
              <div className="flex justify-between items-center pb-1 border-b border-[#eae4d8]">
                <div>
                  <span className="text-[6.5px] uppercase font-mono text-[#849a83] block leading-none">PMS Systems</span>
                  <h3 className="font-display font-extrabold text-[#2d2a26] text-xs mt-0.5 leading-none">Maintenance</h3>
                </div>
                <span className="text-[8px]">🔔</span>
              </div>

              {/* Summary stats */}
              <div className="grid grid-cols-3 gap-1 text-center">
                <div className="bg-[#f0ece3] border border-[#849a83]/30 rounded p-0.5">
                  <span className="text-xxs font-black text-gray-800 leading-none block">08</span>
                  <span className="text-[4.5px] text-gray-500 block leading-none mt-0.5">Pending</span>
                </div>
                <div className="bg-[#fcfaf5] border border-neutral-200 rounded p-0.5">
                  <span className="text-xxs font-black text-gray-600 leading-none block">03</span>
                  <span className="text-[4.5px] text-gray-500 block leading-none mt-0.5">In Progress</span>
                </div>
                <div className="bg-[#fdf3f0] border border-rose-100 rounded p-0.5">
                  <span className="text-xxs font-black text-rose-700 leading-none block">02</span>
                  <span className="text-[4.5px] text-rose-500 block leading-none mt-0.5">Urgent</span>
                </div>
              </div>

              {/* Tickets List */}
              <div className="space-y-1 overflow-y-auto max-h-[165px] pr-1">
                {[
                  { title: "Leaking Kitchen Faucet", when: "2h ago", loc: "Willow Cottage A", prio: "High" },
                  { title: "AC Unit Not Cooling", when: "Yesterday", loc: "Maple Heights 4B", prio: "Medium" },
                  { title: "Loose Balcony Railing", when: "2 days ago", loc: "Sage Garden Loft", prio: "Low" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-[#eae4d8] rounded p-1 flex justify-between items-center text-[7.5px] hover:bg-neutral-50 cursor-pointer">
                    <div className="min-w-0 pr-1">
                      <h4 className="font-bold text-[#2d2a26] leading-none truncate">{item.title}</h4>
                      <p className="text-[5.5px] text-gray-400 mt-0.5 truncate leading-none">{item.loc} • {item.when}</p>
                    </div>
                    <span className={`text-[4.5px] px-1 py-0.2 rounded font-mono font-bold leading-none shrink-0 ${item.prio === "High" ? "bg-rose-100 text-rose-700" : item.prio === "Medium" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-600"}`}>
                      {item.prio}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-1.5 mt-1 border-t border-[#eae4d8]">
              <button className="bg-[#849a83] text-white font-bold py-1 rounded text-[7.5px] text-center w-full shadow-xs">
                + New Ticket
              </button>
            </div>
          </div>
        );

      case "payments":
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-1.5 font-sans">
              <div className="flex justify-between items-center pb-1 border-b border-[#eae4d8]">
                <h3 className="font-display font-extrabold text-[#2d2a26] text-xxs mt-0.5">Payments Log</h3>
                <span className="text-[5px] font-mono text-[#849a83] bg-[#849a83]/15 px-1 py-0.2 rounded font-bold">Oct 2023</span>
              </div>

              {/* Circular Overview Card */}
              <div className="bg-[#f0ece3] rounded p-1.5 flex items-center justify-between border border-[#eae4d8]">
                <div className="leading-tight">
                  <span className="text-[5px] text-gray-400 block uppercase font-mono">Collected</span>
                  <span className="text-[8px] font-extrabold text-[#2d2a26]">$24,200</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white border border-[#eae4d8] flex items-center justify-center text-[5.5px] text-[#4f6450] font-black">
                  82%
                </div>
              </div>

              {/* Transactions Ledger */}
              <div className="space-y-1">
                <span className="text-[5px] font-mono text-[9px] text-gray-400 uppercase font-bold block">Recent ledger</span>
                <div className="space-y-1 overflow-y-auto max-h-[145px] pr-1">
                  {[
                    { who: "Alice Henderson", rent: "+$2,400", loc: "Willow Cottage" },
                    { who: "Marcus Thorne", rent: "+$1,850", loc: "Maple Heights 4B" },
                    { who: "Elena Rodriguez", rent: "Pending", loc: "Riverbend Duplex" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-1 rounded border border-[#f0ece3] bg-white text-[7px] hover:bg-neutral-50">
                      <div className="min-w-0 pr-1">
                        <span className="font-bold text-gray-800 block truncate leading-none">{item.who}</span>
                        <span className="text-[5px] text-gray-400 block truncate mt-0.5">{item.loc}</span>
                      </div>
                      <span className="font-bold text-gray-800 shrink-0 font-mono">{item.rent}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-1.5 mt-1 border-t border-[#eae4d8]">
              <button className="bg-[#849a83] text-white font-bold py-1 rounded text-[7.5px] text-center w-full shadow-xs">
                Log Payment
              </button>
            </div>
          </div>
        );

      case "messages":
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center pb-1 border-b border-[#eae4d8]">
                <h3 className="font-display font-extrabold text-[#2d2a26] text-xxs mt-0.5">Active Logs</h3>
                <span className="text-[8px] shrink-0">💬</span>
              </div>

              {/* Conversation list */}
              <div className="space-y-1 overflow-y-auto max-h-[195px] pr-1">
                {[
                  { name: "Sarah Jenkins", text: "The sink is leaking...", when: "2m ago", active: true },
                  { name: "Marcus Thorne", text: "Rent payment sent!", when: "1h ago" },
                  { name: "Elena Rodriguez", text: "Can we schedule a check...", when: "4h ago" }
                ].map((th, idx) => (
                  <div key={idx} className={`flex justify-between items-center p-1 rounded-lg ${th.active ? "bg-[#f0ece3]" : "hover:bg-neutral-50"} cursor-pointer`}>
                    <div className="min-w-0 pr-1">
                      <span className="font-bold text-[7.5px] text-gray-700 leading-none block truncate">{th.name}</span>
                      <span className="text-[5.5px] text-gray-400 block truncate mt-0.5">{th.text}</span>
                    </div>
                    <span className="text-[5px] text-gray-400 font-mono shrink-0">{th.when}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* blank bottom */}
            <div className="h-1"></div>
          </div>
        );

      case "settings":
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-1.5 overflow-y-auto max-h-[295px] pr-1">
              <div className="flex justify-between items-center pb-1 border-b border-[#eae4d8]">
                <span className="text-[7.5px] font-extrabold text-gray-700 block">Personal Profile</span>
                <span className="text-[9px]">👤</span>
              </div>

              <div className="space-y-1 text-gray-700">
                {[
                  { label: "Personal Information", desc: "Update email/phone" },
                  { label: "Lease Documents", desc: "Signed contract agreements" }
                ].map((act, i) => (
                  <div key={i} className="bg-white border border-[#eae4d8] p-1.5 rounded flex justify-between items-center hover:bg-neutral-50 cursor-pointer">
                    <div>
                      <span className="font-bold text-[7.5px] block leading-none">{act.label}</span>
                      <span className="text-[5px] text-[#849a83] block leading-none mt-0.5">{act.desc}</span>
                    </div>
                    <span className="text-gray-400 text-[6px]">›</span>
                  </div>
                ))}
              </div>

              {/* bank details */}
              <div className="bg-white border border-[#eae4d8] p-1.5 rounded">
                <span className="text-[4.5px] font-mono text-gray-400 block uppercase leading-none font-bold">Primary Account</span>
                <div className="flex justify-between items-center mt-1">
                  <span className="font-bold text-[7.5px] text-gray-800 leading-none block">Willow Creek Bank</span>
                  <span className="text-[#849a83] text-[5px] font-mono font-extrabold pb-0.5 font-bold border-b border-dashed border-[#849a83]">VERIFIED</span>
                </div>
              </div>
            </div>

            <div className="pt-1.5 mt-1 border-t border-[#eae4d8]">
              <button className="bg-[#f0ece3] text-rose-800 font-extrabold py-1 rounded text-center text-[7.5px] cursor-pointer w-full shadow-xxs">
                Sign Out
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderReelDineScreenContent = (screenName: string) => {
    switch (screenName) {
      case "feed":
        return (
          <div className="relative w-full h-full bg-black text-white overflow-hidden rounded-xl flex flex-col justify-between p-3" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/75 z-0" />

            {/* Top Bar Navigation */}
            <div className="relative z-10 flex justify-between items-center text-[8.5px]">
              <div className="flex items-center gap-1">
                <span className="bg-[#FF0055] text-white font-extrabold text-[5px] px-1 py-0.2 rounded leading-none uppercase tracking-wide">LIVE</span>
                <span className="text-gray-300 hover:text-white font-semibold cursor-pointer">Following</span>
              </div>
              <div className="border-b-2 border-blue-500 pb-0.5 font-bold tracking-wide">For You</div>
              <span className="text-white text-[10px] cursor-pointer">🔍</span>
            </div>

            {/* Middle Controls & Sidebar Overlay */}
            <div className="relative z-10 flex h-[75%] items-end justify-between">
              {/* Bottom Caption Info */}
              <div className="max-w-[70%] text-left space-y-1 select-none">
                <div className="bg-[#FFCC00] text-black font-extrabold text-[6.5px] py-1 px-1.5 rounded-full inline-flex items-center gap-1">
                  <span>🍴</span> Najd Village · Riyadh
                </div>
                <h4 className="font-bold text-[10px] text-white leading-none">@saudi_foodie</h4>
                <p className="text-[7px] text-gray-200 leading-tight">
                  The best Mandi in the city! The meat literally falls off the bone. 🇸🇦 #SavorSaudi #RiyadhFood
                </p>
                <div className="flex items-center gap-1.5 py-0.5">
                  <span className="bg-blue-600/80 text-[6px] text-white font-bold px-1.5 py-0.2 rounded-full">⭐ 4.9</span>
                  <span className="text-[6px] text-gray-300 truncate tracking-tight">🎵 Original Audio - Traditional Oud Beats</span>
                </div>
              </div>

              {/* Right Side Social Sidebar */}
              <div className="flex flex-col items-center gap-3 select-none pb-2">
                {/* Profile Circle */}
                <div className="relative border border-blue-500 rounded-full p-[1px]">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="avatar" className="w-5.5 h-5.5 rounded-full object-cover" />
                  <span className="absolute -bottom-1 left-2 bg-blue-500 text-white font-black text-[5px] rounded-full w-2.5 h-2.5 flex items-center justify-center">+</span>
                </div>

                {/* Heart */}
                <div className="flex flex-col items-center cursor-pointer">
                  <span className="text-pink-500 text-sm">❤️</span>
                  <span className="text-[6px] font-mono font-bold mt-0.2">42.8k</span>
                </div>

                {/* Comment */}
                <div className="flex flex-col items-center cursor-pointer">
                  <span className="text-white text-sm">💬</span>
                  <span className="text-[6px] font-mono font-bold mt-0.2">1,204</span>
                </div>

                {/* Share */}
                <div className="flex flex-col items-center cursor-pointer">
                  <span className="text-white text-sm">↩️</span>
                  <span className="text-[5.5px] font-mono font-bold mt-0.2 uppercase text-gray-300">Share</span>
                </div>

                {/* Bookmark */}
                <div className="flex flex-col items-center cursor-pointer">
                  <span className="text-yellow-400 text-sm">🏷️</span>
                  <span className="text-[5.5px] font-bold tracking-tight text-yellow-400 mt-0.2">Save</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="flex flex-col h-full justify-between bg-[#f8f9fa] text-gray-800 p-2 font-sans select-none">
            <div>
              <div className="flex justify-between items-center border-b pb-1.5 mb-2">
                <h3 className="font-display font-black text-[#1a1a1a] text-sm tracking-tight">Activity</h3>
                <span className="bg-blue-100 text-blue-600 font-bold text-[6px] uppercase px-1.5 py-0.5 rounded-full flex items-center gap-0.5 cursor-pointer">
                  All <span className="text-[5px]">▼</span>
                </span>
              </div>

              {/* Group New Label */}
              <span className="text-[6px] font-bold text-blue-500 uppercase tracking-widest block mb-2">New</span>

              {/* Notifications Flow list */}
              <div className="space-y-1.5 overflow-y-auto max-h-[175px] pr-1">
                {/* Ahmed Likes */}
                <div className="bg-white border border-gray-150 p-1.5 rounded-xl flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="relative">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" alt="Ahmed" className="w-6 h-6 rounded-full object-cover" />
                      <span className="absolute -bottom-1 -right-1 bg-pink-100 text-[#ff0055] text-[6px] p-0.2 rounded-full border border-white">❤️</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[7px] text-gray-700 leading-tight">
                        <span className="font-extrabold text-black">Ahmed_Eats</span> liked your review of Al-Baik.
                      </p>
                      <span className="text-[5.5px] text-gray-400 font-mono">2m ago</span>
                    </div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=100" className="w-5.5 h-5.5 rounded-md object-cover border" alt="Dish thumbnail" />
                </div>

                {/* Sara Follows */}
                <div className="bg-white border border-gray-150 p-1.5 rounded-xl flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="relative">
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" alt="Sara" className="w-6 h-6 rounded-full object-cover" />
                      <span className="absolute -bottom-1 -right-1 bg-blue-100 text-blue-600 text-[6px] p-0.2 rounded-full border border-white">👤</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[7px] text-gray-700 leading-tight">
                        <span className="font-extrabold text-black">Sara.Foodie</span> started following you.
                      </p>
                      <span className="text-[5.5px] text-gray-400 font-mono">15m ago</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white font-extrabold text-[5.5px] px-1.5 py-0.5 rounded-full shrink-0">Follow</button>
                </div>

                {/* Earlier Category Label */}
                <span className="text-[6px] font-bold text-gray-400 uppercase tracking-widest block py-1">Earlier</span>

                {/* Najd Village Posted */}
                <div className="bg-white border border-gray-150 p-1.5 rounded-xl flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="relative">
                      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=150" alt="Najd Village" className="w-6 h-6 rounded-full object-cover" />
                      <span className="absolute -bottom-1 -right-1 bg-yellow-100 text-yellow-600 text-[6px] p-0.2 rounded-full border border-white">🍴</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[7px] text-gray-700 leading-tight">
                        <span className="font-extrabold text-black">Najd Village</span> posted a new Reel near you.
                      </p>
                      <span className="text-[5.5px] text-gray-400 font-mono">2h ago</span>
                    </div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=100" className="w-5.5 h-5.5 rounded-md object-cover border" alt="Dish thumbnail" />
                </div>

                {/* Khalid Comment */}
                <div className="bg-white border border-gray-150 p-1.5 rounded-xl flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="relative">
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" alt="Khalid" className="w-6 h-6 rounded-full object-cover" />
                      <span className="absolute -bottom-1 -right-1 bg-emerald-100 text-emerald-600 text-[6px] p-0.2 rounded-full border border-white">💬</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[7px] text-gray-700 leading-tight">
                        <span className="font-extrabold text-black">Khalid_Vlogs</span> commented: "That Mandi meat is insane!..."
                      </p>
                      <span className="text-[5.5px] text-gray-400 font-mono">5h ago</span>
                    </div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=100" className="w-5.5 h-5.5 rounded-md object-cover border" alt="Dish" />
                </div>
              </div>
            </div>
            {/* Promo Banner bottom */}
            <div className="bg-[#0055FF] text-white rounded-lg p-1 flex items-center justify-between text-[6.5px] mt-1 shrink-0">
              <span>🚀 Creators, claim up to 15% cashbacks!</span>
              <span className="bg-white text-blue-600 font-black px-1 rounded-full text-[5.5px] leading-none py-0.5 whitespace-nowrap">Details</span>
            </div>
          </div>
        );

      case "onboarding":
        return (
          <div className="relative w-full h-full text-white bg-black rounded-xl overflow-hidden flex flex-col justify-between p-3" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=500')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* artistic noise halftone-like overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-pink-900/50 to-black/95 z-0" />
            
            {/* Top Close icon */}
            <div className="relative z-10 flex justify-end">
              <span className="text-[9px] text-gray-400 hover:text-white cursor-pointer select-none font-bold">✕</span>
            </div>

            {/* Logo, Title */}
            <div className="relative z-10 flex flex-col items-center text-center -mt-1.5">
              <div className="w-9 h-9 rounded-2xl bg-[#FFCC00] text-black flex items-center justify-center font-black text-lg mb-1.5 shadow-lg border border-white">
                🍴
              </div>
              <h2 className="font-display font-black text-lg tracking-tight leading-none text-white">Savor Saudi</h2>
              <span className="font-display font-semibold text-xs tracking-tight leading-none text-pink-500 mt-1">ReelDine</span>
              <p className="text-[6.5px] text-gray-300 max-w-[85%] mt-1.5 leading-relaxed font-light">
                The Kingdom's leading short-video culinary discovery map community.
              </p>
            </div>

            {/* Feature lists */}
            <div className="relative z-10 space-y-1.5 px-1 max-w-[85%] mx-auto">
              {[
                { icon: "📹", title: "Live Review Reels", desc: "Short video guides filmed from inside dynamic kitchens" },
                { icon: "🔥", title: "Trending Flavors", desc: "Instantly see local, unfiltered eating reviews daily" },
                { icon: "⭐", title: "Authentic Ratings", desc: "100% verified crowd-sourced taste feedback logs" }
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-1.5 select-none">
                  <span className="text-xs shrink-0">{feat.icon}</span>
                  <div className="leading-tight">
                    <h4 className="font-extrabold text-[7.5px] text-white">{feat.title}</h4>
                    <p className="text-[5.5px] text-gray-350 mt-0.1 leading-none">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 space-y-1 pt-1.5">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-1 w-full rounded-lg text-[8px] cursor-pointer shadow-md tracking-wider">
                Join the Community
              </button>
              <div className="grid grid-cols-2 gap-1.5">
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-0.8 rounded text-[6.5px] text-center cursor-pointer">
                  🍏 Apple ID
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-0.8 rounded text-[6.5px] text-center cursor-pointer">
                  🌐 Google Auth
                </button>
              </div>
              <p className="text-center text-[5.5px] text-gray-400 pt-0.5">
                Already a foodie? <span className="text-blue-400 font-bold hover:underline cursor-pointer">Sign In</span>
              </p>
            </div>
          </div>
        );

      case "details":
        return (
          <div className="flex flex-col h-full justify-between bg-white text-gray-800 p-2 font-sans select-none">
            <div className="space-y-1.5 overflow-y-auto max-h-[295px] pr-1">
              {/* Back & Share header */}
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-500 font-bold text-[7.5px] cursor-pointer hover:text-black">◀ Back</span>
                <div className="flex gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-[6px] cursor-pointer">❤️</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-[6px] cursor-pointer">📤</span>
                </div>
              </div>

              {/* Main Banner Photo */}
              <div className="relative h-14 w-full rounded-lg overflow-hidden border">
                <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=500" alt="Restaurant Interior" className="w-full h-full object-cover" />
                <span className="absolute top-1 right-2 bg-emerald-500 text-white font-extrabold text-[4.5px] px-1 py-0.1 rounded leading-none uppercase">Open Now</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-1">
                  <div className="min-w-0">
                    <h3 className="text-white font-black text-[9px] leading-tight">Al-Najd Village</h3>
                    <p className="text-gray-300 text-[5.5px] leading-none mt-0.5">⭐ 4.9 (2.4k reviews) • Traditional • $$$</p>
                  </div>
                </div>
              </div>

              {/* Horizontal Scrollable Review Reels */}
              <div className="space-y-0.5">
                <div className="flex justify-between items-baseline py-0.5">
                  <span className="font-extrabold text-[7.5px] text-gray-800 block">Review Reels</span>
                  <span className="text-[5.5px] text-blue-500 hover:underline cursor-pointer block font-bold">View All</span>
                </div>
                
                <div className="flex gap-1 overflow-x-auto pb-0.5 max-w-full no-scrollbar">
                  {[
                    { count: "12.4k", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=150" },
                    { count: "8.2k", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=150" },
                    { count: "15.9k", img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=150" }
                  ].map((item, index) => (
                    <div key={index} className="relative w-10 h-12 rounded-md overflow-hidden border bg-black flex-shrink-0 cursor-pointer">
                      <img src={item.img} className="w-full h-full object-cover opacity-85" alt="Reel thumbnail" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-0.5">
                        <span className="text-[5px] text-white font-mono leading-none">▶ {item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & Map Section */}
              <div className="space-y-0.5">
                <span className="font-extrabold text-[7.5px] text-gray-800 block">Location & Hours</span>
                <div className="relative h-12 w-full rounded-lg overflow-hidden border">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=150" alt="Map mockup" className="w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-blue-600 text-white font-extrabold text-[6px] px-2 py-0.5 rounded-full shadow-lg h-4 flex items-center justify-center gap-0.5 cursor-pointer">
                      🗺️ Get Directions
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[5.5px] text-gray-500 pt-0.5 px-0.5">
                  <span>📍 King Fahd Rd, Riyadh</span>
                  <span className="font-bold text-gray-700">1.2 km away</span>
                </div>
              </div>

              {/* Menu Highlights */}
              <div className="space-y-0.5">
                <div className="flex justify-between items-baseline py-0.5">
                  <span className="font-extrabold text-[7.5px] text-gray-800 block">Menu Highlights</span>
                  <span className="text-[5.5px] text-blue-500 hover:underline cursor-pointer block font-bold">Full Menu</span>
                </div>
                
                <div className="bg-[#fcfaf5] border border-orange-100 rounded-lg p-1 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=100" className="w-5 h-5 rounded-md object-cover border border-orange-200 shrink-0" alt="Kabsa" />
                    <div className="min-w-0">
                      <h5 className="font-extrabold text-[7px] text-gray-800 leading-none truncate">Najd Style Kabsa</h5>
                      <span className="text-[5.5px] text-orange-600 block mt-0.5 font-bold font-mono">SAR 85</span>
                    </div>
                  </div>
                  <span className="w-3.5 h-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[7px] rounded-full flex items-center justify-center cursor-pointer shadow">
                    +
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions banner */}
            <div className="grid grid-cols-2 gap-1 pb-0.5 border-t mt-1 shrink-0">
              <button className="bg-neutral-100 hover:bg-neutral-200 font-extrabold py-1 rounded-lg text-[6.5px] text-center cursor-pointer text-gray-600 leading-none">
                Write Review
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-1 rounded-lg text-[6.5px] text-center cursor-pointer shadow-sm leading-none">
                Reserve Table
              </button>
            </div>
          </div>
        );

      case "map":
        return (
          <div className="relative w-full h-full bg-neutral-150 rounded-xl overflow-hidden flex flex-col justify-between" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=600')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            {/* Top Search & Filter Floating Overlay */}
            <div className="relative z-10 p-2 space-y-1">
              {/* Floating search line */}
              <div className="flex gap-1 items-center">
                <div className="bg-white rounded-lg px-1.5 py-1 border shadow-md flex items-center gap-1 w-full">
                  <span className="text-[7px] text-gray-400">🔍</span>
                  <input type="text" placeholder="Search 'Al Tahlia Street'..." className="text-[6.5px] bg-transparent border-none outline-none text-gray-850 w-full placeholder-gray-400" readOnly />
                </div>
                <button className="bg-blue-600 text-white w-5 h-5 rounded-lg shadow-md flex items-center justify-center text-[10px] shrink-0 hover:bg-blue-700 cursor-pointer">
                  🛎️
                </button>
              </div>

              {/* Floating scrollable filter rows */}
              <div className="flex gap-1 overflow-x-auto pb-0.5 no-scrollbar">
                {[
                  { text: "Trending", active: true },
                  { text: "Kabsa", active: false },
                  { text: "Coffee", active: false },
                  { text: "Fine Dining", active: false }
                ].map((pill, idx) => (
                  <span
                    key={idx}
                    className={`px-1.5 py-0.5 rounded-full text-[5.5px] shrink-0 font-bold border shadow-xs select-none cursor-pointer tracking-tight leading-none ${
                      pill.active
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-500 border-gray-200"
                    }`}
                  >
                    {pill.active ? "✓ " : ""} {pill.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle Pin Avatar Indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative -mt-4 flex flex-col items-center">
                {/* Floating marker flag */}
                <div className="bg-white border-2 border-blue-600 p-0.5 rounded-full shadow-lg relative flex items-center gap-0.5">
                  <img src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&q=80&w=100" className="w-5 h-5 rounded-full object-cover" alt="chef marker" />
                  <span className="bg-[#FFCC00] text-black font-extrabold text-[4.5px] px-0.8 py-0.1 rounded leading-none">★ 4.5</span>
                </div>
                {/* Pin pointer stem */}
                <div className="w-1 h-1.5 bg-blue-600 -mt-0.5" />
              </div>
            </div>

            {/* Bottom floating card popup */}
            <div className="relative z-10 p-2">
              <div className="bg-white border rounded-xl p-1.5 flex items-center gap-1.5 relative">
                {/* Visual Thumbnail */}
                <div className="relative w-12 h-12 rounded-lg overflow-hidden border bg-black shrink-0">
                  <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover opacity-85" alt="Grill" />
                  <span className="absolute top-0.5 left-0.5 bg-[#FF0055] text-white font-extrabold text-[4px] px-1 py-0.2 rounded-full leading-none scale-90">LIVE</span>
                </div>

                {/* Details layout */}
                <div className="min-w-0 flex-1 leading-none select-none">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-[8px] text-[#1a1a1a] truncate leading-none">Najd Village</h4>
                    <span className="text-[8px] text-blue-600 cursor-pointer">🧭</span>
                  </div>
                  <p className="text-gray-400 text-[5px] font-bold font-mono mt-0.5">⭐ 4.9 (1.2k reviews)</p>
                  <p className="text-gray-500 text-[5px] truncate mt-0.5">Traditional Saudi • 0.8km</p>
                  <div className="flex gap-1 mt-0.5">
                    <span className="bg-blue-50 text-blue-600 text-[4px] font-bold py-0.2 px-0.8 rounded-full">Authentic</span>
                    <span className="bg-purple-50 text-purple-600 text-[4px] font-bold py-0.2 px-0.8 rounded-full">Family</span>
                  </div>
                </div>
              </div>

              {/* Action row button */}
              <div className="grid grid-cols-5 gap-1 mt-1 shrink-0">
                <button className="col-span-4 bg-blue-600 text-white font-black py-1 rounded-lg text-[6.5px] text-center shadow-lg hover:bg-blue-700 flex items-center justify-center gap-0.5 cursor-pointer leading-none">
                  <span>▶</span> Watch Reels
                </button>
                <button className="bg-neutral-100 border text-gray-550 rounded-lg py-1 shadow-sm flex items-center justify-center text-[7px] hover:bg-white cursor-pointer select-none leading-none">
                  📍
                </button>
              </div>
            </div>
          </div>
        );

      case "explore":
        return (
          <div className="flex flex-col h-full bg-[#fcfcfc] text-gray-800 p-2 font-sans select-none justify-between">
            <div className="space-y-1 overflow-y-auto max-h-[300px] pr-1">
              <h3 className="font-display font-black text-[#1d1d1d] text-xs tracking-tight">Explore Savor</h3>
              
              {/* Search input line */}
              <div className="bg-neutral-100 rounded-lg px-2 py-0.8 border border-neutral-150 flex items-center gap-1">
                <span className="text-[7px] text-gray-400">🔍</span>
                <input type="text" placeholder="Find Kabsa, Mandi, or Cafes..." className="text-[6.5px] bg-transparent border-none outline-none text-gray-800 w-full placeholder-gray-400" readOnly />
              </div>

              {/* Section row headings */}
              <div className="flex justify-between items-baseline pt-0.5">
                <span className="font-extrabold text-[7.5px] text-gray-800">Trending in Riyadh</span>
                <span className="text-[5.5px] text-blue-500 hover:underline cursor-pointer font-bold select-none">See All</span>
              </div>

              {/* Categorization chips */}
              <div className="flex gap-1 overflow-x-auto pb-0.5 max-w-full leading-none no-scrollbar">
                {[
                  { text: "Best Kabsa", active: true },
                  { text: "New Openings", active: false },
                  { text: "Traditional", active: false }
                ].map((chip, idx) => (
                  <span
                    key={idx}
                    className={`px-1.5 py-0.5 rounded-full text-[5.5px] shrink-0 font-bold border cursor-pointer ${
                      chip.active
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-500 border-neutral-155"
                    }`}
                  >
                    {chip.active ? "🔥 " : ""} {chip.text}
                  </span>
                ))}
              </div>

              {/* Modern Quad Grid */}
              <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                {[
                  { title: "Authentic Najdi Village", rate: "4.9", creator: "Sarah J.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
                  { title: "Modern Twist on Jareesh", rate: "4.7", creator: "Ahmed K.", img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=200" },
                  { title: "Top Tier Al Baik Hack", rate: "4.5", creator: "Faisal M.", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=200" },
                  { title: "Hidden Gem in Diriyah", rate: "4.8", creator: "Nora A.", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=200" }
                ].map((card, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden border bg-neutral-900 h-16 cursor-pointer shadow-xxs">
                    <img src={card.img} className="w-full h-full object-cover opacity-80" alt={card.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-1 z-0">
                      <span className="bg-[#FFCC00] text-black font-extrabold text-[4px] px-0.8 py-0.1 rounded self-start">★ {card.rate}</span>
                      <div>
                        <h5 className="text-white font-extrabold text-[6.5px] leading-tight truncate">{card.title}</h5>
                        <p className="text-gray-300 text-[5px]">By {card.creator}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Blue banner bar */}
              <div className="bg-[#eef4ff] border border-blue-100 rounded-lg p-1.5 flex items-center justify-between mt-1 cursor-pointer">
                <div className="min-w-0 leading-tight">
                  <span className="font-extrabold text-[7.5px] text-blue-600 block">Ramadan Specials 🌙</span>
                  <span className="text-[5px] text-gray-500 block mt-0.5">Curated Suhoor spots in Riyadh</span>
                </div>
                <span className="text-blue-600 text-[8px]">›</span>
              </div>
            </div>
            <div className="h-1 shrink-0"></div>
          </div>
        );

      case "settings":
        return (
          <div className="flex flex-col h-full bg-[#f8f9fa] text-gray-800 p-2 font-sans select-none justify-between">
            <div className="space-y-2 overflow-y-auto max-h-[295px] pr-1">
              {/* Settings Header */}
              <div className="flex justify-between items-center border-b pb-1">
                <div>
                  <h3 className="font-display font-black text-gray-955 text-xs tracking-tight leading-none">Settings</h3>
                  <span className="text-[5.5px] text-gray-400 block mt-0.5">Manage Savor Saudi experience / setup</span>
                </div>
                <div className="w-5 h-5 bg-blue-600 rounded-full text-white flex items-center justify-center font-extrabold text-[7.5px] border-2 border-white shadow-md">
                  AR
                </div>
              </div>

              {/* Group 1: ACCOUNT */}
              <div className="space-y-0.5">
                <span className="text-[5.5px] font-bold text-gray-400 uppercase tracking-widest block py-0.5">Account</span>
                {[
                  { name: "Personal Info", desc: "Edit your name, bio, and profile photo", icon: "👤" },
                  { name: "Security Gate", desc: "Password, 2FA, and login activity logs", icon: "🛡️" },
                  { name: "My Reviews", desc: "Manage your posted reels and saved drafts", icon: "📝" }
                ].map((act, i) => (
                  <div key={i} className="bg-white border border-neutral-150 p-1.5 rounded-lg flex justify-between items-center hover:bg-neutral-50 transition-colors cursor-pointer shadow-xxs">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-neutral-500 text-[10px] shrink-0">{act.icon}</span>
                      <div className="leading-tight">
                        <span className="font-extrabold text-[7px] text-gray-800 block">{act.name}</span>
                        <span className="text-[5px] text-gray-400 block">{act.desc}</span>
                      </div>
                    </div>
                    <span className="text-gray-400 text-[6px]">›</span>
                  </div>
                ))}
              </div>

              {/* Group 2: PREFERENCES WITH TOGGLES */}
              <div className="space-y-0.5">
                <span className="text-[5.5px] font-bold text-gray-400 uppercase tracking-widest block py-0.5">Preferences</span>
                
                {/* Push notification toggle row */}
                <div className="bg-white border border-neutral-155 p-1.5 rounded-lg flex justify-between items-center shadow-xxs">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-neutral-500 text-[10px]">🔔</span>
                    <div className="leading-tight">
                      <span className="font-extrabold text-[7px] text-gray-800 block">Push Notifications</span>
                      <span className="text-[5px] text-gray-400 block">Alerts for likes and comments</span>
                    </div>
                  </div>
                  {/* Active Toggle blue */}
                  <div className="w-5.5 h-3 bg-blue-600 rounded-full p-0.2 flex justify-end items-center cursor-pointer">
                    <span className="w-2.2 h-2.2 rounded-full bg-white shadow-sm" />
                  </div>
                </div>

                {/* HQ Video toggle row */}
                <div className="bg-white border border-neutral-155 p-1.5 rounded-lg flex justify-between items-center shadow-xxs">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-neutral-500 text-[10px]">📺</span>
                    <div className="leading-tight">
                      <span className="font-extrabold text-[7px] text-gray-800 block">High Quality Video</span>
                      <span className="text-[5px] text-gray-400 block">Always stream reels in 4K resolution</span>
                    </div>
                  </div>
                  {/* Disabled Toggle gray */}
                  <div className="w-5.5 h-3 bg-gray-200 rounded-full p-0.2 flex justify-start items-center cursor-pointer">
                    <span className="w-2.2 h-2.2 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* Logout Crimson Button block */}
            <div className="pt-1.5 border-t mt-1 shrink-0">
              <button className="bg-pink-150 hover:bg-pink-200 text-pink-700 font-extrabold py-1.5 rounded-lg text-center text-[7px] cursor-pointer w-full shadow-xxs uppercase tracking-wide">
                ↩️ Sign Out Account
              </button>
            </div>
          </div>
        );

      case "profile":
        return (
          <div className="flex flex-col h-full bg-white text-gray-800 p-2 font-sans select-none justify-between">
            <div className="space-y-1 overflow-y-auto max-h-[300px] pr-1">
              {/* Top Profile Banner header with abstract duatone */}
              <div className="relative h-14 w-full rounded-lg overflow-hidden border">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=400" alt="Duotone profile cover" className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  {/* Large Floating Avatar with initials */}
                  <div className="w-11 h-11 rounded-full bg-white border-2 border-pink-500 shadow-xl flex items-center justify-center font-extrabold text-xs text-pink-600 mt-1">
                    FA
                  </div>
                </div>
              </div>

              {/* Username text center headings */}
              <div className="text-center pt-1 leading-none select-none">
                <h3 className="font-display font-black text-[10.5px] text-gray-950">Faisal Ahmed</h3>
                <span className="text-[5.5px] font-bold text-gray-400 block mt-0.5">@faisal_eats_riyadh</span>
              </div>

              {/* Three Grid Metrics Stats Row */}
              <div className="grid grid-cols-3 gap-0.5 border-y py-1 text-center mt-1.5 select-none leading-tight">
                <div>
                  <span className="text-[8.5px] font-black text-gray-905 block font-mono">128</span>
                  <span className="text-[4.5px] text-gray-405 uppercase font-bold">Reviews</span>
                </div>
                <div className="border-x">
                  <span className="text-[8.5px] font-black text-gray-905 block font-mono">12.4k</span>
                  <span className="text-[4.5px] text-gray-450 uppercase font-bold">Followers</span>
                </div>
                <div>
                  <span className="text-[8.5px] font-black text-gray-905 block font-mono">842</span>
                  <span className="text-[4.5px] text-gray-405 uppercase font-bold">Following</span>
                </div>
              </div>

              {/* Control Buttons row side-by-side */}
              <div className="grid grid-cols-5 gap-1 pt-1 shrink-0 select-none">
                <button className="col-span-4 bg-pink-500 hover:bg-pink-600 text-white font-black py-0.8 rounded text-[7px] cursor-pointer text-center leading-none">
                  Edit Profile
                </button>
                <button className="bg-neutral-100 hover:bg-neutral-200 border rounded flex items-center justify-center text-[6px] cursor-pointer">
                  🔗
                </button>
              </div>

              {/* Reels & Saved active tabs selector bar */}
              <div className="flex border-b text-center text-[6.5px] font-extrabold select-none shrink-0 py-0.5">
                <span className="flex-1 text-pink-600 border-b-2 border-pink-500 mb-[-1px] font-black cursor-pointer pb-0.5">REELS</span>
                <span className="flex-1 text-gray-400 hover:text-gray-700 cursor-pointer pb-0.5">SAVED</span>
              </div>

              {/* 3x3 Dynamic Reels Video feed covers grid */}
              <div className="grid grid-cols-3 gap-1 pt-1 z-0">
                {[
                  { name: "Najd Village", rate: "4.9", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=150" },
                  { name: "Porterhouse", rate: "4.8", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=150" },
                  { name: "Camel Step", rate: "5.0", img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=150" },
                  { name: "Tofareel", rate: "4.7", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=150" },
                  { name: "Section-B", rate: "4.7", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=150" },
                  { name: "Golden Kunafa", rate: "4.9", img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=150" }
                ].map((re, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden border bg-neutral-950 aspect-square cursor-pointer shadow-xxs">
                    <img src={re.img} className="w-full h-full object-cover opacity-85" alt={re.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-between p-1 z-0">
                      <span className="bg-[#FFCC00] text-black font-extrabold text-[4px] px-0.8 py-0.1 rounded self-start">★ {re.rate}</span>
                      <span className="text-white font-bold text-[5.5px] leading-tight truncate">{re.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-1 shrink-0"></div>
          </div>
        );

      case "creator":
        return (
          <div className="relative w-full h-full text-white bg-black rounded-xl overflow-hidden flex flex-col justify-between p-2.5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85 z-0" />

            {/* Top View HUD controls Row */}
            <div className="relative z-10 flex justify-between items-center select-none text-[8px] leading-none">
              <span className="w-5.5 h-5.5 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 font-bold">✕</span>
              <div className="bg-black/40 text-[#FF0055] font-extrabold text-[6px] tracking-widest px-1.5 py-0.5 rounded-full border border-[#FF0055] flex items-center gap-1">
                <span className="inline-block w-1 h-1 rounded-full bg-[#FF0055] animate-pulse"></span>
                00:14
              </div>
              <span className="w-5.5 h-5.5 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 select-none">⚡</span>
            </div>

            {/* Middle Sidebar tools Stack (Right Align) */}
            <div className="relative z-10 flex h-[68%] items-end justify-between select-none">
              
              {/* Caption Draft */}
              <div className="max-w-[70%] text-left space-y-1 select-none">
                <span className="bg-[#FFCC00] text-black font-extrabold text-[5px] py-0.5 px-1.5 rounded-full inline-block leading-none">
                  ⭐️ 4.8 Rating
                </span>
                <div className="bg-black/45 border border-white/20 rounded-xl p-1 leading-snug">
                  <span className="text-[5px] text-gray-450 block uppercase font-mono font-bold leading-none mb-0.5">Caption draft</span>
                  <p className="text-[6.5px] text-white leading-tight">
                    The flavors are absolutely incredible! Best Mandi in Riyadh... #SavorSaudi
                  </p>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="flex flex-col items-center gap-2">
                {[
                  { label: "Flip", icon: "🔄" },
                  { label: "Music", icon: "🎵" },
                  { label: "Filters", icon: "🪄" },
                  { label: "Timer", icon: "⏱️" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center cursor-pointer select-none leading-none">
                    <span className="w-5.5 h-5.5 rounded-full bg-black/40 border border-white/15 flex items-center justify-center text-[9px] hover:bg-black/60 shadow-xs">{item.icon}</span>
                    <span className="text-[5px] text-gray-300 font-bold mt-0.5">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Recorder Controls shutter bar */}
            <div className="relative z-10 flex justify-between items-center select-none pt-0.5 shrink-0">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=100" className="w-6.5 h-6.5 rounded-lg object-cover border border-white/30 cursor-pointer" alt="gallery quick access" />
              
              <div className="flex flex-col items-center relative leading-none">
                <div className="w-8 h-8 bg-[#FF0055] outline outline-4 outline-[#FF0055]/35 border border-black rounded-full cursor-pointer flex items-center justify-center" />
                <div className="flex gap-1 text-[4.5px] font-mono tracking-wider text-gray-400 uppercase mt-1 leading-none font-extrabold">
                  <span>Photo</span>
                  <span className="text-pink-500 font-extrabold">Video</span>
                  <span>Live</span>
                </div>
              </div>

              {/* Confirm checkmark button */}
              <button className="w-6.5 h-6.5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] shadow-lg hover:bg-blue-700 cursor-pointer border border-white/20 leading-none">
                ✓
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderKidMealScreenContent = (screenName: string) => {
    switch (screenName) {
      case "discovery":
        return (
          <div className="flex flex-col h-full justify-between bg-[#f8faff] text-gray-800 p-3 font-sans select-none overflow-y-auto no-scrollbar">
            <div className="space-y-3">
              {/* Profile Bar Navigation */}
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <span className="text-[7px] text-gray-400 font-semibold uppercase tracking-wider block">Hello, Sarah!</span>
                  <h3 className="font-display font-black text-[#1a2b49] text-sm tracking-tight leading-none mt-0.5">Find a healthy meal for Leo</h3>
                </div>
                <div className="w-6.5 h-6.5 rounded-full bg-blue-100 text-blue-600 font-black text-[9px] flex items-center justify-center border border-blue-200">
                  SB
                </div>
              </div>

              {/* Search line with filter icon */}
              <div className="flex gap-1.5 items-center">
                <div className="bg-white rounded-xl px-2 py-1.5 border border-blue-100 shadow-sm flex items-center gap-1 w-full">
                  <span className="text-[8px] text-gray-400">🔍</span>
                  <input type="text" placeholder="Search pasta, veggies..." className="text-[7.5px] bg-transparent border-none outline-none text-gray-800 w-full placeholder-gray-400 font-medium" readOnly />
                </div>
                <button className="bg-blue-600 text-white w-7 h-7 rounded-xl shadow-sm flex items-center justify-center text-[10px] shrink-0 hover:bg-blue-700 cursor-pointer transition-colors">
                  🔧
                </button>
              </div>

              {/* Horizontal Scrollable Categories */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-black text-[9px] text-[#1a2b49] block">Categories</span>
                  <span className="text-[6.5px] text-blue-600 hover:underline cursor-pointer block font-bold">See All</span>
                </div>
                
                <div className="flex gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
                  {[
                    { id: "breakfast", text: "Breakfast", icon: "🥞", active: true },
                    { id: "lunch", text: "Lunch", icon: "🍔", active: false },
                    { id: "snacks", text: "Snacks", icon: "🍎", active: false }
                  ].map((cat, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-xl text-[7.5px] shrink-0 font-extrabold flex items-center gap-1 cursor-pointer transition-all ${
                        cat.active
                          ? "bg-blue-600 text-white shadow-sm border border-blue-600"
                          : "bg-white text-gray-500 border border-gray-100 hover:bg-neutral-50"
                      }`}
                    >
                      <span>{cat.icon}</span> {cat.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top Selling Healthy Meals Quad Grid */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-[9px] text-[#1a2b49] block">Top Selling Healthy Meals</span>
                  <span className="bg-pink-100 text-pink-600 font-extrabold text-[5px] uppercase px-1 py-0.2 rounded-full leading-none tracking-wider">🔥 Popular</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { title: "Rainbow Pasta", rate: "4.7", tag: "Veggies", price: "$9.50", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=200" },
                    { title: "Mini Turkey Sliders", rate: "4.9", tag: "Protein", price: "$11.00", img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&q=80&w=200" },
                    { title: "Fruit Galaxy Bowl", rate: "4.8", tag: "Fresh", price: "$6.50", img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0cf?auto=format&fit=crop&q=80&w=200" },
                    { title: "Cheesy Broccoli", rate: "4.6", tag: "Kids Fav", price: "$8.00", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=200" }
                  ].map((card, index) => (
                    <div key={index} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-blue-300 transition-all cursor-pointer shadow-xs p-1 flex flex-col justify-between h-[115px]">
                      {/* Image Frame */}
                      <div className="relative h-14 w-full rounded-xl overflow-hidden border border-neutral-50 shrink-0">
                        <img src={card.img} className="w-full h-full object-cover" alt={card.title} />
                        <span className="absolute top-1 left-1 bg-yellow-400 text-black font-extrabold text-[4.5px] px-1 py-0.3 rounded-md uppercase tracking-wider">
                          {card.tag}
                        </span>
                      </div>
                      
                      {/* Description Area */}
                      <div className="mt-1 leading-none">
                        <h4 className="font-extrabold text-[7.5px] text-gray-900 leading-tight truncate">{card.title}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-blue-600 font-extrabold text-[7.5px] font-mono">{card.price}</span>
                          <span className="text-gray-400 text-[6px] font-bold">★ {card.rate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Meal Plan Banner */}
              <div className="bg-gradient-to-r from-blue-600 to-yellow-400 text-white rounded-2xl p-2.5 flex items-center justify-between shadow-xs cursor-pointer mt-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="min-w-0 leading-tight z-10 text-left">
                  <span className="font-black text-[9px] text-white block">Weekly Meal Plan 🌟</span>
                  <span className="text-[5.5px] text-white/90 block mt-0.5">Save 20% on monthly subscriptions</span>
                </div>
                <span className="text-white text-[7.5px] font-extrabold bg-blue-700/50 hover:bg-blue-800 shrink-0 px-2 py-0.5 rounded-full z-10 leading-none">
                  Learn More
                </span>
              </div>
            </div>
          </div>
        );

      case "details":
        return (
          <div className="flex flex-col h-full justify-between bg-white text-gray-800 p-3 font-sans select-none overflow-y-auto no-scrollbar">
            <div className="space-y-3.5">
              {/* Back & Heart Float Header */}
              <div className="flex justify-between items-center border-b pb-1.5 shrink-0">
                <span className="text-gray-500 font-extrabold text-[7.5px] cursor-pointer hover:text-black flex items-center gap-0.5">
                  ◀ Back
                </span>
                <div className="flex gap-1.5">
                  <span className="w-5.5 h-5.5 rounded-full bg-pink-50 hover:bg-pink-100 text-[#ff0055] flex items-center justify-center text-[7.5px] cursor-pointer shadow-xs transition-transform hover:scale-105 active:scale-95">
                    ❤️
                  </span>
                </div>
              </div>

              {/* Hero Photo Banner */}
              <div className="relative h-28 w-full rounded-2xl overflow-hidden border bg-neutral-100 shrink-0">
                <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=400" alt="Ultimate Monster Burger Deluxe Platter" className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white font-extrabold text-[5px] px-1.5 py-0.3 rounded-full leading-none uppercase tracking-wider">
                  Premium
                </div>
              </div>

              {/* Title Pricing block */}
              <div className="flex justify-between items-start select-none">
                <div className="text-left">
                  <h3 className="font-display font-black text-xs text-gray-900 leading-tight">Ultimate Monster Burger</h3>
                  <p className="text-gray-400 text-[6.5px] font-bold mt-0.5">Premium Angus Beef</p>
                </div>
                <span className="text-blue-600 font-extrabold text-[11px] font-mono whitespace-nowrap">$14.50</span>
              </div>

              {/* Nutritional value pills */}
              <div className="flex gap-1 flex-wrap select-none">
                {[
                  { text: "540 kcal", icon: "🔥" },
                  { text: "42g Protein", icon: "🍳" },
                  { text: "15-20 min", icon: "⏱️" },
                  { text: "★ 4.9", icon: "⭐" }
                ].map((pill, pIdx) => (
                  <span key={pIdx} className="bg-neutral-50 border border-neutral-100 text-gray-600 font-extrabold text-[6.5px] py-1 px-2 rounded-full inline-flex items-center gap-1 transition-colors hover:bg-neutral-100">
                    <span>{pill.icon}</span> {pill.text}
                  </span>
                ))}
              </div>

              {/* Description Body */}
              <div className="space-y-1 text-left select-none">
                <span className="font-black text-[8px] text-gray-900 block font-mono">Description</span>
                <p className="text-[6.5px] text-gray-500 leading-relaxed font-light">
                  A double-stacked premium Angus beef patty topped with melted cheddar, caramelized onions, crisp lettuce, and our secret QuickFoodie sauce on a toasted brioche bun.
                </p>
              </div>

              {/* Adjust Quantity counter */}
              <div className="bg-neutral-50 rounded-xl p-2.5 flex items-center justify-between border border-neutral-100 shadow-xxs">
                <div className="flex flex-col text-left">
                  <span className="text-[5.5px] text-gray-400 block uppercase font-mono font-bold leading-none mb-0.5">Quantity</span>
                  <div className="flex items-center gap-2">
                    {/* Minus button */}
                    <button className="w-5 h-5 rounded-full bg-white hover:bg-neutral-100 border text-gray-600 font-black flex items-center justify-center text-[7px] cursor-pointer shadow-xxs leading-none">
                      -
                    </button>
                    <span className="font-extrabold text-[9px] text-[#1a2b49] font-mono leading-none">1</span>
                    {/* Plus button */}
                    <button className="w-5 h-5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-black flex items-center justify-center text-[7px] cursor-pointer shadow-xxs leading-none">
                      +
                    </button>
                  </div>
                </div>
                
                <div className="text-right leading-tight">
                  <span className="text-[5px] text-gray-400 block uppercase font-mono font-bold leading-none">Total Price</span>
                  <span className="text-blue-600 font-extrabold text-[9px] font-mono block mt-1">$14.50</span>
                </div>
              </div>
            </div>

            {/* Bottom buttons action layout */}
            <div className="grid grid-cols-5 gap-1.5 pt-4 border-t mt-3 shrink-0">
              <button className="col-span-1 bg-neutral-150 hover:bg-neutral-200 text-gray-600 rounded-xl flex items-center justify-center text-[9px] cursor-pointer shadow-xxs py-2 leading-none">
                🛍️
              </button>
              <button className="col-span-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-2 rounded-xl text-[7.5px] text-center cursor-pointer shadow-sm tracking-wider uppercase leading-none">
                Add to Cart
              </button>
            </div>
          </div>
        );

      case "cart":
        return (
          <div className="flex flex-col h-full bg-[#f8faff] text-gray-800 p-3 font-sans justify-between select-none overflow-y-auto no-scrollbar">
            <div className="space-y-3">
              {/* Back Navigation Bar Header */}
              <div className="flex justify-between items-center border-b pb-1.5 shrink-0">
                <span className="text-gray-400 font-bold text-[7.5px] cursor-pointer hover:text-black">◀</span>
                <h3 className="font-display font-black text-gray-900 text-[11px] tracking-tight text-center flex-1">My Cart</h3>
                <div className="relative">
                  <span className="text-[11px] cursor-pointer">🛍️</span>
                  <span className="absolute -top-1.5 -right-1.5 bg-[#FF0055] text-white text-[5px] font-black w-3 h-3 rounded-full flex items-center justify-center">3</span>
                </div>
              </div>

              {/* Items Card List */}
              <div className="space-y-2 max-h-[170px] overflow-y-auto pr-0.5">
                {[
                  { title: "Cheesy Beef Burger", desc: "Extra cheddar, brioche bun", price: "$12.50", qty: 1, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=150" },
                  { title: "Pepperoni Feast", desc: "Large, thin crust, extra basil", price: "$18.00", qty: 1, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=150" },
                  { title: "Crispy Chicken Tenders", desc: "6pcs with honey mustard", price: "$9.50", qty: 2, img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=150" }
                ].map((item, index) => (
                  <div key={index} className="bg-white border border-blue-50/50 p-2 rounded-2xl flex justify-between items-center shadow-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <img src={item.img} className="w-8 h-8 rounded-xl object-cover border border-neutral-100 shrink-0" alt={item.title} />
                      <div className="min-w-0 text-left">
                        <h4 className="font-extrabold text-[7.5px] text-gray-900 leading-none truncate">{item.title}</h4>
                        <span className="text-[5.5px] text-gray-400 block mt-0.5 leading-none truncate">{item.desc}</span>
                        <span className="text-blue-600 font-extrabold text-[7px] block mt-1 font-mono">{item.price}</span>
                      </div>
                    </div>

                    {/* Adjust counter list */}
                    <div className="flex flex-col items-center justify-center space-y-1 select-none leading-none">
                      <button className="w-3.5 h-3.5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-[7px] cursor-pointer hover:bg-blue-200">
                        +
                      </button>
                      <span className="font-extrabold text-[7px] font-mono">{item.qty}</span>
                      <button className="w-3.5 h-3.5 bg-neutral-100 hover:bg-neutral-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-[7px] cursor-pointer">
                        -
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery School Address Card block */}
              <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-2.5 flex items-center justify-between text-left shadow-xxs">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[11px] shrink-0">🚚</span>
                  <div className="min-w-0">
                    <span className="text-[5px] text-yellow-700 block uppercase font-mono font-bold leading-none">Delivery to School</span>
                    <h5 className="font-extrabold text-[8px] text-gray-800 leading-tight mt-0.5 truncate">St. Jude's Primary, Room 4B</h5>
                  </div>
                </div>
                <span className="text-[6.5px] text-[#FF0055] hover:underline cursor-pointer font-bold shrink-0">Change</span>
              </div>
            </div>

            {/* Pricing list aggregate layout */}
            <div className="pt-2 border-t mt-2 shrink-0">
              <div className="space-y-1 select-none leading-none text-left">
                <div className="flex justify-between text-gray-400 text-[6.5px]">
                  <span>Subtotal</span>
                  <span className="font-mono">$49.50</span>
                </div>
                <div className="flex justify-between text-gray-400 text-[6.5px]">
                  <span>Delivery Fee</span>
                  <span className="font-mono">$2.00</span>
                </div>
                <div className="flex justify-between text-[#1a2b49] font-black text-[9.5px] pt-1">
                  <span>Total Amount</span>
                  <span className="font-mono text-blue-600">$51.50</span>
                </div>
              </div>

              {/* Submit trigger checkout button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[8px] py-2 w-full rounded-2xl shadow-md tracking-wider uppercase cursor-pointer mt-3 leading-none flex items-center justify-center gap-1">
                Proceed to Payment <span className="text-[6.5px]">→</span>
              </button>
            </div>
          </div>
        );

      case "login":
        return (
          <div className="relative w-full h-full text-white bg-black rounded-2xl overflow-hidden flex flex-col justify-between p-3" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=500')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-pink-900/50 to-black/95 z-0" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Login Switch Header */}
              <div className="bg-white/10 p-0.5 rounded-full grid grid-cols-2 text-center text-[7.5px] font-extrabold cursor-pointer border border-white/10 shrink-0">
                <span className="bg-blue-600 text-white py-1 rounded-full uppercase tracking-wider">Login</span>
                <span className="text-gray-450 hover:text-white py-1 uppercase tracking-wider">Sign Up</span>
              </div>

              {/* Central Box Input Form */}
              <div className="bg-white text-gray-800 rounded-2xl p-3 my-2 space-y-2.5 text-left shadow-2xl relative border border-white/5">
                <div className="leading-tight">
                  <h3 className="font-display font-black text-xs text-gray-900">Welcome Back</h3>
                  <span className="text-[6px] text-gray-400 font-medium block mt-0.5">Please enter your details to continue</span>
                </div>

                {/* Email line input */}
                <div className="space-y-0.8">
                  <label className="text-[5px] text-gray-450 uppercase font-mono font-black block leading-none">Parent's Email</label>
                  <div className="bg-neutral-50 px-2 py-1.5 rounded-xl border border-neutral-150 flex items-center gap-1.5 shadow-xxs">
                    <span className="text-[7.5px] text-neutral-400">✉</span>
                    <input type="text" value="mama@example.com" className="text-[7px] text-gray-800 outline-none border-none bg-transparent w-full" readOnly />
                  </div>
                </div>

                {/* Password field entry */}
                <div className="space-y-0.8">
                  <label className="text-[5px] text-gray-450 uppercase font-mono font-black block leading-none">Password</label>
                  <div className="bg-neutral-50 px-2 py-1.5 rounded-xl border border-neutral-150 flex items-center justify-between shadow-xxs">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-[7.5px] text-neutral-400">🔒</span>
                      <span className="text-[7px] text-gray-800 font-mono tracking-widest block leading-none pt-0.5">••••••••</span>
                    </div>
                    <span className="text-[8px] text-gray-400 cursor-pointer">👁️</span>
                  </div>
                </div>

                {/* Secondary utilities links */}
                <div className="flex justify-between items-center text-[5.5px]">
                  <span className="text-gray-400 hover:underline cursor-pointer">Forgot Password?</span>
                  <span className="text-blue-600 hover:underline font-black cursor-pointer">Create Account</span>
                </div>
              </div>

              {/* Button Submission Form */}
              <div className="space-y-2 shrink-0">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-2 w-full rounded-2xl text-[8px] cursor-pointer shadow-md tracking-wider uppercase leading-none">
                  Sign In to Account
                </button>
                <p className="text-center text-[4.5px] text-gray-400 max-w-[90%] mx-auto leading-normal">
                  By continuing, you agree to our <span className="text-blue-400 font-semibold hover:underline cursor-pointer">Terms of Service</span>
                </p>

                {/* Native Social Auth blocks */}
                <div className="grid grid-cols-2 gap-1.5 pt-1.5 border-t border-white/10">
                  <button className="bg-[#111] hover:bg-neutral-900 border border-white/10 text-white py-1 rounded-xl text-[6.5px] font-bold text-center flex items-center justify-center gap-1 cursor-pointer">
                    <span>🌐</span> Google
                  </button>
                  <button className="bg-[#111] hover:bg-neutral-900 border border-white/10 text-white py-1 rounded-xl text-[6.5px] font-bold text-center flex items-center justify-center gap-1 cursor-pointer">
                    <span>🍏</span> Apple
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "history":
        return (
          <div className="flex flex-col h-full bg-[#f8faff] text-gray-800 p-3 font-sans justify-between select-none overflow-y-auto no-scrollbar">
            <div className="space-y-3">
              {/* Back & Title Header bar */}
              <div className="flex justify-between items-center border-b pb-1.5 shrink-0">
                <span className="text-gray-400 font-bold text-[7.5px] cursor-pointer hover:text-black">◀</span>
                <h3 className="font-display font-black text-gray-900 text-[11px] tracking-tight text-center flex-1">Order History</h3>
                <span className="text-[8px] text-neutral-500 cursor-pointer">⚙️</span>
              </div>

              {/* Scrollable quick order filter toggles */}
              <div className="flex gap-1 overflow-x-auto pb-0.5 no-scrollbar leading-none">
                {[
                  { text: "All Orders", active: true },
                  { text: "Active", active: false },
                  { text: "Completed", active: false },
                  { text: "Cancelled", active: false }
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 rounded-full text-[6px] shrink-0 font-extrabold tracking-tight border cursor-pointer ${
                      tag.active
                        ? "bg-blue-600 text-white border-blue-600 shadow-xxs"
                        : "bg-white text-gray-500 border-neutral-100 hover:bg-neutral-50"
                    }`}
                  >
                    {tag.active ? "✓ " : ""} {tag.text}
                  </span>
                ))}
              </div>

              {/* Recent Orders Stack List */}
              <div className="space-y-2 max-h-[195px] overflow-y-auto pr-0.5 text-left">
                <span className="text-[5.5px] font-bold text-gray-400 uppercase tracking-widest block font-mono">Recent Orders</span>

                {/* Item 1 */}
                <div className="bg-white border border-blue-50/55 p-2 rounded-2xl space-y-2 shadow-xs">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1.5">
                      <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=100" className="w-5 h-5 rounded-lg object-cover shrink-0 border" alt="burger items" />
                      <div className="leading-none">
                        <span className="text-gray-400 text-[5px] block font-mono">Today, 12:30 PM</span>
                        <h5 className="font-extrabold text-[7.5px] text-gray-900 block mt-0.5">Order #8829</h5>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-700 font-extrabold text-[5px] px-1.5 py-0.2 rounded-full leading-none uppercase tracking-wider">
                      In Progress
                    </span>
                  </div>
                  <div className="text-[6.5px] text-gray-500 flex justify-between items-center bg-neutral-50 p-1.5 rounded-xl border border-neutral-100 leading-none">
                    <span>Double Cheesy Burger, Curly Fries</span>
                    <span className="font-mono text-blue-600 font-bold">$18.50</span>
                  </div>
                  <div className="flex gap-1.5 pt-0.5 justify-end">
                    <button className="text-[5.5px] text-[#FF0055] hover:underline cursor-pointer font-bold px-1 py-0.5">Details</button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[5.5px] px-2 py-0.8 rounded-full shadow-xxs uppercase tracking-wider leading-none">Reorder</button>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="bg-white border border-blue-50/55 p-2 rounded-2xl space-y-2 shadow-xs">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1.5">
                      <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=100" className="w-5 h-5 rounded-lg object-cover shrink-0 border" alt="pizza item" />
                      <div className="leading-none">
                        <span className="text-gray-400 text-[5px] block font-mono">Yesterday, 6:15 PM</span>
                        <h5 className="font-extrabold text-[7.5px] text-gray-900 block mt-0.5">Order #8712</h5>
                      </div>
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 font-extrabold text-[5px] px-1.5 py-0.2 rounded-full leading-none uppercase tracking-wider border border-emerald-100">
                      Delivered
                    </span>
                  </div>
                  <div className="text-[6.5px] text-gray-500 flex justify-between items-center bg-neutral-50 p-1.5 rounded-xl border border-neutral-100 leading-none">
                    <span>Pepperoni Pizza (Large), Coke</span>
                    <span className="font-mono text-blue-600 font-bold">$24.90</span>
                  </div>
                  <div className="flex gap-1.5 pt-0.5 justify-end">
                    <button className="text-[5.5px] text-[#FF0055] hover:underline cursor-pointer font-bold px-1 py-0.5">Details</button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[5.5px] px-2 py-0.8 rounded-full shadow-xxs uppercase tracking-wider leading-none">Reorder</button>
                  </div>
                </div>

                {/* Segment Heading */}
                <span className="text-[5.5px] font-bold text-gray-400 uppercase tracking-widest block font-mono pt-1">Last Week</span>

                {/* Item 3 */}
                <div className="bg-white border border-neutral-150 p-1.5 rounded-2xl flex justify-between items-center shadow-xs">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <img src="https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=100" className="w-5 h-5 rounded-lg object-cover shrink-0 border" alt="chicken nugget" />
                    <div className="leading-none select-none text-left min-w-0">
                      <span className="text-gray-400 text-[4.5px] font-mono leading-none block">Oct 12, 1:10 PM</span>
                      <h6 className="font-extrabold text-[6.5px] text-gray-800 leading-none truncate block mt-0.5">Order #8544</h6>
                      <span className="text-[5px] text-gray-500 mt-1 block truncate leading-none">Chicken Nuggets Kid's Meal</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0 leading-none pl-1">
                    <span className="bg-neutral-100 text-gray-500 font-extrabold text-[4.5px] px-1 py-0.2 rounded-full leading-none block self-end uppercase text-center border font-mono">Delivered</span>
                    <span className="text-blue-600 font-extrabold text-[6.5px] font-mono block mt-1">$12.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "profile":
        return (
          <div className="flex flex-col h-full bg-[#f8faff] text-gray-800 p-3 font-sans justify-between select-none overflow-y-auto no-scrollbar">
            <div className="space-y-3">
              {/* Profile Top Bar Header with large avatar initials */}
              <div className="flex justify-between items-center border-b pb-1.5 shrink-0">
                <div className="text-left">
                  <h3 className="font-display font-black text-xs text-[#1a2b49] leading-tight">Parent Profile</h3>
                  <span className="text-[5.5px] text-gray-400 block mt-0.5 font-medium">Manage your family's meal plans</span>
                </div>
                <div className="w-7 h-7 bg-blue-600 rounded-full text-white flex items-center justify-center font-extrabold text-[8.5px] border-2 border-white shadow-md">
                  MA
                </div>
              </div>

              {/* Three Stat columns matrix block */}
              <div className="grid grid-cols-3 gap-1 grid-flow-row leading-tight text-center py-1 bg-white rounded-2xl border shadow-xs">
                <div>
                  <span className="text-[9px] font-black text-gray-900 font-mono block">12</span>
                  <span className="text-[4.5px] text-gray-400 font-black uppercase tracking-wider">Orders</span>
                </div>
                <div className="border-x border-neutral-100">
                  <span className="text-[9px] font-black text-gray-900 font-mono block">2</span>
                  <span className="text-[4.5px] text-gray-400 font-black uppercase tracking-wider">Kids</span>
                </div>
                <div>
                  <span className="text-[9px] font-black text-gray-900 font-mono block">$42</span>
                  <span className="text-[4.5px] text-gray-400 font-black uppercase tracking-wider">Credit</span>
                </div>
              </div>

              {/* Addresses List layout */}
              <div className="space-y-1.5 text-left">
                <div className="flex justify-between items-baseline leading-none">
                  <span className="text-[6.5px] font-black text-gray-400 uppercase tracking-widest block font-mono">Delivery Addresses</span>
                  <span className="text-[5px] text-blue-600 hover:underline cursor-pointer font-bold">+ Add New</span>
                </div>

                {/* Address Item 1 Home checked active */}
                <div className="bg-white border-2 border-blue-500 p-1.5 rounded-2xl flex justify-between items-center shadow-xs">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="bg-blue-100 text-blue-600 text-[8.5px] w-5 h-5 flex items-center justify-center rounded-xl shrink-0">🏠</span>
                    <div className="min-w-0 leading-tight">
                      <span className="font-extrabold text-[7px] text-gray-800 block">Home</span>
                      <p className="text-[5px] text-gray-400 truncate block mt-0.5 font-light">123 Maple Street, Springfield, IL 62704</p>
                    </div>
                  </div>
                  <span className="w-3.5 h-3.5 bg-blue-600 text-white font-extrabold text-[6px] rounded-full flex items-center justify-center border border-white">✓</span>
                </div>

                {/* Address Item 2 Office */}
                <div className="bg-white border border-neutral-150 p-1.5 rounded-2xl flex justify-between items-center shadow-xxs">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="bg-neutral-100 text-gray-500 text-[8.5px] w-5 h-5 flex items-center justify-center rounded-xl shrink-0">🏢</span>
                    <div className="min-w-0 leading-tight text-left">
                      <span className="font-extrabold text-[7px] text-gray-500 block">Office</span>
                      <p className="text-[5px] text-gray-400 truncate block mt-0.5 font-light">800 North Michigan Ave, Chicago, IL 60611</p>
                    </div>
                  </div>
                  <span className="text-neutral-300 text-[6px] block">○</span>
                </div>
              </div>

              {/* Payment Visa Card display */}
              <div className="space-y-1 text-left">
                <span className="text-[6.5px] font-black text-gray-400 uppercase tracking-widest block font-mono">Payment Methods</span>
                <div className="bg-[#1e1e2d] text-white rounded-2xl p-2.5 space-y-3 shadow-lg relative border border-white/5 overflow-hidden">
                  {/* Card overlay gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-blue-900/10 to-transparent z-0" />
                  
                  <div className="relative z-10 flex justify-between items-baseline">
                    <span className="font-bold text-[8px] tracking-widest font-mono">VISA</span>
                    <span className="bg-white/10 text-white font-extrabold text-[4.5px] px-1 py-0.2 rounded uppercase leading-none border border-white/10">Primary</span>
                  </div>
                  <div className="relative z-10 text-[9px] font-mono font-bold tracking-widest leading-none pt-1">
                    •••• •••• •••• 4242
                  </div>
                  <div className="relative z-10 flex justify-between text-[4.8px] font-mono leading-none pt-0.5">
                    <span className="uppercase text-gray-400">Marcus Aurelius</span>
                    <span className="text-gray-300">12/26</span>
                  </div>
                </div>
              </div>

              {/* Preferences List Items layout */}
              <div className="space-y-1.5 text-left">
                {[
                  { name: "Kid Profiles", desc: "Dietary restrictions & school info", icon: "👶" },
                  { name: "Order History", desc: "View past meals & receipts", icon: "📋" },
                  { name: "Notifications", desc: "Meal alerts & delivery updates", icon: "🔔" }
                ].map((act, i) => (
                  <div key={i} className="bg-white border border-neutral-150 p-1.5 rounded-2xl flex justify-between items-center hover:bg-neutral-50 cursor-pointer shadow-xxs">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="bg-neutral-50 w-5 h-5 rounded-xl flex items-center justify-center text-[8px] border shrink-0">{act.icon}</span>
                      <div className="min-w-0 leading-tight">
                        <span className="font-extrabold text-[7px] text-gray-800 block">{act.name}</span>
                        <span className="text-[5px] text-gray-400 block mt-0.5 font-light truncate">{act.desc}</span>
                      </div>
                    </div>
                    <span className="text-gray-400 text-[6.5px]">›</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "onboarding":
        return (
          <div className="relative w-full h-full text-white bg-black rounded-2xl overflow-hidden flex flex-col justify-between p-3.5 select-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=500')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-700/60 via-blue-900/40 to-black/95 z-0" />

            {/* Top Indicator Accent circle */}
            <div className="relative z-10 flex justify-center">
              <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black text-lg shadow-lg shadow-yellow-400/20 border-2 border-white animate-bounce">
                🍔
              </div>
            </div>

            {/* Central cartoonish illustration image layout */}
            <div className="relative z-10 flex flex-col items-center my-auto -mt-1 select-none">
              <div className="w-18 h-18 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center relative p-3 backdrop-blur-xs">
                {/* Visual scooter driver using rich emojis and elements */}
                <div className="text-4xl">🛵</div>
                <div className="absolute -bottom-1 -right-1 text-base animate-pulse">📦</div>
              </div>
            </div>

            {/* Key Pitch Text headings block */}
            <div className="relative z-10 space-y-1.5 text-center px-1">
              <h2 className="font-display font-black text-sm tracking-tight text-white leading-none">Healthy Meals for Happy Kids</h2>
              <p className="text-[6.5px] text-gray-300 leading-normal font-light max-w-[90%] mx-auto">
                Delicious, parent-approved meals delivered straight to your doorstep. QuickFoodie makes nutrition simple.
              </p>

              {/* Three indicators carousel block */}
              <div className="flex justify-center gap-1 py-1">
                <span className="w-4 h-1 bg-yellow-400 rounded-full" />
                <span className="w-1 h-1 bg-white/35 rounded-full" />
                <span className="w-1 h-1 bg-white/35 rounded-full" />
              </div>
            </div>

            {/* Actions triggers button layout */}
            <div className="relative z-10 pt-2 shrink-0 space-y-1.5">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-2 w-full rounded-2xl text-[8px] cursor-pointer shadow-md tracking-wider uppercase leading-none">
                Get Started <span className="text-[6.5px]">→</span>
              </button>
              <p className="text-center text-[5.5px] text-gray-400">
                Already a customer?{" "}
                <span className="text-yellow-400 font-bold hover:underline cursor-pointer block mt-0.5">Sign In to your account</span>
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderDevicePreview = (id: string) => {
    switch (id) {
      case "project-rentease":
        return (
          <div className="bg-[#fcfbf9] text-[#2d2a26] rounded-2xl p-3 shadow-xl border border-black/10 text-xs flex flex-col h-[425px] justify-between transition-all duration-300 relative overflow-hidden">
            {/* Emulator header switch strip */}
            <div className="bg-[#849a83]/10 -mx-3 -mt-3 px-3 py-1.5 border-b border-[#eae4d8]">
              <div className="flex gap-1 overflow-x-auto no-scrollbar scroll-smooth">
                {[
                  { id: "dashboard", label: "Dashboard" },
                  { id: "portfolio", label: "Properties" },
                  { id: "details", label: "Details" },
                  { id: "add", label: "Add" },
                  { id: "maintenance", label: "Maint" },
                  { id: "payments", label: "Payments" },
                  { id: "messages", label: "Messages" },
                  { id: "settings", label: "Settings" }
                ].map((tb) => (
                  <button
                    key={tb.id}
                    onClick={() => {
                      setRentEaseScreen(tb.id);
                    }}
                    className={`px-1.5 py-0.5 rounded-full text-[5.5px] font-mono whitespace-nowrap font-bold transition-all cursor-pointer ${
                      rentEaseScreen === tb.id
                        ? "bg-[#849a83] text-white"
                        : "text-gray-500 hover:text-black hover:bg-black/5"
                    }`}
                  >
                    {tb.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inner Content */}
            <div className="pt-2 h-full overflow-hidden">
              <motion.div
                key={rentEaseScreen}
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {renderRentEaseScreenContent(rentEaseScreen)}
              </motion.div>
            </div>
          </div>
        );

      case "project-ledger": {
        const selectedData = {
          all: {
            title: "Executive BI Portfolio",
            points: [45, 52, 61, 58, 72, 89],
            predicted: [102, 118],
            conversion: "6.2%",
            clv: "$420",
            activeUsers: "124K",
            sql: "SELECT date_trunc('month', sale_date) AS month,\n       sum(revenue) AS net_rev\nFROM furmedia.transactions\nGROUP BY 1 ORDER BY 1;"
          },
          perfumes: {
            title: "Retail Scent Analytics",
            points: [18, 21, 26, 24, 31, 39],
            predicted: [43, 49],
            conversion: "5.8%",
            clv: "$320",
            activeUsers: "48K",
            sql: "SELECT date_trunc('month', sale_date) as month,\n       sum(revenue) AS net_rev\nFROM furmedia.transactions\nWHERE product_division = 'perfumes'\nGROUP BY 1 ORDER BY 1;"
          },
          linens: {
            title: "Linen Demand Forecasting",
            points: [15, 18, 21, 19, 24, 29],
            predicted: [32, 36],
            conversion: "4.9%",
            clv: "$550",
            activeUsers: "34K",
            sql: "SELECT date_trunc('month', sale_date) as month,\n       sum(revenue) AS net_rev\nFROM furmedia.transactions\nWHERE product_division = 'linens'\nGROUP BY 1 ORDER BY 1;"
          },
          consulting: {
            title: "Digital BI Advisory",
            points: [12, 13, 14, 15, 17, 21],
            predicted: [24, 28],
            conversion: "8.5%",
            clv: "$1,200",
            activeUsers: "1.2K",
            sql: "SELECT date_trunc('month', sale_date) as month,\n       sum(revenue) AS net_rev\nFROM furmedia.transactions\nWHERE product_division = 'digital_bi'\nGROUP BY 1 ORDER BY 1;"
          }
        }[biSegment];

        const maxPointsVal = Math.max(...selectedData.points, ...selectedData.predicted);
        
        // Generate SVG points path for historic data
        const svgPoints = selectedData.points.map((val, idx) => {
          const x = (idx * 35) + 20;
          const y = 80 - (val / maxPointsVal) * 55;
          return { x, y, val };
        });

        const pointsPath = svgPoints.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
        
        // Generate forecast points paths
        const forecastStartPoint = svgPoints[svgPoints.length - 1];
        const forecastPoints = selectedData.predicted.map((val, idx) => {
          const x = ((idx + 6) * 35) + 20;
          const y = 80 - (val / maxPointsVal) * 55;
          return { x, y, val };
        });

        const forecastPath = [`M ${forecastStartPoint.x} ${forecastStartPoint.y}`, ...forecastPoints.map(p => `L ${p.x} ${p.y}`)].join(' ');

        // Area gradients
        const areaPath = `${pointsPath} L ${svgPoints[svgPoints.length-1].x} 85 L 20 85 Z`;
        const forecastAreaPath = `M ${forecastStartPoint.x} ${forecastStartPoint.y} ${forecastPoints.map(p => `L ${p.x} ${p.y}`).join(' ')} L ${forecastPoints[forecastPoints.length-1].x} 85 L ${forecastStartPoint.x} 85 Z`;

        return (
          <div className="bg-[#0b0c10] text-[#c5c6c7] rounded-2xl p-3.5 font-sans shadow-2xl border border-white/10 text-[10px] flex flex-col h-[425px] justify-between transition-all duration-300 relative overflow-hidden">
            <div>
              {/* Terminal Title Header */}
              <div className="flex justify-between items-center text-[9px] pb-2 border-b border-white/[0.08] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  <span className="text-white font-semibold ml-1 font-sans">FURmedia Corporate BI Platform</span>
                </div>
                <span className="text-[#00ff99] font-bold text-[8px] tracking-wider uppercase">LOGS: LIVE</span>
              </div>

              {/* Data Segment Selectors */}
              <div className="grid grid-cols-4 gap-1 p-0.5 bg-white/5 rounded-lg my-2 text-[8px] font-mono">
                {(["all", "perfumes", "linens", "consulting"] as const).map((seg) => (
                  <button
                    key={seg}
                    onClick={() => setBiSegment(seg)}
                    className={`py-1 rounded text-center uppercase font-bold transition-all cursor-pointer ${
                      biSegment === seg
                        ? "bg-[#00ff99] text-black shadow-md font-extrabold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {seg}
                  </button>
                ))}
              </div>

              {/* KPI Scorecard Grid */}
              <div className="grid grid-cols-3 gap-1.5 my-1.5 font-mono">
                <div className="bg-white/[0.03] border border-white/[0.06] p-1.5 rounded-lg text-center">
                  <span className="text-[6px] text-gray-400 uppercase block">Active Users</span>
                  <span className="text-white font-extrabold text-[11px] block mt-0.5">{selectedData.activeUsers}</span>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] p-1.5 rounded-lg text-center">
                  <span className="text-[6px] text-gray-400 uppercase block">Conversion Rate</span>
                  <span className="text-[#00ff99] font-extrabold text-[11px] block mt-0.5">{selectedData.conversion}</span>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] p-1.5 rounded-lg text-center">
                  <span className="text-[6px] text-gray-400 uppercase block">CLV Index</span>
                  <span className="text-[#ffbf00] font-extrabold text-[11px] block mt-0.5">{selectedData.clv}</span>
                </div>
              </div>

              {/* Integrated SVG Interactive Chart */}
              <div className="bg-white/[0.02] border border-white/[0.06] p-2 rounded-xl relative my-1.5 h-[125px] flex flex-col justify-between">
                <div className="flex justify-between items-center text-[7px] text-gray-400 font-mono">
                  <span>Gross Net Trend / Predictive Forecast (Revenue Units)</span>
                  <button 
                    onClick={() => setBiForecast(!biForecast)}
                    className={`px-1.5 py-0.5 rounded text-[6px] font-bold uppercase transition-all ${
                      biForecast ? "bg-[#00ff99]/20 text-[#00ff99]" : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {biForecast ? "● Forecast Run On" : "● Forecast Run Off"}
                  </button>
                </div>

                <div className="relative flex-1 mt-1.5">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 280 90">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00ff99" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#00ff99" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ffbf00" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#ffbf00" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Chart Gridlines */}
                    <line x1="20" y1="20" x2="260" y2="20" stroke="white" strokeWidth="0.5" strokeDasharray="3,3" strokeOpacity="0.08" />
                    <line x1="20" y1="50" x2="260" y2="50" stroke="white" strokeWidth="0.5" strokeDasharray="3,3" strokeOpacity="0.08" />
                    <line x1="20" y1="80" x2="260" y2="80" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />

                    {/* Shaded Area Gradients */}
                    <path d={areaPath} fill="url(#chartGradient)" />
                    {biForecast && <path d={forecastAreaPath} fill="url(#forecastGradient)" />}

                    {/* Plot Lines */}
                    <path d={pointsPath} fill="none" stroke="#00ff99" strokeWidth="1.8" strokeLinecap="round" />
                    {biForecast && (
                      <path d={forecastPath} fill="none" stroke="#ffbf00" strokeWidth="1.8" strokeDasharray="3,3" strokeLinecap="round" />
                    )}

                    {/* Plot Circles */}
                    {svgPoints.map((p, idx) => (
                      <g key={idx}>
                        <circle cx={p.x} cy={p.y} r="3" fill="#00ff99" />
                        <circle cx={p.x} cy={p.y} r="5" fill="none" stroke="#00ff99" strokeWidth="1" strokeOpacity="0.4" />
                        <text x={p.x} y={p.y - 6} fill="#00ff99" fontSize="6.5" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                          {p.val}
                        </text>
                      </g>
                    ))}

                    {/* Forecast Circles */}
                    {biForecast && forecastPoints.map((p, idx) => (
                      <g key={idx}>
                        <circle cx={p.x} cy={p.y} r="3" fill="#ffbf00" />
                        <text x={p.x} y={p.y - 6} fill="#ffbf00" fontSize="6.5" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                          {p.val}F
                        </text>
                      </g>
                    ))}

                    {/* Axis Labels */}
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul*", "Aug*"].map((label, idx) => {
                      const x = (idx * 35) + 20;
                      // Don't draw Jul/Aug if forecast is disabled
                      if (!biForecast && idx > 5) return null;
                      return (
                        <text key={idx} x={x} y="88" fill={idx > 5 ? "#ffbf00" : "#888"} fontSize="6" textAnchor="middle" fontFamily="monospace">
                          {label}
                        </text>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Underlying Active Schema SQL Output Terminal Console */}
              <div className="bg-black/95 rounded-lg border border-white/[0.08] p-2 font-mono text-[7px] leading-tight text-emerald-400">
                <div className="flex items-center justify-between text-[6px] text-gray-500 uppercase border-b border-white/[0.06] pb-1 mb-1">
                  <span>🖥️ Active Analytical SQL Query Execution Console</span>
                  <span className="text-[#00ff99]">DBMS: Active</span>
                </div>
                <div className="whitespace-pre overflow-x-auto text-yellow-100/80">
                  {selectedData.sql}
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-[6.5px] text-[#00ff99] border-t border-white/[0.04] pt-1">
                  <span className="animate-pulse">●</span>
                  <span>Query Executed Successfully &bull; Latency: 224ms &bull; Cache Status: MISS</span>
                </div>
              </div>
            </div>

            {/* Bottom Panel Status bar */}
            <div className="flex justify-between items-center text-[7.5px] text-gray-500 border-t border-white/[0.08] pt-1.5 font-mono">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> DB Engine: SQLCipher v1.35
              </span>
              <span>Stakeholder Export &bull; PDF CSV</span>
            </div>
          </div>
        );
      }

      case "project-vitality":
        return (
          <div className="bg-[#ffffff] text-[#1c1c1e] rounded-2xl p-4 font-sans shadow-xl border border-black/10 text-xs flex flex-col h-[425px] justify-between transition-all duration-300">
            <div>
              {/* Top Header */}
              <div className="flex justify-between items-center text-[9px] text-gray-500 pb-2 border-b border-neutral-100">
                <div>
                  <span className="block text-[7px] text-neutral-400 uppercase font-mono">Stay Active</span>
                  <span className="font-display font-extrabold text-gray-800 text-[11px]">Stay Vitality.</span>
                </div>
                <div className="w-5.5 h-5.5 rounded-full bg-[#00e1cf]/10 text-[#00bdae] font-black text-[8px] flex items-center justify-center shrink-0">
                  MA
                </div>
              </div>

              {/* Radial Steps Ring Component */}
              <div className="flex flex-col items-center my-2 relative">
                <div className="w-20 h-20 rounded-full border-[5px] border-neutral-100 flex flex-col items-center justify-center relative">
                  {/* Simulated Half-Ring overlay styling */}
                  <div className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-[#00e1cf] border-r-[#00e1cf] rotate-[45deg]"></div>
                  <span className="text-[13px] font-black tracking-tight text-gray-800 leading-none">7,500</span>
                  <span className="text-[7px] text-gray-400 mt-0.5">of 10,000 steps</span>
                </div>
              </div>

              {/* Calories / Water Stats */}
              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="bg-[#f6f6f9] p-1.5 rounded-xl text-center">
                  <span className="text-[7px] text-gray-400 uppercase block font-mono">Calories</span>
                  <span className="font-extrabold text-[10px] text-gray-800 leading-none">1,240 <span className="text-[7px] font-normal text-gray-400">kcal</span></span>
                </div>
                <div className="bg-[#f6f6f9] p-1.5 rounded-xl text-center">
                  <span className="text-[7px] text-gray-400 uppercase block font-mono">Water</span>
                  <span className="font-extrabold text-[10px] text-[#007aff] leading-none">1.8 <span className="text-[7px] font-normal text-gray-400">Liters</span></span>
                </div>
              </div>

              {/* Daily Calendar Weekdays */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[8px]">
                  <span className="font-bold text-gray-400 uppercase">Activity Calendar</span>
                  <span className="text-[#00e1cf] font-bold">View Monthly</span>
                </div>
                <div className="flex justify-between gap-1 text-center font-mono">
                  {[
                    { d: "M", n: 12 },
                    { d: "T", n: 13 },
                    { d: "W", n: 14, active: true },
                    { d: "T", n: 15 },
                    { d: "F", n: 16 },
                    { d: "S", n: 17 },
                  ].map((item, idx) => (
                    <div key={idx} className={`flex-1 py-1 rounded-lg ${item.active ? "bg-[#00e1cf] text-white font-bold" : "bg-neutral-50 text-gray-600"}`}>
                      <div className="text-[5px] leading-none uppercase">{item.d}</div>
                      <div className="text-[8px] leading-none mt-0.5 font-bold">{item.n}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Action Button */}
            <div className="space-y-2 shrink-0">
              <div className="flex flex-wrap gap-1 justify-center max-h-[35px] overflow-hidden">
                {["⚡ Weight Loss", "💧 Hydration", "🛌 Sleep"].map((tag, idx) => (
                  <span key={idx} className="bg-neutral-50 text-gray-600 text-[7px] px-1.5 py-0.5 rounded border border-neutral-100 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="bg-[#00e1cf] text-white hover:bg-[#00beaf] text-[9px] font-bold py-1.5 rounded-full w-full shadow-lg cursor-pointer text-center">
                ➕ Log New Workout
              </button>
            </div>
          </div>
        );

      case "project-apex-vigor":
        return (
          <div className="bg-[#121214] text-[#ececed] rounded-2xl p-4 font-sans shadow-xl border border-white/5 text-xs flex flex-col h-[425px] justify-between transition-all duration-300">
            <div>
              {/* Dark Mode Calorie Stats Header */}
              <div className="flex justify-between items-center text-[9px] text-gray-400 pb-2 border-b border-white/[0.06]">
                <div className="text-[8px] uppercase font-mono tracking-wider text-[#00ff99]">KINETIC ATHLETICS</div>
                <div className="text-right text-white font-mono">Feb 2025</div>
              </div>

              {/* Dual Panel Preview: Meals vs kinetic workout */}
              <div className="space-y-2 mt-2">
                {/* Meals preview row */}
                <div className="bg-white/[0.02] border border-white/[0.08] p-2 rounded-xl flex items-center justify-between">
                  <div className="min-w-0">
                    <span className="text-[7px] text-[#ffbf00] uppercase block font-mono">Today's Meals budget</span>
                    <h4 className="text-[9px] font-bold text-white truncate">Breakfast Pancake & Egg</h4>
                    <p className="text-[7px] text-gray-400 truncate">Calories: 2,400 kcal &bull; 3 choices</p>
                  </div>
                  <span className="text-[7px] bg-[#ffbf00]/10 text-[#ffbf00] px-1 py-0.5 rounded font-bold font-mono shrink-0">PRO</span>
                </div>

                {/* Workout flow preview */}
                <div className="bg-white/[0.02] border border-white/[0.08] p-2 rounded-xl space-y-1.5">
                  <div className="flex justify-between items-center text-[8px]">
                    <div>
                      <span className="text-[7px] text-[#00ff99] uppercase block font-mono">Today's Workout Plan</span>
                      <h4 className="text-[9px] font-bold text-white leading-none">Day 01 - Cardio & Core</h4>
                    </div>
                    <span className="text-[6px] text-gray-400 font-mono">07 workouts</span>
                  </div>

                  <div className="space-y-1 max-h-[105px] overflow-y-auto pr-1 font-mono">
                    {[
                      { name: "Active Stretch", dur: "15 min", icon: "🧘" },
                      { name: "Kinetic Lift", dur: "15 min", icon: "🏋️" },
                      { name: "Rope Jumps", dur: "10 min", icon: "⚡" },
                    ].map((ex, idx) => (
                      <div key={idx} className="flex items-center justify-between p-1 rounded bg-white/[0.01] hover:bg-white/[0.03] text-[8px]">
                        <div className="flex items-center gap-1 text-white truncate">
                          <span>{ex.icon}</span>
                          <span className="truncate">{ex.name}</span>
                        </div>
                        <div className="text-[7px] text-[#00ff99] shrink-0 font-bold">{ex.dur}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Core Kinetic Start Workout Button */}
            <div className="space-y-1.5 shrink-0">
              <div className="text-[7px] font-mono text-center text-gray-500 leading-none">
                Weekly cycle calendar active
              </div>
              <button className="bg-[#00ff99] text-black hover:bg-[#00dd85] font-black text-[9px] py-1.5 rounded-full w-full uppercase tracking-widest shadow-lg shadow-[#00ff99]/10 cursor-pointer text-center">
                🏃 Start Workout Now
              </button>
            </div>
          </div>
        );

      case "project-aerovoyage":
        return (
          <div className="bg-[#fbfafd] text-[#1e1926] rounded-2xl p-4 font-sans shadow-xl border border-black/10 text-xs flex flex-col h-[425px] justify-between transition-all duration-300">
            <div>
              {/* Ticket Header & Destination Switcher */}
              <div className="flex justify-between items-center text-[9px] pb-1.5 border-b border-[#ece6f2]">
                <span className="font-extrabold text-[#7b2cbf] font-display">AeroVoyage Scheduler</span>
                <span className="text-[7px] bg-[#e8def8] text-[#7b2cbf] px-1 py-0.5 rounded font-mono uppercase">Cheapest</span>
              </div>

              {/* Destination inputs */}
              <div className="my-2 bg-[#f3edf7] p-2 rounded-xl relative space-y-1 text-[9px]">
                <div className="flex items-center justify-between">
                  <span className="text-[7px] text-gray-500 uppercase">From</span>
                  <span className="font-extrabold text-[#11052c] font-mono">USA / JFK NYC</span>
                </div>
                <div className="h-[1px] bg-[#e8def8]"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[7px] text-gray-500 uppercase">To Destination</span>
                  <span className="font-extrabold text-[#11052c] font-mono">QAR / Doha Hamad</span>
                </div>
                <div className="absolute right-2 top-[20%] bg-[#7b2cbf] text-white rounded-full w-4 h-4 flex items-center justify-center font-bold text-[7px] shadow-sm">
                  ⇅
                </div>
              </div>

              {/* Travel dates & passenger counts */}
              <div className="grid grid-cols-2 gap-1.5 text-[8px]">
                <div className="bg-[#f3edf7] p-1 rounded text-center">
                  <span className="text-[6px] text-gray-400 block uppercase font-mono">Departure</span>
                  <span className="font-bold text-gray-800">30 Dec, 2024</span>
                </div>
                <div className="bg-[#f3edf7] p-1 rounded text-center">
                  <span className="text-[6px] text-gray-400 block uppercase font-mono">Return</span>
                  <span className="font-bold text-gray-800">09 Feb, 2025</span>
                </div>
              </div>

              <div className="bg-[#f3edf7] p-1 mt-1.5 rounded-lg text-center text-[8px]">
                <span className="text-[6px] text-gray-400 block uppercase font-mono">Passenger Class selection</span>
                <span className="font-semibold text-gray-800">2 Adult, 1 Child (Economy)</span>
              </div>

              {/* Airline tickets options list */}
              <div className="space-y-1 max-h-[85px] overflow-y-auto mt-2 font-mono">
                {[
                  { carrier: "Emirates Airline", code: "EK-32", dur: "9h 10m Non-Stop", sum: "$720" },
                  { carrier: "Qatar Airways", code: "QR-43", dur: "5h 15m Non-Stop", sum: "$349" },
                ].map((flight, idx) => (
                  <div key={idx} className="flex justify-between items-center p-1 border border-dashed border-[#e1d5f2] rounded text-[8px] hover:bg-[#f3edf7] transition-all">
                    <div className="min-w-0">
                      <span className="font-bold text-gray-800 block truncate">{flight.carrier}</span>
                      <span className="text-[6px] text-gray-400 block truncate">{flight.dur} | {flight.code}</span>
                    </div>
                    <span className="font-bold text-[#7b2cbf] shrink-0 ml-1 font-mono">{flight.sum}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Search Flights Button */}
            <button className="bg-[#7b2cbf] text-white hover:bg-[#5a189a] text-[9px] font-bold py-2 rounded-full w-full shadow-lg cursor-pointer text-center">
              ✈️ Search Flights
            </button>
          </div>
        );

      case "project-boatscout":
        return (
          <div className="bg-[#f5fbf9] text-[#2c3d39] rounded-2xl p-4 font-sans shadow-xl border border-black/10 text-xs flex flex-col h-[425px] justify-between transition-all duration-300">
            <div>
              {/* Harbor Tab and title */}
              <div className="flex justify-between items-center text-[9px] pb-1.5 border-b border-[#def0ea]">
                <span className="font-black text-[#0f8b70] font-mono tracking-tight flex items-center gap-1">⚓ Boat Scout Wharf</span>
                <span className="text-[7px] text-gray-400 bg-[#def0ea] px-1.5 py-0.5 rounded">4 active</span>
              </div>

              {/* Fleet filter buttons */}
              <div className="grid grid-cols-2 gap-1 my-1.5 font-mono">
                <button className="bg-[#0f8b70] text-white font-bold py-1 rounded text-[7px] uppercase">Free boats</button>
                <button className="bg-white text-gray-400 border border-[#def0ea] py-1 rounded text-[7px] uppercase leading-none">Rented</button>
              </div>

              {/* Vessels grid */}
              <div className="space-y-1 max-h-[160px] overflow-y-auto pr-1">
                {[
                  { name: "Yellowfin 24 CE", desc: "White | Year: 2024", cond: "Free", bg: "bg-white" },
                  { name: "Everglades 253 Console", desc: "Blue | Year: 2024", cond: "Rented", bg: "bg-neutral-50/50" },
                  { name: "NauticStar 214 Bay", desc: "White | Year: 2024", cond: "Free", bg: "bg-white" },
                  { name: "Scout 231 XSB", desc: "White | Year: 2024", cond: "Free", bg: "bg-white" },
                ].map((boat, idx) => (
                  <div key={idx} className={`p-1.5 border border-[#def0ea] rounded-lg flex justify-between items-center text-[8px] ${boat.bg}`}>
                    <div className="min-w-0">
                      <h5 className="font-bold text-gray-800 leading-none truncate">{boat.name}</h5>
                      <p className="text-[6px] text-gray-400 mt-0.5 truncate">{boat.desc}</p>
                    </div>
                    <span className={`text-[6px] font-bold px-1 py-0.5 rounded shrink-0 ml-1 ${boat.cond === "Free" ? "bg-[#e2f5f0] text-[#0f8b70]" : "bg-red-50 text-red-500"}`}>
                      {boat.cond}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Marine Fleet add button */}
            <button className="bg-[#0f8b70] text-white hover:bg-[#0c705a] font-bold text-[9px] py-2 rounded-full w-full uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer text-center shrink-0">
              <span>➕</span> Add a Boat
            </button>
          </div>
        );

      case "project-reeldine":
        return (
          <div className="bg-[#111111] text-white rounded-2xl p-3 shadow-xl border border-white/10 text-xs flex flex-col h-[425px] justify-between transition-all duration-300 relative overflow-hidden">
            {/* Emulator header switch strip */}
            <div className="bg-white/5 -mx-3 -mt-3 px-3 py-1.5 border-b border-white/10">
              <div className="flex gap-1 overflow-x-auto no-scrollbar scroll-smooth">
                {[
                  { id: "feed", label: "Video Feed" },
                  { id: "explore", label: "Explore" },
                  { id: "details", label: "Details" },
                  { id: "map", label: "Social Map" },
                  { id: "creator", label: "Creator HUD" },
                  { id: "profile", label: "Profile" },
                  { id: "notifications", label: "Activity" },
                  { id: "onboarding", label: "Splash" },
                  { id: "settings", label: "Settings" }
                ].map((tb) => (
                  <button
                    key={tb.id}
                    onClick={() => {
                      setReelDineScreen(tb.id);
                    }}
                    className={`px-1.5 py-0.5 rounded-full text-[5.5px] font-mono whitespace-nowrap font-bold transition-all cursor-pointer ${
                      reelDineScreen === tb.id
                        ? "bg-pink-500 text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tb.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inner Content */}
            <div className="pt-2 h-full overflow-hidden">
              <motion.div
                key={reelDineScreen}
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {renderReelDineScreenContent(reelDineScreen)}
              </motion.div>
            </div>
          </div>
        );

      case "project-kidmeal":
        return (
          <div className="bg-[#f0f4ff] text-gray-800 rounded-2xl p-3 shadow-xl border border-blue-100 text-xs flex flex-col h-[425px] justify-between transition-all duration-300 relative overflow-hidden">
            {/* Emulator header switch strip */}
            <div className="bg-blue-600/5 -mx-3 -mt-3 px-3 py-1.5 border-b border-blue-100">
              <div className="flex gap-1 overflow-x-auto no-scrollbar scroll-smooth">
                {[
                  { id: "discovery", label: "Discovery" },
                  { id: "details", label: "Details" },
                  { id: "cart", label: "My Cart" },
                  { id: "login", label: "Login System" },
                  { id: "history", label: "Order History" },
                  { id: "profile", label: "Parent Profile" },
                  { id: "onboarding", label: "Splash Onboarding" }
                ].map((tb) => (
                  <button
                    key={tb.id}
                    onClick={() => {
                      setKidMealScreen(tb.id);
                    }}
                    className={`px-2 py-0.5 rounded-full text-[5.5px] font-mono whitespace-nowrap font-bold transition-all cursor-pointer ${
                      kidMealScreen === tb.id
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-gray-500 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {tb.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inner Content */}
            <div className="pt-2 h-full overflow-hidden">
              <motion.div
                key={kidMealScreen}
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {renderKidMealScreenContent(kidMealScreen)}
              </motion.div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-12"
    >
      {/* Page header */}
      <div className="border-b border-white/10 pb-8 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-[#00FF99] uppercase block mb-3">{t("projects_subtitle")}</span>
          <h1 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight leading-none text-white uppercase">
            {t("projects_title")}
          </h1>
        </div>

        {/* Dynamic Project Tabs Selector */}
        <div className="flex flex-wrap gap-1 bg-white/[0.02] border border-white/[0.08] rounded-xl p-1 w-full xl:w-auto h-fit">
          {PROJECTS_CASE_STUDIES.map((study, idx) => (
            <button
              id={`case-tab-${idx}`}
              key={study.id}
              onClick={() => setSelectedCaseIdx(idx)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition-all duration-300 cursor-pointer flex-1 xl:flex-none text-center ${
                selectedCaseIdx === idx
                  ? "bg-[#00FF99] text-black font-bold shadow-md"
                  : "text-brand-muted hover:text-white"
              }`}
            >
              {getTabLabel(study.id, idx)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Case Study Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Context details */}
        <div className="lg:col-span-8 space-y-10 font-sans">
          <div className="space-y-4">
            <span className="font-mono text-xs text-[#00FF99] uppercase flex items-center gap-2">
              <Star className="w-3.5 h-3.5 text-[#00FF99] fill-[#00FF99]/40" />
              CLIENT PARTNERSHIP HIGHLIGHT
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white tracking-tight leading-tight">
              {currentCase.title}
            </h2>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-brand-muted pt-2 border-b border-white/[0.08] pb-6">
              <div>
                CLIENT: <span className="text-white">{currentCase.client}</span>
              </div>
              <div className="hidden sm:block text-white/[0.08]">|</div>
              <div>
                TIMELINE: <span className="text-white">{currentCase.duration}</span>
              </div>
              <div className="hidden sm:block text-white/[0.08]">|</div>
              <div>
                MILESTONE: <span className="text-[#00FF99]">{currentCase.milestone}</span>
              </div>
            </div>
          </div>

          {/* Deep narrative segments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] text-[#00FF99] uppercase tracking-widest flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                The Core Challenge
              </h4>
              <p className="text-sm text-brand-muted leading-relaxed font-light">
                {currentCase.challenge}
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] text-[#00FF99] uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Our Formulation
              </h4>
              <p className="text-sm text-brand-muted leading-relaxed font-light">
                {currentCase.solution}
              </p>
            </div>
          </div>

          <div className="h-[1px] bg-white/[0.08] w-full"></div>

          {/* Core Outcomes list */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs text-[#00FF99] tracking-widest uppercase">
              DELIVERED OUTCOMES & METRICS
            </h4>
            <div className="space-y-3 max-w-2xl">
              {currentCase.outcomes.map((outcome, oIdx) => (
                <div
                  key={oIdx}
                  className="flex items-start gap-3 p-4 border border-white/[0.06] rounded-xl bg-white/[0.01] hover:border-[#00FF99]/20 transition-all duration-300"
                >
                  <span className="font-mono text-xs text-[#00FF99] font-bold bg-[#00FF99]/10 border border-[#00FF99]/15 w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                    {oIdx + 1}
                  </span>
                  <p className="text-sm text-[#cdcdcd] font-sans leading-relaxed pt-0.5 font-light">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Statistics Widget Panel & Live Mobile Emulator */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
          <div className="bg-white/[0.015] border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden group hover:border-[#00FF99]/30 transition-colors">
            {/* Visual background lines */}
            <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#00FF99]" />
                <span className="font-mono text-[10px] tracking-widest text-[#a8a8a8] uppercase">
                  Verified Data Dashboard
                </span>
              </div>
              
              <div className="h-[1px] bg-white/[0.08] w-full"></div>

              {/* Statistics Counters */}
              <div className="space-y-8">
                {currentCase.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="space-y-1.5 cursor-default">
                    <span className="font-mono text-[10px] text-brand-muted block uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-display font-medium text-white tracking-tight group-hover:text-[#00FF99] transition-colors duration-500">
                        {stat.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-[1px] bg-white/[0.08] w-full pt-2"></div>
              
              <p className="text-[9px] font-mono text-brand-muted text-center leading-relaxed italic">
                Data indexes audited and certified. Standard metrics validated directly against transaction logs.
              </p>
            </div>
          </div>

          {/* Interactive Live Screen Emulator Container */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF99] animate-ping"></span>
                <span className="font-mono text-[9px] tracking-widest text-[#a8a8a8] uppercase">Interactive Screen Preview</span>
              </div>
              <button
                onClick={() => setActiveInsightsProject(currentCase)}
                className="text-[9px] font-mono tracking-widest text-[#00FF99] hover:text-white bg-[#00FF99]/10 hover:bg-[#00FF99]/20 border border-[#00FF99]/25 px-2 py-0.5 rounded transition-all cursor-pointer flex items-center gap-1 leading-none"
              >
                <span>🔍</span> System Architecture
              </button>
            </div>
            <motion.div
              key={currentCase.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative group cursor-pointer"
              onClick={() => setActiveInsightsProject(currentCase)}
            >
              <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-20 flex flex-col items-center justify-center backdrop-blur-xxs border border-[#00FF99]/30">
                <div className="bg-neutral-950 p-4 rounded-xl border border-white/10 text-center max-w-[85%] space-y-1.5 shadow-2xl">
                  <span className="text-[#00FF99] text-base">🔍</span>
                  <h4 className="font-display text-white text-xs font-semibold">Deconstruct System Architecture</h4>
                  <p className="text-[9px] text-[#adadad] font-mono leading-relaxed">
                    Analyze tech stack, database entities, and engineering challenges solved for {currentCase.client}.
                  </p>
                  <span className="inline-block text-[8px] bg-[#00FF99]/15 text-[#00FF99] border border-[#00FF99]/30 px-2 py-0.5 rounded font-mono uppercase font-bold mt-1">
                    Launch Deep-Dive Drawer
                  </span>
                </div>
              </div>
              {renderDevicePreview(currentCase.id)}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expanded RentEase PMS Multi-Screen Gallery */}
      {currentCase.id === "project-rentease" && (
        <div className="space-y-6 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00FF99] animate-pulse"></span>
                <span className="font-mono text-xs tracking-widest text-[#00FF99] uppercase font-bold">HD Large-Format Property Suite</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight mt-1">
                Unified Ecosystem Gallery (8 Multi-Screen Boards)
              </h2>
              <p className="text-sm text-brand-muted mt-1 max-w-3xl font-light">
                Explore the complete RentEase PMS workflow in full layout detail. Click "Run Live Simulator" on any board to load it directly into the interactive, live side-panel mobile device.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { id: "dashboard", name: "1. Dashboard PMS Overview", icon: "📊" },
              { id: "portfolio", name: "2. My Property Portfolio", icon: "🏠" },
              { id: "details", name: "3. Property Details HUD", icon: "📁" },
              { id: "add", name: "4. Add New Listing Form", icon: "➕" },
              { id: "maintenance", name: "5. Active Support Tickets", icon: "🔧" },
              { id: "payments", name: "6. Ledger Payment Registry", icon: "💳" },
              { id: "messages", name: "7. Tenant Team Messaging", icon: "💬" },
              { id: "settings", name: "8. PMS System Settings", icon: "⚙️" }
            ].map((scr, sIdx) => (
              <div
                key={sIdx}
                className="bg-[#fcfbf9] text-[#2d2a26] rounded-3xl p-5 shadow-2xl border border-black/10 flex flex-col h-[520px] justify-between relative overflow-hidden transition-all duration-500 hover:border-[#849a83] group hover:-translate-y-1"
              >
                {/* Board header badge */}
                <div className="absolute top-0 inset-x-0 bg-[#849a83]/15 px-4 py-2 border-b border-[#eae4d8] flex justify-between items-center z-10 shrink-0">
                  <span className="text-[9px] font-mono font-bold text-[#4f6450] flex items-center gap-1">
                    <span>{scr.icon}</span> {scr.name}
                  </span>
                  <button
                    onClick={() => {
                      setRentEaseScreen(scr.id);
                      const activeTab = document.getElementById("case-tab-5");
                      if (activeTab) {
                        activeTab.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-[8px] bg-white border border-[#eae4d8] text-gray-500 hover:bg-[#849a83] hover:text-white px-2 py-0.5 rounded font-bold cursor-pointer transition-colors"
                  >
                    Run Live Simulator
                  </button>
                </div>

                <div className="pt-8 h-full overflow-hidden select-none">
                  {renderRentEaseScreenContent(scr.id)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expanded ReelDine Multi-Screen Gallery */}
      {currentCase.id === "project-reeldine" && (
        <div className="space-y-6 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                <span className="font-mono text-xs tracking-widest text-pink-500 uppercase font-bold">HD Large-Format Social Foodie Suite</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight mt-1">
                Unified Social Ecosystem Gallery (9 Multi-Screen Boards)
              </h2>
              <p className="text-sm text-brand-muted mt-1 max-w-3xl font-light">
                Explore the complete ReelDine workflow in full layout detail. Click "Run Live Simulator" on any board to load it directly into the interactive, live side-panel mobile device.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
            {[
              { id: "feed", name: "1. Video Review Feed", icon: "📹" },
              { id: "explore", name: "2. Food Discovery Center", icon: "🔍" },
              { id: "details", name: "3. Restaurant Details HUD", icon: "🍴" },
              { id: "map", name: "4. Social Gastronomy Map", icon: "🗺️" },
              { id: "creator", name: "5. Short Video Creator Studio", icon: "🎥" },
              { id: "profile", name: "6. User Profile Stats & Reels", icon: "👤" },
              { id: "notifications", name: "7. Live Engagement & Activity", icon: "🔔" },
              { id: "onboarding", name: "8. Welcome Splash Onboarding", icon: "👑" },
              { id: "settings", name: "9. Account Settings Panel", icon: "⚙️" }
            ].map((scr, sIdx) => (
              <div
                key={sIdx}
                className="bg-[#111111] text-white rounded-3xl p-5 shadow-2xl border border-white/10 flex flex-col h-[520px] justify-between relative overflow-hidden transition-all duration-500 hover:border-pink-500 group hover:-translate-y-1"
              >
                {/* Board header badge */}
                <div className="absolute top-0 inset-x-0 bg-white/5 px-4 py-2 border-b border-white/10 flex justify-between items-center z-10 shrink-0">
                  <span className="text-[9px] font-mono font-bold text-gray-200 flex items-center gap-1">
                    <span>{scr.icon}</span> {scr.name}
                  </span>
                  <button
                    onClick={() => {
                      setReelDineScreen(scr.id);
                      const activeTab = document.getElementById(`case-tab-${selectedCaseIdx}`);
                      if (activeTab) {
                        activeTab.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-[8px] bg-[#FF0055] text-white hover:bg-pink-650 border border-white/15 px-2 py-0.5 rounded font-bold cursor-pointer transition-colors"
                  >
                    Run Live Simulator
                  </button>
                </div>

                <div className="pt-8 h-full overflow-hidden select-none">
                  {renderReelDineScreenContent(scr.id)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expanded KidMeal Multi-Screen Gallery */}
      {currentCase.id === "project-kidmeal" && (
        <div className="space-y-6 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="font-mono text-xs tracking-widest text-blue-500 uppercase font-bold">KidMeal Nutrition & Logistics Suite</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight mt-1">
                Family Nutrition Portal Gallery (7 Large-Format Multi-Screen Boards)
              </h2>
              <p className="text-sm text-brand-muted mt-1 max-w-3xl font-light">
                Explore the complete child-friendly meals & parent-verified school logistics portal in gorgeous high-definition clarity. Click "Run Live Simulator" on any board to launch that active view instantly inside the interactive side-panel.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
            {[
              { id: "discovery", name: "1. Meal Discovery Node", icon: "🥗" },
              { id: "details", name: "2. Kid's Meal Details View", icon: "🍔" },
              { id: "cart", name: "3. Parent Checkout Cart", icon: "🛒" },
              { id: "login", name: "4. Account Access & Credentials", icon: "🔑" },
              { id: "history", name: "5. Order History & Transaction Logs", icon: "📋" },
              { id: "profile", name: "6. Parent Preferences & Profiles", icon: "👤" },
              { id: "onboarding", name: "7. Dynamic Welcome Splash Onboarding", icon: "🚀" }
            ].map((scr, sIdx) => (
              <div
                key={sIdx}
                className="bg-white text-gray-800 rounded-3xl p-5 shadow-2xl border border-blue-105 flex flex-col h-[520px] justify-between relative overflow-hidden transition-all duration-500 hover:border-blue-500 group hover:-translate-y-1"
              >
                {/* Board header badge */}
                <div className="absolute top-0 inset-x-0 bg-blue-50 px-4 py-2 border-b border-blue-100 flex justify-between items-center z-10 shrink-0">
                  <span className="text-[9px] font-mono font-black text-gray-800 flex items-center gap-1">
                    <span>{scr.icon}</span> {scr.name}
                  </span>
                  <button
                    onClick={() => {
                      setKidMealScreen(scr.id);
                      const activeTab = document.getElementById(`case-tab-${selectedCaseIdx}`);
                      if (activeTab) {
                        activeTab.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-[8px] bg-blue-600 text-white hover:bg-blue-700 border border-blue-700 px-2.5 py-0.5 rounded font-black cursor-pointer transition-colors"
                  >
                    Run Live Simulator
                  </button>
                </div>

                <div className="pt-8 h-full overflow-hidden select-none bg-[#f8faff] -mx-5 -mb-5 px-3">
                  {renderKidMealScreenContent(scr.id)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Responsive Design & HD Media Gallery Section */}
      <div className="pt-16 border-t border-white/10">
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <ProjectGallery />
        </Suspense>
      </div>

      {/* --- SPECTACULAR CLIENT ARCHITECTURE DECONSTRUCTION DRAWER --- */}
      <AnimatePresence>
        {activeInsightsProject && (() => {
          const spec = PROJECT_INSIGHTS_DATA[activeInsightsProject.id] || {
            techStack: { frontend: ["React"], backend: ["Node.js"], database: ["SQLite"], protocols: ["HTTPS"] },
            deepInsights: activeInsightsProject.solution,
            architectureDiagram: ["[Uplink Data Client] ──> [Cloud Stack]"],
            kpiMetrics: [{ label: "Efficiency", score: 95 }, { label: "Security", score: 95 }],
            engineeringChallenges: [{ title: "Scaling Bottleneck", description: "High volume concurrency spikes.", solution: "Optimized cache indexes." }]
          };

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-neutral-950/75 backdrop-blur-sm z-50 flex justify-end"
              onClick={() => setActiveInsightsProject(null)}
            >
              {/* Drawer Container Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 220 }}
                className="w-full max-w-2xl bg-neutral-950 border-l border-white/10 h-full flex flex-col shadow-2xl relative overflow-hidden text-left"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Tech grid backdrop lines */}
                <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none" />

                {/* Drawer Sticky Header */}
                <div className="relative z-10 px-6 py-5 border-b border-white/10 bg-black/60 flex justify-between items-center bg-zinc-950/45">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF55] animate-pulse" />
                      <span className="font-mono text-[8px] tracking-widest text-[#00FF99] uppercase font-bold">
                        SYSTEM ARCHITECTURE // {activeInsightsProject.client}
                      </span>
                    </div>
                    <h3 className="font-display font-medium text-lg text-white tracking-tight">
                      {activeInsightsProject.title.split(":")[0]} Deconstruction
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveInsightsProject(null)}
                    className="p-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Scrollable insights panel client area */}
                <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8 relative z-10 no-scrollbar">
                  {/* Overview Insight Card */}
                  <div className="bg-[#00FF99]/5 border border-[#00FF99]/20 rounded-2xl p-5 relative overflow-hidden">
                    <div className="absolute top-2 right-2 font-mono text-[8.5px] text-[#00FF99]/40">
                      INFO SEC_REG
                    </div>
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#00FF99]/10 border border-[#00FF99]/30 flex items-center justify-center text-lg shrink-0">
                        ⚡
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] uppercase text-[#00FF99] tracking-wider block">Architectural Formulation</span>
                        <p className="text-xs text-brand-muted leading-relaxed font-light">
                          {spec.deepInsights}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* High Vibrant Technical Stack Badges */}
                  <div className="space-y-3.5">
                    <span className="font-mono text-[10px] text-[#00FF99] uppercase tracking-widest font-black block">
                      ⚡ VERIFIED SYSTEM STACK
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* UI & Client Layer */}
                      <div className="bg-white/[0.015] border border-white/[0.06] rounded-xl p-3.5 space-y-2">
                        <span className="font-mono text-[8.5px] text-gray-400 uppercase tracking-wider block">UI & Client Foundation</span>
                        <div className="flex flex-wrap gap-1.5">
                          {spec.techStack.frontend.map((t, idx) => (
                            <span key={idx} className="bg-white/5 border border-white/10 text-white text-[9.5px] font-mono px-2 py-0.5 rounded-md hover:border-[#00FF99]/30 transition-colors">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* API Layer */}
                      <div className="bg-white/[0.015] border border-white/[0.06] rounded-xl p-3.5 space-y-2">
                        <span className="font-mono text-[8.5px] text-gray-400 uppercase tracking-wider block">API & Computation</span>
                        <div className="flex flex-wrap gap-1.5">
                          {spec.techStack.backend.map((t, idx) => (
                            <span key={idx} className="bg-white/5 border border-white/10 text-white text-[9.5px] font-mono px-2 py-0.5 rounded-md hover:border-[#00FF99]/30 transition-colors">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Databases */}
                      <div className="bg-white/[0.015] border border-white/[0.06] rounded-xl p-3.5 space-y-2">
                        <span className="font-mono text-[8.5px] text-gray-400 uppercase tracking-wider block">Databases & Buffers</span>
                        <div className="flex flex-wrap gap-1.5">
                          {spec.techStack.database.map((t, idx) => (
                            <span key={idx} className="bg-white/5 border border-[#00FF99]/10 text-white text-[9.5px] font-mono px-2 py-0.5 rounded-md hover:border-[#00FF99]/30 transition-colors">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Protocols */}
                      <div className="bg-white/[0.015] border border-white/[0.06] rounded-xl p-3.5 space-y-2">
                        <span className="font-mono text-[8.5px] text-gray-400 uppercase tracking-wider block">Protocols & Security</span>
                        <div className="flex flex-wrap gap-1.5">
                          {spec.techStack.protocols.map((t, idx) => (
                            <span key={idx} className="bg-[#00FF99]/5 border border-[#00FF99]/20 text-[#00FF99] text-[9.5px] font-mono px-2 py-0.5 rounded-md hover:border-white/30 transition-colors">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Core Challenges & Solutions */}
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-[#00FF99] uppercase tracking-widest font-black block">
                      🛠️ MISSION-CRITICAL INCIDENTS & RESOLUTION LOGS
                    </span>

                    <div className="space-y-4">
                      {spec.engineeringChallenges.map((chan, idx) => (
                        <div key={idx} className="border border-white/10 rounded-2xl overflow-hidden bg-neutral-950/45">
                          {/* Incident Header */}
                          <div className="bg-white/[0.02] border-b border-white/10 px-4 py-2.5 flex justify-between items-center">
                            <span className="font-mono text-[9px] text-[#ff0055] font-extrabold flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ff0055] animate-pulse" />
                              CHALLENGE 0{idx + 1}: {chan.title}
                            </span>
                            <span className="text-[8px] bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono px-2 py-0.5 rounded-full">
                              RESOLVED KEY
                            </span>
                          </div>

                          {/* Inner details */}
                          <div className="p-4 space-y-3">
                            <div className="space-y-1">
                              <span className="text-[8px] font-mono text-gray-400 uppercase">System Defect / Constraint</span>
                              <p className="text-xs text-[#adadad] font-light leading-relaxed">
                                {chan.description}
                              </p>
                            </div>
                            <div className="space-y-1 border-t border-white/[0.05] pt-2">
                              <span className="text-[8px] font-mono text-[#00FF99] uppercase">Engineered Resolution Strategy</span>
                              <p className="text-xs text-white font-light leading-relaxed">
                                {chan.solution}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ASCII Logic/Architecture Diagram Flowchart */}
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] text-[#00FF99] uppercase tracking-widest font-black block">
                      📁 CLIENT-SYSTEM DATA FLOW DOCUMENT
                    </span>

                    <div className="bg-black/90 border border-white/10 rounded-2xl p-4 font-mono text-[9.5px] text-emerald-400 select-none overflow-x-auto relative shadow-inner">
                      <div className="absolute top-2 right-2 text-white/20 select-none text-[8px] uppercase">
                        Active Telemetry Terminal
                      </div>

                      <div className="space-y-1.5 text-left">
                        {spec.architectureDiagram.map((line, lIdx) => (
                          <div key={lIdx} className="leading-relaxed font-mono whitespace-pre text-[9px]">
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Performance Indicators / KPIs */}
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-[#00FF99] uppercase tracking-widest font-black block">
                      📊 SYSTEM CAPABILITY INDICATORS
                    </span>

                    <div className="bg-white/[0.015] border border-white/[0.08] p-5 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
                      {spec.kpiMetrics.map((kpi, kIdx) => (
                        <div key={kIdx} className="space-y-1.5">
                          <div className="flex justify-between text-[10px] font-mono text-gray-400">
                            <span className="uppercase">{kpi.label}</span>
                            <span className="text-[#00FF99] font-bold">{kpi.score}% RATIO</span>
                          </div>
                          {/* Progress slider bar */}
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${kpi.score}%` }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                              className="h-full bg-[#00FF99] rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Sticky Drawer Footer */}
                <div className="px-6 py-4 border-t border-white/10 bg-black/60 relative z-10 flex justify-between items-center text-[7.5px] font-mono text-gray-500 uppercase bg-zinc-950/45 leading-none">
                  <span>AUDITED DECONSTRUCT SESSION MODULE</span>
                  <span>VERIFICATION: ISO_27001 SECURE</span>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </motion.div>
  );
}

// ==========================================
// DEEP ARCHITECTURE DATA PRESETS MAP
// ==========================================
const PROJECT_INSIGHTS_DATA: Record<string, {
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    protocols: string[];
  };
  deepInsights: string;
  architectureDiagram: string[];
  kpiMetrics: { label: string; score: number }[];
  engineeringChallenges: {
    title: string;
    description: string;
    solution: string;
  }[];
}> = {
  "project-ledger": {
    techStack: {
      frontend: ["React SPA", "Vite JS", "D3.js / Recharts", "Tailwind CSS"],
      backend: ["FastAPI (Python)", "Celery Task Queue", "Node.js REST API"],
      database: ["PostgreSQL (OLAP)", "Snowflake Warehouse", "dbt (Data Build Tool)", "Redis"],
      protocols: ["REST API JSON", "Secure JDBC/ODBC connections", "SSL/TLS 1.3 (E2EE)"]
    },
    deepInsights: "Engineered a unified corporate BI suite that aggregates multi-category transactional, retail, and consulting revenues. Designed high-performance analytical star schemas (Fact and Dimension models) and integrated custom SVG visualizer widgets enabling real-time dimension drilling on 10M+ rows with sub-500ms query times.",
    architectureDiagram: [
      "[Multi-Channel ERP & CRM Feed] ──(Apache Airflow DAGs)──>",
      "[Snowflake OLAP Cloud Warehouse] ──(dbt Multi-Tier Analytics Models)──>",
      "[React Custom BI Dashboard Portal] ──(Interactive Query Filters)──> [Stakeholder Viewport]"
    ],
    kpiMetrics: [
      { label: "Query Response Speed", score: 98 },
      { label: "Data Pipeline Integrity", score: 100 },
      { label: "Incremental Sync Rate", score: 98 },
      { label: "Database Normalization Index", score: 95 }
    ],
    engineeringChallenges: [
      {
        title: "Slow Cross-Division Data Aggregations",
        description: "Querying millions of historic transactions from legacy checkout endpoints caused severe dashboard compile delays and memory overflow on front-end browser states.",
        solution: "Designed partitioned clustered database indexes combined with automated incremental dbt DAG data refreshes inside the data warehouse, caching metrics in a high-speed Redis layer."
      },
      {
        title: "Disjointed Marketing Funnel Attribution",
        description: "Clerical double-entry errors and dynamic attribution leaks caused conversion reports to severely misreport organic traffic valuations.",
        solution: "Programmed a custom SQL multi-touch attribution resolution procedure applying click-proximity and first-touch heuristics, matching conversion logs with exact CRM records."
      }
    ]
  },
  "project-vitality": {
    techStack: {
      frontend: ["React SPA", "Vite JS", "D3.js / Recharts", "Tailwind CSS"],
      backend: ["Python (Pandas/NumPy)", "FastAPI", "Apache Spark"],
      database: ["TimescaleDB (Time-series)", "PostgreSQL", "Redis"],
      protocols: ["IoT Telemetry streams", "WebSockets (Real-Time)", "TLS 1.3"]
    },
    deepInsights: "Translated wild physical ingredient usage logs and supply metrics into predictive retail stock curves. Built a custom time-series regression module in Python that analyzes customer purchase patterns, seasonal spikes, and perfume oil fermentation maturation schedules to prevent supply-chain locks.",
    architectureDiagram: [
      "[Artisanal Perfume Material logs] ──(Automated Python ETL Pipelines)──>",
      "[TimescaleDB Chronos Tables] ──(Time-Series Regression & Averages)──>",
      "[Scent Lab Prediction View] ──(Incremental Stock Alerts)──> [Inventory Control Interface]"
    ],
    kpiMetrics: [
      { label: "Forecast Accuracy Model", score: 96 },
      { label: "Supply Chain Yield Ratio", score: 98 },
      { label: "Data Cleanse Efficiency", score: 99 },
      { label: "Pipeline Sync Latency", score: 94 }
    ],
    engineeringChallenges: [
      {
        title: "Unpredictable Botanical Material Yields",
        description: "Raw cambodian oud chips and steam-distilled damask roses varied in output density, skewing production batch planning formulas.",
        solution: "Established a sliding-window rolling average statistical model that auto-adjusts input requirements depending on historical weather and source logs."
      },
      {
        title: "Chaotic Inventory Capital Locks",
        description: "Understocking led to critical retail shopping cart drop-offs, while sudden overstocking tied up significant luxury manufacturing capital.",
        solution: "Programmed a customized safety stock threshold alarm that triggers automated alerts mapped directly to historical cohort demand matrices."
      }
    ]
  },
  "project-apex-vigor": {
    techStack: {
      frontend: ["React Native", "Tailwind CSS", "Framer Motion"],
      backend: ["TypeScript Nodes", "Express Core", "REST API"],
      database: ["Prisma ORM", "PostgreSQL", "Redis"],
      protocols: ["HTTPS Sec", "CDN Cache Sync", "OAuth 2.0"]
    },
    deepInsights: "Designed a clean sports brutalist meal and muscular workout companion interface. Synchronized athletic calorie intake targets directly with gym sequence metrics to dynamically adjust hydration prompts and set indicators.",
    architectureDiagram: [
      "[Lifter App UI Inputs] ──(Rest API)──> [Node Optimizer Gateway]",
      "   ├──> [PostgreSQL Core Profile Log]",
      "   └──> [Redis Active Nutritional Cache] ──> [Kinetic Dash Canvas]"
    ],
    kpiMetrics: [
      { label: "Cache Response Times", score: 97 },
      { label: "Metric Sync Speed", score: 94 },
      { label: "Typography Scalability", score: 100 },
      { label: "Database Cold-Starts", score: 91 }
    ],
    engineeringChallenges: [
      {
        title: "Dynamic Macronutrient Updates",
        description: "Re-rendering the complex circular macronutrient dials on every diet entry caused layout shifting and list stuttering on low-end phones.",
        solution: "Decoupled state layers to only re-render the concentric canvas indicators and memoized static recipe recommendations."
      },
      {
        title: "Offline Sync Collisions",
        description: "Athletes frequently log lifts underground in gym locations without reception, creating conflicting logs upon cloud re-sync.",
        solution: "Developed an atomic vector timestamp log merger to automatically resolve offline conflicts in favor of the latest localized activity state."
      }
    ]
  },
  "project-aerovoyage": {
    techStack: {
      frontend: ["React SPA", "Framer Motion", "D3.js Charts", "Tailwind"],
      backend: ["Express.js API", "C++ Scheduler Modules"],
      database: ["PostgreSQL (Timescale)", "Redis Key-Value Database"],
      protocols: ["Amadeus flight API", "JSON RPC over HTTPS", "AES-256"]
    },
    deepInsights: "Cut aviation traveler reservation drop-off rates by introducing a streamlined, dual-axis flight booking timeline. Integrated an elite private seat selector and cabin customizer operating in highly stylized dark environments.",
    architectureDiagram: [
      "[Traveler Checkout UI] ──(Amadeus API)──> [C++ Allocation Socket]",
      "  ├── [Redis Global Live Seats Store] <── Multi-User Lock",
      "  └──> [PostgreSQL Transaction Ledger] ──> [Dynamic Seat HUD]"
    ],
    kpiMetrics: [
      { label: "Checkout Conversion Rate", score: 99 },
      { label: "API Query Compilation", score: 96 },
      { label: "Scale & Load Balancer", score: 95 },
      { label: "Design Consistency Score", score: 100 }
    ],
    engineeringChallenges: [
      {
        title: "Multi-User Seat Grid Locks",
        description: "Dozens of customers simultaneously selecting the same airline seat resulted in reservation conflicts and bad checkout errors.",
        solution: "Engineered low-latency active Redis state locks that hold seat selections for exactly 10 minutes before releasing them safely."
      },
      {
        title: "Flight Delay Telemetry Overload",
        description: "Real-time updates of hundreds of flights created heavy API consumption, exceeding external service budget bounds.",
        solution: "Created an intelligent adaptive caching system that fetches flight statuses at dynamic intervals based on active search traffic."
      }
    ]
  },
  "project-boatscout": {
    techStack: {
      frontend: ["React SPA", "Vite", "Google Maps Platform", "Tailwind"],
      backend: ["Node.js Server", "Cloud Functions"],
      database: ["Firebase Firestore", "NoSQL Document Storage"],
      protocols: ["Atomic Transaction Rules", "Twilio SMS", "OAuth"]
    },
    deepInsights: "Built a beautiful maritime yacht hiring database. Formulated real-time vessel tracker layers on high-vibrant coastal maps, incorporating active GPS, tides data, and captain schedule validations.",
    architectureDiagram: [
      "[Maritime Map Interface] ──(GPS Pins)──> [Firebase SDK Client]",
      "  ├── [Atomic Security Rules Protection]",
      "  └──> [Cloud Firestore Cluster] ──(Yacht Location Index)"
    ],
    kpiMetrics: [
      { label: "Double-Booking Prevention", score: 100 },
      { label: "Map Rendering Speeds", score: 97 },
      { label: "Security & Rules Rigor", score: 98 },
      { label: "Yacht Log Retrieval", score: 94 }
    ],
    engineeringChallenges: [
      {
        title: "Double Charter Allocations",
        description: "Slow internet at sea allowed multiple yacht rental receipts for a single boat during popular weekend hours.",
        solution: "Enforced strict Firestore transaction batches, guaranteeing atomic write validations before sending rental SMS vouchers to captain phone numbers."
      },
      {
        title: "Responsive Marine Telemetry Graphs",
        description: "Live sea depth charts shifted sporadically across tablet views and maritime rugged hardware.",
        solution: "Integrated decoupled canvas observers and debounced resize managers to supply continuous visual coordinates."
      }
    ]
  },
  "project-rentease": {
    techStack: {
      frontend: ["React SPA", "Tailwind CSS", "Lucide React", "Motion"],
      backend: ["Express PMS Node", "Stripe API Integration"],
      database: ["SQLite DB (Local)", "Prisma Client Engine"],
      protocols: ["Socket.io Live Logs", "E2EE Chat SSL", "Stripe Webhooks"]
    },
    deepInsights: "Pioneered unified multi-tenant property management dashboards. Programmed automated ticket dispatching systems that downscale response latency to 4.2 hours and managed financial rental ledgers in a clean sage-green theme.",
    architectureDiagram: [
      "[Tenant / Owner Portal] ──(Socket.io Messages)──> [Express Server]",
      "  ├── [Stripe API Secure Checkout Gateway]",
      "  └──> [SQLite Database Storage] <── [Double-Entry Ledger Reconciliation]"
    ],
    kpiMetrics: [
      { label: "Ticket Dispatch Speed", score: 99 },
      { label: "Ledger Balance Accuracy", score: 100 },
      { label: "Stripe Webhook Sync", score: 98 },
      { label: "Multi-Tenant Channels", score: 96 }
    ],
    engineeringChallenges: [
      {
        title: "Ledger Double-Entry Audit",
        description: "Concurrency discrepancies during online rent transactions created incorrect payment report balance logs.",
        solution: "Programmed a strict double-entry auditing pipeline that matches Stripe charge payloads against localized database rows before verifying lease status."
      },
      {
        title: "Emergency Router Clashing",
        description: "Spike of tenant leaks or requests locked dispatching routines, leading to delay or duplicate builder routing.",
        solution: "Organized tickets using a Priority-Queue scheduling system, sending direct instant notifications to regional maintenance staff."
      }
    ]
  },
  "project-reeldine": {
    techStack: {
      frontend: ["React Web SPA", "Tailwind", "HLS.js Media Player"],
      backend: ["Node.js Media Service", "Bento4 Transcoding Core"],
      database: ["MongoDB", "Redis Live Story Caching"],
      protocols: ["HLS Adaptive Streaming", "AWS CloudFront CDN", "HTTPS"]
    },
    deepInsights: "A vibrant social gastronomy loop centering short food-review videos. Solved high CDN costs and buffering stutters on vertical mobile streams by deploying automatic progressive prefetching queues.",
    architectureDiagram: [
      "[Gastronomy Feed Mobile] ──(HLS.js Loop)──> [AWS CloudFront CDN]",
      "  ├── [S3 Video Assets Buffer Bucket]",
      "  └──> [Redis Active Play cache] ──> [Interactive Post Review Widgets]"
    ],
    kpiMetrics: [
      { label: "Video Start Buffer Time", score: 98 },
      { label: "Data Pipeline Savings", score: 94 },
      { label: "Responsive Loop rates", score: 97 },
      { label: "Crowdsourced Location Sync", score: 95 }
    ],
    engineeringChallenges: [
      {
        title: "Mobile Buffet Buffering Freeze",
        description: "High-definition video reviews crashed browser memories during rapid vertical scrolls.",
        solution: "Programmed virtual list containers that aggressively dispose of video instances outside the active viewing boundary, keeping memory usage stable."
      },
      {
        title: "Severe Mobile Network Latency",
        description: "Stutters in restaurant cellular areas caused low video quality or slow image load times.",
        solution: "Implemented adaptive resolution loops in HLS.js that scale video size down on weak cellular links while preloading text menus."
      }
    ]
  },
  "project-kidmeal": {
    techStack: {
      frontend: ["React Native Hub", "Tailwind UI Elements", "Framer Motion"],
      backend: ["Node.js API Route", "Supabase DB Core Integration"],
      database: ["Supabase PostgreSQL", "Local Storage Client"],
      protocols: ["SSL TLS 1.3", "REST endpoints", "Leaflet Geo Sync"]
    },
    deepInsights: "A colorful child nutrition and dietitian-approved meal program. Integrates strict dietary ingredient sliders, student profile logs, parent secure wallets, and delivery location drop coordinators.",
    architectureDiagram: [
      "[Parent Portal App] ──(Meal Choice)──> [Node.js Nutrition API]",
      "  ├── [Dietitian Allergen Filtration Cluster]",
      "  └──> [Supabase PostgreSQL DB] ──> [School Routing Tracker]"
    ],
    kpiMetrics: [
      { label: "Allergen Security Score", score: 100 },
      { label: "Order Placement Latency", score: 96 },
      { label: "Billing Transparency", score: 99 },
      { label: "Map Geocode Accuracy", score: 95 }
    ],
    engineeringChallenges: [
      {
        title: "Dietary Exclusion Safety Filter",
        description: "Fractions of seconds delay in dietary calculations risked allergen leaks on child meal requests.",
        solution: "Pioneered a safe dual-audit check schema that runs checks on both client-side selection widgets and the remote database layer before confirming."
      },
      {
        title: "High-Congestion Drop Routing",
        description: "School drop-off schedules creating delivery route chaos for drivers during high-traffic intervals.",
        solution: "Supplied dynamic geofencing triggers that aggregate delivery packages into cluster dropzones across specific campus gates."
      }
    ]
  }
};
