// Day 7: Objects
console.log("/-----------------------------/");
// Tasks/Activities:

// Activity 1: Object Creation and Access
// . Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
}
console.log(book);

// . Task 2: Access and log the title and author properties of the book object.
// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
// }
console.log(`Title = ${book.title}\nAuthor = ${book.author}`);

// Activity 2: Object Methods
// . Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
// }
book.str = function (title, author) { // Using dot operator.
    return `${title} by ${author}`;
}
console.log(book.str(book.title, book.author));

////////////////////////////// OR //////////////////////////////

// const book = {
//   title: 'To Kill a Mockingbird',
//   author: 'Harper Lee',
//   year: 1960,
//   str: [Function (anonymous)]
// }
book['str'] = function (title, author) { // Using brackets []
    return `${title} by ${author}`;
}
console.log(book['str'](book.title, book.author));

// . Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
// const book = {
// title: 'To Kill a Mockingbird',
// author: 'Harper Lee',
// year: 1960,
// str: [Function (anonymous)]
// }
book.updatedyear = (year) => {
    return book.year = year
}
console.log(`Updated year = ${book.updatedyear(2004)}`);
console.log(book);

// Activity 3: Nested Objects
// . Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "Central Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
        },
        {
            title: "To Make a Book",
            author: "George Orwell",
            year: 1949,
        },
    ],
}
console.log(library);

// . Task 6: Access and log the name of the library and the titles of all the books in the library.
// const library = {
//     name: "Central Library",
//     books: [
//         {
//             title: "To Kill a Mockingbird",
//             author: "Harper Lee",
//             year: 1960,
//         },
//         {
//             title: "To Make a Book",
//             author: "George Orwell",
//             year: 1949,
//         },
//     ],
// }
console.log(`Library name = ${library.name}\nBooks Titles = ${library.books.map(element => element.title)}`);

// Activity 4: The this Keyword
// . Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
// const book = {
//   title: 'To Kill a Mockingbird',
//   author: 'Harper Lee',
//   year: 2004,
//   str: [Function (anonymous)],
//   updatedyear: [Function (anonymous)]
// }
book.thiskey = function () {
    return `${this.title} by ${this.author}`;
};
console.log(book.thiskey()); // Output: "To Kill a Mockingbird and Harper Lee"

// Activity 5: Object Iteration
// . Task 8: Use a for ... in loop to iterate over the properties of the book object and log each property and its value.
// const book = {
//   title: 'To Kill a Mockingbird',
//   author: 'Harper Lee',
//   year: 2004,
//   str: [Function (anonymous)],
//   updatedyear: [Function (anonymous)],
//   thiskey: [Function (anonymous)]
// }
for (const key in book) {
        const element = book[key];
        console.log(`${key}: ${element}`);
}

// . Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
// const book = {
//   title: 'To Kill a Mockingbird',
//   author: 'Harper Lee',
//   year: 2004,
//   str: [Function (anonymous)],
//   updatedyear: [Function (anonymous)],
//   thiskey: [Function (anonymous)]
// }
console.log("Keys = " + Object.keys(book));
console.log("Values = " + Object.values(book));

// Feature Request:
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
// }
// book.str = function (title, author) { // Using dot operator.
//     return `${title} by ${author}`;
// }
// console.log(book.str(book.title, book.author));

// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
// const library = {
//     name: "Central Library",
//     books: [
//         {
//             title: "To Kill a Mockingbird",
//             author: "Harper Lee",
//             year: 1960,
//         },
//         {
//             title: "To Make a Book",
//             author: "George Orwell",
//             year: 1949,
//         },
//     ],
// }
// console.log(library);

// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for ... in loop and Object.keys / Object.values.
// const book = {
//   title: 'To Kill a Mockingbird',
//   author: 'Harper Lee',
//   year: 2004,
//   str: [Function (anonymous)],
//   updatedyear: [Function (anonymous)],
//   thiskey: [Function (anonymous)]
// }
// for (const key in book) {
//     const element = book[key];
//     console.log(`${key}: ${element}`);
// }
// console.log("Keys = " + Object.keys(book));
// console.log("Values = " + Object.values(book));

// Achievement:
// By the end of these activities, students will:

// . Create and manipulate objects with properties and methods.
// . Understand and use the this keyword in object methods.
// . Work with nested objects and arrays of objects.
// . Iterate over an object's properties using loops and built-in methods.
console.log("/-----------------------------/");