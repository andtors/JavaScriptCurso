const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // precisa converter para objeto
    console.log(`${config.db.host}:${config.db.port}`)
})

// Lê já com arquivo json em objeto
const config = require('./arquivo.json') 
console.log(config.db)

// ler diretorio e ver todas as pastas nela
fs.readdir(__dirname, (err, arquivos)=> {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
