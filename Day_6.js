// Day 6: Arrays
console.log("/-----------------------------/");
// Tasks/Activities:
// Activity 1: Array Creation and Access
// . Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr = [1, 2, 3, 4, 5];
console.log(`Array [${arr}]`);

// . Task 2: Access the first and last elements of the array and log them to the console.
console.log(
    `First element of the [${arr}] is ${arr[0]} and last element is ${arr[4]}`
); // const arr = [1, 2, 3, 4, 5]

// Activity 2: Array Methods (Basic)
// . Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(6); // const arr = [1, 2, 3, 4, 5]
console.log(`Pushed = [${arr}]`);

// . Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop(); // const arr = [1, 2, 3, 4, 5, 6]
console.log(`Popped = [${arr}]`);

// . Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift(); // const arr = [1, 2, 3, 4, 5]
console.log(`Shifted = [${arr}]`);

// . Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(9); // const arr = [2, 3, 4, 5]
console.log(`Unshifted = [${arr}]`);

// Activity 3: Array Methods (Intermediate)
// . Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr1 = arr1.map((item) => item * 2);
console.log(`Mapped arr1 = ${newArr1}`);

// . Task 8: Use the filter method to create a new array with only even numbers and log the new array.
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArr2 = arr1.filter((item) => item % 2 === 0);
console.log(`Filtered arr1 = ${newArr2}`);

// . Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = arr1.reduce((item1, item2) => {
    return item1 + item2;
}, 0);
// Here 0 is used to start the accumulator initialValue from 0 which means:
// First Iteration: accumulator = 0, currentValue = 1, result = 0 + 1 = 1
// Second Iteration: accumulator = 1, currentValue = 2, result = 1 + 2 = 3
// Third Iteration: accumulator = 3, currentValue = 3, result = 3 + 3 = 6
// Fourth Iteration: accumulator = 6, currentValue = 4, result = 6 + 4 = 10
// Fifth Iteration: accumulator = 10, currentValue = 5, result = 10 + 5 = 15
// and so on till the very end.
console.log(`Reduced arr1 = ${sum}`);

// Activity 4: Array Iteration
// . Task 10: Use a for loop to iterate over the array and log each element to the console.

// Using for of loop.
// for (const i of arr1) {
//     console.log(`Iterating using for of loop = ${i}`);
// }

// Using for loop.
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr1.length; i++) {
    const result = arr1[i];
    console.log(`Iterating using for loop = ${result}`);
}

// . Task 11: Use the forEach method to iterate over the array and log each element to the console.
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr1.forEach((e) => console.log(`Iterating using forEach() = ${e}`));

// Activity 5: Multi-dimensional Arrays
// . Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
// console.log(`Two-dimensional Array [${matrix}]`);

// . Task 13: Access and log a specific element from the two-dimensional array.
console.log(matrix[1][1]);
console.log(matrix[2][2]);

// Feature Request:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.
// const arr = [1, 2, 3, 4, 5]
arr.push(6);
console.log(`Pushed [${arr}]`);

arr.pop();
console.log(`Popped [${arr}]`);

arr.shift();
console.log(`Shifted [${arr}]`);

arr.unshift(9);
console.log(`Unshifted [${arr}]`);

// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr3 = arr1.map((item) => item * 2);
console.log(`Mapped arr1 = ${newArr3}`);

const newArr4 = arr1.filter((item) => item % 2 === 0);
console.log(`Filtered arr1 = ${newArr4}`);

const sum2 = arr1.reduce((item1, item2) => {
    return item1 + item2;
}, 0);
console.log(`Reduced arr1 = ${sum2}`);

// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr1.length; i++) {
    const result = arr1[i];
    console.log(`Iterating using for loop = ${result}`);
}
arr1.forEach((e) => console.log(`Iterating using forEach() = ${e}`));

// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix2);
console.log(matrix2[1][1]);
console.log(matrix2[2][2]);
matrix2[2][2] = 10
console.log(matrix2[2][2]);

// Achievement:
// By the end of these activities, students will:
// . Create and manipulate arrays using various methods.
// . Transform and aggregate array data using map, filter, and reduce.
// . Iterate over arrays using loops and iteration methods.
// . Understand and work with multi-dimensional arrays.
console.log("/-----------------------------/");
