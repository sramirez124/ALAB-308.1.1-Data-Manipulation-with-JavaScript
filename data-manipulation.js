// Part 2 Practical Math

// Trip Variables
const totalMiles = 1500;

let mpg;
let mph = 55;

switch(mph){
    case 75:
        mpg = 23;
        break;
    case 60:
        mpg = 28;
        break;
    case 55:
        mpg = 30;
        break;
}

const budget = 175
const pricePerGallon = 3;

// 1. How many gallons of fuel will you need for the entire trip?
const gallonsNeeded = totalMiles / mpg;
console.log("How many gallons of fuel will you need for the entire trip? ", gallonsNeeded);

// 2. Will your budget be enough to cover the fuel expense?
const willBudgetCover = budget > gallonsNeeded * pricePerGallon;
console.log("Does the budget cover gas expense? ", willBudgetCover);

// 3. How long will the trip take, in hours?
const tripHours = totalMiles / mph;
console.log("How long will the trip take? ",tripHours.toFixed(2), " hours");