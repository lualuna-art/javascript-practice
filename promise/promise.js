//abaixo temos 3 funções.
// uma função(funcao) que tem uma promise, essa promise chama uma arrow function anônima que vai cumprir a função(cumprirPromessa) que está em seu parâmetro.
let funcao = new Promise((cumprirPromessa) => {
    cumprirPromessa({
        x:3,
        y:4
    }) //aqui está o resultado da promise. Como acessar esse valor?
})

//acessa o valor gerado através do then. O método then sempre retorna uma promessa. Essa promessa tem o método then, por isso podemos encadear vários then.

funcao.then((valorDevolvidoDaPromise) => {
    return console.log(valorDevolvidoDaPromise.x) //5
} )

//obs. uma promessa gera apenas um único valor. A promessa pode devolver um objeto e esse objeto ser acessado por dot notation.

// EXEMPLO DOIS
const promiseDois = new Promise((cumprindo) => {
    cumprindo("Luana")
})

promiseDois.then((resultado) => {
    return console.log(resultado)
})





// UTILIZANDO O THEN VÁRIAS VEZES
const promiseTres = new Promise(function(resultado) {
    resultado( ['Lua', 'Marte', 'Terra', 'Saturno'])
})

promiseTres
           .then(r => r[0])
           .then(item => item[0])
           .then(res => console.log(res))

