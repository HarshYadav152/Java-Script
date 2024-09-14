let promise = new Promise((resolve, reject) => {
    const x = "Harsh";
    const y = "Hassh";
    if (x == y) {
        resolve();
    }
    else {
        reject();
    }
});

promise.then(()=> {
    // success handler 
    console.log('"Success');
}).catch(()=>{
    // rejection handler
    console.log("Error");
})


// let promise = new Promise((resolve, reject) => {
//     if(1>2){

//         reject("Harsh Yadav Reject");
    // }
//     else{
        
//         resolve("Harsh Yadav Resolve");
//     }
// });

// promise.then(function (message) {
//     // success handler 
//     console.log(message);
// }, function (Error) {
//     // rejection handler
//     console.log(Error);
// });