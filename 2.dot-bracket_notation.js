const values = { name: "Wasi", age: 46, 1: 50, 'current-loc': "Jordan" }


//dot notation -*will not work for number/ - /space types property)
const ageVal = values.age;
const nameVal = values.name;

//bracket notation
const data=values[1];
const location=values['current-loc'];  
console.log(data, location)