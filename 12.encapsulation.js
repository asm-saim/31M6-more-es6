// Encapsulation:
// Encapsulation is an OOP concept where data and methods are bundled inside a class, and direct access to internal data is restricted. 
// In JavaScript, private fields (#) are commonly used to achieve encapsulation. It helps protect data and maintain better control over how it is accessed or modified.

class User {
    #password

    constructor(password) {
        this.#password = password;
    }
    checkPass(input) {
        return input === this.#password;
    }
}

const user = new User("1234");

// Users can verify the password:
console.log(user.checkPass("1234")); //true
// But they cannot see it directly:
// console.log(user.#password);