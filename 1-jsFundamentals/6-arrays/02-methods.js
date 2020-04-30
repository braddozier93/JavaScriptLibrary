let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

/*for(let foodItem of food) {
    console.log(foodItem);
}

for(let foodItem in food) {
    console.log(foodItem);
}
*/

food.push("Pizza");
console.log(food);

food.splice(1, 2, "Tacos");
console.log(food);

//use function to capture the return
let removedFood = food.pop();
console.log(removedFood);

food.unshift("Burritos");
console.log(food);
