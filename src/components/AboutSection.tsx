import { motion } from "motion/react";
import { COMPANY_PROFILE } from "../data";
import { Calendar, MapPin, Award, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  const { t, isRtl } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-16"
    >
      {/* Page Title Header */}
      <div className={`border-b border-white/10 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8 ${isRtl ? "text-right" : ""}`}>
        <div>
          <span className="font-mono text-[10px] tracking-widest text-[#00FF99] uppercase block mb-3">{t("about_genesis")}</span>
          <h1 className="huge-type text-white font-bold max-w-xl">
            {t("logo")}<span className="text-[#00FF99]">.</span>
          </h1>
        </div>
        <div className={`max-w-sm space-y-4 ${isRtl ? "lg:text-left" : "lg:text-right"}`}>
          <p className="font-serif italic text-2xl md:text-3xl text-[#00FF99]">
            {t("about_we_craft")}
          </p>
          <p className="text-xs font-mono text-[#a8a8a8] leading-relaxed uppercase tracking-wider">
            {COMPANY_PROFILE.hq} HQ<br />
            {t("about_hq_curation")}
          </p>
        </div>
      </div>

      {/* Main Philosophy Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <h2 className="text-xl md:text-3xl font-display tracking-tight leading-relaxed max-w-3xl">
            {t("about_brief")}
          </h2>
          
          <div className="h-[1px] bg-brand-border w-full my-6"></div>

          <div className="space-y-6 text-[#c4c4c4] text-base leading-relaxed font-sans max-w-2xl">
            <p>
              {t("about_under_directorship")}
            </p>
            <p>
              By fusing advanced search intelligence, highly-performant state architectures, and halal, toxin-free physical formulation, we capture user interest across both natural queries and AI recommendation chains. Discover how our dual divisions create a continuous return cycle.
            </p>
          </div>

          {/* Call to action */}
          <div className="pt-4 flex flex-wrap gap-4">
            <button
              id="cta-serv-from-about"
              onClick={() => onNavigate("services")}
              className="group flex items-center gap-2 border border-white px-6 py-3 rounded-full text-sm font-mono tracking-wider hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              {t("about_explore")}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button
              id="cta-cont-from-about"
              onClick={() => onNavigate("contact")}
              className="flex items-center gap-2 border border-brand-border hover:border-brand-muted px-6 py-3 rounded-full text-sm font-mono tracking-wider text-brand-muted hover:text-white transition-all duration-300 cursor-pointer"
            >
              {t("about_initiate")}
            </button>
          </div>
        </div>

        {/* Director Panel Info */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#0e0e0e] border border-brand-border rounded-2xl p-6 relative overflow-hidden group">
            {/* Soft decorative background grid */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-full border border-brand-border bg-black/50 flex items-center justify-center font-serif text-lg italic text-[#00FF99]">
                F
              </div>
              <div>
                <span className="font-mono text-xs text-brand-muted block uppercase">{t("leadership")}</span>
                <h3 className="text-lg font-display font-medium text-white">{COMPANY_PROFILE.founder}</h3>
                <p className="text-xs font-mono text-brand-beige">{COMPANY_PROFILE.role}</p>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed font-sans mt-4 italic border-l-2 border-[#00FF99] pl-3">
                {t("about_sophistication")}
              </p>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-brand-border rounded-xl p-4 space-y-2">
              <Calendar className="w-4 h-4 text-brand-beige" />
              <span className="font-mono text-[10px] text-brand-muted uppercase block">ESTABLISHED</span>
              <span className="text-lg font-display font-medium text-white">{COMPANY_PROFILE.foundedYear}</span>
            </div>
            <div className="border border-brand-border rounded-xl p-4 space-y-2">
              <Award className="w-4 h-4 text-brand-beige" />
              <span className="font-mono text-[10px] text-brand-muted uppercase block">DIVISIONS</span>
              <span className="text-lg font-display font-medium text-white">02 Dual Engine</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
