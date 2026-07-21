import { match } from "../matcher/matcher.js";
import { aiReply } from "../services/ai.service.js";
import { askGemini } from "../services/gemini.service.js";

export const chat = async (req, res) => {

    const { message } = req.body;

    try {

    console.log("Incoming message:", message);

    const result = match(message);

    console.log("Matched:", result);

    if (result) {

        console.log("Manual response");

        return res.json({

            success: true,

            source: "manual",

            data: aiReply(result)

        });

    }

    console.log("Calling Gemini...");

    const reply = await askGemini(message);

    console.log("Gemini Reply:", reply);

    const matched = match(message);

    console.log("Matched After Gemini:", matched);

    return res.json({

        success: true,

        source: "gemini",

        reply,

        action: matched ? aiReply(matched).action : null

    });

}
catch (err) {

    console.error("BACKEND ERROR:");

    console.error(err);

    return res.status(500).json({

        success: false,

        message: err.message

    });

}

};