let a = 2;

    let    b     =    1
/*   (1)   (2)   (3)  (4)

1-keyword
2-variable name
3-assignment operator
4-variable value

*/

console.log(a + b);

/*
    notes on variables;
        -a variable must begin with a letter, underscore, or dollar sign
        -numbers may follow the above characters, but may not come first
        -javascript is case sensitive- hello and Hello are different variables
        -no spaces are allowed in variable names
        -camelCase is the best practice for naming variables
            camelCase, snake_case, PascalCase
*/

var c = 1;
let d = 2;
const e = 3; //value must remain constant

/* Declarations are the LEFT side of a variable
    -it is simply: let x

    Initializations are on the RIGHT side of a variable 
     -it sets the value of the variable
     -it incorporates the variable name, the assignment operator, and the value that we assign it
*/

let x = 20;
console.log(x)

x = 10;
console.log(x);

x = 33;
console.log(x);

let today = "First day";
let mood = "Happy";
console.log(today, mood);

