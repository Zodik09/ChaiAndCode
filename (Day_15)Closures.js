// Day 15: Closures
console.log("/-----------------------------/");
// Tasks/Activities:
// Activity 1: Understanding Closures

// . Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFun() {
    let a = 9;
    let c = 10;
    function innerFun() {
        return a + c;
    }

    console.log(innerFun());
}
outerFun()

// . Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    // Private variable to hold the counter value
    let counter = 0;

    // Return an object with methods to interact with the counter
    return {
        // Method to increment the counter
        increment: function() {
            counter++;
        },
        
        // Method to get the current value of the counter
        getValue: function() {
            return counter;
        }
    };
}

// Usage
const myCounter = createCounter();

myCounter.increment();  // Increment the counter
myCounter.increment();
console.log(myCounter.getValue());  // Output: 2

myCounter.increment();
console.log(myCounter.getValue());  // Output: 3


// Activity 2: Practical Closures
// . Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createIDGenerator() {
    // Private variable to store the last generated ID
    let lastID = 0;

    // Return a function that generates the next ID
    return function() {
        lastID++; // Increment the ID
        return lastID; // Return the new ID
    };
}

// Usage
const generateUniqueID = createIDGenerator();

console.log(generateUniqueID());  // Output: 1
console.log(generateUniqueID());  // Output: 2
console.log(generateUniqueID());  // Output: 3

// Create another ID generator instance
const anotherIDGenerator = createIDGenerator();

console.log(anotherIDGenerator());  // Output: 1
console.log(anotherIDGenerator());  // Output: 2


// . Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
const greeting = (name) => {
    
    // Return the wish function instead of calling it immediately
    const wish = () => {
        console.log(`Hello! My name is ${name}`);
    };

    return wish;
};

// Get the greeting function and store it
const myGreeting = greeting('Aniket');

// Call the stored greeting function
myGreeting();  // Output: Hello! My name is Aniket


// Activity 3: Closures in Loops
// . Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const arr = [];

for (let i = 0; i < 10; i++) {
    // The use of 'let' here ensures that each function captures the correct value of 'i'
    arr[i] = function() {
        console.log(i);
    };
}

// Testing the functions
arr[0]();  // Output: 0
arr[1]();  // Output: 1
arr[2]();  // Output: 2
// ...and so on
arr[9]();  // Output: 9


// Activity 4: Module Pattern
// . Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createItemManager() {
    // Private array to hold items
    const items = [];

    // Return an object with methods to manage items
    return {
        // Method to add an item to the collection
        addItem: function(item) {
            items.push(item);
            console.log(`Added: ${item}`);
        },

        // Method to remove an item from the collection
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
                console.log(`Removed: ${item}`);
            } else {
                console.log(`Item not found: ${item}`);
            }
        },

        // Method to list all items in the collection
        listItems: function() {
            console.log("Items in collection:");
            items.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
        }
    };
}

// Usage
const itemManager = createItemManager();

// Add items
itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.addItem("Orange");

// List items
itemManager.listItems();
// Output:
// Items in collection:
// 1. Apple
// 2. Banana
// 3. Orange

// Remove an item
itemManager.removeItem("Banana");

// List items again
itemManager.listItems();
// Output:
// Items in collection:
// 1. Apple
// 2. Orange

// Attempt to remove a non-existing item
itemManager.removeItem("Grapes");
// Output:
// Item not found: Grapes


// Activity 5: Memoization

// . Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    // Cache object to store previously computed results
    const cache = {};

    // Return a new function that wraps the original function
    return function(...args) {
        // Create a unique cache key using JSON.stringify
        const key = JSON.stringify(args);

        // Check if the result is already in the cache
        if (cache[key] !== undefined) {
            console.log(`Fetching from cache for args: ${args}`);
            return cache[key];
        }

        // If not in cache, compute the result and store it
        console.log(`Computing result for args: ${args}`);
        const result = fn(...args);
        cache[key] = result;

        return result;
    };
}

// Example usage
function slowFunction(x, y) {
    // Simulate a slow computation
    for (let i = 0; i < 1e7; i++) {}
    return x + y;
}

// Memoized version of slowFunction
const memoizedSlowFunction = memoize(slowFunction);

// First call - computes the result and caches it
console.log(memoizedSlowFunction(3, 5));  // Output: 8

// Second call with the same arguments - fetches from cache
console.log(memoizedSlowFunction(3, 5));  // Output: 8

// Call with different arguments - computes and caches new result
console.log(memoizedSlowFunction(2, 4));  // Output: 6

// Call again with previous arguments - fetches from cache
console.log(memoizedSlowFunction(3, 5));  // Output: 8


// . Task 8: Create a memoized version of a function that calculates the factorial of a number.
function memoize(fn) {
    // Cache object to store previously computed results
    const cache = {};

    // Return a new function that wraps the original function
    return function(n) {
        // Check if the result is already in the cache
        if (cache[n] !== undefined) {
            console.log(`Fetching from cache for ${n}`);
            return cache[n];
        }

        // If not in cache, compute the result and store it
        console.log(`Computing result for ${n}`);
        const result = fn(n);
        cache[n] = result;

        return result;
    };
}

// Recursive factorial function
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Test the memoized factorial function
console.log(memoizedFactorial(5));  // Output: 120
console.log(memoizedFactorial(6));  // Output: 720
console.log(memoizedFactorial(5));  // Output: 120 (fetched from cache)
console.log(memoizedFactorial(7));  // Output: 5040


// Feature Request:
// 1. Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.
// function outerFun() {
//     let a = 9;
//     let c = 10;
//     function innerFun() {
//         return a + c;
//     }

//     console.log(innerFun());
// }
// outerFun()

// 2. Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions.
// function createCounter() {
//     // Private variable to hold the counter value
//     let counter = 0;

//     // Return an object with methods to interact with the counter
//     return {
//         // Method to increment the counter
//         increment: function() {
//             counter++;
//         },
        
//         // Method to get the current value of the counter
//         getValue: function() {
//             return counter;
//         }
//     };
// }

// // Usage
// const myCounter = createCounter();

// myCounter.increment();  // Increment the counter
// myCounter.increment();
// console.log(myCounter.getValue());  // Output: 2

// myCounter.increment();
// console.log(myCounter.getValue());  // Output: 3

// 3. Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated ID.
// function createIDGenerator() {
//     // Private variable to store the last generated ID
//     let lastID = 0;

//     // Return a function that generates the next ID
//     return function() {
//         lastID++; // Increment the ID
//         return lastID; // Return the new ID
//     };
// }

// // Usage
// const generateUniqueID = createIDGenerator();

// console.log(generateUniqueID());  // Output: 1
// console.log(generateUniqueID());  // Output: 2
// console.log(generateUniqueID());  // Output: 3

// // Create another ID generator instance
// const anotherIDGenerator = createIDGenerator();

// console.log(anotherIDGenerator());  // Output: 1
// console.log(anotherIDGenerator());  // Output: 2

// 4. Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.
// const arr = [];

// for (let i = 0; i < 10; i++) {
//     // The use of 'let' here ensures that each function captures the correct value of 'i'
//     arr[i] = function() {
//         console.log(i);
//     };
// }

// // Testing the functions
// arr[0]();  // Output: 0
// arr[1]();  // Output: 1
// arr[2]();  // Output: 2
// // ...and so on
// arr[9]();  // Output: 9

// 5. Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.
// function memoize(fn) {
//     // Cache object to store previously computed results
//     const cache = {};

//     // Return a new function that wraps the original function
//     return function(n) {
//         // Check if the result is already in the cache
//         if (cache[n] !== undefined) {
//             console.log(`Fetching from cache for ${n}`);
//             return cache[n];
//         }

//         // If not in cache, compute the result and store it
//         console.log(`Computing result for ${n}`);
//         const result = fn(n);
//         cache[n] = result;

//         return result;
//     };
// }

// // Recursive factorial function
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// // Memoized version of the factorial function
// const memoizedFactorial = memoize(factorial);

// // Test the memoized factorial function
// console.log(memoizedFactorial(5));  // Output: 120
// console.log(memoizedFactorial(6));  // Output: 720
// console.log(memoizedFactorial(5));  // Output: 120 (fetched from cache)
// console.log(memoizedFactorial(7));  // Output: 5040

// Achievement:
// By the end of these activities, students will:

// · Understand and create closures in JavaScript.
// · Use closures to maintain private state and create encapsulated modules.
// · Apply closures in practical scenarios like generating unique IDs and memoization.
// . Use closures in loops to capture and use variables correctly.
console.log("/-----------------------------/");