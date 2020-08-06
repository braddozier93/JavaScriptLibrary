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
let name1 = "John";
if (name1 == "John") {
    console.log(`Hello, my name is ${name1}`);
}

//gold
let name2 = "Marissa";

if (name2 == "Brad") {
    console.log(`Hello, my name is ${name2}`);
} else {
    console.log("Hello, is your name " + name2 + "?");
}

//2nd ifElse challenge

//bronze
let name3 = 'zAchARy';

if (name3[0] === name3[0].toUpperCase()) {
    console.log(name3);
} else {
    console.log("hey, this isn't written correctly");
}

//silver
let name4 = 'zAchARy';

if (name4[0] === name4[0].toUpperCase()) {
    console.log(name4[0]);
} else {
    console.log(name4.slice(1).toLowerCase());
}

//gold


//3rd challenge Else If statement with a catch all else statement 
let age = 12;

if (age >= 25) {
    console.log("You can rent a car");
}   else if (age >= 21) {
    console.log("You can drink");
}   else if (age >= 18) {
    console.log("You can vote");
}   else {
    console.log("Sorry, you can to anything");
}

//MODULE 2.2 SAMPLE CODE
var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = false;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true) {    //Note: You don't have to have the ===
	console.log("Going up");
} else {
	console.log("Going down");
}  

if (elevatorBroken) {    //Note: You don't have to have the ===
	console.log("Bummer. Let's take the stairs.");
} else {
	console.log("Which floor?");
}  

//Write another one for stuck:
if (elevatorStuckWhileWeAreOnIt){
	console.log("Oh no! We're stuck!");
} else {
	console.log("This elevator is fast.");
}

//But maybe we're standing there waiting?
if(elevatorBroken && elevatorDown){
	console.log("I hope this thing doesn't start flying down!");
} else {
	console.log("How long are you in town for?");
}

if(elevatorBroken || elevatorStuckWhileWeAreOnIt){
	console.log("Hi Bob, this is Bob with maintenance. How can I help?");
} else {
    console.log("Enjoy the ride");
}

//Using ints and other types
if(elevatorNumber === 13 && elevatorStuckWhileWeAreOnIt){
	console.log("This is not our lucky day!");
}

//FIX THE BANK'S BAD CODE---MODULE 2.2
var bankAccount = 6000;
var debt = 4200;
var difference = bankAccount - debt;
  	
if ((bankAccount - debt) > 700) {
		console.log(`I have some extra money. I should pay off my debt. I'll have $${difference} leftover.`);	
	} else {
		console.log("It probably isn't a good time to pay off my debt.");
}  
console.log(`I have $ ${bankAccount} in my bank account, and I am $ ${debt} in debt.`);