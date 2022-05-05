/**
 * escreva uma função (arrow function) que irá receber os parâmetros cpf, data de nascimento e cep (todos em string)
 * e sem formatação, formate-os com regex e exiba no console
 */

// const pessoa = {
//   cpf: "12345678978",
//   dataNascimento: "12181648",
//   cep: "14589214",
// };

// const info = (pessoa) => {
//   const regext5 = /(\d{3})(\d{3})(\d{3})(\d{2})/gim;
//   const resultCpf = pessoa.cpf.replace(regext5, "$1.$2.$3-$4");
//   console.log("o cpf é: " + resultCpf);

//   const regextDataNascimento = /(\d{2})(\d{2})(\d{4})/gim;
//   const resultDataNascimento = pessoa.dataNascimento.replace(
//     regextDataNascimento,
//     "$1/$2/$3"
//   );
//   console.log("o cep é: " + resultDataNascimento);

//   const regextCep = /(\d{5})(\d{3})/gim;
//   const resultCep = pessoa.cep.replace(regextCep, "$1-$2");
//   console.log("o cep é: " + resultCep);
// };
// info(pessoa);

/**
 * const person = {
 *  firstName: "John",
 *  lastName: "Doe"
 * };
 *
 * Dado o objeto acima, extraia cada propriedade com destructuring
 */

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// const { firstName, lastName } = person1;

// console.log(firstName);
// console.log(lastName);

/**
 * const person = {
 *  firstName: "John",
 *  lastName: "Doe",
 *  age: 30,
 *  country: "Brazil",
 *  city: "São Paulo"
 *  state: "SP",
 *  postalCode: "01001001",
 *  neighbohur: "Centro"
 * }
 *
 * Dado o objeto acima, extraia os dados pessoais de John e todo restante (endereço) em uma variável
 * chamada endereco, ao final desse exercício, você deve ter apenas 4 variáveis
 */

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   country: "Brazil",
//   city: "São Paulo",
//   state: "SP",
//   postalCode: "01001001",
//   neighbohur: "Centro",
// };

// const { firstName, lastName, age, ...endereco } = person;

// console.log(
//   `${firstName} ${lastName} possui ${age} e mora no endereço ${Object.values(
//     endereco
//   )}`
// );
