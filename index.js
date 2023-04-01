const numeros = [1, 2, 3, 4, 5]
const numeros2 = [6, 7, 8, 9, 10]

const novoArray = numeros.concat(numeros2)

//const arrayCortado = novoArray.slice(5, 11)

//console.log(arrayCortado)

const encontrarNoArray = novoArray.findIndex((numero) => {
    return numero === 5
})

//console.log(encontrarNoArray)

//novoArray.forEach((elemento, indice) => {
//    console.log(`Valor - ${elemento} / indice - ${indice}`)
//})

// MAP
//const exemploMap = novoArray.map((item) => {
//    return item === 5
//})
//console.log(exemploMap)

const usuarios = [
    {
        nome: 'João',
        idade: 25,
        profissao: 'Desenvolvedor Front-end',
        salario: 3500

    },
    {
        nome: 'Maria',
        idade: 23,
        profissao: 'Back-end',
        slario: 8000
    },
    {
        nome: 'José',
        idade: 45,
        profissao: 'PO',
        salario: 8000

    }
]
//filter
const filtrarUsuarios = usuarios.filter((usuario) => {
    return usuario.salario > 3500
})

//console.log(filtrarUsuarios)

//REDUCE

const somarSalarios = usuarios.reduce((total, usuario) => {
    return total + usuario.salario
}, 0)

//console.log(somarSalarios)

const pessoa = {
    nome: 'Maria',
    idade: 35,
    hoobies: ['Assistir Séries', 'Passear com o doguinho', 'Jogar LOL', 'Estuda'],
    caracteristicas: {
        cabelo: 'cacheado',
        altura: 1.65,
        peso: 56.7
    }
}

pessoa.profissao = 'Dsenvolvedora'

console.log(pessoa)