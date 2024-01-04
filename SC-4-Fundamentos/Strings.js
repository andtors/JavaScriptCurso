const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Tabela unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // Do indice informado até o final
console.log(escola.substring(0, 3)) //Do indice informado até o segundo indice informado

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '+ escola + '!')
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))
