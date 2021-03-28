//range(5) ---> [1,2,3,4,5]

// let countUntillNum = (x) => {
//     let res = []
//     for(let i = 1; i<= x; i++){
//         res.push(i)
//     }
//     return res
// }

// console.log(countUntillNum(5))


//2. range(6,11) ---> [6,7,8,9,10,11]

let range = (a,b,s = 1) => {
    const n1 = b === undefined ? 1 : a 
    const n2 = b === undefined ? a : b
    let res = [];
    for(let i=n1; i<=n2; i+=s){
        res.push(i) 
    }
    return res
    // console.log(n)
}
console.log(range(5))
console.log(range(6,11))
// console.log(range(10,19,2))
// console.log(range(6,2))
// console.log(range(8,-3,4))

//3. range(10,19,2) ---> [10,12,14,16,18]

//4. range(6,2) ---> [6,5,4,3,2]

//5. range(8,-3,4) ---> [8,4,0]