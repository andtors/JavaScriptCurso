const a = 1
const b = 2 
const c = 3

const obj1 = {a: a, b: b, c: c} // antigo
const obj2 = {a ,b , c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valortAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valortAttr
console.log(obj3) // o objeto foi instanciado com o nome da variavel constante nomeAttr

const obj4 = {[nomeAttr]: valortAttr}
console.log(obj4)

const obj5 = {
    funcao1: function (){
        // antiga
    },
    funcao2(){
        // nova
    }
}
console.log(obj5)