// Mapping: Mapping means transforming each element of an array into a new value using the .map() method.
//Map: We can use map to make the calculation shorter.
//mapping array er upor hoi.

const numbers = [23, 45, 67, 23, 5, 7, 90, 8];
const double = [];
for (let number of numbers) {
    const value2x = number * 2;
    double.push(value2x)
}
console.log(double);

// const doubleVal = x => x * 2;
// const result2x = numbers.map(doubleVal);
// console.log(result2x);
// or,
const result2x = numbers.map(x => x * 2);
console.log(result2x);

// square:
const square = numbers.map(sqr => sqr * sqr);
console.log(square);

//mapping in array of string,
const names = ["Halim", "Wakil", "Alauddin"]
const length = names.map(nm => nm.length);
const firstLetter = names.map(letter => letter[0])
console.log(length);
console.log(firstLetter);

//arrow function : multiple line e hole value retrun diye niea aste hoi.
const arrowFnc=numbers.map((values, index)=>{
        console.log(values*index)
    return values * index; 
})
console.log(arrowFnc);
