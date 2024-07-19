// Day 4: Loops
console.log("/-----------------------------/");
// Tasks/Activities:
// Activity 1: For Loop
// . Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// . Task 2: Write a program to print the multiplication table of 9 using a for loop.
let num = 9;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}

// Activity 2: While Loop
// . Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i = 0
let sum = 0
while (i <= 10) {
    sum = sum + i;
    i++;
}
console.log(sum);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let counter = 10
while (counter > 0) {
    console.log(counter);
    counter--;
}

// Activity 3: Do ... While Loop
// . Task 5: Write a program to print numbers from 1 to 5 using a do ... while loop.
let count = 1
do {
    console.log(count);
    count++;
} while (count < 6)

// . Task 6: Write a program to calculate the factorial of a number using a do ... while loop.
let result = 1;
let inc = 1;
let fact = 9
do {
    result = inc * result;
    inc++
} while (inc <= fact)
console.log(result);

// Activity 4: Nested Loops
// . Task 7: Write a program to print a pattern using nested for loops:
// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
    let result = ''
    for (let j = 1; j <= i; j++) {
        result += "*"
    }
    console.log(result)
}

// Activity 5: Loop Control Statements
// . Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue
    else console.log(i);
}

// . Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
    if (i === 7) break
    else console.log(i);
}

// Feature Request:
// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
let forloop = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
forloop()
let whileloop = () => {
    let i = 1
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
whileloop()

// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
const fortable = () => {
    let num = 5;
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
fortable()

// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
const pattern = () => {
    for (let i = 1; i <= 5; i++) {
        let result = ''
        for (let j = 1; j <= i; j++) {
            result += "*"
        }
        console.log(result)
    }
}
pattern()

// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
const addition = () => {
    let i = 0
    let sum = 0
    while (i <= 10) {
        sum = sum + i;
        i++;
    }
    console.log(sum);
}
addition()
// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do ... while loop.

const factorial = (n) => {
    let i = 1;
    let result = 1
    do {
        result = i * result;
        i++;
    } while (i <= n)
    console.log(result);

}
factorial(5) // should return 120clear

// Achievement:
// By the end of these activities, students will:
// . Understand and use for loops to iterate over a sequence of numbers.
// . Utilize while loops for iteration based on a condition.
// Apply do ... while loops to ensure the loop body is executed at least once.
// Implement nested loops to solve more complex problems.
// . Use loop control statements (break and continue ) to control the flow of loops.
console.log("/-----------------------------/");