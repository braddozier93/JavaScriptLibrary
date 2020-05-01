let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ["blue", "green", "yellow", "red", "orange", "purple"];
console.log(colors.length);

console.log(colors.toString());

console.log(typeof colors);

//challenge
/*
    -check if you are working with an array
    -using a method, flip the values within(what was 4 is now 0, 3 to 1, etc)
    -using a method, print the values of the newly arranged array
*/
let colors = ["blue", "green", "yellow", "red", "orange", "purple"];

console.log(colors instanceof Array);
console.log(colors.reverse());
console.log(colors.toString());
/*

console.log(colors instanceof Array);
colors.reverse();
colors.forEach(color => console.log(color));

correct solution below
*/

if (colors instanceof Array) {
    let newArr = colors.reverse();
    newArr.forEach(color => console.log(color));
} else {
    console.log("not an array");
}

//CHALLENGE---
//using forEach method, capitalize the first letter of each color and lowercase the rest
let colors = ["blue", "green", "yellow", "red", "orange", "purple"];

colors.forEach(color => console.log(color[0][0].toUpperCase() + color.slice(1).toLowerCase()));


//OR
let colors = ["blue", "green", "yellow", "red", "orange", "purple"];
//from arrow functions
let correctSpelling = colors.forEach(color => {
    let newColor = color[0].toUpperCase() + color.slice(1).toLowerCase();
    console.log(newColor);
});





