function calcularMedia(numeros) {
  const quantidadeDeNumeros = numeros.length
  let somaTotal = 0
  for (numero of numeros) {
    somaTotal += numero
  }
  return somaTotal / quantidadeDeNumeros
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))