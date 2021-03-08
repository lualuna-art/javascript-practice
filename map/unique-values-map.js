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

console.log(category)