

// function hello(){

//     return ()=>console.log("Inside Hello Return")
// }


// let hii = hello()

// hii = ()=>console.log("Inside Hello Return")

// hii()

// hello()()
// hello() // ()=>console.log("Inside Hello Return") 
// ()=>console.log("Inside Hello Return")()



// function hello(x,y){
//      return ()=>console.log(x,y)
// }

// let t1 = hello(10,20)
// // t1 = () => console.log(x,y) 
// t1()


// function makeCounter(){
//     let count = 0
//     return function(){
//         return ++count
//     }
// }

// let counter1 = makeCounter()
// let x = counter1()
// let y = counter1()
// let z = counter1()

// console.log(x,y,z)



// function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     }
//   }
//   let add5 = makeAdder(5);
//   let add10 = makeAdder(10);
//   console.log(add5(3));  //8
//   console.log(add10(3));  //13




// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr.push(function() { return i });
// }
// // [function() { return 0 }, function() { return 1 }, function() { return 2 }, function() { return 3 }, function() { return 4 }]
// console.log(arr[1]());
// console.log(arr[3]());


// let myPrivateVar = (function() {
//     let privateVar = 0;
//     return {
//         increment: function() {
//             return privateVar++; // x = privateVar++ , x = 1, p = 2
//         },
//         getValue: function() {
//             return privateVar;
//         }
//     };
// })();

// console.log(myPrivateVar.getValue())  // 0
// console.log(myPrivateVar.increment()) // 0
// console.log(myPrivateVar.increment()) // 1
// console.log(myPrivateVar.getValue()) // 2


