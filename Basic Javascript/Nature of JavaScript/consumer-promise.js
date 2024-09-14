// let prom = new Promise(resolve=>{
//     // setTimeout(() => {
//         resolve('done');
//     // }, 3000);
// });

// prom.then((alert)=>{
//     console.log(alert);
// });
// let prom = new Promise(reject=>{
    // setTimeout(() => {
        // reject('done');
    // }, 3000);
// });
// prom.then((null,(msg)=>{
//     console.log(msg)
// }))
// prom.catch(()=>{
//     console.log("reject");
// });

let prom = new Promise((resolve,reject)=>{
    if(2>1){
        resolve("resolve");
    }
    else{
        reject("reject");
    }
});

prom.then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
}).finally((msg)=>{
    console.log('This promise has been setteled');
});
