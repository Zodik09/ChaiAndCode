// Day 12: Error Handling
console.log("/-----------------------------/");
// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch
// . Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function intentionalError() {
    try {
        // Intentionally cause a division by zero
        const result = 10 / 0;
        console.log(`The result is: ${result}`);

        // Check if the result is Infinity and throw an error if it is
        if (result === Infinity) {
            throw new Error('Oops! Looks like you tried dividing by zero, and now the universe might collapse. 🚀');
        }
    } catch (error) {
        // Handle the error and log an appropriate message
        console.error('Caught an error:', error.message);
    }
}

// Call the function to see the error handling in action
intentionalError();

// . Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function denominatorZero(a, b) {
    try {
        // Intentionally cause a division by zero
        const result = a / b;
        console.log(`The result is: ${result}`);

        // Check if the b(denominator) is zero and throw an error if it is
        if (b === 0) {
            throw new Error('Oops! Looks like you tried dividing by zero, and now the universe might collapse. 🚀');
        }
    } catch (error) {
        // Handle the error and log an appropriate message
        console.error('Caught an error:', error.message);
    }
}

// Call the function to see the error handling in action
denominatorZero(9,0);

// Activity 2: Finally Block
// . Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function executeTryCatchFinally() {
    try {
        console.log("Entering try block");
        
        // Simulating an error
        let result = performOperation();
        
        console.log("Operation result:", result);
    } catch (error) {
        console.log("Entering catch block");
        console.error("An error occurred:", error.message);
    } finally {
        console.log("Entering finally block");
        console.log("Execution completed.");
    }
}

function performOperation() {
    console.log("Performing operation...");
    
    // Uncomment the below line to simulate an error
    // throw new Error("Something went wrong during the operation!");
    
    return "Success!";
}

// Execute the function
executeTryCatchFinally();


// Activity 3: Custom Error Objects
// . Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
// Define a custom error class
class CustomError extends Error {
    constructor(message, errorCode) {
        super(message); // Pass message to the base Error class
        this.name = 'CustomError'; // Set the error name
        this.errorCode = errorCode; // Add an additional property for error code
    }
}

// Function that throws a custom error
function performOperation() {
    console.log("Performing operation...");
    
    // Simulate a condition where an error occurs
    const condition = true; // Change to false to simulate no error
    
    if (condition) {
        throw new CustomError("Operation failed due to invalid input", 400);
    }
    
    return "Operation successful!";
}

// Function to execute and handle the custom error
function executeOperation() {
    try {
        console.log("Entering try block");
        
        // Call the function that may throw a custom error
        let result = performOperation();
        
        console.log("Operation result:", result);
    } catch (error) {
        if (error instanceof CustomError) {
            console.log("Entering catch block for CustomError");
            console.error(`Custom error occurred: ${error.message} (Code: ${error.errorCode})`);
        } else {
            console.log("Entering catch block for general error");
            console.error("An unexpected error occurred:", error.message);
        }
    } finally {
        console.log("Entering finally block");
        console.log("Execution completed.");
    }
}

// Execute the function
executeOperation();


// . Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
// Step 1: Create a Custom Error Class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// Step 2: Write the Validation Function
function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new ValidationError("Input cannot be empty or non-string.");
    }
    return true;
}

// Step 3: Handle the Error with a Try-Catch Block
function handleUserInput(input) {
    try {
        validateInput(input);
        console.log("Input is valid.");
        // Proceed with further processing...
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("Validation Error:", error.message);
            // Handle validation error (e.g., notify the user, log the error, etc.)
        } else {
            console.error("An unexpected error occurred:", error);
            // Handle unexpected errors
        }
    }
}

// Example usage
handleUserInput("");  // This will throw a ValidationError
handleUserInput("   ");  // This will also throw a ValidationError
handleUserInput("Valid input");  // This will log "Input is valid."


// Activity 4: Error Handling in Promises
// . Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const promise = new Promise((resolve, reject) => {
    // Randomly resolve or reject the promise
    Math.random() > 0.5? resolve("Data successfully fetched") : reject(new Error("An error occurred while fetching data"));
})
promise.then((message) => {console.log(message)}).catch(err => console.log(err.message))

// . Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
// Define an async function to handle the promise
async function fetchData() {
    try {
        // Create a Promise that randomly resolves or rejects
        const promise = new Promise((resolve, reject) => {
            // Randomly resolve or reject the promise
            if (Math.random() > 0.5) {
                resolve("Data successfully fetched");
            } else {
                reject(new Error("An error occurred while fetching data"));
            }
        });

        // Use await to wait for the promise to resolve or reject
        const message = await promise;
        console.log(message); // Log the success message to the console

    } catch (error) {
        // Handle the error if the promise is rejected
        console.log(error.message); // Log the error message to the console
    }
}

// Call the async function
fetchData();



// Activity 5: Graceful Error Handling in Fetch
// . Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
// Attempt to fetch data from an invalid URL
fetch('https://api.github.com/invalid-endpoint')
    .then(response => {
        if (!response.ok) {
            // Handle HTTP errors
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Process the fetched data
    })
    .catch(error => {
        // Handle network or other errors
        console.error('An error occurred:', error.message);
    });


// . Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
// Define an async function to fetch data
async function fetchData() {
    try {
        // Attempt to fetch data from an invalid URL
        const response = await fetch('https://api.github.com/invalid-endpoint');
        
        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        const data = await response.json();
        
        // Log the data to the console
        console.log(data);
    } catch (error) {
        // Handle network errors or other errors
        console.error('An error occurred:', error.message);
    }
}

// Call the async function
fetchData();


// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// function executeTryCatchFinally() {
//     try {
//         console.log("Entering try block");
        
//         // Simulating an error
//         let result = performOperation();
        
//         console.log("Operation result:", result);
//     } catch (error) {
//         console.log("Entering catch block");
//         console.error("An error occurred:", error.message);
//     } finally {
//         console.log("Entering finally block");
//         console.log("Execution completed.");
//     }
// }

// function performOperation() {
//     console.log("Performing operation...");
    
//     // Uncomment the below line to simulate an error
//     // throw new Error("Something went wrong during the operation!");
    
//     return "Success!";
// }

// // Execute the function
// executeTryCatchFinally();

// 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// class CustomError extends Error {
//     constructor(message, errorCode) {
//         super(message); // Pass message to the base Error class
//         this.name = 'CustomError'; // Set the error name
//         this.errorCode = errorCode; // Add an additional property for error code
//     }
// }

// // Function that throws a custom error
// function performOperation() {
//     console.log("Performing operation...");
    
//     // Simulate a condition where an error occurs
//     const condition = true; // Change to false to simulate no error
    
//     if (condition) {
//         throw new CustomError("Operation failed due to invalid input", 400);
//     }
    
//     return "Operation successful!";
// }

// // Function to execute and handle the custom error
// function executeOperation() {
//     try {
//         console.log("Entering try block");
        
//         // Call the function that may throw a custom error
//         let result = performOperation();
        
//         console.log("Operation result:", result);
//     } catch (error) {
//         if (error instanceof CustomError) {
//             console.log("Entering catch block for CustomError");
//             console.error(`Custom error occurred: ${error.message} (Code: ${error.errorCode})`);
//         } else {
//             console.log("Entering catch block for general error");
//             console.error("An unexpected error occurred:", error.message);
//         }
//     } finally {
//         console.log("Entering finally block");
//         console.log("Execution completed.");
//     }
// }

// // Execute the function
// executeOperation();

// 3. Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
// const promise = new Promise((resolve, reject) => {
//     // Randomly resolve or reject the promise
//     Math.random() > 0.5? resolve("Data successfully fetched") : reject(new Error("An error occurred while fetching data"));
// })
// promise.then((message) => {console.log(message)}).catch(err => console.log(err.message))

// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.
// fetch('https://api.github.com/invalid-endpoint')
//     .then(response => {
//         if (!response.ok) {
//             // Handle HTTP errors
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data); // Process the fetched data
//     })
//     .catch(error => {
//         // Handle network or other errors
//         console.error('An error occurred:', error.message);
//     });

// Achievement:
// By the end of these activities, students will:
// · Understand and implement basic error handling using try-catch blocks.
// . Use finally blocks to execute code regardless of the try-catch outcome.
// . Create and use custom error classes.
// . Handle errors in promises using .catch() and within async functions using try-catch.
// . Implement graceful error handling when making network requests with the fetch API.
console.log("/-----------------------------/");