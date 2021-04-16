//callback é uma função que tem outra função como parâmetro.
//leitura de arquivo, uma requisição de um servidor...

const executaAlgo = (funcao, a ,b) => {
    return funcao(a,b)
}

const multiplicarCallback = (a,b) => a * b
const somarCallback = (a,b) => a + b

console.log(executaAlgo(multiplicarCallback, 2,5))

console.log(executaAlgo(somarCallback, 2,5))