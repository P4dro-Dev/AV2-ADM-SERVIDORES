// Problema: Dado o array let numeros = [10, 20, 30];, crie um novo array onde cada número seja o dobro do valor original.
// O que usar: O método map() é perfeito quando você precisa transformar cada elemento de um array e obter um novo array com os resultados dessa transformação.
let numeros = [10, 20, 30];
let numerosDuplicados = numeros.map(function(numero) {
  return numero * 2;
});
