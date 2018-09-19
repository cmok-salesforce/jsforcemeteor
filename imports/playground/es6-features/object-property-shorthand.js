let bike = 'Scott';
let stuff = {
    //bike: bike
    bike
}

console.log(stuff);


let house = {
    bedroom: 2,
    bathroom: 1.5
}

let yearBuilt = 1995;

let myHouse = {
    ...house,
    bedroom: 3,
    yearBuilt,
    flooring: 'Carpet'
}

console.log(myHouse);