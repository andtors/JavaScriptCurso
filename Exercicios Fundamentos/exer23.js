function menorNumero(numeros) {
   let menor = numeros[0]
   for (let i in numeros)
      if (numeros[i] < menor)
         menor = numeros[i]
   return menor
}

function menorNumero1(numeros) {
   return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
   }


console.log(menorNumero([5, 10, 15, 20, 25]))
console.log(menorNumero1([80, 20, 50, 150, 12]))