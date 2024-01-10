function receberSomenteOsParesDeIndicesPares(numeros) {
  let resultado = []
  for (let i = 0; i < numeros.length; i += 2) {
    const numeroPar = numeros[i] % 2 === 0
    if (numeroPar)
      resultado.push(numeros[i])
  }
  return resultado
}


function receberSomenteOsParesDeIndicesPares(numeros) {
  return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
  })
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) )

console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))
