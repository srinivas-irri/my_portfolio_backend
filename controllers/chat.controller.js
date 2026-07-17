import { GoogleGenAI } from "@google/genai";

export const chat = async (req, res) => {

    try {

        console.log("API:", process.env.GEMINI_API_KEY);

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        });

        const { message } = req.body;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: message,
        });

        res.json({
            success: true,
            reply: response.text,
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message,
        });

    }

};