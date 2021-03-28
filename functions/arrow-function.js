//arrow function é SEMPRE uma função anônima.

(function (a,b) {
    return console.log(a + b)
})(6,9)    //15

// (function () {
//     let x = 200
//     console.log(x)
// })();    //200

//tentei executar as duas e não dá, só rola uma por vez

//------------------------------------------------------------


let spread = (...num) => {
    let res = 0;
    for (let n of num) {
         res += n
    }
    return res
}

console.log(spread(1,2,3,4,5,6,7))


let array = (...num) => {
    console.log(num)
}

array(10,20,30,40,50)  //peguei uma serie de numeros e espalhei dentro de um array no parâmetro