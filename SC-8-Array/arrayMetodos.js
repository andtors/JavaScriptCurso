const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona em primeiro no indice
console.log(pilotos)

// Splice pode adicionar ou remover elementos

// adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1) // Massa saiu denovo
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Vai até o segundo indice indicado porém não adiciona
console.log(algunsPilotos2)