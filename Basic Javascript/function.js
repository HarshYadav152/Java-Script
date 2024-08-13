console.log("Harsh Yadav");

// let name = "Harsh";
// console.log(name + " is a good boy");
// let name1 = "Harsh";
// console.log(name1 + " is a good boy");

// functions is the building block it divides the code in smaller unit

// code reusability 
// Name and greettext both are parameter which are passed the function defining
function greet(Name, greettext = "hello") {
    let name1 = "PS"; // it is a local scope variable 
    console.log(greettext);
    console.log(Name + " is a boy");
}
let name0 = "Harsh";
let name1 = "Yadav"; // it's scope is global 
let name2 = "S";
let name3 = "Manish";
let greettext = "Good morning";
// greet(name0); // calling a function to execute the code u nder the function
// greet(name1, greettext);
// greet(name2, greettext);
// greet(name3, greettext);

// function sum return the sum of a + b
function sum(a,b){
    let d = a+b;
    return d;
    console.log("This line is not running because after returing the function")
}
let h = sum;
console.log(h);

// console.log(sum(2,5));

const add = (a,b) => {
    return a+b;
}

// console.log(sum(21,2));

