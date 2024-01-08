const meuArray = []

function adicinarObjeto(nome, categoria, preco) {
    const novoObjeto = {
        nome: nome,
        categoria: categoria,
        preco: preco
    }
    meuArray.push(novoObjeto.preco)
}


function soma(array){
    const somaTotal = array.reduce((acumulador, valor) => acumulador + valor, 0);
    console.log('A soma dos valores no array é:', somaTotal);
}


adicinarObjeto('Jornal Online', 'Informação', 89.99)
adicinarObjeto('Cinema', 'Entretenimento', 150.0)
soma(meuArray)
