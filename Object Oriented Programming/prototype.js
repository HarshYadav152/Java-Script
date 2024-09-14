let obj = {
    a:1,
    b:"Harsh"
}

// console.log(obj)

let rabbit = {
    jump:true
}

let animal = {
    eats:true
}

// rabbit.__proto__ = animal; // sets rabbit.[[prototype]] = animal

function person(name,age){
    this.name = name;
    this.age = age;
}

person.prototype.nameWithage = function(){
    console.log(`${this.name} is ${this.age} year old`);
}
console.log(person.prototype)

let person1 = new person("Harsh",17);
console.log(person1)

person1.nameWithage();