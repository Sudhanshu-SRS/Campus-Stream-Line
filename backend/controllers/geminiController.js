import { GoogleGenAI } from "@google/genai";

export const geminiChat = async (req, res) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "Gemini API key missing" });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const { message, prompt, docContext } = req.body;

    const safeDoc = docContext
      ? docContext.replace(/\s+/g, " ").slice(0, 3500)
      : "";

    const finalPrompt = `
${prompt || "You are an AI assistant for a college. Help with admissions, exams, hostel, placements."}

${safeDoc ? "Use this document if relevant:\n" + safeDoc : ""}

User: ${message}
`.trim();

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: finalPrompt,
    });

    return res.json({ reply: response.text });

  } catch (err) {
    console.error("Gemini Error:", err);
    return res.status(500).json({ error: "Gemini failed to respond" });
  }
};
