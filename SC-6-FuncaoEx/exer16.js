const arrayNome = []
const arrayProfissao = []

function adicionarObjeto(a, b){
    const criarObjeto = {
       
       nome: a,
       profissao:b

    }
    arrayNome.push(criarObjeto.nome)
    arrayProfissao.push(criarObjeto.profissao)
}

adicionarObjeto('Maria','desenvolvedora')
adicionarObjeto('Ana','influencer')
adicionarObjeto('Beatriz','engenheira')

console.log(arrayNome)
console.log(arrayProfissao)

