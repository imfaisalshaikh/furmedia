import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "ar" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    logo: "FURmedia",
    status_pill: "DATA PORTFOLIO IN FOCUS • EST. 2022",
    nav_about: "ABOUT",
    nav_company: "COMPANY",
    nav_services: "SERVICES",
    nav_portfolio: "PORTFOLIO",
    nav_projects: "PROJECTS",
    nav_contact: "CONTACT",
    language: "Language",
    
    // About Section
    about_genesis: "01 / GENESIS • EST. 2022",
    about_we_craft: "We engineer high-performance data systems.",
    about_hq_curation: "Founder & Director Faisal Ur Rehman Shaikh.",
    about_explore: "EXPLORE SPECIFICATIONS",
    about_initiate: "INITIATE DISCOVERY",
    about_brief: "FURmedia aligns the absolute analytical precision of Business Intelligence (BI) with optimized SQL database modeling, advanced Excel spreadsheet automation, and Python preprocessing scripts.",
    about_under_directorship: "Under the directorship of Founder Faisal Ur Rehman Shaikh, we replace business speculation with high-contrast, interactive Power BI layouts and automated spreadsheets.",
    about_sophistication: "True sophistication is the total elimination of speculative noise. We structure star database schemas, write clean optimized queries, and program robust spreadsheet calculation models.",
    leadership: "Leadership Portfolio",
    
    // Company Section
    company_subtitle: "02 / STRUCTURE • ARCHITECTURAL STACK",
    company_heading: "The Unified Data Engine.",
    company_engine_a_title: "BI, SQL & Dashboards",
    company_engine_a_desc: "Designing responsive, custom-crafted Power BI and Tableau layouts, clean SQL database normalization, star schemas, and automated stakeholder views to unearth organizational truth.",
    company_engine_b_title: "Python, Excel & Automation",
    company_engine_b_desc: "Constructing advanced VBA macros, self-updating Power Query connections, dynamic pivot tables, and Pandas script workflows in Python to clean complex spreadsheets.",
    company_loop_title: "The Analytical Feed Loop",
    company_loop_desc: "Live visual dashboards guide operational focus, pulling direct database entries, clean Excel ledgers, and Python wrangling output scripts seamlessly.",
    
    // Services Section
    services_subtitle: "03 / TAXONOMY • DATA SPECTRA",
    services_title: "Dynamic capabilities.",
    services_digital_btn: "BI & SQL DATABASE CORES",
    services_physical_btn: "PYTHON & EXCEL SPREADSHEETS",
    
    // Portfolio Section
    portfolio_subtitle: "04 / BENCHMARKS • SECURE BUILDS",
    portfolio_title: "Crafted engineering.",
    portfolio_all: "ALL BUILDS",
    portfolio_digital: "BI & SQL WORKSPACES",
    portfolio_physical: "PYTHON & EXCEL SHEETS",
    portfolio_view_details: "VIEW ANALYSIS SPECIFICATIONS",
    
    // Projects (Case Studies) Section
    projects_subtitle: "05 / CASE STUDIES • ANALYTIC BLUEPRINTS",
    projects_title: "Empirical proof.",
    
    // Contact Section
    contact_subtitle: "06 / CONNECTION • SECURE TELEMETRY",
    contact_title: "Initiate professional sync.",
    contact_name_label: "Representative Full Name",
    contact_email_label: "Secure Transmission Email",
    contact_interest_label: "Primary Technology Spectrum of interest",
    contact_scope_label: "Engineering Project Target Scope Scale",
    contact_msg_label: "Core Coordinates & Project Specification Outline",
    contact_btn: "TRANSMIT TARGET BLUEPRINTS TO FAISAL",
    contact_dispatching: "DISPATCHING ENCRYPTED SPECIFICATIONS...",
    
    // Oracle Chatbot
    oracle_btn: "Data Assistant Oracle",
    oracle_title: "Data Oracle",
    oracle_subtitle_idle: "Continuous Sync Established",
    oracle_subtitle_loading: "Consulting Data Engine...",
    oracle_placeholder: "Ask about BI, SQL, Python, or Excel..."
  },
  ar: {
    logo: "فورميديا",
    status_pill: "محفظة البيانات الفعالة • تأسس عام ٢٠٢٢",
    nav_about: "عَنَّا",
    nav_company: "الشركة",
    nav_services: "الخدمات",
    nav_portfolio: "الأعمال",
    nav_projects: "المشاريع",
    nav_contact: "اتصل بنا",
    language: "اللغة",
    
    // About Section
    about_genesis: "٠١ / التكوين • تأسس عام ٢٠٢٢",
    about_we_craft: "نهندس أنظمة بيانات عالية الأداء والذكاء.",
    about_hq_curation: "تنسيق وإشراف كامل بقيادة فيصل الرحمن الشيخ.",
    about_explore: "اكتشف المواصفات التقنية",
    about_initiate: "ابدأ المزامنة الآمنة",
    about_brief: "تدمج فورميديا بين دقة تحليلات ذكاء الأعمال (BI) ومنهجيات قواعد البيانات SQL المتقدمة والتشغيل الآلي للجداول في إكسيل وبرمجيات بايثون المخصصة.",
    about_under_directorship: "تحت توجيه مباشر من فيصل الرحمن الشيخ، نستبدل التخمين التجاري بلوحات تحكم ذكاء أعمال تفاعلية وجداول بيانات مؤتمتة ومحكمة.",
    about_sophistication: "«الدقة المطلقة تكمن في إلغاء الضجيج العشوائي. نقوم بهيكلة جداول البيانات بوضوح، ونكتب استعلامات SQL الفعالة، ونبني حلول إكسيل البرمجية.»",
    leadership: "ملف القيادة الفنية",
    
    // Company Section
    company_subtitle: "٠٢ / الهيكل والأقسام • البنية الموحدة للبيانات",
    company_heading: "محرك البيانات المتكامل.",
    company_engine_a_title: "ذكاء الأعمال وقواعد SQL",
    company_engine_a_desc: "تطوير لوحات تحكم بصرية تفاعلية عبر Power BI و Tableau، وتصميم جداول قواعد البيانات الاحترافية، وتنسيق تدفقات التقارير.",
    company_engine_b_title: "بايثون، إكسيل وأتمتة الجداول",
    company_engine_b_desc: "برمجة وحدات الماكرو VBA، وربط تدفقات Power Query، وبناء جداول محورية مرنة، وكتابة تجميعات البيانات بـ Pandas في بايثون.",
    company_loop_title: "حلقة التحليل المستمر",
    company_loop_desc: "تغذي تقارير ذكاء الأعمال المباشرة عمليات اتخاذ القرار الفورية، وتجمع المدخلات بسلاسة من قواعد البيانات وملفات إكسيل النظيفة.",
    
    // Services Section
    services_subtitle: "٠٣ / الأقسام التقنية الكبرى",
    services_title: "القدرات الديناميكية المتفوقة.",
    services_digital_btn: "ذكاء الأعمال والـ SQL",
    services_physical_btn: "بايثون وإكسيل والملفات",
    
    // Portfolio Section
    portfolio_subtitle: "٠٤ / المعايير • مشروعات مطورة",
    portfolio_title: "الهندسة الحرفية للبيانات.",
    portfolio_all: "كافة المشاريع",
    portfolio_digital: "مساحات عمل Power BI & SQL",
    portfolio_physical: "برمجيات بايثون وجداول إكسيل",
    portfolio_view_details: "عرض تفاصيل التقارير الفنية",
    
    // Projects Section
    projects_subtitle: "٠٥ / دراسات الحالة والخرائط التحليلية",
    projects_title: "أدلة وبرهنة إلكترونية.",
    
    // Contact Section
    contact_subtitle: "٠٦ / الاتصال المباشر الآمن",
    contact_title: "ابدأ اتصالك المهني اليوم.",
    contact_name_label: "الاسم الكامل لممثل الجهة",
    contact_email_label: "البريد الإلكتروني للإرسال الآمن",
    contact_interest_label: "مجال التكنولوجيا والاهتمام الرئيسي",
    contact_scope_label: "نطاق وحجم المشروع المستهدف",
    contact_msg_label: "المواصفات الفنية والمتطلبات الأساسية للمشروع",
    contact_btn: "إرسال المواثيق للمهندس فيصل الرحمن",
    contact_dispatching: "جاري إرسال المتطلبات الفنية المشفرة...",
    
    // Oracle Chatbot
    oracle_btn: "مساعد البيانات الذكي أوراكل",
    oracle_title: "أوراكل البيانات",
    oracle_subtitle_idle: "الاتصال والمزامنة مستمرة بنجاح",
    oracle_subtitle_loading: "جاري مراجعة محرك البيانات...",
    oracle_placeholder: "اسأل عن ذكاء الأعمال، SQL، بايثون، أو إكسيل..."
  },
  fr: {
    logo: "FURmedia",
    status_pill: "PORTFOLIO DATA FOCUS • EST. 2022",
    nav_about: "À PROPOS",
    nav_company: "SOCIÉTÉ",
    nav_services: "SERVICES",
    nav_portfolio: "PORTFOLIO",
    nav_projects: "PROJETS",
    nav_contact: "CONTACT",
    language: "Langue",
    
    // About Section
    about_genesis: "01 / GENÈSE • EST. 2022",
    about_we_craft: "Nous concevons des systèmes de données à haut rendement.",
    about_hq_curation: "Curation dirigée par le fondateur Faisal Ur Rehman Shaikh.",
    about_explore: "EXPLORER LES SPÉCIFICATIONS",
    about_initiate: "INITIALISER LA SYNC",
    about_brief: "FURmedia combine la précision analytique absolue du Business Intelligence (BI) avec la modélisation optimisée de bases de données SQL, l'automatisation de feuilles de calcul Excel et des scripts de traitement Python.",
    about_under_directorship: "Sous la direction du Fondateur Faisal Ur Rehman Shaikh, nous remplaçons les spéculations par des dashboards Power BI interactifs et des modèles Excel automatisés.",
    about_sophistication: "« La vraie sophistication est l'élimination totale du bruit spéculatif. Nous structurons des schémas de bases de données, écrivons des requêtes optimisées et codons des classeurs Excel robustes. »",
    leadership: "Portfolio de Direction",
    
    // Company Section
    company_subtitle: "02 / STRUCTURE • ARCHITECTURE DE DONNÉES",
    company_heading: "Le Moteur de Données Unifié.",
    company_engine_a_title: "BI, SQL & Tableaux de bord",
    company_engine_a_desc: "Conception de visualisations sur mesure via Power BI et Tableau, modélisation relationnelle SQL en schémas en étoile et rapports interactifs.",
    company_engine_b_title: "Python, Excel & Automatisation",
    company_engine_b_desc: "Construction de macros VBA complexes, flux Power Query synchronisés, tableaux croisés dynamiques et scripts de traitement Pandas sous Python.",
    company_loop_title: "La Boucle d'Insights",
    company_loop_desc: "Les rapports interactifs de BI guident les décisions immédiates en connectant en temps réel les bases de données, feuilles Excel et fichiers Python.",
    
    // Services Section
    services_subtitle: "03 / TAXONOMIE • SPECTRES DE DONNÉES",
    services_title: "Capacités dynamiques.",
    services_digital_btn: "BUSINESS INTELLIGENCE & SQL",
    services_physical_btn: "PYTHON & EXCEL AUTOMATISATION",
    
    // Portfolio Section
    portfolio_subtitle: "04 / STANDARDS • BUILDS SÉCURISÉS",
    portfolio_title: "Ingénierie de données.",
    portfolio_all: "TOUS LES PROJETS",
    portfolio_digital: "ESPACES POWER BI & SQL",
    portfolio_physical: "PYTHON SCRIPTS & SOLUTIONS EXCEL",
    portfolio_view_details: "VOIR SPECIFICATIONS DE L'ANALYSE",
    
    // Projects Section
    projects_subtitle: "05 / PERFORMANCE • SCHÉMAS ANALYTIQUES",
    projects_title: "Épreuves empiriques.",
    
    // Contact Section
    contact_subtitle: "06 / CONNEXION • SYNC SÉCURISÉE",
    contact_title: "Initialiser une synchronisation.",
    contact_name_label: "Nom Complet du Représentant de l'Entreprise",
    contact_email_label: "Courriel de Transmission Sécurisé",
    contact_interest_label: "Spectre Technologique d'Intérêt",
    contact_scope_label: "Échelle et Portée Visée du Projet",
    contact_msg_label: "Coordonnées de base & Spécifications du Projet",
    contact_btn: "TRANSMETTRE LES PLANS À FAISAL",
    contact_dispatching: "CHIFFREMENT ET TRANSMISSION EN COURS...",
    
    // Oracle Chatbot
    oracle_btn: "Assistant Oracle de données",
    oracle_title: "Oracle de Données",
    oracle_subtitle_idle: "Synchronisation continue établie",
    oracle_subtitle_loading: "Consultation du moteur analytique...",
    oracle_placeholder: "Poser des questions sur BI, SQL, Python ou Excel..."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem("furmedia_lang");
      if (stored === "en" || stored === "ar" || stored === "fr") {
        return stored as Language;
      }
    } catch (e) {}
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("furmedia_lang", lang);
    } catch (e) {}
  };

  const isRtl = language === "ar";

  useEffect(() => {
    // Dynamic RTL support! Very premium and compliant with standard i18n
    const root = document.documentElement;
    if (isRtl) {
      root.setAttribute("dir", "rtl");
      root.style.fontFamily = "system-ui, -apple-system, blinkmacsystemfont, sans-serif";
    } else {
      root.setAttribute("dir", "ltr");
      root.style.fontFamily = "Inter, ui-sans-serif, system-ui, sans-serif";
    }
  }, [isRtl]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
