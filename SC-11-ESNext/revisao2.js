// Arrow function
const soma1 = (a, b) => a + b // return implicito OU:
const soma2 = (a, b) => {
    return a + b
} // com corpo é necessario haver return

console.log(soma1(2, 3))
console.log(soma2(2, 3))

// Arrow function com this
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
} // Assume o parametro que foi passado inicialmente caso não seja preenchido quando a function for chamada
log()
log('Sou mais forte')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))

