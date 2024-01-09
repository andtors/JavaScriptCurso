const nums = [1,2,3,4,5]

// For com propósito
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado, nums) // map não altera o array original, porém precisa de um novo para salvar

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // Podemos passar funções como argumento na hora de fazer o mapping
console.log(resultado)



