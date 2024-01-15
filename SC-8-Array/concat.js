const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos)


console.log(['a', 'b'].concat([1,2], [3, 4], 5, [[6, 7]]))

const array1 = [1, 2 ,3]

function concatenarTudo(array){
    let total = ''
    for(let i=0; i<=array.length;i++){
       total += [i].toString()
    }
    console.log(total)
}

concatenarTudo(array1)