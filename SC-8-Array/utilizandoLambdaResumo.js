
// Map
function utilizandoMap(array) {
    const subtrair5 = e => e - 10
    const paraDin = e => '$' + e
    let resultadoMap = array.map(function (e) {
        return e * 2
    })
    console.log(resultadoMap.map(subtrair5).map(paraDin))
    // (e) é o nome que damos aos dados da array que vamos manipular
}
utilizandoMap([10, 20, 30, 40, 50])

// Filter
function utilizandoFilter(array) {
    const checarAposentadoria = p => p.aposentado
    const checarIdade = p => p.idade >= 40
    console.log(array.filter(checarAposentadoria))
    console.log(array.filter(checarIdade))
}
utilizandoFilter([{ nome: 'André', idade: 23, aposentado: false },
{ nome: 'Bia', idade: 26, aposentado: false },
{ nome: 'Paula', idade: 57, aposentado: false },
{ nome: 'Rubens', idade: 60, aposentado: true }])

// forEach
function utilizandoForEach(array) {
    const pegarNome = array.map(p => p.nome)
    console.log(pegarNome) 
}
utilizandoForEach([{ nome: 'André', salario: 2000, profissao: 'Programador' },
{ nome: 'Bia', salario: 5000, profissao: 'Engenheira' }])

// reduce
function utilizandoReduce(array) {
    const pegarIdade = array.map(p => p.idade)
    console.log(pegarIdade.reduce((acumulador, atual) => acumulador + atual))
}
utilizandoReduce([{ nome: 'André', idade: 23, aposentado: false },
{ nome: 'Bia', idade: 26, aposentado: false },
{ nome: 'Paula', idade: 57, aposentado: false },
{ nome: 'Rubens', idade: 60, aposentado: true }])
