// Day 3: Control Structures
console.log("/-----------------------------/");
// Tasks/Activities:

// Activity 1: If-Else Statements
// . Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = -10
num >= 0 ? console.log(`${num} is positive.`) : console.log(`${num} is negative.`);

// . Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 24;
age >= 18 ? console.log(`${age} is eligible to vote.`) : console.log(`${age} is not eligible to vote.`);

// Activity 2: Nested If-Else Statements
// . Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 90
let num2 = 190
let num3 = 190

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater than ${num2} and ${num3}`)
}
else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is greater than ${num1} and ${num3}`)
}
else {
    console.log(`${num3} is greater than ${num1} and ${num2}`)
}

// Activity 3: Switch Case
// . Task 4: Write a program that uses a switch case to determine the day of the week based on a numbe (1-7) and log the day name to the console.
let day = 5
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Enter a valid date.");
        break;
}

// . Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let grade = "C"
switch (grade) {
    case "A":
        console.log("First");
        break;
    case "B":
        console.log("Second");
        break;
    case "C":
        console.log("Third");
        break;
    case "D":
        console.log("Fourth");
        break;
    case "E":
        console.log("Fail");
        break;
    default:
        console.log("Enter a valid grade.");
        break;
}

// Activity 4: Conditional (Ternary) Operator
// . Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num4 = 10
let result = num4 % 2 === 0 ? "Even" : "Odd";
console.log(`${num4} is ${result}`);

// Activity 5: Combining Conditions
// . Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2000;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
let num5 = 9
num5 >= 0 ? console.log(`${num5} is positive.`) : console.log(`${num5} is negative.`);

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
let age1 = 20;
age1 >= 18 ? console.log(`${age1} is eligible to vote.`) : console.log(`${age1} is not eligible to vote.`);

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
let days = 2
switch (days) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Enter a valid date.");
        break;
}

// 4. Grade Assignment Script: Create a script that uses a switch case o assign a grade based on a score and logs the grade.
let grades = "C"
switch (grades) {
    case "A":
        console.log("First");
        break;
    case "B":
        console.log("Second");
        break;
    case "C":
        console.log("Third");
        break;
    case "D":
        console.log("Fourth");
        break;
    case "E":
        console.log("Fail");
        break;
    default:
        console.log("Enter a valid grade.");
        break;
}

// 5. Leap Year Check Script: Write a script that checks if a year is a lap year using multiple conditions and logs the result.
let years = 3000;
if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
    console.log(`${years} is a leap year.`);
} else {
    console.log(`${years} is not a leap year.`);
}

// Achievement:
// By the end of these activities, students will:

// . Implement and understand basic if-else control flow.
// · Use nested if-else statements to handle multiple conditions.
// · Utilize switch cases for control flow based on specific values.
// . Apply the ternary operator for concise condition checking.
// · Combine multiple conditions to solve more complex problems
console.log("/-----------------------------/");