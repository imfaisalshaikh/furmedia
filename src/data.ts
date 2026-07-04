/**
 * FURmedia — Core Structured Data (SEO & AEO Optimized)
 * This file serves as the single source of truth for corporate information,
 * metadata representations, and rich services mapping.
 */

export const PROJECTS = [
  {
    id: 1,
    tag: "SQL & Python",
    title: "Automated Data Pipeline",
    description: "Engineered a custom SQL/Python ingestion layer to automate complex reporting previously stuck in manual spreadsheets.",
    color: "text-blue-400"
  },
  {
    id: 2,
    tag: "PowerBI & Excel",
    title: "C-Suite Executive Dashboard",
    description: "Developed a high-fidelity PowerBI dashboard that integrates Excel financial models into real-time visual business intelligence.",
    color: "text-green-400"
  }
  // ... add your other items here
];

export interface ServiceDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  keyAspects: string[];
  metrics?: string;
  division: "digital" | "physical";
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  image: string;
  division: "digital" | "physical";
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  milestone: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  duration: string;
  stats: { label: string; value: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const COMPANY_PROFILE = {
  name: "FURmedia Analytics",
  founder: "Faisal Ur Rehman Shaikh",
  role: "Founder & Director (Senior Data & BI Analyst | Dashboard & SQL Specialist)",
  tagline: "Translating Complex Corporate Data Into Interactive Executive Dashboards & Pure BI Insights.",
  mission: "To engineer scalable Business Intelligence portals, structured SQL data models, automated spreadsheet engines, and dynamic visual dashboards. Led by Faisal Ur Rehman Shaikh, we replace business speculation with high-contrast, interactive database records.",
  aboutBrief: "He leverages expert-level competencies in advanced SQL warehouse engineering, Power BI, Tableau, Excel scripting, and Python data preprocessing to translate chaotic raw data tables into real-time business answers.",
  philosophy: "True business intelligence is the deletion of noise. We write clean, optimized SQL queries, construct automated Power Query data connections, build beautiful interactive dashboards, and design lightning-fast spreadsheet tools.",
  foundedYear: 2022,
  hq: "Canada & Pakistan",
  email: "furmediainc@gmail.com",
  phone: "+1 647 866 5481",
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "business-intelligence",
    name: "Enterprise Dashboards & BI Architecture",
    tagline: "Power BI, Tableau & Custom Analytics Dashboards",
    description: "Designing responsive, highly polished executive decision portals and cohort metrics monitors. We integrate standard visual containers, transaction tracking boards, and optimized calculated measures that aggregate complex transactional records into pristine visual charts.",
    keyAspects: [
      "Dynamic interactive dashboard layouts with granular filter sliders and parameters",
      "Executive role-based reports, dimension drill-downs, and automated stakeholder views",
      "Sovereign Power BI & Tableau workspace configuration with scheduled gateway syncs",
      "Custom DAX calculated tables, measures, relationships, and clean workspace governance"
    ],
    metrics: "100% Automated Reporting Pipelines",
    division: "digital"
  },
  {
    id: "database-sql",
    name: "Database Modelling & SQL Analytics",
    tagline: "Advanced SQL, Schemas, dbt, Warehousing & Performance",
    description: "Transforming messy transactional systems into pristine analytical databases. We program optimized SQL code, construct clean star schemas (Fact & Dimension tables), schedule database views, and optimize slow indexes to accelerate dashboard loading speed.",
    keyAspects: [
      "Star schema data modeling and transactional database normalization",
      "Advanced SQL analytical queries (Window functions, CTEs, complex JOINs)",
      "Database schema structuring, indexing strategies, and automated query execution",
      "Transformation logs orchestration with dbt models to assure high fidelity"
    ],
    metrics: "Zero-Latency Star Schema Queries",
    division: "digital"
  },
  {
    id: "python-wrangling",
    name: "Python Data Processing & ETL Optimization",
    tagline: "Exploratory Scripting, Pandas, NumPy, and Automation",
    description: "Creating highly resilient script workflows in Python to handle heavy lifting. We cleanse raw telemetry files, consolidate scattered multi-source tables, perform statistical summaries, and trigger automatic data outputs.",
    keyAspects: [
      "Exploratory Data Analysis (EDA) in Jupyter Notebooks isolating target trends",
      "Automated scripts parsing wild JSON/CSV sources into normalized structures",
      "High-speed Pandas and NumPy preprocessing of transactional timelines",
      "Script trigger configurations to output updated datasets reliably to folders"
    ],
    metrics: "95% Speed Gain on Raw Data Cleaning",
    division: "physical"
  },
  {
    id: "excel-spreadsheet",
    name: "Excel Spreadsheet Engineering & Automation",
    tagline: "VBA Programming, Power Query, pivot Tables, and Financial Modeling",
    description: "Designing enterprise-grade spreadsheet workbooks that function with professional stability. We program custom automated macros, connect self-updating Power Query feeds, formulate complex relational calculations, and construct clean financial reporting tools.",
    keyAspects: [
      "relational formulas (XLOOKUP, INDEX/MATCH, SUMIFS, dynamic array formulas)",
      "VBA automation with customized scripts to clean sheets and trigger emails",
      "Power Query data pipeline connections linking dynamic external folders and APIs",
      "Pivot tables, slicers, conditional formatting rules, and executive summaries"
    ],
    metrics: "12+ Hours Weekly Admin Labor Saved",
    division: "physical"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "digital-01",
    title: "Sovereign Executive Power BI Workspace",
    category: "Corporate Business Intelligence",
    description: "Designed an interactive enterprise-grade dashboard architecture connecting directly to PostgreSQL server tables. Tracks corporate sales targets, visualizes custom computed cohort groupings, and features automated email report dispatch triggers.",
    details: ["Power BI Desktop & Service", "Postgres SQL Schemas", "Calculated DAX Metrics", "Sub-second Report Slicing"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    division: "digital"
  },
  {
    id: "digital-02",
    title: "Interactive Retail & SQL Sales Ledger",
    category: "SQL Data Modeling & Integration",
    description: "Re-engineered analytical pipelines for a regional wholesale retailer. Designed customized dimension/fact star tables in SQL, structured indexing criteria to speed up reporting loads, and mapped high-performance visual filters.",
    details: ["SQL dbt transformations", "Star Schema (Fact/Dim)", "Tableau Data Integrations", "+42% Pipeline Speed Growth"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    division: "digital"
  },
  {
    id: "physical-01",
    title: "Exploratory Python ETL Automation Hub",
    category: "Python Notebook Data Wrangling",
    description: "Developed a comprehensive library of Jupyter script workflows utilizing Pandas, NumPy, and OpenPyXL. Parses, cleanses, stabilizes, and consolidates chaotic spreadsheets containing over 500,000 messy customer entries.",
    details: ["Python Pandas & NumPy", "Spreadsheet API Integrations", "Data Cleansing Pipelines", "95% Admin Effort Saved"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    division: "physical"
  },
  {
    id: "physical-02",
    title: "Bespoke Excel Financial Workbook",
    category: "Advanced Spreadsheet Engineering",
    description: "Engineered an automatic business-ledger application using advanced Excel VBA development, complex multi-sheet connections, and Power Query flows. Integrates customized ledger templates and monthly automated statement generation tools.",
    details: ["Excel VBA Macro Scripts", "Power Query Auto-Feeds", "Relational INDEX/XLOOKUP formulas", "12+ Hours Admin Labor Saved"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    division: "physical"
  }
];

export const PROJECTS_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "project-ledger",
    title: "Sovereign Analytics: Engineering an Enterprise-Grade Interactive Power BI & SQL Schema Suite",
    client: "Sovereign Capital & Retail Holdings",
    milestone: "Enterprise BI & Data Architecture",
    challenge: "The client operated with disjointed spreadsheet reporting, resulting in a 3.4-day lag for vital executive decision reports, frequent billing discrepancy errors in database transactions, and a complete lack of visual customer cohort statistics.",
    solution: "We engineered a fully unified executive Power BI Workspace backed by a highly optimized PostgreSQL star database schema. Configured dynamic visual metrics showcasing sales volumes, regional active accounts, and live SQL filters.",
    outcomes: [
      "Slashed executive reporting delivery latency from 3.4 days to zero using direct dashboard integrations",
      "Identified and eliminated multi-source reconciliation bugs, securing $120,000+ in annual overhead savings",
      "Designed dynamic Power BI reports allowing interactive slicing and dicing across multi-division timelines"
    ],
    duration: "2 Months",
    stats: [
      { label: "Data Refresh Lag", value: "<5 mins" },
      { label: "Cohort Tracking", value: "100% Reliable" },
      { label: "Reporting Velocity", value: "Real-time" }
    ]
  },
  {
    id: "project-vitality",
    title: "The Scent Lab: SQL Warehouse Optimization & Customer Retention Cohort Models",
    client: "Aura Artisanal Perfumes",
    milestone: "Database Analytics & SQL Engineering",
    challenge: "Handling large physical sales logs across several store terminals led to massive query slowdowns (over 45 seconds per search) and inaccurate inventory restocking reports.",
    solution: "Wrote clean SQL procedures, normalized raw database schemas, and structured index models to accelerate operational read queries. Built a cohort-retention reporting matrix directly in Tableau.",
    outcomes: [
      "Reduced report query processing latency from 45 seconds down to under 300 milliseconds",
      "Supported inventory replenishment accuracy to hit 98.6% by providing clean weekly sales logs",
      "Identified critical low-retention periods, increasing customer lifecycle visibility by 22%"
    ],
    duration: "1.5 Months",
    stats: [
      { label: "SQL Query Speedup", value: "x150 Faster" },
      { label: "Inventory Accuracy", value: "98.6%" },
      { label: "Retention Clarity", value: "+22%" }
    ]
  },
  {
    id: "project-apex-vigor",
    title: "Stay Vitality: Python Jupyter Notebook Automation for Multi-Source Wearable Data Cleaning",
    client: "Vitality Labs LLC",
    milestone: "Python Data Wrangling & Script Automation",
    challenge: "Daily telemetry tables from tens of thousands of devices arrived with missing timestamps, duplicating IDs, and wild categorical anomalies, causing severe BI data ingestion breaks.",
    solution: "Programmed modular Python data pipeline scripts using Pandas, NumPy, and DateTime structures. Automated cleansing of null data, handled outlier boundaries, and serialized outputs into clean folder-bound CSV tables.",
    outcomes: [
      "Eliminated BI dashboard ingestion failures completely by structuring upstream data inputs",
      "Accelerated raw diagnostic file consolidation speed by over 95% compared to manual formulas",
      "Wrote responsive Pandas scripts handling 500k+ sensor coordinates under 15 seconds"
    ],
    duration: "2 Months",
    stats: [
      { label: "Ingestion Breaks", value: "0%" },
      { label: "Script Run-time", value: "<15 secs" },
      { label: "Cleansing Coverage", value: "100%" }
    ]
  },
  {
    id: "project-aerovoyage",
    title: "AeroVoyage: Multi-Sheet Excel Financial Ledger and Power Query Occupancy Audits",
    client: "AeroVoyage International",
    milestone: "Advanced Spreadsheet & Excel Engineering",
    challenge: "The commercial sales team lacked a responsive calculator to audit flight class occupancy rates and test new pricing tiers across multi-million dollar bookings.",
    solution: "Engineered an advanced Excel workbook application featuring automated Power Query file aggregation, parameterized VBA custom macro controls, and complex multi-sheet lookup configurations.",
    outcomes: [
      "Slashed pricing validation calculation steps from 25 steps to a single automated click",
      "Automated consolidation of 10+ monthly transaction CSV sheets via interactive Power Query feeds",
      "Built beautiful financial sheets with visual KPIs, dynamic graphs, and dynamic cohort highlights"
    ],
    duration: "2 Months",
    stats: [
      { label: "Pricing Verification", value: "1 Click" },
      { label: "Spreadsheets Synced", value: "10 Sheets" },
      { label: "Manual Effort Reduction", value: "90%" }
    ]
  }
];

export const FAQS_AEO_DATA: FAQItem[] = [
  {
    question: "What is Faisal's core expertise spectrum in Data and BI Analysis?",
    answer: "Faisal Ur Rehman Shaikh focuses deeply on translating chaotic business data into functional decision-ready dashboards. He specializes in designing relational SQL database schemas (Fact & Dimension templates), writing clean optimized SQL queries, formatting fully interactive Power BI & Tableau dashboards, and writing custom Excel spreadsheet structures and Python scripting tools."
  },
  {
    question: "How do you combine Python and Excel in the analytical workflow?",
    answer: "We use Python (specifically Pandas and NumPy libraries) for heavy upstream data preprocessing, cleansing raw logs, and parsing wild file formats. We then load these clean tabular layers directly into Excel or Power BI via automated Power Query data feeds. Excel is optimized with VBA scripts, pivot models, and lookup functions to serve as a fast mathematical workspace."
  },
  {
    question: "Why focus primarily on SQL and Power BI/Tableau for visual dashboards?",
    answer: "Executive alignment requires sub-second answers to complex questions. Power BI and Tableau allow robust visual modeling with custom metrics (DAX for Power BI), while optimized SQL database structures behind these dashboards verify that queries resolve instantaneously on millions of operational lines."
  },
  {
    question: "How do Faisal's spreadsheet models automate manual workflows?",
    answer: "By replacing multi-hour copy-paste routines with centralized Power Query folder-triggers and VBA macros. Custom configurations (using INDEX, XLOOKUP, and SUMIFS formulas) are linked to clear dashboard layouts, saving operational teams hours of administrative effort."
  }
];
