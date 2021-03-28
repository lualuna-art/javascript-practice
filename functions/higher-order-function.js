// pode se passar uma função como argumento pra outra função
// retornar uma função a partir de outra função



//1. passar função como parâmetro pra outra função

let runFunction = (func) => {
    return func();
};

let print = () => {
    console.log("lua")
};

runFunction(print);
// runFunction(print()); <-- se chamar a função com parenteses, ela executa antes de chegar na outra funçao e fica undefined.


// posso executar uma função já existente no js dentro da função runFunction, basta colocar dentro de uma variavel.
let math = runFunction(Math.random)
console.log(math)