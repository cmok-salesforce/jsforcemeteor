class Person {
    //constructor with default value
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi ! I'm ${this.name}.`
    }
    getPersonDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

let me = new Person('Andrew', 25);
console.log(me.getGreeting());
console.log(me.getPersonDescription());