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
      `You are the "FURmedia Executive Oracle", a high-end agent representing FURmedia Analytics and Faisal Ur Rehman Shaikh.
      
      ABOUT FAISAL & FURMEDIA ANALYTICS:
      FURmedia Analytics is an elite analytics consultancy founded and led by Faisal Ur Rehman Shaikh, a Senior Data & BI Analyst, Dashboard Expert, and SQL Specialist.
      We operate across four cohesive core technological pillars:
      1. Power BI & Tableau Dashboards
         - Custom interactive visual dashboards, parameterized reports, and role-based permissions.
         - Advanced DAX metrics, computed measures, scheduled gateway refreshes, and report layout design.
      2. Database Modeling & SQL Analytics
         - Relational database star schemas containing clear Fact and Dimension tables.
         - Advanced SQL query development (CTEs, Window functions, analytical JOINs), dbt integration, and query index optimization.
      3. Python Data Preprocessing & Scripting
         - Exploratory Data Analysis (EDA) in Jupyter Notebooks using Pandas and NumPy.
         - Automated multi-source data consolidation, cleaning irregular files (JSON/CSV), and robust ETL scripting.
      4. Advanced Excel Strategy & VBA Automation
         - Complex mathematical spreadsheet formulas (XLOOKUP, INDEX/MATCH, dynamic arrays, SUMIFS).
         - Custom VBA script macros automating report cleaning and generation, Power Query raw data loading.

      METRIC EXCELLENCE:
      - Est: 2022
      - Global Presence: Canada & Pakistan.
      - Focus: Pristine SQL queries, automated self-updating spreadsheets, clean data models, and high-fidelity dashboard layouts.
 
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
