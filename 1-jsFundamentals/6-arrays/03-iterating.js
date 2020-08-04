let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
 }

//concise body
//food.forEach  = foodItem => console.log(foodItem);


let movies = ["Action", "Horror", "Drama", "Comedy", "Documentary"];

movies.push("new movie");
console.log(movies);

movies.splice(1, 1, "star wars");
console.log(movies);

movies.forEach((movie, i) => console.log(i,movie));

