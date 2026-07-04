import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_PROFILE } from "../data";
import { Send, MapPin, Mail, Phone, Clock, FileCheck, CheckCircle2, RefreshCw } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "app-development",
    scope: "enterprise",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [ticket, setTicket] = useState<{
    id: string;
    timestamp: string;
    status: string;
  } | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);

    // Simulate luxury API dispatching delay
    setTimeout(() => {
      const randomTicketId = "FM-" + Math.floor(100000 + Math.random() * 900000);
      const now = new Date();
      setTicket({
        id: randomTicketId,
        timestamp: now.toLocaleString(),
        status: "SCHEDULED FOR AUDIT",
      });
      setSubmitting(false);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      interest: "app-development",
      scope: "enterprise",
      message: "",
    });
    setTicket(null);
  };

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
        <span className="font-mono text-[10px] tracking-widest text-accent uppercase block mb-3">{t("contact_subtitle")}</span>
        <h1 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight leading-none text-white uppercase">
          {t("contact_title")}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: INTERACTIVE FORM OR SUCCESS TICKET */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!ticket ? (
              <motion.form
                id="contact-form"
                key="contact-form"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label id="lbl-name" htmlFor="client-name" className="font-mono text-[10px] text-brand-muted uppercase tracking-wider block">
                      Client Name &bull; Standard Identity
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Vance"
                      className="w-full bg-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] focus:border-accent transition-colors rounded-xl px-4 py-3.5 text-sm text-white placeholder-brand-muted focus:outline-none"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label id="lbl-email" htmlFor="client-email" className="font-mono text-[10px] text-brand-muted uppercase tracking-wider block">
                      Email Address &bull; Direct Secure
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. vance@holding.co"
                      className="w-full bg-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] focus:border-accent transition-colors rounded-xl px-4 py-3.5 text-sm text-white placeholder-brand-muted focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service interest field */}
                  <div className="space-y-2">
                    <label id="lbl-interest" htmlFor="client-interest" className="font-mono text-[10px] text-brand-muted uppercase tracking-wider block font-light">
                      Enterprise Segment Interest
                    </label>
                    <select
                      id="client-interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-dark-080808 border border-white/[0.08] hover:border-white/[0.15] focus:border-accent transition-colors rounded-xl px-4 py-3.5 text-sm text-muted focus:outline-none cursor-pointer"
                    >
                      <option value="app-development">Digital: App Systems (iOS & Android)</option>
                      <option value="seo-marketing">Digital: SEO, Growth & Paid Media</option>
                      <option value="funnel-analytics">Digital: Funnel Strategy & Conversion</option>
                      <option value="fragrance-pure">Physical: Halal Fragrances Selection</option>
                      <option value="fashion-culture">Physical: Bespoke Luxury Tailoring</option>
                      <option value="cosmetics-clean">Physical: Clean Vegan Cosmetic Line</option>
                      <option value="interior-design">Physical: Architectural Curation</option>
                      <option value="health-wellness">Physical: Adaptogen Vitality Calendar</option>
                    </select>
                  </div>

                  {/* Scope scale field */}
                  <div className="space-y-2">
                    <label id="lbl-scope" htmlFor="client-scope" className="font-mono text-[10px] text-brand-muted uppercase tracking-wider block">
                      Scale of Intended Audit
                    </label>
                    <select
                      id="client-scope"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full bg-dark-080808 border border-white/[0.08] hover:border-white/[0.15] focus:border-accent transition-colors rounded-xl px-4 py-3.5 text-sm text-muted focus:outline-none cursor-pointer"
                    >
                      <option value="enterprise">Global Enterprise Overhaul</option>
                      <option value="brand">Single Brand Architecture Launch</option>
                      <option value="consultation">One-on-One Strategic session with Faisal Shaikh</option>
                      <option value="partnership">Venture Partnership inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Scope requirements text */}
                <div className="space-y-2">
                  <label id="lbl-msg" htmlFor="client-msg" className="font-mono text-[10px] text-brand-muted uppercase tracking-wider block">
                    Bespoke Project Description & Core Coordinates
                  </label>
                  <textarea
                     id="client-msg"
                     rows={5}
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                     placeholder="Briefly describe what challenges details exist, the physical/digital specifications, or fragrance/materials criteria..."
                     className="w-full bg-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] focus:border-accent transition-colors rounded-xl px-4 py-3.5 text-sm text-white placeholder-brand-muted focus:outline-none resize-none font-sans"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  id="submit-contact"
                  type="submit"
                  disabled={submitting}
                  className="w-full group flex items-center justify-center gap-2 border border-accent-20 bg-accent-10 text-accent hover:bg-accent hover:text-black hover:border-accent px-6 py-4 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer shadow-[0_0_15px_rgba(0,255,153,0.05)] hover:shadow-[0_0_20px_rgba(0,255,153,0.2)] font-bold"
                >
                  {submitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-inherit animate-pulse" />
                      {t("contact_dispatching")}
                    </>
                  ) : (
                    <>
                      {t("contact_submit_btn")}
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform text-inherit" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              // TICKET SUCCESS RECEIPT
              <motion.div
                key="success-ticket"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="border border-accent-20 rounded-3xl p-6 md:p-8 bg-black/60 relative overflow-hidden"
              >
                {/* Background watermarks */}
                <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none"></div>

                <div className="relative z-10 space-y-6">
                  {/* Header visual */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 border border-accent-20 bg-black/40 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-display font-medium text-white">Inquiry Dispatched</h4>
                        <span className="font-mono text-[9px] text-[#8a8a8a] uppercase">FURmedia SECURE INBOX V3</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-accent tracking-wider bg-white/5 border border-accent-20 px-3 py-1 rounded-full uppercase">
                      CONFIRMED
                    </span>
                  </div>

                  <div className="h-[1px] bg-white/[0.08] w-full"></div>

                  <p className="text-sm text-[#cecece] font-sans leading-relaxed">
                    Thank you, <strong className="text-[#00FF99] font-medium">{formData.name}</strong>. Your corporate discovery criteria sheet has been encrypted and securely delivered to Director <strong>{COMPANY_PROFILE.founder}</strong>. A response token will be issued to <strong className="text-white">{formData.email}</strong> within 12 standard business hours.
                  </p>

                  {/* Corporate receipt specifications */}
                  <div className="border border-white/[0.08] bg-black/50 p-5 rounded-2xl space-y-4 font-mono text-[11px] leading-relaxed text-brand-muted">
                    <div className="flex justify-between">
                      <span>AUDIT TOKEN INDEX:</span>
                      <span className="text-[#00FF99] font-semibold">{ticket.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>DISPATCH TIME STAMP:</span>
                      <span className="text-[#c1c1c1]">{ticket.timestamp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SEGMENT INTEREST:</span>
                      <span className="text-[#00FF99] uppercase">{formData.interest.replace("-", " ")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SCALE CLASSIFICATION:</span>
                      <span className="text-white uppercase">{formData.scope}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PRIORITY ROUTING:</span>
                      <span className="text-[#00FF99] font-semibold uppercase">DIRECT_DIRECTOR_DELEGATE</span>
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/[0.08] w-full"></div>

                  {/* Reset trigger */}
                  <button
                    id="reset-form"
                    onClick={resetForm}
                    className="w-full flex items-center justify-center gap-2 border border-white/[0.08] hover:border-[#00FF99]/40 px-4 py-3 rounded-xl text-xs font-mono tracking-widest text-[#a8a8a8] hover:text-[#00FF99] transition-all cursor-pointer"
                  >
                    <FileCheck className="w-4 h-4" />
                    SUBMIT REPETITIVE INQUIRY
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: CORPORATE COORDINATES */}
        <div className="lg:col-span-5 space-y-8">
          {/* Coordinates Card */}
          <div className="border border-white/[0.08] rounded-2xl p-6 bg-white/[0.015] space-y-8">
            <div className="space-y-1">
              <h3 className="font-display font-medium text-white text-lg">FURmedia Global HQ</h3>
              <p className="text-xs text-brand-muted font-mono uppercase">Direct Communications Center</p>
            </div>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 border border-white/[0.06] bg-black rounded-xl">
                  <MapPin className="w-4 h-4 text-[#00FF99]" />
                </div>
                <div className="space-y-1 font-sans">
                  <span className="font-mono text-[10px] text-brand-muted uppercase block">Our Coordinates</span>
                  <p className="text-sm text-[#dadada] leading-relaxed font-light">
                    19 Shaw St, Regina, SK, Canada<br />
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 border border-white/[0.06] bg-black rounded-xl">
                  <Mail className="w-4 h-4 text-[#00FF99]" />
                </div>
                <div className="space-y-1 font-sans">
                  <span className="font-mono text-[10px] text-brand-muted uppercase block">Secure Email Inbox</span>
                  <a href={`mailto:${COMPANY_PROFILE.email}`} className="text-sm text-[#00FF99] hover:underline font-mono">
                    {COMPANY_PROFILE.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 border border-white/[0.06] bg-black rounded-xl">
                  <Phone className="w-4 h-4 text-[#00FF99]" />
                </div>
                <div className="space-y-1 font-sans">
                  <span className="font-mono text-[10px] text-brand-muted uppercase block">Corporate Switchboard</span>
                  <a href={`tel:${COMPANY_PROFILE.phone.replace(/\s+/g, '')}`} className="text-sm text-[#dadada] hover:underline font-mono">
                    {COMPANY_PROFILE.phone}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 border border-white/[0.06] bg-black rounded-xl">
                  <Clock className="w-4 h-4 text-[#00FF99]" />
                </div>
                <div className="space-y-1 font-sans">
                  <span className="font-mono text-[10px] text-brand-muted uppercase block">Activity Index Hours</span>
                  <p className="text-sm text-brand-muted leading-relaxed font-light font-mono">
                    Mon &mdash; Fri: 08:30 &mdash; 18:00 GMT-6
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slogan footnote */}
          <div className="border border-white/[0.06] rounded-2xl p-6 bg-gradient-to-b from-white/[0.015] to-transparent text-center space-y-2">
            <span className="font-mono text-[9px] text-[#424242] uppercase tracking-widest block">&infin; DISCOVERABLE BRAND PLATFORM &infin;</span>
            <p className="text-xs text-brand-muted font-sans font-light leading-relaxed italic max-w-xs mx-auto">
              Our structures are completely transparently indexed. Answer engines index these details seamlessly.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
