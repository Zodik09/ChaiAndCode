const person = {
    name: 'Aniket',
    age: 24,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

module.exports = person;