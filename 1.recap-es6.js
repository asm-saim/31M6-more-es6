// destructuring

// in Object
const students = { name: "Ashik", roll: 34, age: "17", class: "11" }

const { roll: classRoll } = students;
console.log(classRoll);

//in array
const numbers = [23, 56, 44, 37, 999, 23, 67, 45, 7];
const [firstValue] = numbers;
console.log(firstValue);

//arrow
const arrow = (x, y) => x * y;
console.log(arrow(6, 6));

const anonymous = () => console.log(5);
anonymous();