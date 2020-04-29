function hi() {
    console.log('HI');
}

hi();
console.log(hi);
console.log(hi());
//line 7 is not returning any value, hence undefined

//challenge--create a function that, when invoked, lists out the numbers 1-10

function oneToTen() {
    for (i = 0; i <= 10; i++){
        console.log(i);
    }
};

oneToTen();

//challenge 2-- given this array, create a function that console logs each of these values individually

let arr = ["this", "is", "really", "cool"];

function call() {
    for (let item of arr) {
        console.log(item);
    }
};
call();

//do i have for in and for of backwards--take a look again

