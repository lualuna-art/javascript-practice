
// Anonymous function

(function (a,b) {
    return console.log(a + b)
})(6,9) //11
//para evocar essa função, basta colocar os parâmetros no final dela.

//----------------------------------------------------

// function expression

let sum = function(a, b) {
    return a + b
}

//variáveis podem receber qualquer valor, incluindo outras funções dentro
let anotherSum = sum  // declarei uma nova variável que recebe a função.
console.log(anotherSum(5,6)) // aqui a nova variável { anotherSum} é chamada e é aplicado os parametros da função { sum } nela mesma. { anotherSum(5,6) } 
// console: 11

// anotherSum aponta para a função sum e sum aponta para anotherSum -----> sum
                                                          // sum -----> anotherSum