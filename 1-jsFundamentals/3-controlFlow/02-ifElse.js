//instead of doing mulpile if statements

let weather = 75;

if (weather < 70) {
    console.log("wear a jacket");
} else {
    console.log("no jacket necessary");
}

let name = "marissa";

//challenge bronze
if (name == "Brad") {
    console.log(name);
} else {
    console.log("Hello, what is your name?");
}

//silver
let name = "Brad";
if (name == "Brad") {
    console.log(`Hello, my name is ${name}`);
}

//gold
let name = "Marissa";

if (name == "Brad") {
    console.log(`Hello, my name is ${name}`);
} else {
    console.log("Hello, is your name " + name + "?");
}

//2nd ifElse challenge

//bronze
let name = 'zAchARy';

if (name[0] === name[0].toUpperCase()) {
    console.log(name);
} else {
    console.log("hey, this isn't written correctly");
}

//silver
let name = 'zAchARy';

if (name[0] === name[0].toUpperCase()) {
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase());
}

//gold


//3rd challenge Else If statement
let age = 43;

if (age >= 25) {
    console.log("You can rent a car");
}   else if (age >= 21) {
    console.log("You can drink");
}   else if (age >= 18) {
    console.log("You can vote");
}   else {
    console.log("Sorry, you can to anything");
}

