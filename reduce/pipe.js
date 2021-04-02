
const sum = (num) => num + 20
const multiply = (num) => num * 5
const divide = (num) => num / 2


const total = (initValue, arr) => {
    return arr.reduce((acc, func) => {
        return func(acc)
    },initValue)
}

console.log(total(1, [sum, multiply, divide]))

// exemplo no phyton tutor http://pythontutor.com/visualize.html#code=%0Aconst%20sum%20%3D%20%28num%29%20%3D%3E%20num%20%2B%2020%0Aconst%20multiply%20%3D%20%28num%29%20%3D%3E%20num%20*%205%0Aconst%20divide%20%3D%20%28num%29%20%3D%3E%20num%20/%202%0A%0A%0Aconst%20total%20%3D%20%28initValue,%20arr%29%20%3D%3E%20%7B%0A%20%20%20%20return%20arr.reduce%28%28acc,%20func%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20func%28acc%29%0A%20%20%20%20%7D,%20initValue%29%0A%7D%0A%0Aconsole.log%28total%280,%20%5Bsum,%20multiply,%20divide%5D%29%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false