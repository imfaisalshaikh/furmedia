import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_DATA, PortfolioItem } from "../data";
import { Grid, Eye, X, Check, ArrowUpRight, Cpu, Layers, Tag } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function PortfolioSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "digital" | "physical">("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = PORTFOLIO_DATA.filter(
    (item) => filter === "all" || item.division === filter
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-12"
    >
      {/* Section Title */}
      <div className="border-b border-white/10 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-[#00FF99] uppercase block mb-3">{t("portfolio_subtitle")}</span>
          <h1 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight leading-none text-white uppercase">
            {t("portfolio_title")}
          </h1>
        </div>

        {/* Filter Selection Tabs */}
        <div className="bg-white/[0.02] border border-white/[0.08] p-1 rounded-full flex gap-1 self-start lg:self-auto">
          <button
            id="port-all"
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
              filter === "all" ? "bg-white text-black font-bold shadow-md" : "text-[#a8a8a8] hover:text-white"
            }`}
          >
            {t("portfolio_all")}
          </button>
          <button
            id="port-digital"
            onClick={() => setFilter("digital")}
            className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
              filter === "digital" ? "bg-white text-black font-bold shadow-md" : "text-[#a8a8a8] hover:text-white"
            }`}
          >
            {t("portfolio_digital")}
          </button>
          <button
            id="port-physical"
            onClick={() => setFilter("physical")}
            className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
              filter === "physical" ? "bg-white text-black font-bold shadow-md" : "text-[#a8a8a8] hover:text-white"
            }`}
          >
            {t("portfolio_physical")}
          </button>
        </div>
      </div>

      {/* Bento Curation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer border border-white/[0.07] hover:border-[#00FF99]/40 bg-white/[0.012] hover:bg-white/[0.03] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              {/* Product Card Image Frame */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#121212] border-b border-white/[0.05]">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 z-10 transition-colors duration-500"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                />

                {/* Interactive Overlay Badging */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="font-mono text-[9px] tracking-widest text-[#f4f4f4] bg-black/85 backdrop-blur-md border border-white/[0.08] px-2.5 py-1 rounded-full uppercase">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="flex items-center gap-1 text-[10px] font-mono bg-white text-black px-3 py-1.5 rounded-full font-bold shadow-lg">
                    VIEW DETAILS
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-medium text-white group-hover:text-[#00FF99] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-muted font-sans font-light leading-relaxed mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Badge tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.details.slice(0, 3).map((detail, dIdx) => (
                    <span
                      key={dIdx}
                      className="font-mono text-[9px] text-[#bcbcbc] bg-black/35 border border-white/[0.06] px-2 py-0.5 rounded"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* LUXURY SPECIFICATION OVERLAY / MODAL DIALOG */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop mesh with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            ></motion.div>

            {/* Content box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-2xl bg-[#060606] border border-white/[0.1] rounded-3xl overflow-hidden relative z-10 box-shadow mx-auto shadow-3xl"
            >
              <button
                id="close-port-modal"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full border border-white/[0.08] bg-black/85 hover:bg-white hover:text-black hover:border-white text-brand-muted transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Hero Photo inside Modal */}
              <div className="w-full h-64 relative bg-[#0e0e0e]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] to-transparent z-10"></div>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Visual labels */}
                <div className="absolute bottom-4 left-6 z-20">
                  <span className="font-mono text-[9px] tracking-widest text-[#00FF99] bg-black/80 border border-[#00FF99]/30 px-3 py-1 rounded-full uppercase">
                    {selectedItem.category}
                  </span>
                </div>
              </div>

              {/* Specs body contents */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-display font-medium text-white">
                    {selectedItem.title}
                  </h3>
                  <p className="text-[10px] font-mono text-[#00FF99] tracking-widest uppercase">
                    {selectedItem.division === "digital" ? "DIGITAL SERVICES DESIGNATION // SEO FRIENDLY" : "PHYSICAL BRAND OUTLINE // AEO HARMONIZED"}
                  </p>
                </div>

                <p className="text-sm text-[#cdcdcd] font-sans leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Molecule ingredient specs */}
                <div className="space-y-4 pt-2">
                  <span className="font-mono text-[9px] tracking-wider text-[#8a8a8a] uppercase flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#00FF99]" />
                    TECHNICAL FORMULATIONS & METRICS
                  </span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedItem.details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-3 border border-white/[0.06] bg-white/[0.01] rounded-xl p-3"
                      >
                        <span className="p-1 rounded-full border border-[#00FF99]/25 bg-black">
                          <Check className="w-3 h-3 text-[#00FF99]" />
                        </span>
                        <span className="text-xs text-brand-muted font-mono">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer specs */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#555555]">
                    FURmedia GLOBAL AUDIT CO.
                  </span>
                  <button
                    id="modal-dimiss-btn"
                    onClick={() => setSelectedItem(null)}
                    className="bg-[#00FF99] text-black hover:bg-white text-[11px] font-mono tracking-widest px-5 py-2.5 rounded-full font-bold shadow-[0_0_15px_rgba(0,255,153,0.2)] hover:shadow-none transition-all cursor-pointer"
                  >
                    DISMISS DETAILS
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
