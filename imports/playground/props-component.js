let obj = {
    name: 'Andrew',
    printName() {
        console.log(`Name: ${this.name}`);
    }
}

setTimeout(() => {
    obj.printName();
}, 1000);

// Bnind command, allowing this keyword
// TODO: DO NOT DISPLAY ANYTHING ???
setTimeout(() => {
    obj.printName.bind(obj);
}, 2000);

//obj.printName();