import { GoogleGenAI } from "@google/genai";
import portfolioData from "../data/portfolioData.js";

export async function askGemini(question, mode) {

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
    });

    let voiceRules = "";

    if (mode === "voice") {
        voiceRules = `
        VOICE ASSISTANT RULES:
        - Respond like a natural human conversation.
        - Do not read email addresses character by character.
        - Do not speak URLs directly.
        - Instead of saying email addresses, say:
          "You can contact Srinivas through email, phone, or LinkedIn."
        - Keep answers short and easy to understand.
        - Avoid special characters.
        `;
    }

    const prompt = `
You are Srini AI, the personal AI assistant for Srinivas Irri.

Answer ONLY using the portfolio information below.

If the answer is not available in the portfolio, reply exactly:

"I'm sorry, I couldn't find that information in Srinivas's portfolio."

Portfolio Information:

${JSON.stringify(portfolioData, null, 2)}

User Question:
${question}

${voiceRules}
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });



    return response.text;
}