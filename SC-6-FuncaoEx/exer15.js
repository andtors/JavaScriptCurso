const arrayComDiversosTipos = []
const soNum = []

function adicionarArray(a, b, c, d, e) {
    const criarObj = {
        a: a,
        b: b,
        c: c,
        d: d,
        e: e
    }
    arrayComDiversosTipos.push(criarObj)

}


adicionarArray('Javascript', 1, '3', 'Web', 20)

console.log(arrayComDiversosTipos)
const numeros = arrayComDiversosTipos.filter(item => typeof item === 'number');

console.log(numeros)


