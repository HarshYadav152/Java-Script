// async function sleep(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(45);
//         }, 1000);
//     })
// }

// (async function main(){
//     let a = await sleep();
//     console.log(a);
//     let b = await sleep();
//     console.log(b);
// })()

// (async function main(){
//     let [x,y,...rest] = [1,2,3,4,5,6];
//     console.log(x,y,rest);
// })()

// (async function main(){
//     let obj = {
//         a:1,
//         b:2,
//         c:3
//     }
//     let {a,b} = obj;
//     console.log(a,b)
// })()

// function sum(a,b,c){
//     return a+b+c;
// }

// let arr = [1,2,3]
// console.log(sum(arr[0],arr[1],arr[2]));
// console.log(sum(...arr)); // spread of operator
// let object = {...arr}; // making it as a object in key : value pair
// console.log(object)

// const obj = { x: 1, y: 2 };
// ({ x, y } = obj);
// console.log(x, y)

// let obj = {a:1,b:2,c:3,d:4};
// ({a,...rest} = obj);
// console.log(a);
// console.log(rest);


// swaped values using destructuring
let array = [1,2,3,4,5];
[x,y] = array;
console.log(x,y);
[x,y] = [y,x]
console.log(x,y);