

// DOT NOTATION
const person = {
    name: "Lua"
}
console.log(person.name) // "Lua"
// aqui adiciona a idade ao objeto
person.age = 25;
console.log(person) //{name: "Lua", age: 25}


// BRACKET NOTATION

//imagina se você quer adicionar uma chave com um hífen. Não dá, tem que transformar em uma string.
const items = {
    "featured-items": ['item1', 'item2']
}

//não tem como acessar a chave "featured-items" com o dot notation pois ele é uma string. É obrigatório acessar pelo bracket notation.
console.log(items["featured-items"]) // output: ["item1", "item2"]

//também dá pra acessar chaves do objeto person com bracket notation. Mas é obrigatório transformar a chave em uma string, anyway. ex:
console.log(person["name"])


////////////////////// SETUP KEYS DYNAMIC WITH BRACKET NOTATATIONS

let appState = "loading..."


const app = { // ESTE É MEU OBJETO
    [appState]:true  //loading... toma lugar em [appState], 
                      //appState seria a variavel que contém loading....
}
console.log(app)  // OUTPUT {loading...: true}
                //          loading...: true

    

// nesse caso, a chave vai se tornar o VALOR da variável que eu setar antes.
//Ex: [appState]:true === {loading...: true}
// Se trocar o valor de appState para: appState = "error", fica:
// [appState]:true === {error: true}

//Posso criar uma nova chave a adicionar no objeto app.
    let nomeChave = "Comida"
    app[nomeChave] = "Lasanha"  //app[nomeChave] acessa a pripriedade comida.

    console.log("Adicionei comida ao ao objeto", app) // OUTPUT {loading...: true, Comida: "Lasanha"}

    ///////////////// PRÁTICAS //////////////////////////////////////////


    const objeto = [
    { nome: "Celular", marca: '', cor: ''},
    { nome: "Carro", marca: '', cor: ''}
]


    let changeValue = (chave, valor) => {
        objeto[chave] = valor
    }

    changeValue("marca", "Motorola")
    console.log(objeto)
    changeValue("cor", "amarelo")
    changeValue("nome", "Carro")
    changeValue([..."nome"], "Caneta")

    const toArray = [...new Set(objeto.map((item) => {  //new set só funciona quando o objeto ja está dentro de um array
        return item.nome
    }))]

console.log(toArray)


///////////////////////////////////////////////////////

let drinks = [
    {nome: "Tequila Sunrise", valor: 15, disponivel: true},
    {nome: "Sex on the Beach", valor: 18, disponivel: false},
    {nome: "Apple Sour", valor: 12, disponivel: true},
    {nome: "Martini", valor: 20, disponivel: true},
    {nome: "Mojito", valor: 16, disponivel: false},
]

console.log(drinks)

let disponivel = "disponivel"
drinks[disponivel] = false



            