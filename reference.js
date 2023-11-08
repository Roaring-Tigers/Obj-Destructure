// let arr = [10,20,30,40]


// let arr1 = arr 


let obj = {
    a: 10,
    b: [10,20,30],
    c: {x:100, y:200},
}


// deep copy, shallow copy

// let obj1 = obj 




// let obj1 = {...obj}
// obj.b[0] = 10000000

// console.log(obj1)


// 17

// let obj2 = structuredClone(obj)

// obj.b[0] = 10000000

// console.log(obj2)

// JSON: 


let json = JSON.stringify(obj)
let obj3 = JSON.parse(json)
obj.b[0] = 10000000
console.log(obj3)










