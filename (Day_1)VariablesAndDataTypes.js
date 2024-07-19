// Day 1: Variables and Data Types
console.log("/-----------------------------/");
// Tasks/Activities:

// Activity 1: Variable Declaration
// . Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num = 109
console.log(num);

// . Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let string = 'Hello, world!';
console.log(string);

// Activity 2: Constant Declaration
// . Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const boolean = true;
console.log(boolean);

// Activity 3: Data Types
// . Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let a = 9
let b = 10.9
let c = 'Hello, world!'
let d = true
let e = {
    a: 9,
    b: 109,
    c: 'Hello, world!',
    d: true
}
let f = [9, 10.9, true]

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

// Activity 4: Reassigning Variables
// . Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let initialValue = 9
console.log(initialValue);

initialValue = 10
console.log(initialValue);


// Activity 5: Understanding const
// . Task 6: Try reassigning a variable declared with const and observe the error.
const initial = 9
console.log(initial);

// initial = 10  // This line will throw an error.
// console.log(initial);

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let var1 = 9
let var2 = 10.9
let var3 = 'Hello, world!'
let var4 = true
let var5 = {
    a: 9,
    b: 109,
    c: 'Hello, world!',
    d: true
}
let var6 = [9, 10.9, true]

console.log("var1 => " + var1 + ' ' + '(' + typeof var1 + ')');
console.log("var2 => " + var2 + ' ' + '(' + typeof var2 + ')');
console.log("var3 => " + var3 + ' ' + '(' + typeof var3 + ')');
console.log("var4 => " + var4 + ' ' + '(' + typeof var4 + ')');
console.log("var5 => " + var5 + ' ' + '(' + typeof var5 + ')');
console.log("var6 => " + var6 + ' ' + '(' + typeof var6 + ')');

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let num1 = 9
console.log('Before = ' + num1);
num1 = 10
console.log('After = ' + num1);

const num2 = 10
console.log('Before = ' + num2);
// num2 = 9  // This line will throw an error because const is used to create constant and does not allow reassigning of the constant once assigned.
// console.log('After = ' + num2);

// Achievement:
// By the end of these activities, you will:

// . Know how to declare variables using var, let, and const.
// · Understand the different data types in JavaScript.
// . Be able to use the typeof operator to identify the data type of a variable.
// . Understand the concept of variable reassignment and the immutability of const variables.
console.log("/-----------------------------/");