/*
    Ledger: 
    variable for a name whose value is currently defined
    function called foo, that does {...code stuff...}
*/

console.log(name);
foo();

var name = "testing";

// pretend there is a lot of code in between

function foo() {
    console.log('Does this work')
}
/*
Variables and functions that are declared with the "var" and "function"
keywords are "hoisted" into a leger for JavaScript's interpreter to use.
How it creates the "leger" is, it reads the file character by character
collecting the "var" variables and "function" definitions, and after the
first pass reaches the end of the file, it then finally runs the actual
code written in the file.

*/