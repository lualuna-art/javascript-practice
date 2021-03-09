//filter retorna um novo array.
// find retorna um objeto, retorna primeiro match, se não tiver match vem undefined.

const people = [
    {nome: "Adriana", idade: 22, profissão: "designer", ["comida"]: "lasanha"},
    {nome: "Suelen", idade: 29, profissão: "vendedora", "comida": "hamburguer"},
    {nome: "Mário", idade: 56, profissão: "segurança", "comida": "pizza"},
    {nome: "Joana", idade: 44, profissão: "confeiteira", "comida": "hamburguer"}
]

const acimaDe30 = people.filter((pessoa) => {
    //se a condição for true, entra pro novo array.
    return pessoa.idade > 30
})
console.log(acimaDe30)  // OUTPUT {nome: "Mário", idade: 56, profissão: "segurança"}
                        // 1: {nome: "Joana", idade: 44, profissão: "confeiteira"}

////////////////// QUANDO A CHAVE É UMA STRING ////////////////////////////////////////
const findString = people.filter((item) => {
    return item["comida"] === "hamburguer"   //quando a chave é string usa colchetes notation
})
console.log(findString)

////////////////////////////////// FIND///////////////////////////////////////////////
//FIND retorna direto o valor enquando no FILTER tem que especificar a posição.
const adrianaFind = people.find((person) => { 
    return person.nome === "Adriana"
})
console.log("Find retorna apenas o item do array", adrianaFind.idade)

const adrianafilter = people.filter((person) => {
    return person.nome === "Adriana"
})
console.log("filter retorna undefined", adrianafilter.idade) // UNDEFINED porque nao especifica a posição do array.
console.log("filter retorna idade quando declara posiçao [0]", adrianafilter[0].idade) //22 porque a posição do array é especificada

///////////////////////////////////////////////////////////////////////////////////
// RETORNA UMA SINGLE INSTANCE, INSTANCIA UNICA
const fruits = ["Melão", "banana", "maçã"] // se for um array, o find retorna apenas a string e não o array com todas infos.[] Só retorna objeto quando os dados são um objeto.{}
const findfruit = fruits.find((fruit) => fruit === "maçã" )
console.log(findfruit)

//////////////////////////////////////////////////////////////////////////////////
//RETORNA APENAS O PRIMEIRO MATCH. Legal usar quando são valores unicos como: usernames
const onlyPerson = people.find((person) => {return person.idade > 23})
console.log(onlyPerson)
// retornou só a primeira posição mesmo tendo outras pessoas que encainxam na condição.


