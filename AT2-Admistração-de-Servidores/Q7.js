// Problema: Você tem um array de alunos: let alunos = [{ nome: 'Pedro', idade: 10 }, { nome: 'Maria', idade: 11 }];. Para cada aluno, imprima uma mensagem no console como: "Nome: Pedro, Idade: 10 anos.".
// O que usar: Use o método forEach() para iterar sobre cada objeto de aluno e executar a ação de imprimir a mensagem formatada.
let alunos = [{ nome: 'Pedro', idade: 10 }, { nome: 'Maria', idade: 11 }];
alunos.forEach(function(aluno) {
  console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade} anos.`);
});
// Saída:
// Nome: Pedro, Idade: 10 anos.
// Nome: Maria, Idade: 11 anos.
