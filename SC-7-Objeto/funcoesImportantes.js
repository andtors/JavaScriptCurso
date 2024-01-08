const pessoa = {
    nome: 'Rebeca', 
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// Macete para puxar as chaves e seus respectivos valores num objeto
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)  
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Irá ser listada quando chamarmos por exemplo Object.keys? true sim, false não
    writable: false, // Poderá ser alterada? true sim, false não
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign, concatena e sobrescreve os objetos passados
const dest = { a:1 }
const o1  = { b:2 }
const o2 = { c:3, a:4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
