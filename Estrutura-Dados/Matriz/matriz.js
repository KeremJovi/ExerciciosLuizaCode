/**
 * Exercicio 1 - Refatorar nomes de variaveis e incrementar retorno de numeros impares
 */
function removeOdd(arr) {
  let listPair = [];
  let listOdd = [];
  for (let number of arr) {
    if (number % 2 === 0) {
      listPair.push(number);
    } else {
      listOdd.push(number);
    }
  }
  return `Lista dos números pares [${listPair}]  e lista dos numeros impares [${listOdd}]`;
}

function removePair(arr) {
  let list = [];
  arr.forEach((numero) => {
    if (numero % 2 !== 0) {
      list.push(numero);
    }
  });
  return list;
}

console.log(removeOdd([3, 2, 41, 3, 34]));
console.log(removePair([3, 2, 41, 3, 34]));
