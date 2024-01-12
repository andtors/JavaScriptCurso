const fs = require('fs')
const path = require('path')

function retornoArquivo(nomeArq){
    return new Promise(resolve =>{
        const caminho = path.join(__dirname, nomeArq)
        fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
    })
}
retornoArquivo('linhas.txt')

function lerArquivo(nomeArq){
    return new Promise(resolve => {
        const caminho = path.join(__dirname, nomeArq)
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
    })
}
lerArquivo('linhas.txt')
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)