// Problema: Você tem um array de preços de produtos: let precos = [15.50, 8.00, 25.00, 4.99, 12.75];. Crie um novo array contendo apenas os preços que são menores que R$ 10,00.
// O que usar: O método filter() é o mais indicado quando você quer criar um novo array contendo apenas os elementos que satisfazem uma determinada condição.
let precos = [15.50, 8.00, 25.00, 4.99, 12.75];
let precosBaratos = precos.filter(function(preco) {
  return preco < 10.00;
});
