// map return a new array
// doesn't change the size of the original array
// uses VALUES from ORIGINAL array when making a new one
// the new array ALWAYS depends on the original one


const people = [
    {name: "Alessandra", age: 26, job: "contabilidade"},
    {name: "Victória", age: 24, job: "fotógrafa"},
    {name: "Evelyn", age: 25, job: "artista visual"}
]


/////////////////

const names = people.map(() => {})
console.log(names)  // returns the original length: [undefined, undefined, undefined]

////////////////

const ages = people.map((item) => {
    return "hello world"
})
console.log(ages)  //returns ["hello world", "hello world", "hello world"] same original length.
// you can always access these datas but you can return whatever you'd want in the place.

///////////////

const ages2 = people.map((item) => {
    return item.age * 2
})
console.log(ages2)  
// item.age returns ["26", "24", "25"] in STRINGS
// item.age * 2 returns [52, 48, 50] in NUMBERS

////////////////////// INTERATING OVER DATA RETURNING AN OBJECT ///////////////////////

const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(), oldAge: item.age + 20
    }
})
console.log(newPeople)


