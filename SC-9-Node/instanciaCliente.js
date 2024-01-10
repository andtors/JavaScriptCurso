const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // () a mais pois está invocando uma função factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // retorna sempre a mesma instancia

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // como usei um metodo factory ele sempre incrementa