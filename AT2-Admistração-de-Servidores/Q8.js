// Problema: Dado o array let pontuacoes = [45, 60, 30, 75, 50, 82];, crie um novo array com todas as pontuações que são maiores ou iguais a 50.
// O que usar: O método filter() é ideal para criar um subconjunto de um array com base em uma condição, selecionando apenas os elementos que a satisfazem.
let pontuacoes = [45, 60, 30, 75, 50, 82];
let pontuacoesAltas = pontuacoes.filter(function(pontuacao) {
  return pontuacao >= 50;
});
