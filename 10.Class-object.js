//Class:
// A class is a blueprint for creating objects. An object is an instance of a class. We use classes to avoid repeating code and to create multiple similar objects easily.

//Without Class:
// const student1 = {
//     name: "Saim",
//     age: 15
// };

// const student2 = {
//     name: "Rahim",
//     age: 16
// };

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student("Saim", 26);
const student2 = new Student("Faisal", 45);
// Student → Class (blueprint)
// student1 → Object (actual student)
// new → Creates the object
//constructor()-It's a special function that runs when you create an object.

console.log(student2.name);
console.log(student2.age);


//Adding Methods:
class Player {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`This is ${this.name}`);
    }
}

const player1 = new Player("Siam");
player1.greet()

