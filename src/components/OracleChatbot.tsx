import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Sparkles, RefreshCw, Bot, ChevronUp } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: Date;
}

const CHIP_PROMPTS = [
  { text: "Overview of Power BI dashboards?", label: "BI & Dashboards" },
  { text: "What SQL optimizations do you do?", label: "SQL Star Schemas" },
  { text: "How is Python used in spreadsheet ETL?", label: "Python Data Wrangling" },
  { text: "What automated Excel tools do you build?", label: "Excel & VBA Workbooks" },
];

export default function OracleChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "model",
      content: "Welcome to the FURmedia Executive Oracle. I am ready to guide you through Faisal Ur Rehman Shaikh's high-fidelity Business Intelligence dashboards, advanced relational SQL database schemas, Python exploratory scripts, and automated Excel workbooks. How may I direct your inquiry?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    setErrorText(null);
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Map history to standard chat history
      const formattedHistory = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const backendUrl = (import.meta as any).env?.VITE_API_URL || "";
      const res = await fetch(`${backendUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: formattedHistory,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "The Oracle is temporarily disconnected.");
      }

      const data = await res.json();
      
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "model",
          content: data.content || "I have received your request but returned an empty response. Please try reframing.",
          timestamp: new Date(),
        },
      ]);
    } catch (err: any) {
      console.error(err);
      setErrorText(err.message || "Failed to reach the FURmedia Oracle.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleSendMessage(inputValue);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "initial",
        role: "model",
        content: "Our channel has been initialized. Welcome to the FURmedia Executive Oracle. Ask me about our BI dashboards, SQL database schemas, Python scripts, or automated Excel workbooks.",
        timestamp: new Date(),
      },
    ]);
    setErrorText(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] select-none font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="oracle-toggle-btn"
            key="toggle-btn"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="flex items-center gap-3 bg-black/90 text-[#00FF99] px-5 py-3 rounded-full font-mono text-xs uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(0,255,153,0.15)] border border-[#00FF99]/30 hover:border-[#00FF99]/70 hover:shadow-[0_0_25px_rgba(0,255,153,0.25)] transition-all duration-300 cursor-pointer"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF99] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF99]"></span>
            </div>
            <span>Executive Oracle</span>
            <Sparkles className="w-4 h-4 text-[#00FF99]" />
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            id="oracle-chat-container"
            key="chat-box"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className={`w-[360px] md:w-[400px] bg-[#060606] border border-white/[0.08] shadow-[0_10px_50px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
              isMinimized ? "h-[60px]" : "h-[500px]"
            }`}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/[0.06] bg-[#0a0a0a]/95 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#00FF99]/10 border border-[#00FF99]/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#00FF99]" />
                </div>
                <div>
                  <h4 className="font-display font-medium text-xs uppercase tracking-wider text-white flex items-center gap-1.5">
                    ORACLE <span className="text-[8px] font-mono text-[#00FF99] tracking-widest bg-[#00FF99]/10 border border-[#00FF99]/20 px-1.5 py-0.5 rounded-full">v3.5 LITE</span>
                  </h4>
                  <span className="text-[9px] font-mono text-white/40 uppercase block leading-none mt-0.5">
                    {isLoading ? "Consulting Engine..." : "Direct Channel Established"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleClearChat}
                  className="p-1.5 text-white/40 hover:text-white hover:bg-white/5 rounded transition-all cursor-pointer"
                  title="Reset Channel"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 text-white/40 hover:text-white hover:bg-white/5 rounded transition-all cursor-pointer"
                  title={isMinimized ? "Maximize" : "Minimize"}
                >
                  <ChevronUp className={`w-3.5 h-3.5 transform transition-transform duration-300 ${isMinimized ? "" : "rotate-180"}`} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-white/40 hover:text-white hover:bg-white/5 rounded transition-all cursor-pointer"
                  title="Close Oracle"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Chat Body & Input Box */}
            {!isMinimized && (
              <>
                 {/* Message display container */}
                <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 scrollbar-thin select-text">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex flex-col max-w-[85%] ${
                        m.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                      }`}
                    >
                      <div
                        className={`rounded-xl px-4 py-3 text-xs leading-relaxed ${
                          m.role === "user"
                            ? "bg-[#00FF99] text-black font-extrabold shadow-[0_0_15px_rgba(0,255,153,0.15)]"
                            : "bg-[#111111] border border-white/[0.06] text-white/90"
                        }`}
                      >
                        {m.content}
                      </div>
                      <span className="text-[8px] font-mono text-white/20 mt-1 uppercase">
                        {m.role === "user" ? "You" : "Oracle"} &bull;{" "}
                        {m.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  ))}

                  {/* Loading placeholder */}
                  {isLoading && (
                    <div className="flex flex-col mr-auto items-start max-w-[85%]">
                      <div className="bg-[#111111] border border-white/[0.06] text-[#00FF99] rounded-xl px-4 py-3 text-xs flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF99] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF99]"></span>
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#00FF99] font-medium">Analyzing query...</span>
                      </div>
                    </div>
                  )}

                  {/* Error display */}
                  {errorText && (
                    <div className="bg-red-950/40 border border-red-500/20 text-red-400 p-3 rounded-lg text-xs font-mono">
                      {errorText}
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Suggestions overlay */}
                {messages.length === 1 && (
                  <div className="p-4 bg-[#0a0a0a]/90 border-t border-white/[0.06]">
                    <span className="font-mono text-[8px] text-white/40 block mb-2 uppercase tracking-widest">
                      Suggested Consultations:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {CHIP_PROMPTS.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(chip.text)}
                          className="px-3 py-2 bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#00FF99]/40 text-left rounded-lg text-[10px] text-white/80 transition-all duration-200 uppercase tracking-wider font-mono truncate cursor-pointer"
                        >
                          {chip.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Message input footer form */}
                <form
                  onSubmit={handleFormSubmit}
                  className="px-5 py-4 border-t border-white/[0.06] bg-[#0a0a0a] flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask the executive oracle..."
                    disabled={isLoading}
                    className="flex-1 bg-transparent border-b border-white/10 focus:border-[#00FF99] outline-none text-xs text-white placeholder-white/30 py-1.5 font-mono"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="p-1.5 text-white hover:text-[#00FF99] disabled:text-white/20 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
