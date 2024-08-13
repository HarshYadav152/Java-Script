class Animal{
    constructor(name){
        this.name = name;
        console.log("Objec is created");
    }
    eats(){
        console.log('Kha raha hoo');
    }
    jumps(){
        console.log("Kood raha hoo")
    }
}

let object = new Animal("Harsh"); // creating the object of the Animal class
console.log(object);

// inherit the properties of another class

class lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created n lion")
    }
    eats(){ // method overriding
        super.eats() // calling the super class eats()
        console.log("Kha raha hoo roar")
    }
}

let a = new lion("Shera"); // creating the object of the lion class
console.log(a);
