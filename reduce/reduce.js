// Ao trabalhar com arrays, precisamos identificar como lidar com eles:
// 1. A partir desse array eu preciso gerar um novo array que vai ter a mesma quantidade de itens? (map)
// 2. Eu preciso gerar um novo array com menos itens? (filter)
// 3. Preciso gerar um valor que não necessariamente seja um array? (reduce)
// reduce recebe o elemento, indice e o array, assim como no map e filter.

const numbers = [1000,1,2,3,4]

// const sum = (total, el) => {
//     return total + el
// }
const sum = (total, el) => total + el //função de callback para o reduce //total é o accumulator, el é cada elemento do array iterado

const total = numbers.reduce(sum)
console.log(total)

//ou pode passar a função direto no reduce
// const total = numbers.reduce((total, el) => total + el)

//EXEMPLO NO PHYTON TUTOR http://pythontutor.com/visualize.html#code=const%20numbers%20%3D%20%5B10,11,12,13,14%5D%0A%0Aconst%20sum%20%3D%20%28total,%20el%29%20%3D%3E%20total%20%2B%20el%20%0A%0Aconst%20total%20%3D%20numbers.reduce%28sum%29%0Aconsole.log%28total%29&cumulative=false&curInstr=12&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

