import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA, ServiceDetail } from "../data";
import { Layers, Globe, Cpu, Compass, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();
  const [selectedDivision, setSelectedDivision] = useState<"all" | "digital" | "physical">("all");

  const filteredServices = SERVICES_DATA.filter(
    (service) => selectedDivision === "all" || service.division === selectedDivision
  );

  // Helper to map icons to service ids
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "business-intelligence":
        return <Layers className="w-5 h-5 text-[#00FF99]" />;
      case "database-sql":
        return <Globe className="w-5 h-5 text-[#00FF99]" />;
      case "python-wrangling":
        return <Cpu className="w-5 h-5 text-[#00FF99]" />;
      case "excel-spreadsheet":
        return <Compass className="w-5 h-5 text-[#00FF99]" />;
      default:
        return <Layers className="w-5 h-5 text-[#00FF99]" />;
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
      {/* Page Title */}
      <div className="border-b border-white/10 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-accent uppercase block mb-3">{t("services_subtitle")}</span>
          <h1 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight leading-none text-white uppercase">
            {t("services_title")}
          </h1>
        </div>

        {/* Modular Switchers */}
        <div className="bg-white/[0.02] border border-white/[0.08] p-1 rounded-full flex gap-1 h-fit">
          <button
            id="srv-tab-all"
            onClick={() => setSelectedDivision("all")}
            className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
              selectedDivision === "all"
                ? "bg-white text-black font-bold shadow-lg"
                : "text-brand-muted hover:text-white"
            }`}
          >
            {t("portfolio_all")}
          </button>
          <button
            id="srv-tab-digital"
            onClick={() => setSelectedDivision("digital")}
            className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
              selectedDivision === "digital"
                ? "bg-white text-black font-bold shadow-lg"
                : "text-brand-muted hover:text-white"
            }`}
          >
            {t("services_digital_btn")}
          </button>
          <button
            id="srv-tab-physical"
            onClick={() => setSelectedDivision("physical")}
            className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
              selectedDivision === "physical"
                ? "bg-white text-black font-bold shadow-lg"
                : "text-brand-muted hover:text-white"
            }`}
          >
            {t("services_physical_btn")}
          </button>
        </div>
      </div>

      {/* Grid distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => (
            <motion.div
              layout
              key={service.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group border border-white/[0.07] hover:border-accent-40 rounded-2xl p-6 bg-white/[0.012] hover:bg-white/[0.03] flex flex-col justify-between relative overflow-hidden transition-all duration-300"
            >
              {/* Subtle visual grid background */}
              <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                {/* Header card info */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl border border-white/[0.08] bg-black/60 flex items-center justify-center font-mono">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-mono text-[9px] tracking-widest text-[#a8a8a8] uppercase">
                    {service.division === "digital" ? "DIGITAL DIVISION" : "PHYSICAL BRAND"}
                  </span>
                </div>

                {/* Service core description */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-display font-medium text-white group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  <p className="font-mono text-xs text-accent italic opacity-90">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-[#bcbcbc] font-sans leading-relaxed pt-2">
                    {service.description}
                  </p>
                </div>

                {/* Bullet details */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[9px] tracking-widest text-brand-muted uppercase block">
                    KEY SPECIFICATIONS
                  </span>
                  <ul className="space-y-2">
                    {service.keyAspects.map((aspect, aspectIdx) => (
                      <li key={aspectIdx} className="flex items-start gap-2.5 text-xs text-[#dcdcdc]">
                          <span className="mt-0.5 p-0.5 rounded-full border border-white/[0.08] bg-black inline-block">
                          <Check className="w-2.5 h-2.5 text-accent" />
                        </span>
                        <span className="leading-snug">{aspect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Metric indicator */}
              {service.metrics && (
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                  <span className="font-mono text-[9px] tracking-widest text-[#888888] uppercase">
                    Verified Metric Index
                  </span>
                  <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider bg-accent-10 border border-accent-20 px-2.5 py-1 rounded-full">
                    {service.metrics}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
