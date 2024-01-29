const pessoas = [
    { nome: 'Ana', nota: 9.1 },
    { nome: 'Bianca', nota: 8.4 },
    { nome: 'Carlos', nota: 7.6 },
    { nome: 'Julia', nota: 9.7 }
]


const nomes = pessoas.map(pessoa => pessoa.nome)
const notas = pessoas.map(pessoa => pessoa.nota)

console.log(nomes)
console.log(notas)




