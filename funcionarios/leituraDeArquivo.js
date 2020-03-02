const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assíncrono
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.nome}, ${config.idade} anos, ${config.estadoCivil}, ${config.possuiCartao} cartão`)
})

const config = require('./arquivo.json')
console.log(config)

fs.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})