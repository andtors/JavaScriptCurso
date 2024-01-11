{
    var a = 2
    let b = 3
    console.log(b)
    // variaveis let só podem ser chamadas dentro do bloco em que foi criada
}

{
    console.log(a)
}

console.log(a) // já variaveis var podem ser chamadas em qualquer escopo

// Template string
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y) 

const { idade: i, nome }  = { nome: 'Ana', idade: 9 } // é possivel alterar o nome do objeto conforme ex idade: i (idade virou i)
console.log(i, nome)

