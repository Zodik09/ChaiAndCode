// Day 8: ES6+ Features
console.log("/-----------------------------/");
// Tasks/Activities:

// Activity 1: Template Literals
// . Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "Aniket";
const myAge = 24;
console.log(`Name = ${name}\nAge = ${myAge}`);

// . Task 2: Create a multi-line string using template literals and log it to the console.
const str = `"This is
an example
of multi-line
string using
template literal`
console.log(`${str}`);

// Activity 2: Destructuring
// . Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [1, 2, 3, 4, 5]
const [first, , , , last] = numbers
console.log(`${first} ${last}`);

// . Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
}
const { title, author } = book
console.log(`Title = ${title}\nAuthor = ${author}`);

// Activity 3: Spread and Rest Operators
// . Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const arr = [9, "Aniket", 10.9, true,]
const newArr = [...arr]
console.log(`${newArr}`);

// . Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...number) { // Here (...) is a rest operator.
    return number.reduce((num1, num2) => num1 + num2, 0);
}
console.log(sum(1,2,3))
console.log(sum(1,2,3,4,5))
console.log(sum(1,2,3,4,5,6,7,8,9,10))

// Activity 4: Default Parameters
// . Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(num1, num2=1){
    return num1 * num2;
}
console.log(product(9));
console.log(product(9,10));

// Activity 5: Enhanced Object Literals
// . Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const fname = "Adarsh"
const lname = "Vishwakarma"
const age = 24

const person = {
    fname,
    lname,
    age,
    greet(){
        console.log(`Hi, ${this.fname} ${this.lname}!`);
    }
}
console.log(person);
person.greet();


// . Task 9: Create an object with computed property names based on variables and log the object to the console.
const firstName = 'fname'
const lastName = 'lname'
const yourAge = 'age'
const person2 = {
    [firstName]: fname,
    [lastName]: lname,
    [yourAge]: age,
    greet(){
        console.log(`Hi, ${this['name']} ${this['lastName']}!`);
    }
}
console.log(person2);

// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
// const name = "Aniket";
// const myAge = 24;
// console.log(`Name = ${name}\nAge = ${myAge}`);

// const str = `"This is
// an example
// of multi-line
// string using
// template literal`
// console.log(`${str}`);

// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
// let numbers = [1, 2, 3, 4, 5]
// const [first, , , , last] = numbers
// console.log(`${first} ${last}`);

// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
// }
// const { title, author } = book
// console.log(`Title = ${title}\nAuthor = ${author}`);

// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
// const arr = [9, "Aniket", 10.9, true,]
// const newArr = [...arr]
// console.log(`${newArr}`);

// function sum(...number) { // Here (...) is a rest operator.
//     return number.reduce((num1, num2) => num1 + num2, 0);
// }
// console.log(sum(1,2,3))
// console.log(sum(1,2,3,4,5))
// console.log(sum(1,2,3,4,5,6,7,8,9,10))

// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
// function product(num1, num2=1){
//     return num1 * num2;
// }
// console.log(product(9));
// console.log(product(9,10));

// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
// const fname = "Adarsh"
// const lname = "Vishwakarma"
// const age = 24

// const person = {
//     fname,
//     lname,
//     age,
//     greet(){
//         console.log(`Hi, ${this.fname} ${this.lname}!`);
//     }
// }
// console.log(person);
// person.greet();

// const firstName = 'fname'
// const lastName = 'lname'
// const yourAge = 'age'
// const person2 = {
//     [firstName]: fname,
//     [lastName]: lname,
//     [yourAge]: age,
//     greet(){
//         console.log(`Hi, ${this['name']} ${this['lastName']}!`);
//     }
// }
// console.log(person2);

// Achievement:
// By the end of these activities, students will:
// · Understand and use template literals for string interpolation and multi-line strings.
// . Apply destructuring to extract values from arrays and objects.
// . Utilize spread and rest operators for array manipulation and function arguments.
// . Define functions with default parameters.
// · Create objects using enhanced object literals, including methods and computed property names.
console.log("/-----------------------------/");
