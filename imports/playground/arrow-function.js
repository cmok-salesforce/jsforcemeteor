let square1 = function(x) {
  return x * x;
}; 

/* Arrow function: simplified expression syntax */
let square2 = (x) => {
  return x*x;
} 

/* Arrow function: simplified expression syntax */
let square3 = (x) => x * x;


console.log(square1(10));
console.log(square2(10));
console.log(square3(10));

let user = {
    name: 'Andrew',
    sayHi: function() {
        console.log('name=', this.name);
        console.log('argument=', arguments);
    },
    // Arrow function DO NOT bind this keyword for older version
    // WARNING : Arrow function allow this keyword
    sayHi2()  {
        //undefined
        console.log('name=', this.name);
        console.log('argument=', arguments);
        setTimeout(() => {
            console.log('timeout name=', this.name);
        }, 1000);
    }
}
user.sayHi(1, 2, 3);
user.sayHi2(1, 2, 3);

let numbers = [9, 99, 4, 56];
let newNumbers1 = numbers.map(function (number) {
    return number+1;
});
//When only one argument, we can remove the parenthesis
let newNumbers2 = numbers.map( (number) => {
    return number+1
});
let newNumbers3 = numbers.map(number =>  number + 1);
console.log(newNumbers1);
console.log(newNumbers2);
console.log(newNumbers3);