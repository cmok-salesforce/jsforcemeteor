let user = {
    name:'Andrew',
    location: 'Philadelphia',
    age:0
}

//order of properties are very important
let person = {
    ...user,
    age: 25
}

// { age: 25 }
// { name: 'Andrew', location: 'Philadelphia', age: 25 }
console.log(person);

