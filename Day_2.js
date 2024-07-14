// Day 2: Operators
console.log("/-----------------------------/");
// Tasks/Activities:

// Activity 1: Arithmetic Operations
// . Task 1: Write a program to add two numbers and log the result to the console.
console.log("/--------- Addition ---------/");

let num1 = 9;
let num2 = 10;
let sum = num1 + num2;
console.log("sum = " + sum);

// . Task 2: Write a program to subtract two numbers and log the result to the console
console.log("/--------- Subtraction ---------/");
let num3 = 9;
let num4 = 10;
let sub = num3 - num4;
console.log("sub = " + sub);

// . Task 3: Write a program to multiply two numbers and log the result to the console.
console.log("/--------- Multiplication ---------/");
let num5 = 9;
let num6 = 10;
let mul = num5 * num6;
console.log("mul = " + mul);

// . Task 4: Write a program to divide two numbers and log the result to the console.
console.log("/--------- Division ---------/");
let num7 = 9;
let num8 = 10;
let div = num7 / num8;
console.log("div = " + div);

// . Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
console.log("/--------- Floor Division ---------/");
let num9 = 9;
let num10 = 10;
let rem = num9 % num10;
console.log("rem = " + rem);

// Activity 2: Assignment Operators
// . Task 6: Use the += operator to add a number to a variable and log the result to the console.
console.log("/--------- += Increment Assignment Operator ---------/");
let number1 = 9;
number1 += 1;
console.log("number = " + number1);


// . Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
console.log("/--------- -= Decrement Assignment Operator ---------/");
let number2 = 9;
number2 -= 1;
console.log("number = " + number2);

// Activity 3: Comparison Operators
// . Task 8: Write a program to compare two numbers using > and < and log the result to the console.
console.log("/--------- Comparison Operator ---------/");
let number3 = 9;
let number4 = 10;
console.log(`${number3} > ${number4} = ${number3 > number4}`);
console.log(`${number3} < ${number4} = ${number3 < number4}`);

// . Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log("/--------- Comparison Operator ---------/");
let number5 = 9;
let number6 = 10;
console.log(`${number5} >= ${number6} = ${number5 >= number6}`);
console.log(`${number5} <= ${number6} = ${number5 <= number6}`);

// . Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log("/--------- Comparison Operator ---------/");
let number7 = 10;
let number8 = '10';
console.log(`${number7} == ${number8} = ${number7 == number8}`);
console.log(`${number7} === ${number8} = ${number7 === number8}`); // Also compares the data type of the variable.


// Activity 4: Logical Operators
// . Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
console.log("/--------- Logical && ---------/");

let cond1 = true;
let cond2 = false;
console.log(`${cond1} && ${cond1} = ${cond1 && cond1}`);
console.log(`${cond2} && ${cond2} = ${cond2 && cond2}`);
console.log(`${cond1} && ${cond2} = ${cond1 && cond2}`);
// In && both the conditions should be true the the answer will be true else false.

// . Task 12: Write a program that uses the II operator to combine two conditions and log the result to the console.
console.log("/--------- Logical || ---------/");

let cond3 = true;
let cond4 = false;
console.log(`${cond3} || ${cond3} = ${cond3 || cond3}`);
console.log(`${cond4} || ${cond4} = ${cond4 || cond4}`);
console.log(`${cond3} || ${cond4} = ${cond3 || cond4}`);
// In || if any one of the condition is true then the answer will be true else false.

// . Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log("/--------- Logical ! ---------/");
let not1 = true
let not2 = false
console.log(`${!not1} = ${!not1}`);
console.log(`${!not2} = ${!not2}`);

// Activity 5: Ternary Operator
// . Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
console.log("/--------- Ternary Operator ---------/");
let num11 = 10;
num11 < 0 ? console.log(`${num11} is negative`) : console.log(`${num11} is positive`);

// Feature Request:
console.log("/--------- Feature Request ---------/");
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
let num12 = 9;
let num13 = 10;
let sum1 = num12 + num13;
let sub1 = num12 - num13;
let mul1 = num12 * num13;
let div1 = num12 / num13;
let rem1 = num12 % num13;
console.log(sum1, sub1, mul1, div1, rem1);


// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the
// results.
let number9 = 10;
let number10 = 9;
console.log(number9 > number10, number9 < number10, number9 >= number10, number9 <= number10, number9 == number10, number9 === number10, !number9, !number10);

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
let num14 = 10;
num14 < 0 ? console.log(`${num14} is negative`) : console.log(`${num14} is positive`);

// Achievement:

// By the end of these activities, students will:

// . Understand and use arithmetic operators to perform basic calculations.
// . Use assignment operators to modify variable values.
// . Compare values using comparison operators.
// . Combine conditions using logical operators.
// . Use the ternary operator for concise conditional expressions.
console.log("/-----------------------------/");