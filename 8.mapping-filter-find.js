const info = [
    { name: "Rasel", age: 30, location: "Chittagong", marks: 40 },
    { name: "Safiq", age: 28, location: "Dhaka", marks: 90 },
    { name: "Akbar", age: 47, location: "Khunla", marks: 85 },
    { name: "Daniel", age: 25, location: "Rajshahi", marks: 97 },
    { name: "Wasi", age: 22, location: "Bogura", marks: 56 },
]
const marks = info.map(num => num.marks * .50)
const filterCheck = info.filter(x => x.marks > 60);
const findCheck = info.find(x => x.age > 20);
console.log(marks);
console.log(filterCheck);
console.log(findCheck);