// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras Melhor forma
function Produto(nome, preco, desc) {
    this.nome = nome // Significa que o atributo está publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(p1.nome) // Como defini ele como publico é possivel puxar o valor mesmo fora de uma função
console.log(p1.preco) // como não defini ele, ele está privado

function teste(p1){
    console.log(p1.nome)
    console.log(p1.preco) //Mesmo criando dentro da função não é possivel puxar o preco
}

teste(p1)

// Função factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}


const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna objeto...
const fromJSON = JSON.parse('{"Info": "Sou um JSON!"}')
console.log(fromJSON.info)