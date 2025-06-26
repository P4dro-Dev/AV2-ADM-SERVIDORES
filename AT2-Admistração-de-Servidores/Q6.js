// Problema: Dado o array de strings let frutas = ['maçã', 'banana', 'cereja'];, crie um novo array com todos os nomes de frutas em letras maiúsculas.
// O que usar: O método map() permite aplicar uma função de transformação a cada elemento, retornando um novo array com os elementos modificados.
let frutas = ['maçã', 'banana', 'cereja'];
let frutasMaiusculas = frutas.map(function(fruta) {
  return fruta.toUpperCase();
});

console.log(frutasMaiusculas); // Saída: ['MAÇÃ', 'BANANA', 'CEREJA']
