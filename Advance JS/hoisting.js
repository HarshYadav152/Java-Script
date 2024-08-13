// console.log(a);

// let a = 3; // it will give error

// var a; // a is hosit hua hai at the top of the block
// console.log(a)

// var a = 2; // ye error nahi dega kyonki hoisting ki wajah se
// js ka interpreter a ki declaration ko console.log() se uper kar dega
// but not the value


// this is same work for function

hello("harsh");
hello = function (name){
    console.log(name)
}