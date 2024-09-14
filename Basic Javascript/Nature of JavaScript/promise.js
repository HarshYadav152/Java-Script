console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    // let num = Math.random();
    if (2>1) {
        resolve("harsh");
    }
    else {
        reject("No random number is supported you")
        // setTimeout(() => {
        //     console.log('Yes i am done');
        // }, 3000);
    }
});

let prom2 = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < 0.5) {
        reject("No random number is supported you 2")
    }
    else {
        setTimeout(() => {
            console.log('Yes i am done 2');
            resolve("harsh 2");
        }, 3000);
    }
});

prom1.then((a) => {
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
prom2.then((a) => {
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

let prom3 = Promise.all([prom1,prom2]);
prom3.then((a)=>{
    console.log(a);
}).catch(err =>{
    console.log(err);
});

let prom4 = Promise.allSettled([prom1,prom2]);
prom3.then((a)=>{
    console.log(a);
}).catch(err =>{
    console.log(err);
});

let prom5 = Promise.race([prom1,prom2]);
prom3.then((a)=>{
    console.log(a);
}).catch(err =>{
    console.log(err);
});

let prom6 = Promise.any([prom1,prom2]);
prom3.then((a)=>{
    console.log(a);
}).catch(err =>{
    console.log(err);
});



