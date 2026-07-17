import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function askGemini(question) {

    try {

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: question,
        });

        return response.text;

    } catch (error) {

        console.error(error);

        throw error;
    }
}