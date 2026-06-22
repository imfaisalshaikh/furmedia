import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware for cross-origin requests
app.use(cors());

// Middleware for parsing JSON requests
app.use(express.json());

// Lazy-loader helper to prevent failures if secret is initialy empty
const getGenAI = () => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.Gemini_API_Key || process.env.gemini_api_key;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is required. Please set it in Settings > Secrets.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// API Endpoint for AI Chatbot Agent
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, systemInstruction } = req.body;
    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: "Invalid request payload. 'messages' array is required." });
      return;
    }

    // Format simple history into Gemini-friendly SDK structure
    // e.g. { role: "user" | "model", parts: [{ text: "..." }] }
    const contents = messages.map((m: any) => {
      // Ensure role is either "user" or "model" (Gemini expect "model" instead of "assistant" / "system")
      let role = m.role || "user";
      if (role === "assistant" || role === "agent" || role === "bot") {
        role = "model";
      }
      return {
        role,
        parts: [{ text: m.content || m.text || "" }],
      };
    });

    const ai = getGenAI();
    const model = "gemini-3.5-flash";

    const defaultSystemInstruction = 
      `You are the "FURmedia Executive Oracle", a high-end agent representing FURmedia and Faisal Ur Rehman Shaikh.
      
      ABOUT FURmedia:
      FURmedia is an elite dual-engine firm founded and led by Faisal Ur Rehman Shaikh.
      We operates two parallel, powerful divisions:
      1. Division 01: Digital Services
         - Cross-Platform App Development (premium native Android & iOS experiences built for scale)
         - SEO & Paid Media (brand visibility, high-end funnel optimization, search optimization, email systems)
         - Data-Backed Strategy (deep funnel, conversion analytics, ROI maximization)
      2. Division 02: Physical Products
         - Premium Fragrances (pure, elegant, Halal luxury scents)
         - Fashion (stylized cultural garments)
         - Interior Design (immersive mood-setting decoration and high-comfort layouts)
         - Health & Wellness (strength, balance, and fine curation)
         - Cosmetics (bold, clean, and elegant cosmetic formulations)

      METRIC EXCELLENCE:
      - Est: 2024
      - Global Presence: Canada, Pakistan.
      - Focus: Tailored, high-conversion digital ecosystems paired with exquisite physical curation.

      YOUR PERSONALITY & TONE:
      - Sophisticated, highly articulate, elite, and executive.
      - Direct and confident, matching our "Bold Typography" design aesthetic.
      - Free from generic AI filler/fluff ("Absolutely!", "I'm thrilled to help!"). Keep it clean, direct, and tailored.
      - Always end answers with a crisp, welcoming prompt or call to action.
      - Guide them gracefully to our primary services or section. E.g., if they ask about digital dev, mention our bespoke app systems and tell them to navigate to "Services" or fill out the "Contact" consultation form.

      Keep responses concise (under 3-4 sentences per response unless asked for deep insight) to remain highly readable and executive.`;

    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: systemInstruction || defaultSystemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ content: response.text });
  } catch (error: any) {
    console.error("Gemini Agent API Server Error:", error);
    res.status(500).json({ error: error.message || "An error occurred with our Executive Oracle. Ready to retry." });
  }
});

// Export app instance so Vercel can run it as a serverless dynamic function
export default app;

async function startServer() {
  // Hot module replacement or static server build delivery
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Only bind the express app to port if we aren't in a serverless Vercel function context
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`FURmedia server online at http://localhost:${PORT}`);
  });
}

if (!process.env.VERCEL) {
  startServer();
}
