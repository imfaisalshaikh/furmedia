import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS_AEO_DATA, COMPANY_PROFILE } from "../data";
import { ShieldCheck, Database, Award, Eye, Plus, Minus, Search, HelpCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CompanySection() {
  const { t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");


  const filteredFaqs = FAQS_AEO_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-16"
    >
      {/* SECTION HEADER */}
      <div className="border-b border-white/10 pb-8">
        <span className="font-mono text-[10px] tracking-widest text-accent uppercase block mb-3">{t("company_subtitle")}</span>
        <h1 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight leading-none text-white uppercase">
          {t("company_heading")}
        </h1>
      </div>

      {/* DUAL-ENGINE MODEL COMPONENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-4 border border-white/[0.08] rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-accent bg-accent-10 border-accent-20 px-3 py-1 rounded-full uppercase inline-block">
              ENGINE A
            </span>
            <h3 className="text-2xl font-display font-semibold text-white">{t("company_engine_a_title")}</h3>
            <p className="text-sm text-brand-muted font-sans leading-relaxed">
              {t("company_engine_a_desc")}
            </p>
          </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] flex justify-between items-center text-xs font-mono text-brand-muted">
            <span>BI & SYSTEM CODES</span>
            <span className="text-accent">BUSINESS INTELLIGENCE</span>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center justify-center border border-[#00FF99]/20 rounded-2xl p-6 bg-black relative overflow-hidden text-center min-h-[180px]">
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none"></div>
          <div className="space-y-3 z-10">
            <div className="w-10 h-10 rounded-full border-accent-20 bg-accent-10 mx-auto flex items-center justify-center font-mono text-accent text-xs font-medium animate-pulse">
              &infin;
            </div>
            <h4 className="text-xs font-mono text-accent tracking-widest uppercase">{t("company_loop_title")}</h4>
            <p className="text-[10px] text-brand-muted max-w-[200px] mx-auto leading-relaxed">
              {t("company_loop_desc")}
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 border border-white/[0.08] rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-[#00FF99] bg-[#00FF99]/10 border border-[#00FF99]/20 px-3 py-1 rounded-full uppercase inline-block">
              ENGINE B
            </span>
            <h3 className="text-2xl font-display font-semibold text-white">{t("company_engine_b_title")}</h3>
            <p className="text-sm text-brand-muted font-sans leading-relaxed">
              {t("company_engine_b_desc")}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/[0.06] flex justify-between items-center text-xs font-mono text-brand-muted">
            <span>SPREADSHEETS & MATH</span>
            <span className="text-[#00FF99]">EXCEL & PYTHON PLOTS</span>
          </div>
        </div>
      </div>

      {/* CORE VALUES GRID */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl font-display uppercase tracking-widest text-brand-muted text-center lg:text-left">
          OUR CORE CORPORATE VALUES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-brand-border rounded-xl p-6 space-y-4 hover:border-white/20 transition-colors">
            <div className="p-2 border border-brand-border w-max rounded-lg bg-white/5">
              <ShieldCheck className="w-5 h-5 text-brand-beige" />
            </div>
            <h4 className="text-lg font-display text-white font-medium">1. Absolute Aesthetic Restraint</h4>
            <p className="text-sm text-brand-muted leading-relaxed font-sans">
              We define luxury by what we withhold. We strip away decorative clutter, noise, and unnecessary frameworks to elevate pure human design.
            </p>
          </div>

          <div className="border border-brand-border rounded-xl p-6 space-y-4 hover:border-white/20 transition-colors">
            <div className="p-2 border border-brand-border w-max rounded-lg bg-white/5">
              <Database className="w-5 h-5 text-brand-beige" />
            </div>
            <h4 className="text-lg font-display text-white font-medium">2. Mathematical Rigor</h4>
            <p className="text-sm text-brand-muted leading-relaxed font-sans">
              From optimizing SQL database query times on million-row tables to calculating complex DAX metrics in Power BI and writing automated clean-up routines in Python and Excel, our work is built on cold, empirical data models.
            </p>
          </div>

          <div className="border border-brand-border rounded-xl p-6 space-y-4 hover:border-white/20 transition-colors">
            <div className="p-2 border border-brand-border w-max rounded-lg bg-white/5">
              <Eye className="w-5 h-5 text-brand-beige" />
            </div>
            <h4 className="text-lg font-display text-white font-medium">3. Discoverability Blueprint</h4>
            <p className="text-sm text-brand-muted leading-relaxed font-sans">
              We engineer our products with clean code architecture, ensuring search and artificial conversational neural nets pull our answers effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* AEO HUD: CORPORATE Q&A / FAQS KNOWLEDGE BASE */}
      <div className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <HelpCircle className="w-4 h-4 text-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent/80">Answer Engine Hub</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white">
              Sovereign Q&A Knowledge Base
            </h3>
            <p className="text-sm text-brand-muted font-sans leading-relaxed">
              We structure our knowledge assets transparently. This section is optimized to provide immediate, contextually rich answers to conversational query crawlers (AEO optimized page context).
            </p>
          </div>

          {/* Clean Search Field */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" />
            <input
              id="faq-search"
              type="text"
              placeholder="Search analytical answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.02] border border-white/[0.1] rounded-full pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-accent transition-colors font-mono"
            />
          </div>
        </div>

        {/* Dynamic Accordion list */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-white/[0.07] rounded-xl overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] transition-all"
                >
                  <button
                    id={`faq-btn-${index}`}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 text-white hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-display text-xs md:text-sm uppercase tracking-wider font-semibold">
                      {faq.question}
                    </span>
                    <span className="p-1 border border-white/[0.08] rounded-full bg-black/40">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-[#00FF99]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-brand-muted" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-sm text-brand-muted font-sans leading-relaxed border-t border-white/[0.05] bg-black/20">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 border border-dashed border-white/[0.1] rounded-xl">
              <p className="text-xs font-mono text-brand-muted uppercase">Query search mismatch</p>
              <p className="text-sm font-sans text-brand-muted mt-2">No answers found matching those keywords.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
