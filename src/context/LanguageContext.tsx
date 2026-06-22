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
    status_pill: "AVAILABLE FOR GLOBAL AUDIT • EST. 2022",
    nav_about: "ABOUT",
    nav_company: "COMPANY",
    nav_services: "SERVICES",
    nav_portfolio: "PORTFOLIO",
    nav_projects: "PROJECTS",
    nav_contact: "CONTACT",
    language: "Language",
    
    // About Section
    about_genesis: "01 / GENESIS • EST. 2022",
    about_we_craft: "We craft silent luxuries.",
    about_hq_curation: "Founder & Director Faisal Ur Rehman Shaikh.",
    about_explore: "EXPLORE OUR SERVICES",
    about_initiate: "INITIATE CONSULTATION",
    about_brief: "FURmedia sits at the intersection of high-fidelity software engineering, data-backed marketing, and artisanal luxury manufacturing.",
    about_under_directorship: "Under the directorship of founder Faisal Ur Rehman Shaikh, FURmedia has pioneered a cohesive, mathematical approach to lifestyle curation.",
    about_sophistication: "True sophistication is the total elimination of superfluous details. We code precisely, we compound purely, we live fully.",
    leadership: "Leadership",
    
    // Company Section
    company_subtitle: "02 / STRUCTURE • ENGINE LABS",
    company_heading: "The Dual-Engine synergy.",
    company_engine_a_title: "Digital Services",
    company_engine_a_desc: "Engineering pristine cross-platform software systems, optimizing for complex search and artificial query environments.",
    company_engine_b_title: "Physical Products",
    company_engine_b_desc: "Formulating non-alcoholic cosmetics and halal perfumes, tailored fabrics, and bespoke interior environments.",
    company_loop_title: "The Conversion Loop",
    company_loop_desc: "Our digital metrics continuously refine our real physical logistics. Our physical transactions enrich our predictive digital machine systems.",
    
    // Services Section
    services_subtitle: "03 / TAXONOMY • DIVISION ARCHITECTURES",
    services_title: "The curated services.",
    services_digital_btn: "DIGITAL PORTFOLIO",
    services_physical_btn: "PHYSICAL FORMULATIONS",
    
    // Portfolio Section
    portfolio_subtitle: "04 / BENCHMARKS • CURATED SHIELDS",
    portfolio_title: "Curated excellence.",
    portfolio_all: "ALL PROJECTS",
    portfolio_digital: "DIGITAL WORK",
    portfolio_physical: "PRODUCT BENCHMARKS",
    portfolio_view_details: "VIEW DETAILS",
    
    // Projects (Case Studies) Section
    projects_subtitle: "05 / ANALYSIS • CONVERSION STATS",
    projects_title: "Case studies.",
    
    // Contact Section
    contact_subtitle: "06 / CONSULTATION • SECURE CHANNELS",
    contact_title: "Let's build sovereignty together.",
    contact_name_label: "Full Corporate Representative Name",
    contact_email_label: "Secure Transmission Email",
    contact_interest_label: "Primary Segment of Corporate Interest",
    contact_scope_label: "Project Target Scope Scale",
    contact_msg_label: "Bespoke Project Description & Core Coordinates",
    contact_btn: "SECURELY DISPATCH CONSULTATION DISCOVERY",
    contact_dispatching: "DISPATCHING DISCOVERY ENCRYPT...",
    
    // Oracle Chatbot
    oracle_btn: "Executive Oracle",
    oracle_title: "Oracle",
    oracle_subtitle_idle: "Direct Channel Established",
    oracle_subtitle_loading: "Consulting Engine...",
    oracle_placeholder: "Ask the executive oracle..."
  },
  ar: {
    logo: "فورميديا",
    status_pill: "متاح للتدقيق العالمي • تأسس عام ٢٠٢٢",
    nav_about: "عَنَّا",
    nav_company: "الشركة",
    nav_services: "الخدمات",
    nav_portfolio: "الأعمال",
    nav_projects: "المشاريع",
    nav_contact: "اتصل بنا",
    language: "اللغة",
    
    // About Section
    about_genesis: "٠١ / التكوين • تأسس عام ٢٠٢٢",
    about_we_craft: "نصنع الكماليات الصامتة والحلول الرقمية الراقية.",
    about_hq_curation: "تنسيق وإشراف كامل بقيادة المؤسس والمدير.",
    about_explore: "اكتشف خدماتنا بدقة",
    about_initiate: "طلب الاستشارة المشفرة",
    about_brief: "تقع شركة فورميديا عند تقاطع هندسة البرمجيات المتطورة، والتسويق الرقمي الذكي المبني على البيانات، والتصنيع الفاخر والحرفي للمنتجات العينية.",
    about_under_directorship: "تحت توجيه مباشر من فيصل الرحمن الشيخ، تبتكر فورميديا أسلوباً رياضياً متكاملاً لتنسيق أسلوب الحياة الراقي والحلول البرمجية الفعالة للمؤسسات الكبرى.",
    about_sophistication: "«الأناقة والSophistication الحقيقية تكمن في التخلص التام من التفاصيل الفائضة. نبرمج بدقة متناهية، ونخلط مكوناتنا بنقاء مطلق، ونعيش برقي كامل.»",
    leadership: "القيادة التنفيذية",
    
    // Company Section
    company_subtitle: "٠٢ / الهيكل والأقسام • مختبرات المحركات",
    company_heading: "تكامل ثنائي المحركات.",
    company_engine_a_title: "الخدمات التقنية والرقمية",
    company_engine_a_desc: "هندسة برمجيات نقية متكاملة لجميع المنصات، مهيأة بالكامل لمحركات البحث والذكاء الاصطناعي مع تحليلات نمو عالية الأداء.",
    company_engine_b_title: "المنتجات العينية الفاخرة",
    company_engine_b_desc: "تركيب مستحضرات تجميل خالية من الكحول وعطور حلال فاخرة، مع تفصيل أقمشة يدوياً وتنفيذ تصاميم هندسية داخلية مميزة.",
    company_loop_title: "حلقة التحويل والنمو",
    company_loop_desc: "تعمل مقاييسنا التحليلية الرقمية لنمو العلامة على تحسين منتجاتنا العينية، بينما ترفد معاملاتنا الفعلية أنظمتنا البرمجية وترتقي بمرونتها.",
    
    // Services Section
    services_subtitle: "٠٣ / التصنيف المعياري • بنية أقسام المؤسسة",
    services_title: "الخدمات المنقحة والمنسقة.",
    services_digital_btn: "الخدمات البرمجية والرقمية",
    services_physical_btn: "المنتجات الفاخرة الملموسة",
    
    // Portfolio Section
    portfolio_subtitle: "٠٤ / المقاييس • دروع الأعمال الرائدة المعتمدة",
    portfolio_title: "التميز والسيادة المنسقة.",
    portfolio_all: "جميع المشاريع",
    portfolio_digital: "الخدمات الرقمية",
    portfolio_physical: "المنتجات الملموسة",
    portfolio_view_details: "عرض التفاصيل",
    
    // Projects Section
    projects_subtitle: "٠٥ / التحليل المالي • إحصائيات النمو الفعلي",
    projects_title: "دراسات الحالة.",
    
    // Contact Section
    contact_subtitle: "٠٦ / الاستشارات • القنوات المشفرة والآمنة",
    contact_title: "لنشيّد السيادة والتميز معاً.",
    contact_name_label: "الاسم الكامل لممثل المؤسسة والاتصال",
    contact_email_label: "بريد الاتصال الإلكتروني المشفر والأمن",
    contact_interest_label: "التصنيف الرئيسي لاهتمام المؤسسة والتعاون",
    contact_scope_label: "نطاق المشروع المستهدف وحجمه",
    contact_msg_label: "وصف المشروع والمواصفات والمعايير المطلوبة",
    contact_btn: "أرسل تفاصيل طلب الاستشارة المشفرة بأمان",
    contact_dispatching: "جاري تشفير وإرسال الطلب فوراً...",
    
    // Oracle Chatbot
    oracle_btn: "الخبير التنفيذي أوراكل",
    oracle_title: "أوراكل",
    oracle_subtitle_idle: "تم تأسيس قناة الاتصال المباشرة بنجاح",
    oracle_subtitle_loading: "جاري استشارة محرك التحليل...",
    oracle_placeholder: "اسأل الخبير أوراكل التنفيذي..."
  },
  fr: {
    logo: "FURmedia",
    status_pill: "DISPONIBLE POUR AUDIT GLOBAL • EST. 2022",
    nav_about: "À PROPOS",
    nav_company: "SOCIÉTÉ",
    nav_services: "SERVICES",
    nav_portfolio: "PORTFOLIO",
    nav_projects: "PROJETS",
    nav_contact: "CONTACT",
    language: "Langue",
    
    // About Section
    about_genesis: "01 / GENÈSE • EST. 2022",
    about_we_craft: "Nous concevons des luxes silencieux.",
    about_hq_curation: "Curation dirigée par le fondateur et directeur.",
    about_explore: "EXPLOREZ NOS SERVICES",
    about_initiate: "INITIALISER LA CONSULTATION",
    about_brief: "FURmedia se situe à l'intersection de l'ingénierie logicielle haut de gamme, du marketing axé sur les données et de la fabrication artisanale de luxe.",
    about_under_directorship: "Sous la direction du fondateur Faisal Ur Rehman Shaikh, FURmedia a développé une approche mathématique, épurée et authentique de la sélection de style de vie.",
    about_sophistication: "« La vraie sophistication réside dans l'élimination totale du superflu. Nous codons avec précision, nous composons purement, nous vivons pleinement. »",
    leadership: "Direction",
    
    // Company Section
    company_subtitle: "02 / STRUCTURE • MODULES ET MOTEURS",
    company_heading: "La synergie double moteur.",
    company_engine_a_title: "Services Numériques",
    company_engine_a_desc: "Création de systèmes de logiciels multiplateformes d'une pureté absolue, optimisés pour la recherche complexe.",
    company_engine_b_title: "Produits Physiques",
    company_engine_b_desc: "Formulation de cosmétiques sans alcool, parfums halal, tissus sur mesure et aménagement d'intérieurs personnalisés.",
    company_loop_title: "La boucle de conversion",
    company_loop_desc: "Nos métriques numériques affinent en continu notre logistique physique. Nos transactions physiques enrichissent nos modèles prédictifs.",
    
    // Services Section
    services_subtitle: "03 / TAXONOMIE • CONCEPTION PAR SERVICE",
    services_title: "Nos services sélectionnés.",
    services_digital_btn: "SERVICES NUMÉRIQUES",
    services_physical_btn: "FORMULATIONS PHYSIQUES",
    
    // Portfolio Section
    portfolio_subtitle: "04 / STANDARDS • CHANTIERS SÉLECTIONNÉS",
    portfolio_title: "L'excellence sélectionnée.",
    portfolio_all: "TOUS LES PROJETS",
    portfolio_digital: "TRAVAUX NUMÉRIQUES",
    portfolio_physical: "RÉFÉRENCES PRODUITS",
    portfolio_view_details: "VOIR DÉTAILS",
    
    // Projects Section
    projects_subtitle: "05 / ANALYSE • STATISTIQUES DE CONVERSION",
    projects_title: "Études de cas.",
    
    // Contact Section
    contact_subtitle: "06 / CONSULTATION • CANAUX SÉCURISÉS",
    contact_title: "Bâtissons notre souveraineté ensemble.",
    contact_name_label: "Nom Complet du Représentant de l'Entreprise",
    contact_email_label: "Courriel de Transmission Sécurisé",
    contact_interest_label: "Secteur Principal d'Intérêt",
    contact_scope_label: "Échelle et Portée Visée du Projet",
    contact_msg_label: "Description du Projet & Coordonnées Additionnelles",
    contact_btn: "TRANSMETTRE LA SÉLECTION DE CONSULTATION",
    contact_dispatching: "CHIFFREMENT ET TRANSMISSION EN COURS...",
    
    // Oracle Chatbot
    oracle_btn: "Oracle Exécutif",
    oracle_title: "Oracle",
    oracle_subtitle_idle: "Canal Direct Chiffré Établi",
    oracle_subtitle_loading: "Consultation de l'intelligence digitale...",
    oracle_placeholder: "Consulter l'oracle exécutif..."
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
