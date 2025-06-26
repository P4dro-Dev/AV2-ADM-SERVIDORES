// Problema: Acesse e imprima no console o elemento na terceira posição (índice 2) do array let cores = ['vermelho', 'azul', 'verde', 'amarelo']; usando a notação de colchetes e um loop.
// O que usar: Embora você possa acessar diretamente cores[2], este exercício é para praticar um loop for onde você controla o índice e pode exibir o elemento específico quando o índice for o desejado.
let cores = ['vermelho', 'azul', 'verde', 'amarelo'];
for (let i = 0; i < cores.length; i++) {
  if (i === 2) {
    console.log(cores[i]); // Saída: verde
  }
}
