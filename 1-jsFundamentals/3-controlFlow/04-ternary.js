//short cut for if and if else statement, but not else if

let num = 9;

(num > 0) ? console.log("yes") : console.log("no");

//replaces the following if else statement
if (num > 0) {
    console.log("yes");
} else {
    console.log("no");
}

//rewrite age voting challenge into a ternary
let age = 20;

(age >= 25) ? console.log("you can rent a car") :
(age >= 21) ? console.log("you can drink") :
(age >= 18) ? console.log("you can vote") :
console.log("sorry you cant do anything");

//original for above challenge
if (age >= 25) {
    console.log("You can rent a car");
}   else if (age >= 21) {
    console.log("You can drink");
}   else if (age >= 18) {
    console.log("You can vote");
}   else {
    console.log("Sorry, you can to anything");
}
