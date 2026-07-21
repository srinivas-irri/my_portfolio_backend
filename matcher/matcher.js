import { knowledgeBase } from "../knowledge/knowledgeBase.js";

export function match(message = "") {

    const text = message.toLowerCase();

    let bestMatch = null;
    let highestScore = 0;

    for (const item of knowledgeBase) {

        let score = 0;

        item.keywords.forEach(keyword => {

            if (text.includes(keyword.toLowerCase())) {
                score++;
            }

        });

        if (score > highestScore) {
            highestScore = score;
            bestMatch = item;
        }

    }

    console.log("Best Match:", bestMatch?.type, "Score:", highestScore);

    return bestMatch;

}