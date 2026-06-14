// Inheritance:
// Allows one class to acquire properties and methods from another class.

// extends:
// Used to inherit from a parent class.

// super():
// Calls the parent class constructor.

class Animal {
    eat() {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    meow() {
        console.log("Meow!");
    }
}

const biral = new Cat()
biral.meow()
biral.eat()

//
class Animals {
    constructor(name) {
        this.name = name;
    }
}

class Hund extends Animals {
    constructor(name, breed) {
        super(name) // calls Animal constructor
        this.breed = breed;
    }
}

const dog1 = new Hund("Tommy", "German Shepard")

console.log(dog1.name);
console.log(dog1.breed)