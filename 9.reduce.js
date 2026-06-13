//reduce- reduce() is an array method that reduces an array to a single value by applying a function to each element.

// array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);
// accumulator (acc) → stores the running result.
// currentValue (curr) → current element being processed.
// initialValue → starting value of the accumulator.

const numbers = [33, 54, 2, 55, 77, 94, 23, 68]
const result = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(result);