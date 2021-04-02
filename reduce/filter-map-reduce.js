
const estudantes = [
    { nome: 'Maria', nota: 6.5 },
    { nome: 'João', nota: 4.5 },
    { nome: 'Carla', nota: 8.5 },
    { nome: 'Débora', nota: 9 },
]

//filter
const aprovados = estudante => estudante.nota > 6 

//map nome aprovados
const nomesAprovados = estudante => estudante.nome

//map
const notas = (estudante) => estudante.nota

//reduce
const media = (acc, el, i, array) => {
    if(i === array.length -1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

//resultados:

console.log(
    estudantes
        .filter(aprovados)
        .map(notas)
        .reduce(media)
) // output: 8


console.log(
    estudantes
        .filter(aprovados)
        .map(nomesAprovados)
) //output: [ 'Maria', 'Carla', 'Débora' ]





// const executar = (fn) => {
//     fn() 
// }

// const imprimir = (name) => {
//     return console.log(name)
// }

// executar(imprimir)("lua")



// const arr = [5,10,20,30,40]

// // const retornaMedia = (acc, el, i, arr) => {
// //     if(i === arr.length -1) {
// //         return (acc + el) / arr.length
// //     } else {
// //        return acc + el
// //     }
// // }

// // const amedia = arr.reduce(retornaMedia)
// // console.log(amedia)

// const retornaMaiorNumero = arr.reduce((acc,el) => { return acc + el })
// console.log(retornaMaiorNumero)


