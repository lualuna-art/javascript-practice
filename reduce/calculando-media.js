const arr = [2,4,6,8,10,12,14,16,18]

const average = (acc, el, i, array) => {
    if(i === array.length -1) { //-1 representa o final do array
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

const result = arr.reduce(average)
console.log(result)

//EXEMPLO PHYTON TUTOR http://pythontutor.com/visualize.html#code=const%20arr%20%3D%20%5B2,4,6,8,10,12,14,16,18%5D%0A%0Aconst%20average%20%3D%20%28acc,%20el,%20i,%20array%29%20%3D%3E%20%7B%0A%20%20%20%20if%28i%20%3D%3D%3D%20array.length%20-1%29%20%7B%0A%20%20%20%20%20%20%20%20return%20%28acc%20%2B%20el%29%20/%20array.length%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20return%20acc%20%2B%20el%0A%20%20%20%20%7D%0A%7D%0A%0Aconst%20result%20%3D%20arr.reduce%28average%29%0Aconsole.log%28result%29&cumulative=false&curInstr=27&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false