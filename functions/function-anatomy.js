// FUNCTION DECLARATION

function sayHello() {
    console.log('Hello')
}

sayHello() //retorna Hello, porque o trabalho dessa função é apenas imprimir.

let x = sayHello() //undefined, a função não retorna nada, só imprime um console.
console.log(x)

//--------------------------------------

function greeting() {
    return ("Hey! What's up?")
}

greeting() // não retorna nada no console pq é return, pra isso tem que armazenar em uma variável
let y = greeting()
console.log('estou dentro de uma variável:', y) //ou armazenando ela no console.log
console.log(greeting()) //retorna no console: Hey, what's up?


//--------------------------------------------------------------
