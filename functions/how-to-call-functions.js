// é importante saber como passar uma função como parâmetro para outra função, e a partir de uma função 
//retornar uma outra função.

// Essa função executa outra função
const executaUmaFuncao = (fn) => {
    if(typeof fn === 'function') {  //esse typeof verifica se é uma função antes de executar. Se não for uma função, ele apenas não executa e não dá um erro bizarro.
        return fn()   
    }
}

const sum = num => num * 2 + 3
console.log(executaUmaFuncao(() => sum(5)))
//antes o valor saia undefined porque a função sum já executava antes mesmo de chegar na executaUmaFuncao.
//para isso não acontecer, precisamos colocar ela dentro de outra função. arrow function.

//--------------------------------------------------------------------------------------------------------------------
//funcao
const valorDesconto = (desc) => {
    return valorCompra = compra => compra - desc
}
//primeiro parametro é colocado em uma variável
const descontoFixo = valorDesconto(10)
console.log(descontoFixo(50)) //chama a variável que armazena a função valorDesconto e coloca o parâmetro da função valorCompra nela.

// CHAMANDO DIRETO, sem armazenar o desconto numa variável
console.log(valorDesconto(5)(50)) //basta colocar os parâmetros um ao lado do outro.




//----------------------------------------------------------------------------EXEMPLO MAIS PRÁTICO
//utilitários
const somar = (a,b) => a + b
const multiplicar = (a,b) => a * b

//conta
const calcular = (p1) => {
    return parametroDois = (p2) => {
        return parametroTres = (p3) => {
            if(typeof p3 === 'function') {
                return p3(p1,p2)
            }
        }
    }
}
console.log(calcular(100)(100)(somar))
console.log(calcular(5)(5)(multiplicar))
console.log(calcular(1)(1)(somar)) 

//essa função é responsável por pegar dois numeros e fazer alguma conta com a função que está no parâmetro.