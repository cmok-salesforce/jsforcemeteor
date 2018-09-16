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


class Employee extends Person {
    constructor(name, age, title) {
        super(name, age);
        this.title = title;
    }
    getGreeting() {
        if (this.title) {
            return `Hi ! I'm ${this.name}. My job is ${this.title}`;
        } else {
            return super.getGreeting();
        }
        
    }
    hasJob() {
        return !!this.title;
    }
}


class Programmer extends Person {
    constructor(name, age, preferredLanguage = 'Assembly') {
        super(name, age);
        this.preferredLanguage = preferredLanguage;
    }
    getGreeting() {
        return `Hi ! I'm ${this.name}. I'm a ${this.preferredLanguage} developer`;
    }
}


let me = new Person('Andrew', 25);
console.log(me.getGreeting());
console.log(me.getPersonDescription());

let me1 = new Employee('Mike', 26, 'DB admin');
console.log(me1.hasJob());
console.log(me1.getGreeting());

let me2 = new Programmer('Francesco', 10, 'Meteor');
console.log(me2.getGreeting());