//1. crio uma função para cada resultado que desejo.

const numeroPares = item => item % 2 === 0
const numerosImpares = item => item % 2 === 1
const maioresQue10 = item => item > 10

const array = [1,3,4,6,7,9,10,12,13,15,16,18,20,21,22,30,31]

//2. pego essa função e coloco como callback do filter. assim posso reutilizar esse callback sempre sem ficar repetindo código.
console.log(
    array.filter(numeroPares),
    array.filter(numerosImpares),
    array.filter(maioresQue10)
    )