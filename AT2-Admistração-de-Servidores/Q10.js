// Problema: Calcule a soma total dos preços dos itens no array let itens = [{ nome: 'Lápis', preco: 2.00 }, { nome: 'Caderno', preco: 15.00 }, { nome: 'Borracha', preco: 1.50 }];.
// O que usar: Um loop for (ou for...of) ou o método forEach() são boas opções para iterar sobre o array de objetos e acumular a soma de uma propriedade específica.
let itens = [{ nome: 'Lápis', preco: 2.00 }, { nome: 'Caderno', preco: 15.00 }, { nome: 'Borracha', preco: 1.50 }];
let somaTotal = 0;

// Usando forEach()
itens.forEach(function(item) {
  somaTotal += item.preco;
});

console.log(`A soma total dos preços é: R$ ${somaTotal.toFixed(2)}`); // Saída: A soma total dos preços é: R$ 18.50
