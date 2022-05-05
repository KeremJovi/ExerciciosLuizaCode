/*
Escreva uma condição em que o usuário seja permitido dirigir. 
*/

var motorista = "bebado";

console.log(
  motorista === "não está bebado" ? "pode dirigir" : "não pode dirigir"
);

/*
Escreva uma condição em que o usuário possa realizar uma tarefa se ele quiser ou se algúem permitir. 
*/

var quer = true;
var permitir = true;

console.log(quer || permitir ? "eu quero" : "eu não quero ");

/*
Escreva uma condição em que o usuário escolha a roupa que irá utilizar em várias situações climáticas. 
*/

var estacao = "Primavera";

console.log(
  estacao === "Verão"
    ? "Vestir roupas leves"
    : estacao === "Inverno"
    ? "Vestir roupas de frio"
    : estacao === "Outono"
    ? "Vestir um casaquinho"
    : estacao === "Primavera"
    ? "Vestir roupas coloridas e frescas"
    : "fique de pijama"
);
