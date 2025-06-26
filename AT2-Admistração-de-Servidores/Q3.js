// Problema: Dado o array de nomes let nomes = ['Ana', 'Bruno', 'Carla'];, imprima cada nome no console, um por linha.
// O que usar: O método forEach() é a melhor escolha quando você precisa executar uma ação para cada elemento de um array, sem criar um novo array ou alterar o original.
let nomes = ['Ana', 'Bruno', 'Carla'];
nomes.forEach(function(nome) {
  console.log(nome);
});
// Saída:
// Ana
// Bruno
// Carla
