const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'linhas.txt')

console.log('Inicio...')
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')

