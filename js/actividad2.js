"use strict";
const isVowel = (letter) => {
    const vowels = "aeiouáéíóúüAEIOUÁÉÍÓÚÜ";
    return vowels.includes(letter);
};
const countVowels = (text) => {
    let result = 0;
    for (const letter of text) {
        result += isVowel(letter) ? 1 : 0;
    }
    ;
    return result;
};
const sayLenghtComparison = (text1, text2) => {
    let result = "";
    if (text1.length === text2.length) {
        result = "Ambos textos son igual de largos.";
    }
    else if (text1.length > text2.length) {
        result = "El primer texto es el más largo.";
    }
    else {
        result = "El segundo texto es el más largo.";
    }
    return result;
};
const extractEvenCharacters = (text) => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result += ((i + 1) % 2) === 0 ? text[i] : "";
    }
    return result;
};
const main = () => {
    const first = document.querySelector('#text1').value;
    const second = document.querySelector('#text2').value;
    const display = document.querySelector('#report');
    const lengthParagraph = document.createElement('p');
    lengthParagraph.textContent = sayLenghtComparison(first, second);
    display.appendChild(lengthParagraph);
    const vowelsParagraph = document.createElement('p');
    vowelsParagraph.textContent = "El primer texto tiene " + countVowels(first) + ". El segundo texto tiene " + countVowels(second) + ".";
    display.appendChild(vowelsParagraph);
    const extractParagraph = document.createElement('p');
    extractParagraph.textContent = "Los caracteres pares del primer texto son: " + extractEvenCharacters(first);
    display.appendChild(extractParagraph);
};
//# sourceMappingURL=actividad2.js.map