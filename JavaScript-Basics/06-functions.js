function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum-secondNum);
}
subtractTwoNumbers(5, 7);

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91));

function add(x, y){
    let sum = x + y;
    return sum;
}
console.log(add(1, 1));

function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName;
}
console.log(fullName("Paul", "O'Connor"));

function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice;
}
console.log(calculatePriceIndiana(17, 5));

//Explain how the return statement works in a function. This is often asked at interviews. Know it...