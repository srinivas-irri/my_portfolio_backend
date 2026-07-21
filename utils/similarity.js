export function normalize(text = "") {

    return text
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, " ")
        .trim();

}

export function containsWord(sentence, word) {

    sentence = normalize(sentence);

    word = normalize(word);

    return sentence.includes(word);

}