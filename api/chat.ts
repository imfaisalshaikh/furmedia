import { GoogleGenAI } from "@google/genai";

// Lazy-loader helper to prevent failures if secret is initially empty
const getGenAI = () => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.Gemini_API_Key || process.env.gemini_api_key;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is required.");
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

export default async function handler(req: any, res: any) {
  // CORS configurations for Vercel
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed. Use POST request." });
    return;
  }

  try {
    const { messages, systemInstruction } = req.body;
    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: "Invalid request payload. 'messages' array is required." });
      return;
    }

    // Format simple history into Gemini-friendly SDK structure
    const contents = messages.map((m: any) => {
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

    res.status(200).json({ content: response.text });
  } catch (error: any) {
    console.error("Gemini Agent API Server Error:", error);
    res.status(500).json({ error: error.message || "An error occurred with our Executive Oracle." });
  }
}
