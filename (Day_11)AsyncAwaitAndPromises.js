// Day 11: Promises and Async/Await
console.log("/-----------------------------/");
// Tasks/Activities:

// Activity 1: Understanding Promises
// . Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('This message is printed after 2sec using Promises');
    }, 2000);
});

promise1.then(function (message) {
    console.log(message);
});

// . Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const i = false
        i ? resolve('This message is printed after 2sec using  resolve in Promises') : reject('Message is rejected after 2sec using reject in Promises')
    }, 2000);
});

promise2.then(function (message) {
    console.log(message);
})
.catch(function(error){
    console.error(error)
})

// Activity 2: Chaining Promises
// . Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// Simulate a server fetch with a promise
function fetchData(taskName, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data fetched for ${taskName}`);
        }, delay);
    });
}

// Fetch data for Task 1, Task 2, and Task 3 sequentially
fetchData("Task 1", 1000)
    .then((result) => {
        console.log(result);
        return fetchData("Task 2", 2000);
    })
    .then((result) => {
        console.log(result);
        return fetchData("Task 3", 1500);
    })
    .then((result) => {
        console.log(result);
        console.log("All tasks completed!");
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });


// Activity 3: Using Async/Await
// . Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function waiting() {
    const promise3 = new Promise((resolve, reject) => {
        resolve('This is the Promise3 response.');
    });
    // Await the promise to get the resolved value
    const result = await promise3;
    // Log the resolved value
    console.log(result);
}
// Call the async function
waiting();


// . Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function waits() {
    const promise4 = new Promise((resolve, reject) => {
        const f = false;
        f ? resolve('This is the Promise4 resolved response.') : reject('This is the Promise4 rejected promise error');
    });

    try {
        // Await the promise to get the resolved value
        const result = await promise4;
        return result;
    } catch (error) {
        // Handle the rejected promise
        console.log(error);
    }
}

// Call the async function
waits().then((message) => {
    if (message) console.log(message);
});


// Activity 4: Fetching Data from an API
// . Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const promise5 = new Promise((response, request) => {
    fetch('https://randomuser.me/api/')
        .then(raw => raw.json())
        .then(result => {
            response(result)
        })
})
promise5.then((result)=>console.log(result.results[0]))

// . Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function getData() {
    try {
        // Fetch data from the public API using await
        const response = await fetch('https://randomuser.me/api/');

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        const data = await response.json();

        // Log the response data to the console
        console.log(data.results[0]);
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('An error occurred while fetching data:', error);
    }
}

// Call the async function
getData();


// Activity 5: Concurrent Promises
// . Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
async function waiting() {
    // Create multiple promises
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 1 resolved!'), 1000);
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 2 resolved!'), 2000);
    });

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 3 resolved!'), 1500);
    });

    // Use Promise.all to wait for all promises to resolve
    const results = await Promise.all([promise1, promise2, promise3]);

    // Log all resolved values
    console.log(results);
}

// // Call the async function
// waiting();

// . Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
// Create a few promises with different resolve times
const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 3000);
});

const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2000);
});

const prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 1000);
});

// Use Promise.race to log the first promise that resolves
Promise.race([prom1, prom2, prom3])
    .then((result) => {
        console.log('First promise resolved:', result);
    })
    .catch((error) => {
        console.error('Promise rejected:', error);
    });


// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// const promise2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         const i = false
//         i ? resolve('This message is printed after 2sec using  resolve in Promises') : reject('Message is rejected after 2sec using reject in Promises')
//     }, 2000);
// });

// promise2.then(function (message) {
//     console.log(message);
// })
// .catch(function(error){
//     console.error(error)
// })

// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// Simulate a server fetch with a promise
// function fetchData(taskName, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Data fetched for ${taskName}`);
//         }, delay);
//     });
// }

// // Fetch data for Task 1, Task 2, and Task 3 sequentially
// fetchData("Task 1", 1000)
//     .then((result) => {
//         console.log(result);
//         return fetchData("Task 2", 2000);
//     })
//     .then((result) => {
//         console.log(result);
//         return fetchData("Task 3", 1500);
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("All tasks completed!");
//     })
//     .catch((error) => {
//         console.error("An error occurred:", error);
//     });

// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// async function waits() {
//     const promise4 = new Promise((resolve, reject) => {
//         const f = false;
//         f ? resolve('This is the Promise4 resolved response.') : reject('This is the Promise4 rejected promise error');
//     });

//     try {
//         // Await the promise to get the resolved value
//         const result = await promise4;
//         return result;
//     } catch (error) {
//         // Handle the rejected promise
//         console.log(error);
//     }
// }

// // Call the async function
// waits().then((message) => {
//     if (message) console.log(message);
// });

// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// const promise5 = new Promise((response, request) => {
//     fetch('https://randomuser.me/api/')
//         .then(raw => raw.json())
//         .then(result => {
//             response(result)
//         })
// })
// promise5.then((result)=>console.log(result.results[0]))

// async function getData() {
//     try {
//         // Fetch data from the public API using await
//         const response = await fetch('https://randomuser.me/api/');

//         // Check if the response is successful
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // Parse the response JSON
//         const data = await response.json();

//         // Log the response data to the console
//         console.log(data.results[0]);
//     } catch (error) {
//         // Handle any errors that occur during the fetch operation
//         console.error('An error occurred while fetching data:', error);
//     }
// }

// // Call the async function
// getData();

// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.
// async function waiting() {
//     // Create multiple promises
//     const promise1 = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Promise 1 resolved!'), 1000);
//     });

//     const promise2 = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Promise 2 resolved!'), 2000);
//     });

//     const promise3 = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Promise 3 resolved!'), 1500);
//     });

//     // Use Promise.all to wait for all promises to resolve
//     const results = await Promise.all([promise1, promise2, promise3]);

//     // Log all resolved values
//     console.log(results);
// }

// // Call the async function
// waiting();

// . Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
// Create a few promises with different resolve times
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 1 resolved');
//     }, 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 2 resolved');
//     }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 3 resolved');
//     }, 1000);
// });

// // Use Promise.race to log the first promise that resolves
// Promise.race([promise1, promise2, promise3])
//     .then((result) => {
//         console.log('First promise resolved:', result);
//     })
//     .catch((error) => {
//         console.error('Promise rejected:', error);
//     });

// Achievement:
// By the end of these activities, students will:
// . Understand and create promises, including handling resolved and rejected states.
// · Chain multiple promises to perform sequential asynchronous operations.
// . Use async/await to handle asynchronous code more readably.
// . Fetch data from public APIs using both promises and async/await.
// . Manage multiple concurrent promises using Promise.all and Promise.race.
console.log("/-----------------------------/");