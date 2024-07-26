// Day 14: Classes
console.log("/-----------------------------/");
// Tasks/Activities:

// Activity 1: Class Definition
// . Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    greet() {
        console.log(`My name is ${this.name} and my age is ${this.age}.`);
    }
    aging(newAge) {
        this.age = newAge
        console.log(`Your new age is ${this.age}`);
    }
    // Static method to return a generic greeting message
    static genericGreeting() {
        return "Hello! This is a generic greeting.";
    }
}
const me = new Person('Aniket', 24)
console.log(me.greet());

// . Task 2: Add a method to the Person class that updates the age property and logs the updated age.
me.aging(23)
console.log(me.greet());

// Activity 2: Class Inheritance
// . Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
// Define the Student class that extends Person
class Student extends Person {
      // Static property to keep track of the number of students
      static numberOfStudents = 0;
    constructor(name, age, studentId) {
        // Call the parent class constructor with name and age
        super(name, age);
        this.studentId = studentId;

        // Increment the static student count property
        Student.numberOfStudents++;
    }
    // Override the greet method to include the student ID
    greet() {
        console.log(`My name is ${this.name}, my age is ${this.age}, and my student ID is ${this.studentId}.`);
    }
    // Method to return the student ID
    getStudentId() {
        return this.studentId;
    }
    // Static method to get the total number of students
    static getNumberOfStudents() {
        return Student.numberOfStudents;
    }
}

// Create an instance of the Student class
const student = new Student('Aniket', 24, 21130009);

// Log the greeting message
student.greet();

// Log the student ID
console.log(`Student ID: ${student.getStudentId()}`);

// . Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
// Log the overridden greeting message
student.greet();

// Log the student ID
console.log(`Student ID: ${student.getStudentId()}`);


// Activity 3: Static Methods and Properties
// . Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
// Call the static method from the Person class and log the message
console.log(Person.genericGreeting());

// Log the overridden greeting message
student.greet();

// Log the student ID
console.log(`Student ID: ${student.getStudentId()}`);

// . Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
// Create instances of the Student class
const student1 = new Student('Aniket', 24, 21130009);
const student2 = new Student('Adarsh', 22, 21130010);

// Log the overridden greeting message for each student
student1.greet();
student2.greet();

// Log the student ID for each student
console.log(`Student 1 ID: ${student1.getStudentId()}`);
console.log(`Student 2 ID: ${student2.getStudentId()}`);

// Log the total number of students
console.log(`Total number of students: ${Student.getNumberOfStudents()}`);

// Activity 4: Getters and Setters
// . Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
// Define the Person class
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     // Getter method to return the full name
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     // Method to log a greeting message
//     greet() {
//         console.log(`My name is ${this.fullName} and my age is ${this.age}.`);
//     }

//     // Method to update the age and log the updated age
//     aging(newAge) {
//         this.age = newAge;
//         console.log(`Your new age is ${this.age}`);
//     }

//     // Static method to return a generic greeting message
//     static genericGreeting() {
//         return "Hello! This is a generic greeting.";
//     }
// }

// // Define the Student class that extends Person
// class Student extends Person {
//     // Static property to keep track of the number of students
//     static numberOfStudents = 0;

//     constructor(firstName, lastName, age, studentId) {
//         // Call the parent class constructor with first name, last name, and age
//         super(firstName, lastName, age);
//         this.studentId = studentId;

//         // Increment the static student count property
//         Student.numberOfStudents++;
//     }

//     // Override the greet method to include the student ID
//     greet() {
//         console.log(`My name is ${this.fullName}, my age is ${this.age}, and my student ID is ${this.studentId}.`);
//     }

//     // Method to return the student ID
//     getStudentId() {
//         return this.studentId;
//     }

//     // Static method to get the total number of students
//     static getNumberOfStudents() {
//         return Student.numberOfStudents;
//     }
// }

// // Call the static method from the Person class and log the message
// console.log(Person.genericGreeting());

// // Create an instance of the Person class
// const person = new Person('Aniket', 'Vishwakarma', 24);

// // Log the full name using the getter
// console.log(`Full Name: ${person.fullName}`);

// // Log the greeting message
// person.greet();

// // Create an instance of the Student class
// const student = new Student('John', 'Doe', 22, 'S67890');

// // Log the overridden greeting message
// student.greet();

// // Log the student ID
// console.log(`Student ID: ${student.getStudentId()}`);

// // Log the total number of students
// console.log(`Total number of students: ${Student.getNumberOfStudents()}`);


// . Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName ). Update the name using the setter and log the updated full name.
// Define the Person class
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     // Getter method to return the full name
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     // Setter method to update the first name and last name
//     set fullName(name) {
//         const [firstName, lastName] = name.split(' ');
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     // Method to log a greeting message
//     greet() {
//         console.log(`My name is ${this.fullName} and I am ${this.age} years old.`);
//     }

//     // Method to update the age and log the updated age
//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`Age updated to ${this.age} years old.`);
//     }

//     // Static method to return a generic greeting message
//     static genericGreeting() {
//         return "Hello! This is a generic greeting.";
//     }
// }

// // Create an instance of the Person class
// const person = new Person('Aniket', 'Vishwakarma', 24);

// // Log the full name using the getter
// console.log(`Full Name: ${person.fullName}`);

// // Update the name using the setter
// person.fullName = 'Rohan Sharma';

// // Log the updated full name
// console.log(`Updated Full Name: ${person.fullName}`);

// // Log the greeting message
// person.greet();


// Activity 5: Private Fields (Optional)
// . Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
// . Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

// Feature Request:
// 1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.
// 2. Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.
// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.
// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).
// Achievement:
// By the end of these activities, students will:

// . Define and use classes with properties and methods.
// · Implement inheritance to extend classes.
// · Utilize static methods and properties.
// · Apply getters and setters for encapsulation.
// · Understand and use private fields in classes (optional).
console.log("/-----------------------------/");