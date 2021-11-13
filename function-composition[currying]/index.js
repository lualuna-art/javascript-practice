
//function composition example

//main function receives three other functions as param and a piece of text
const yellToTheConsole = (f1, f2, f3, text) => {
    return f3(f2(f1(text)))
}

//function one
const toUpCase = (fn) => fn.toUpperCase()

//function two
const exclamation = (fn) => `${fn}!!!!!!!!!!!`

//function three
const repeat = (fn) => `${fn}.......${fn}.......${fn}.......${fn}.......`

//calling main function with params
console.log(yellToTheConsole(toUpCase, exclamation, repeat, "Hello world"))
