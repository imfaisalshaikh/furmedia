import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Linkedin, 
  CheckCircle2, 
  Briefcase, 
  Cpu, 
  ExternalLink, 
  Users, 
  Award, 
  Search, 
  TrendingUp, 
  Sparkles, 
  ThumbsUp 
} from "lucide-react";

interface Skill {
  name: string;
  category: string;
  count: number;
  endorsed: boolean;
}

export default function LinkedInHub() {
  const [activeTab, setActiveTab] = useState<"bio" | "experience" | "skills" | "achievements">("bio");
  const [connectionCount, setConnectionCount] = useState(500); // 500+ Connections representation
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Custom interactive state for skill endorsements
  const [skills, setSkills] = useState<Skill[]>([
    { name: "Power BI Dashboards", category: "Business Intelligence", count: 98, endorsed: false },
    { name: "SQL Star Schemas & dbt", category: "Database Engineering", count: 96, endorsed: false },
    { name: "Python (NumPy & Pandas)", category: "Data Preprocessing", count: 91, endorsed: false },
    { name: "Advanced Excel Sheets", category: "Spreadsheet Modeling", count: 87, endorsed: false },
    { name: "VBA Programming & Macros", category: "Report Automation", count: 85, endorsed: false },
    { name: "Power Query ETL Flows", category: "Database & Data Integration", count: 92, endorsed: false }
  ]);

  const handleEndorse = (idx: number) => {
    setSkills(prev => prev.map((skill, i) => {
      if (i === idx) {
        return {
          ...skill,
          count: skill.endorsed ? skill.count - 1 : skill.count + 1,
          endorsed: !skill.endorsed
        };
      }
      return skill;
    }));
  };

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    setConnectionCount(prev => isFollowing ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-[#0a0b0d] border border-white/[0.08] hover:border-white/15 rounded-3xl p-6 relative overflow-hidden transition-all duration-300 shadow-3xl">
      {/* Absolute Ambient Background Lights to make the profile card Pop */}
      <div className="absolute top-0 right-0 w-[180px] h-[180px] rounded-full bg-[#0077b5]/10 blur-[45px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[120px] h-[120px] rounded-full bg-[#00ff99]/5 blur-[35px] pointer-events-none z-0" />

      {/* Blue LinkedIn Indicator Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077b5] via-[#00ff99] to-[#0077b5]" />

      <div className="relative z-10 space-y-6">
        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {/* Visual Avatar mockup */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0077b5] to-[#00f2fe] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0d0d12] rounded-[14px] flex items-center justify-center font-serif text-2xl font-bold tracking-wider text-white select-none">
                  F
                </div>
              </div>
              {/* Linked verified badge symbol */}
              <span className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5 border-2 border-[#030303] text-white flex items-center justify-center">
                <Linkedin className="w-3 h-3 fill-white stroke-none" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="text-base font-display font-medium text-white leading-tight">Faisal Ur Rehman Shaikh</h3>
                <span className="flex items-center gap-0.5 text-[8px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-2.5 h-2.5 inline text-blue-400" /> Professional Verified
                </span>
              </div>
              <p className="text-[11px] font-mono text-brand-beige mt-1">Founder & Director &bull; Senior BI & Data Analyst</p>
              <p className="text-[10px] font-mono text-brand-muted mt-0.5 uppercase">Canada &bull; Pakistan</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Interactive follow count toggles */}
            <button
              id="linkedin-follow-btn"
              onClick={handleFollowToggle}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-mono tracking-wider transition-all cursor-pointer ${
                isFollowing 
                  ? "bg-white/10 text-white border border-white/20 hover:bg-white/15" 
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/10 border border-blue-500/20"
              }`}
            >
              {isFollowing ? "✓ SECURED CONNECTIONS" : "+ CONNECT ON IN"}
            </button>
            
            <a 
              id="linkedin-external-profile-cta"
              href="https://www.linkedin.com/in/imfaisalshaikh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/10 text-gray-400 hover:text-white transition-all flex items-center justify-center cursor-pointer"
              title="Open Official LinkedIn Profile"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Real Profile Stats Summary Header */}
        <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/[0.06] text-center font-mono text-[9px]">
          <div className="space-y-0.5">
            <span className="text-gray-400 block uppercase font-mono text-[8px]">LinkedIn Network</span>
            <span className="text-white font-extrabold text-xs">{connectionCount}+ Connections</span>
          </div>
          <div className="space-y-0.5 border-x border-white/[0.06]">
            <span className="text-gray-400 block uppercase font-mono text-[8px]">Analysis Accuracy</span>
            <span className="text-[#00ff99] font-extrabold text-xs">100% Empiric</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-gray-400 block uppercase font-mono text-[8px]">Consultations</span>
            <span className="text-[#ffbf00] font-extrabold text-xs">240+ Delivered</span>
          </div>
        </div>

        {/* Navigation Selector Tabs inside the LinkedIn Widget */}
        <div className="grid grid-cols-4 gap-1 p-0.5 bg-white/5 rounded-xl text-[8px] font-mono uppercase">
          {(["bio", "experience", "skills", "achievements"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-1.5 rounded-lg text-center transition-all cursor-pointer font-bold ${
                activeTab === tab
                  ? "bg-white text-black font-extrabold shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Render Views */}
        <div className="min-h-[145px] relative">
          <AnimatePresence mode="wait">
            {activeTab === "bio" && (
              <motion.div
                key="bio-tab"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="space-y-3 font-sans"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#00ff99] font-semibold">
                  <LightningIcon className="w-3 h-3 inline text-[#00ff99]" /> Executive summary
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  Faisal Ur Rehman Shaikh is the Founder & Director of FURmedia Analytics. Under his directorship, the enterprise leverages elite competencies in <strong>Business Intelligence Dashboards</strong>, <strong>Advanced Relational SQL</strong>, <strong>Python Exploratory Scripting</strong>, and <strong>Automated Excel Models</strong>.
                </p>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  He specializes in designing customized interactive dashboards, drafting star schemas in database engines, and writing automated spreadsheet tools to turn disorganized data tables into clean corporate profits.
                </p>
              </motion.div>
            )}

            {activeTab === "experience" && (
              <motion.div
                key="experience-tab"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="space-y-3 text-[11px] font-sans"
              >
                {[
                  {
                    role: "Founder & Director",
                    company: "FURmedia Inc.",
                    period: "2022 - Present",
                    desc: "Dual-Engine enterprise scaling corporate software reporting visualizers and luxury production lines."
                  },
                  {
                    role: "Senior BI & Data Analyst",
                    company: "Global Corporate Accounts",
                    period: "2020 - 2022",
                    desc: "Drafted SQL warehouses, dbt pipelines, and interactive executive Tableau & Power BI portals."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-2.5 items-start bg-white/[0.02] border border-white/[0.05] p-2.5 rounded-xl">
                    <Briefcase className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex justify-between items-baseline gap-2">
                        <span className="font-semibold text-white leading-tight truncate">{item.role}</span>
                        <span className="font-mono text-[7.5px] text-gray-400 shrink-0 uppercase">{item.period}</span>
                      </div>
                      <div className="text-[9.5px] font-mono text-brand-beige">{item.company}</div>
                      <p className="text-[9.5px] text-gray-400 leading-normal mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills-tab"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="space-y-2.5 font-mono"
              >
                <div className="flex justify-between items-center text-[8px] text-gray-500 uppercase border-b border-white/[0.06] pb-1.5">
                  <span>List of Skills Endorsed by Industry Peers</span>
                  <span className="text-[#00ff99]">Interactive Card</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 overflow-y-auto max-h-[125px] pr-1 scrollbar-thin">
                  {skills.map((skill, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => handleEndorse(idx)}
                      className={`flex justify-between items-center px-2 py-1.5 rounded-xl border cursor-pointer select-none transition-all group ${
                        skill.endorsed 
                          ? "bg-[#00ff99]/10 border-[#00ff99]/30 text-white" 
                          : "bg-white/[0.02] border-white/[0.06] hover:border-white/12 text-gray-300"
                      }`}
                    >
                      <div className="min-w-0 pr-1">
                        <span className="text-[9.5px] block font-medium group-hover:text-white leading-tight truncate">{skill.name}</span>
                        <span className="text-[6.5px] text-gray-400 block tracking-tight truncate mt-0.5">{skill.category}</span>
                      </div>
                      
                      <button 
                        className={`flex items-center gap-1 shrink-0 px-1.5 py-0.5 rounded text-[8px] uppercase font-bold transition-all ${
                          skill.endorsed 
                            ? "bg-[#00ff99] text-black" 
                            : "bg-white/10 text-gray-400 group-hover:text-white"
                        }`}
                      >
                        <ThumbsUp className={`w-2 h-2 ${skill.endorsed ? "fill-black" : ""}`} />
                        <span>{skill.count}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "achievements" && (
              <motion.div
                key="achievements-tab"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="space-y-3 font-sans text-xs"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#ffbf00] font-semibold">
                  <Award className="w-3.5 h-3.5 inline text-[#ffbf00]" /> Verified certifications
                </div>
                
                <div className="space-y-2 font-mono">
                  {[
                    "Microsoft Certified: Power BI Data Analyst Associate",
                    "Advanced SQL Querying Masterclass Certification",
                    "Database Schema & Star Modeling Professional Credential",
                    "Advanced Excel & VBA Workflow Automation Specialist"
                  ].map((cert, i) => (
                    <div key={i} className="flex gap-2 items-center bg-[#0d0e12] border border-white/[0.04] p-2 rounded-xl text-[9px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffbf00]"></span>
                      <span className="text-gray-200">{cert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sync Footer verification link */}
        <div className="flex justify-between items-center text-[8px] text-gray-500 border-t border-white/[0.06] pt-3 font-mono">
          <span className="flex items-center gap-1 text-[7.5px]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Official Profile: in/imfaisalshaikh
          </span>
          <a 
            href="https://www.linkedin.com/in/imfaisalshaikh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-0.5 uppercase tracking-wider font-extrabold"
          >
            LinkedIn Profile page <ExternalLink className="w-2.5 h-2.5 inline" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Spark/Lightning Minimal Indicator Icon
function LightningIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      stroke="none"
    >
      <path d="M19 9h-4V3H9v10h4v8z" />
    </svg>
  );
}
