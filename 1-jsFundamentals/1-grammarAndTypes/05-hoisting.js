/*
    Ledger: 
    variable for a name whos value is currently defined
    function called foo, that does {...code stuff...}
*/

console.log(name);
foo();

var name = "testing";

// pretend there is a lot of code in between

function foo() {
    console.log('Does this work')
}
