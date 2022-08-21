var numeros = [79, 23, 3, 18, 16, 66, 97, 48, 19, 44];

var valorMenor = Math.min.apply(null, numeros);
var indiceMenor = numeros.indexOf(valorMenor);
var valorMaior = Math.max.apply(null, numeros);
var indiceMaior = numeros.indexOf(valorMaior);

console.log("-------------------------------------");
console.log("Valor menor " + valorMenor);
console.log("-------------------------------------");
console.log("Indice menor " + indiceMenor);
console.log("-------------------------------------");
console.log("Valor maior " + valorMaior);
console.log("-------------------------------------");
console.log("Indice maior " + indiceMaior);
console.log("-------------------------------------");
