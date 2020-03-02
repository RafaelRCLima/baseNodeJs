console.log(this === global)
console.log(this === module)
console.log('===================')
console.log(this === module.exports)
console.log(this === exports)
console.log('===================')

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...'
}

logThis()