console.log("UNIQUE VALUES WITH MAP")

const menu = [
    {name: 'panquecas', category: "breakfast"},
    {name: 'pasta de amendoim', category: "breakfast"},
    {name: 'ala minuta', category: "almoço"},
    {name: 'hamburguer', category: "janta"},
    {name: 'tapioca', category: "janta"},
    {name: 'lasanha', category: "almoço"},
]

const category = menu.map((cat) => {
    return cat.category
})
console.log(category)  // veio várias categorias repetidas.

// map pega todas as instâncias
// new Set apenas retorna valores unicos

const categoryNewSet = new Set(menu.map((cat) => {
    return cat.category
}))
console.log(categoryNewSet)

//Ele retorna como objeto, basta usar o spread operator para retornar tudo em array.

const categoryNewSet2 = [...new Set(menu.map((cat) => {
    return cat.category
}))]
console.log(categoryNewSet2)

// COLOCANDO NO HTML
const resultado = document.querySelector(".result")
resultado.innerHTML = categoryNewSet2.map((category) => {
    return `<button>${category}</button>`
}).join('')
//ele retorna em array, então é preciso usar o join pra tirar as vírgulas no HTML.
