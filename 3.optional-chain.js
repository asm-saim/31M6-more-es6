//Nested Object:
const data = {
    name: "Shakira",
    age: 45,
    family: {
        father: "Akram",
        mother: "Aysha",
        brother: {
            name: "Giyash",
            age: 33
        }
    }
}

//chain
const result = data.family.brother.name;
console.log(result);

//Optional-Chain(.?):Instead of throwing an error, JavaScript returns undefined.
const result2 = data.family.sister?.age
console.log(result2);

// Ex:2
const res3 = data.Family?.gradGather?.name;
console.log(res3)


//API data: API responses often have missing fields. 
// So, optional chain can prevent app crash.

const user = response.data;
console.log(user?.address?.city)