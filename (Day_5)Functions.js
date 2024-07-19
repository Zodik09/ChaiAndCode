// Day 5: Functions
console.log("/-----------------------------/");
// Tasks/Activities:

// Activity 1: Function Declaration
// . Task 1: Write a function to check if a number is even or odd and log the result to the console.
function oddeven(num) {
    return num % 2 === 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);
}
oddeven(10)

// . Task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
    return console.log(`Square of ${num} is ${num * num}`);
}
square(9)

// Activity 2: Function Expression
// . Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const max = function (num1, num2) {
    return num1 > num2 ? console.log(`${num1} is maximum than ${num2}`) : console.log(`${num2} is maximum than ${num1}`)
}
max(9, 10)

// . Task 4: Write a function expression to concatenate two strings and return the result.
const concatenate = function (num1, num2) {
    return console.log(`${num1} ${num2}`);
}
concatenate("Hello", "World!")

// Activity 3: Arrow Functions
// . Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const addition = (num1, num2) => console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
addition(9, 10)

// . Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const check = (str) => str.includes("a") ? console.log(true) : console.log(false);
check("India")

// Activity 4: Function Parameters and Default Values
// . Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const product = (num1, num2 = 9) => console.log(`Product of ${num1} and ${num2} is ${num1 * num2}`);
product(9)
product(9, 10)

// . Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greeting = (name, age = 18) => console.log(`Hello ${name}, your age is ${age}`);
greeting("Adarsh")
greeting("Baby", 24)

// Activity 5: Higher-Order Functions
// . Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const calling = (func, times) => {
    for (let i = 0; i < times; i++) {
        console.log(func("Adarsh"));
    }
}
calling(greeting, 5)

// . Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const fun1 = (num) => {
    return num % 2 === 0;
}
const fun2 = (value) => {
     return value ? console.log(`Given number is even`) : console.log(`Given number is odd`)
}
const writing = (func1, func2, value) => {
    const result = func1(value)
    func2(result)
}
writing(fun1, fun2, 9)


// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
oddeven(9)

// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
square(190)

// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
concatenate("Adarsh", "Vishwakarma")

// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
addition(2, 11)

// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
calling(greeting, 2)

// Achievement:
// By the end of these activities, students will:

// · Understand and define functions using function declarations, expressions, and arrow functions.
// · Use function parameters and default values effectively.
// · Create and utilize higher-order functions.
// · Apply functions to solve common problems and perform calculations.
// · Enhance code reusability and organization using functions.
console.log("/-----------------------------/");