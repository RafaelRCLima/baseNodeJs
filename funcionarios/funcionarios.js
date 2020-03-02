const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const salario = funcionario => funcionario.salario
    const salarioMaisBaixo = function (salario1, salario2) {
        // console.log(salario1, salario2)
        if (salario1 > salario2){
            return salario2
        }
        return salario1
    }

    const chinesas = []
    funcionarios.forEach(funcionario => funcionario.pais === 'China' && funcionario.genero === 'F' ? chinesas.push(funcionario) : '')
    const menor = chinesas.map(salario).reduce(salarioMaisBaixo)
    
    chinesas.forEach(function(chinesa){
        if (chinesa.salario === menor){
            console.log(chinesa)
        }
    })


    // console.log(funcionarios.forEach(function (funcionario){
    //     if (funcionarios.map(eChina)){
    //         const menorSalario = funcionarios.map(salario).filter(salarioMaisBaixo)
    //         if (funcionario.salario === menorSalario){
    //             return funcionario
    //         }
    //     }
    // })

    
    const chineses = f => f.pais === 'China'
    const mulheres = f => f.genero === 'F'
    const minSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(minSalario)

    console.log(func)
    

    
})

// Mulher chinesa de menor salário



