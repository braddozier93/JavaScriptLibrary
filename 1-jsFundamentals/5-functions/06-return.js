let hi = () => {
    //1
    return 'hi';
}

//      2       3
let greeting = hi();
//setting greeting to the value of the function
/*
    1- the keyword that brings the data out of our function
    2- a new variable to hold the value of the return
    3- when called, the function becomes the value of the return
*/
console.log(greeting);



function name(firstName) {
    return `Hello, ${firstName}`;
}
// concise body implied return example
//let name = (firstName) => `Hello, ${firstName}`
let greetedName = name('Leia Organa');

console.log(greetedName);

//example
function capitalizeName(name) {
    console.log(name[0].toUpperCase() + name.slice(1).toLowerCase());
}

let correctName = capitalizeName('jErOme');

console.log(correctName);
//why is line 34 console.log undefined---because there is no return inside the function


//FUNCTION to find the area of a rectangle
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}

let width = 5;
let length = 5;

let newArea = areaOfRectangle(length, width);
//we are getting a return, we're just not console logging it
//it's saying let newArea = 25;

//if we want to see it:
console.log(newArea);

/*CHALLENGE:
    make a tip calculator using a function
    have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

function tip(price, percent) {
    let tipAmount = price * percent;
    return tipAmount;
}

//variable below don't have to be named the same as parameters, it's the placing
let myPrice = 10;
let myPercent = .20;
//can also make .2 into a percent amount/100 istead of typing in .2
let myTipAmount = "$" + tip(myPrice, myPercent);
console.log(myTipAmount);

/*

another solution??;

function tip(bill, twentyPercent) {
    let tip = bill * twentyPercent;
    return tip;
}

//the variables below don't have to be named the same as parameters
let bill = 100;
let twentyPercent = .2;
let totalTip = tip(bill, twentyPercent) + "%";
console.log(totalTip);

*/
​
