const menu = [
    {nome: "Torta de limão", preco: 20.02},
    {nome: "Torta de chocolate", preco: 10.55},
    {nome: "Torta alemã", preco: 15.80}
]

const preco = menu.map(item => item.preco).map(item2 => Math.floor(item2))
console.log(preco)

//------------------------------------

const pegarPreco = el => el.preco  //cria como se fosse a estrutura do map e reutiliza
    console.log(
        menu
            .map(pegarPreco)
            .map(Math.ceil)
        )


const pegarNome = el => el.nome
    console.log(
        menu
            .map(pegarNome)
        )

// --------------------------
const obj = [
    {nome: "lua", idade: 25},
    {nome: "ale", idade: 24}
]

console.log(
    obj
    .map(pegarNome) //utiliza o 'boilerplate' que criei logo acima
)


//--- aqui criei uma função para reutilizar o map, só não consegui acessar o obj por parametro
const reutilizarMap = (array, ban) => {
    const pegarNome = el => el.idade
    return array
                .map(pegarNome)

}

console.log(reutilizarMap(obj,obj.idade))