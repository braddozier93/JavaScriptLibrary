let x = 12;//global scope

function scope(){
    let x = 33;//local scope wihin code block{} let restricts it to code block
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
let a = 12;

function varTest() {
    let a = 33;
    if (true) {
        let a = 45;
        console.log(a);
    }
    console.log(a);
}

varTest();
console.log(a);