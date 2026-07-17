import { askGemini } from "../services/gemini.service.js";
import { successResponse, errorResponse } from "../utils/response.js";

export const chat = async (req, res) => {

    try {

        const { message } = req.body;

        const reply = await askGemini(message);

        res.json(
            successResponse({
                reply
            })
        );

    } catch (err) {

        console.error(err);

        res.status(500).json(
            errorResponse(err.message)
        );

    }

};