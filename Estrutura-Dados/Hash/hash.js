/*
 * Implementem hash usando outra funcao hash da criatividade de vcs
 */

let text =
  "E isto é o que todos os desenvolvedores mais buscam nos últimos tempos: módulos reusáveis, baseados em componentes e que forneçam uma interface em comum para ser acessada por diferentes clientes e alimentada por diferentes servidores.";

function counterLetters(text) {
  let words = new Map();
  let counter = 1;
  let textFormatted = text
    .toLocaleLowerCase()
    .trim()
    .replace(",", "")
    .replace(".", "")
    .replace(/\s/g, "")
    .split("");

  textFormatted.forEach((word) => {
    if (!words.has(word)) {
      counter = 1;
    } else if (word === word) {
      counter++;
    }
    words.set(word, counter);
  });
  return words;
}

function counterWords(text) {
  let words = new Map();
  let counter = 1;
  let textFormatted = text
    .toLocaleLowerCase()
    .trim()
    .replace(",", "")
    .replace(".", "")
    .split(" ");

  textFormatted.forEach((word) => {
    if (!words.has(word)) {
      counter = 1;
    } else if (word === word) {
      counter++;
    }
    words.set(word, counter);
  });
  return words;
}

console.log(counterWords(text));
console.log(counterLetters(text));
