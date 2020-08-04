let x = 12;//global scope

function scope(){
    let x = 33;//local scope wihin code block{}
    console.log(x);
}

scope();
console.log(x);

//////////////// example 2
let y = 12;

function scope2() {
    y = 33;
    console.log(y);
}

scope2();
console.log(y);

////////////////// example 3
let x = 12;

function varTest() {
    let x = 33;
    if (true) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);