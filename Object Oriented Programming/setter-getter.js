class User{

    constructor(name){
        //invokes the setter
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length<5){
            console.log('Name is too short');
            return;
        }
        this._name = value;
    }
}

let user = new User("hsh");
console.log(user.name);

user.name = "Harsh"; /// name is to shorg
console.log(user.name);

