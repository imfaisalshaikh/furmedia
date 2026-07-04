import metadata from '../metadata.json';
import { useState, useEffect, FormEvent, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion";
import { Menu, X, ArrowUpRight, CheckCircle, Smartphone, Globe, Layers, ArrowRight, Sun, Moon } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

// Components Imports
import AboutSection from "./components/AboutSection";
import CompanySection from "./components/CompanySection";
import ServicesSection from "./components/ServicesSection";
const PortfolioSection = lazy(() => import("./components/PortfolioSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
import ContactSection from "./components/ContactSection";
const OracleChatbot = lazy(() => import("./components/OracleChatbot"));


// Data Imports
import { COMPANY_PROFILE, FAQS_AEO_DATA } from "./data";

type PageID = "about" | "company" | "services" | "portfolio" | "projects" | "contact";

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: ([0.16, 1, 0.3, 1] as unknown) as any,
    },
  },
  exit: {
    opacity: 0,
    y: -24,
    filter: "blur(4px)",
    transition: {
      duration: 0.4,
      ease: ([0.16, 1, 0.3, 1] as unknown) as any,
    },
  },
};

export default function App() {
  const { language, setLanguage, t, isRtl } = useLanguage();
  const [currentPage, setCurrentPage] = useState<PageID>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme support
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const cached = localStorage.getItem("furmedia_theme");
    return cached === "light" ? "light" : "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.setAttribute("data-theme", "dark");
    }
    localStorage.setItem("furmedia_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  // Newsletter subscription state and handler
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterStatus("error");
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    setNewsletterStatus("submitting");

    setTimeout(() => {
      try {
        const existingLeadsStr = localStorage.getItem("furmedia_leads");
        const existingLeads = existingLeadsStr ? JSON.parse(existingLeadsStr) : [];
        
        if (existingLeads.includes(newsletterEmail)) {
          setNewsletterStatus("success");
          setNewsletterMessage("You are already subscribed to our list!");
          setNewsletterEmail("");
          return;
        }

        existingLeads.push(newsletterEmail);
        localStorage.setItem("furmedia_leads", JSON.stringify(existingLeads));

        setNewsletterStatus("success");
        setNewsletterMessage("Registered successfully. Welcome to FURmedia's dispatch.");
        setNewsletterEmail("");
      } catch (err) {
        setNewsletterStatus("error");
        setNewsletterMessage("An error occurred. Please try again.");
      }
    }, 1000);
  };

  // Dynamically inject AEO/SEO JSON-LD structured schemas to head
  useEffect(() => {
    // Remove if already exists
    const existingScript = document.getElementById("furmedia-aeo-schema");
    if (existingScript) {
      existingScript.remove();
    }

    // Build the rich schema structure representing both Divisions & FAQ context
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Corporation",
          "@id": "https://furmedia.co/#corporation",
          "name": "FURmedia",
          "founder": {
            "@type": "Person",
            "name": COMPANY_PROFILE.founder,
            "jobTitle": COMPANY_PROFILE.role
          },
          "foundingDate": COMPANY_PROFILE.foundedYear,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sovereign Data Offices",
            "addressLocality": "Toronto & Karachi",
            "addressCountry": "Canada & Pakistan"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": COMPANY_PROFILE.phone,
            "contactType": "corporate sales",
            "email": COMPANY_PROFILE.email
          },
          "description": "Faisal Ur Rehman Shaikh's high-fidelity dual-engine startup of digital agency solutions and physical retail formulation."
        },
        {
          "@type": "FAQPage",
          "@id": "https://furmedia.co/#faq",
          "mainEntity": FAQS_AEO_DATA.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };

    const script = document.createElement("script");
    script.id = "furmedia-aeo-schema";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // Keep synchronization
    return () => {
      const scriptToRemove = document.getElementById("furmedia-aeo-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page as PageID);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems: { label: string; page: PageID; index: string }[] = [
    { label: "ABOUT", page: "about", index: "01" },
    { label: "COMPANY", page: "company", index: "02" },
    { label: "SERVICES", page: "services", index: "03" },
    { label: "PORTFOLIO", page: "portfolio", index: "04" },
    { label: "PROJECTS", page: "projects", index: "05" },
    { label: "CONTACT", page: "contact", index: "06" },
  ];

  return (
    <div className="min-h-screen bg-bg text-foreground relative select-none font-sans overflow-x-hidden md:py-6 md:px-8">
      {/* Visual background enhancements */}
      <div className="noise-overlay" />
      <div className="fixed inset-0 grid-bg opacity-[0.3] pointer-events-none z-0" />
      
      {/* Decorative ambient spotlight mesh - upgraded to hyper-vibrant gradient aurora */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full grad-vibrant-glow blur-[130px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '10s' }} />

      {/* GLOBAL MASTER HEADER CONTAINER */}
      <header className="sticky top-0 z-40 bg-surface-dark-85 backdrop-blur-2xl border border-white/[0.07] md:rounded-full max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between shadow-3xl">
        <div id="company-logo" className="flex items-center gap-1.5 cursor-pointer" onClick={() => navigateTo("about")}>
            <span className="font-display text-xl font-bold tracking-tighter text-white hover:text-accent transition-colors duration-300">
            {t("logo")}<span className="text-accent">.</span>
          </span>
        </div>

        {/* Dynamic status pill - Upgraded for high vibrancy and ultra-minimal look */}
        <div className="hidden lg:flex items-center gap-2 border border-white/[0.07] bg-surface-dark-85 px-4 py-1.5 rounded-full text-[9px] font-mono tracking-widest text-[#a8a8a8]">
          <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,255,153,0.8)] animate-pulse inline-block" />
          {t("status_pill")}
        </div>

        {/* Nav list desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                id={`nav-${item.page}`}
                key={item.page}
                onClick={() => navigateTo(item.page)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-[#00FF99] font-bold" : "text-[#9e9e9e] hover:text-[#ffffff]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="desktop-nav-indicator"
                    className="absolute inset-0 bg-white/[0.04] border border-white/5 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t(`nav_${item.page}`)}</span>
              </button>
            );
          })}
        </nav>

        {/* Right tools: Theme Toggle + Language Selector + Mobile menu */}
        <div className="flex items-center gap-3">
          {/* Day/Night Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="p-1.5 rounded-full border border-white/[0.08] bg-[#0c0c0c]/90 hover:bg-white/[0.05] text-[#9e9e9e] hover:text-accent transition-all duration-300 cursor-pointer flex items-center justify-center shadow-inner"
            title={theme === "dark" ? "Switch to Day Sight" : "Switch to Night Sight"}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5 text-accent" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-[#00A360]" />
            )}
          </button>

          {/* Subtle Language Selector */}
          <div className="flex items-center gap-0.5 border border-white/[0.06] bg-[#0c0c0c]/90 p-1 rounded-full text-[9px] font-mono tracking-tight shadow-inner">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full transition-all duration-300 cursor-pointer ${
                language === "en" ? "bg-white text-black font-extrabold" : "text-[#8a8a8a] hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("ar")}
              className={`px-2 py-0.5 rounded-full transition-all duration-300 cursor-pointer ${
                language === "ar" ? "bg-accent text-black font-extrabold" : "text-[#8a8a8a] hover:text-white"
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2 py-0.5 rounded-full transition-all duration-300 cursor-pointer ${
                language === "fr" ? "bg-white text-black font-extrabold" : "text-[#8a8a8a] hover:text-white"
              }`}
            >
              FR
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden">
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-brand-border rounded-xl bg-black text-white focus:outline-none hover:border-accent-40 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE EXPANSIVE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8"
          >
            {/* Header frame */}
            <div className="flex justify-between items-center border-b border-brand-border pb-6 mt-4">
              <span className="font-display font-medium text-lg">FURmedia NAVIGATION</span>
              <button
                id="mobile-close-drawer"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 border border-brand-border rounded-xl text-brand-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="flex flex-col gap-8 my-auto pl-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    id={`mob-nav-${item.page}`}
                    key={item.page}
                    onClick={() => navigateTo(item.page)}
                    className="text-left group flex items-baseline gap-4 cursor-pointer"
                  >
                    <span className="font-mono text-xs text-brand-beige">{item.index}.</span>
                    <span
                      className={`text-4xl font-display font-medium tracking-tight group-hover:text-[#00FF99] transition-colors ${
                        isActive ? "text-[#00FF99]" : "text-[#5e5e5e]"
                      }`}
                    >
                      {t(`nav_${item.page}`)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Foot note */}
            <div className="border-t border-brand-border pt-6 text-center space-y-2">
              <span className="font-mono text-[9px] text-[#555555]">FAISAL UR REHMAN SHAIKH, DIRECTOR</span>
              <p className="text-[10px] text-brand-muted">Canada &bull; Pakistan</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CORE PAGES STAGE CANVAS */}
      <main className="max-w-7xl mx-auto px-6 py-16 relative z-10 min-h-[calc(100vh-160px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {currentPage === "about" && (
              <AboutSection onNavigate={navigateTo} />
            )}
            {currentPage === "company" && (
              <CompanySection />
            )}
            {currentPage === "services" && (
              <ServicesSection />
            )}
            {currentPage === "portfolio" && (
              <Suspense fallback={<div className="min-h-[200px]" />}> 
                <PortfolioSection />
              </Suspense>
            )}
            {currentPage === "projects" && (
              <Suspense fallback={<div className="min-h-[200px]" />}> 
                <ProjectsSection />
              </Suspense>
            )}
            {currentPage === "contact" && (
              <ContactSection />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* HIGH-END AWWWARDS STYLE FOOTER GRID */}
      <footer className="border-t border-brand-border max-w-7xl mx-auto px-6 py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 bg-black/20 rounded-2xl">
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold leading-none text-white select-text uppercase tracking-tight">
              Let&apos;s<br />
              <span className="font-serif italic font-normal text-brand-beige lowercase">talk.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
               id="footer-action-start"
               onClick={() => navigateTo("contact")}
               className="group shrink-0 w-16 h-16 rounded-full border border-white hover:border-brand-beige bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6 group-hover:-rotate-45 transition-transform" />
            </button>
            <div className="space-y-0.5">
               <span className="font-mono text-[9px] text-brand-muted uppercase block">Start a project</span>
               <span className="font-mono text-xs text-white">WE ARE CURRENTLY AVAILABLE TODAY</span>
            </div>
          </div>
          <div>
            <a href={`mailto:${COMPANY_PROFILE.email}`} className="font-sans text-lg text-brand-beige hover:border-b hover:border-brand-beige transition-all">
              {COMPANY_PROFILE.email}
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-2 gap-8 lg:pt-4">
          {/* Social connections */}
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest text-[#5e5e5e] uppercase block">SOCIALS</span>
            <ul className="space-y-2 text-xs font-mono text-brand-muted">
              <li>
                <a href="#instagram" className="hover:text-white flex items-center justify-between group">
                  Instagram <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#twitter" className="hover:text-white flex items-center justify-between group">
                  Twitter / X <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/imfaisalshaikh/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center justify-between group">
                  LinkedIn <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#awwwards" className="hover:text-white flex items-center justify-between group">
                  Awwwards <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Sitemap coordinates */}
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest text-[#5e5e5e] uppercase block">SITEMAP</span>
            <ul className="space-y-2 text-xs font-mono text-brand-muted">
              {navItems.map((item) => (
                <li key={item.page}>
                  <button onClick={() => navigateTo(item.page)} className="hover:text-white text-left uppercase cursor-pointer">
                    {t(`nav_${item.page}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NEWSLETTER SIGN-UP & SIGNATURE GRID COLUMN */}
        <div className="lg:col-span-4 flex flex-col justify-between pt-12 lg:pt-0 lg:border-l border-brand-border lg:pl-8 space-y-8">
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-brand-muted uppercase block tracking-widest">SOVEREIGN BRIEFING</span>
            <h3 className="font-display font-medium text-lg leading-tight text-white uppercase">Subscribe to our dispatch</h3>
            <p className="text-xs text-[#a8a8a8] font-sans leading-relaxed">
              Receive bespoke technological analyses and physically formulated scent announcements.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-2">
              <div className="flex items-center gap-2 border-b border-white/20 focus-within:border-brand-beige transition-colors py-1.5">
                <input
                  type="email"
                  placeholder="name@executive.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  disabled={newsletterStatus === "submitting"}
                  className="bg-transparent text-sm w-full outline-none placeholder:text-white/20 text-white font-mono"
                  required
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "submitting"}
                  className="text-white hover:text-brand-beige transition-colors p-1"
                  aria-label="Subscribe"
                >
                  <ArrowRight className={`w-4 h-4 transform transition-transform ${newsletterStatus === "submitting" ? "animate-ping" : "hover:translate-x-0.5"}`} />
                </button>
              </div>

              {newsletterStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-mono text-green-400 mt-1"
                >
                  {newsletterMessage}
                </motion.p>
              )}

              {newsletterStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-mono text-red-500 mt-1"
                >
                  {newsletterMessage}
                </motion.p>
              )}
            </form>
          </div>

          <div className="space-y-6 pt-4 border-t border-white/5">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-brand-muted uppercase block">FOUNDER / DIRECTOR</span>
              <p className="text-sm font-display text-white">{COMPANY_PROFILE.founder}</p>
              <p className="text-xs font-mono text-brand-beige">Canada &bull; Pakistan</p>
            </div>
            
            <div className="space-y-1 font-mono text-[9px] text-[#555555] leading-relaxed">
              <p>&copy; {new Date().getFullYear()} FURmedia Ltd.</p>
              <p>All sovereign data indexed perfectly.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Executive AI Oracle Chatbot */}
      <Suspense fallback={null}>
        <OracleChatbot />
      </Suspense>
    </div>
  );
}
