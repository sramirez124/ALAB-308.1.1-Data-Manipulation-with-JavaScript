// Part 1: Math Problems
// The initial numbers that must be verified.
console.log("<====================Part 1====================>");
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
  // console.log(dontDoThis);

// 1. Check if all numbers are divisible by 5. Cache the result in a variable.
const isDivFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) >= 5;
console.log("Are all numbers divisible by 5? " , isDivFive);

// 2. Check if the first number is larger than the last. Cache the result in a variable.
const biggerThan = n1 > n4;
console.log("Is the first number larger than the last? " , biggerThan);


// 3. Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

const arithmeticChain = (((n2 - n1) * n3) / n4);
console.log("Chain answer is: ", arithmeticChain);

// 4. Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) 
// in other logic comparisons. 
// Rename the variable as appropriate.
// I really didn't understand this one

if (isSum50 && isTwoOdd && isOver25 && isUnique)


/**
 * 
 * Part 2 Practical Math
 * 
 */


console.log("<====================Part 2====================>");
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