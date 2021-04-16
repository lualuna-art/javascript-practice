//setInterval executa a função a cada intervalo de tempo definido.
//importante colocar a setInterval dentro de uma variável para aplicar o clearInterval

const aviso = setInterval(() => console.log('oi'), 1000)

// setTimeout(() => clearInterval(aviso), 5000)

//setTimeout executa uma função apenas uma vez após o intervalo definido.
//clearInterval é para parar a setInterval
setTimeout(() => {
    clearInterval(aviso);
    console.log('tchau')
}, 5000)

//----------------------------------------------------------------

// const nome = "Luana"
// let res;

// const oi = setInterval((n = "Lua") => {
//     for(i = 0; i< n.length; i++) {
//         console.log(res = n[i])
//    }
// }, 1000)

// setTimeout(() => {
//      clearInterval(oi)
//  }, 1000)



 const frase = "Luana"
 let idx = 1
 let res = "";

 const escrever = () => {
     res = frase.slice(0,idx)
     idx++

     if( idx > frase.length) {
         idx = 1;
     }
     return console.log(res)
 }

setInterval(escrever, 500);

