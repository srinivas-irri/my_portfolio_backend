import { GoogleGenAI } from "@google/genai";
import { buildPrompt } from "./prompt.service.js";

export async function askGemini(question) {

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = buildPrompt(question);

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    return response.text;
}