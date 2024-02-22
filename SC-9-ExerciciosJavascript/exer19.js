
function somarArray(array){
  const resultado = array.reduce((acumulador, atual) => acumulador + atual)
  return console.log(resultado)
}

somarArray([10, 10, 10])

function somarNumeros(numeros) {
  const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
  return soma
  }
  

console.log(somarNumeros([10, 10, 10]) )