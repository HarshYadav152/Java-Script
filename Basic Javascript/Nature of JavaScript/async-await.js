// settel means resolve and reject
// resolve means promise has been settled successfully
// reject means promise has not been settled successfully

// async function getData(){
//     // simulate getting data from server
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // jabtak fetch api data lekar nahi aayegi tab tak programm aage nahi bhadega wait karna padega
//     let data = await x.text();
//     return data;
// }
async function getData(){
    // simulate getting data from server
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(1000);
        }, 3000);
    })
}


async function main(){

    console.log('loading modules');
    
    console.log('Do something else');
    
    console.log('Load Data');
    
    let data = await getData(); // beacuse of await ye intxaar karega getData() ka jo ki async hai
    console.log(data);
    console.log('process data');
    console.log("Task 2")
}

main();
// data.then((v)=>{
//     console.log(data);
//     console.log('process data');
    
//     console.log("Task 2")
// })