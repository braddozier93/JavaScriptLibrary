
//   (1)   (2)       (3)
let list = ["item 1",   "item2",    "item3"];

/*
1: variable name holding the array
2: arrrays are denoted by square brackets
3: each item in the array must be separated by a comma, regardless of datatype
*/

//              (0)       (1)       (2)
let fruit = ["orange", "banana", "apple"];
console.log(fruit instanceof Array);
console.log(fruit[0]);

let students = [
    "Mitchell",
    "Bill",
    "Brittany",
    23, 
    true,
    ["Hustin", "Amanda", "John", [20, true, "Slayde"]]
]

//to make sure you are running with an array(or object or string or...)
console.log(students instanceof Array);
//nested array
console.log(students[5][1]);
console.log(students[5][3][2]);
