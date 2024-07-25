// Day 13: Modules
// Change the file name from .cjs to .js to run the code with the import statements and comment all the codes having require statements.
console.log("/-----------------------------/");
// Tasks/Activities:

// Activity 1: Creating and Exporting Modules
// . Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
const add = require('./Modules/(Day_13)Addition.cjs')
console.log(add(9, 10));

// . Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = require('./Modules/(Day_13)Person.cjs')
console.log(person, person.greet());

// Activity 2: Named and Default Exports
// . Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
const calculate = require('./Modules/(Day_13)Calculator.cjs')
console.log(calculate.addition(9, 10));
console.log(calculate.subtract(9, 10));
console.log(calculate.multiply(9, 10));
console.log(calculate.divide(9, 10));

// . Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
// import printMyName from './Modules/(Day_13)Default.js';
// printMyName('Aniket')

// Activity 3: Importing Entire Modules
// . Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const entire = require('./Modules/(Day_13)Entire.cjs')
const { a, c, printing } = entire

console.log(`${a} + ${c} = ${printing(a, c)}`);


// Activity 4: Using Third-Party Modules
// . Task 6: Install a third-party module (e.g., lodash ) using npm. Import and use a function from this module in a script.
// Import the `lodash` library
const _ = require('lodash');

// Use a function from `lodash`. For example, `_.chunk` to split an array into chunks.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
const chunks = _.chunk(array, chunkSize);

console.log(`Array split into ${chunkSize} chunks:`, chunks);


// . Task 7: Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.

// Import the `axios` library
const axios = require('axios');

// Define the URL for the network request
const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Make a GET request using axios
axios.get(url)
    .then(response => {
        // Handle the response
        console.log('Response data:', response.data);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error.message);
    });


// Activity 5: Module Bundling (Optional)
// . Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

// Feature Request:
// 1. Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.
// const add = require('./Modules/(Day_13)Addition.cjs')
// console.log(add(9, 10));

// 2. Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.
// const calculate = require('./Modules/(Day_13)Calculator.cjs')
// console.log(calculate.addition(9, 10));
// console.log(calculate.subtract(9, 10));
// console.log(calculate.multiply(9, 10));
// console.log(calculate.divide(9, 10));

// import printMyName from './Modules/(Day_13)Default.js';
// printMyName('Aniket')

// 3. Third-Party Module Script: Write a script that installs, imports, and uses functions from third-party modules like lodash and axios .
// const _ = require('lodash');

// // Use a function from `lodash`. For example, `_.chunk` to split an array into chunks.
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const chunkSize = 3;
// const chunks = _.chunk(array, chunkSize);

// console.log(`Array split into ${chunkSize} chunks:`, chunks);

// // Import the `axios` library
// const axios = require('axios');

// // Define the URL for the network request
// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// // Make a GET request using axios
// axios.get(url)
//     .then(response => {
//         // Handle the response
//         console.log('Response data:', response.data);
//     })
//     .catch(error => {
//         // Handle any errors
//         console.error('Error fetching data:', error.message);
//     });

// 4. Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).

// Achievement:
// By the end of these activities, students will:
// · Create and export functions, objects, and constants using modules.
// . Import modules using named and default imports.
// . Use third-party modules installed via npm.
// . Understand the basics of module bundling (optional).
console.log("/-----------------------------/");