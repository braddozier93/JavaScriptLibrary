const instructors = [
    {name: 'Aaron', specialty: 'Entymology', medals: 7},
    {name: 'Carolyn', specialty: 'Fencing', medals: 5},
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 8},
    {name: 'Paul', specialty: 'Tuvan throat singing', medals: 4},
    {name: 'Quincy', specialty: 'Quantam Mechanics', medals: 2},
    {name: 'Tom', specialty: 'Chemistry', medals: 3},
]
//iterate over this array and filter it based on the nember of medals each instructor had. 
//we only want to get the instructors that have 5 or more medals

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    if(instructors[i].medals >= 5) {
        instructor_names.push(instructors[i].name);
    }
}
console.log(instructor_names);
//what we did-- 1 manage the index 2. check the length 3.increment 4. create an empty array 5.etc.
//this is fine, but use ES6 and teh filter() function
const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);
//1. create new variable that stores the result as an array of objects. note: filter() returns a new array, and does not modify the original array
//2. we call .filter on the instructors array: instructors.map
//3. the instructor parameter in .filter can be named anything, usually something related to the array
//for example, this is the exact same thing
const instructorNamesTwo = instructors.filter(i => i.medals >= 5);
console.log(instructorNamesTwo);
//1. .filter() function requires a return value. this is a key rule of using .filter(), so the fat arrow is taking care of that requirement
const instructorInfo = instructors.filter(i => i.name == 'Aaron');
console.log(instructorInfo);

//filter doesn't modify your original array, and you can create a new array of only the info you want
//with .filter() and .map() combined, there is a lot you can do without ever 
//having to use a for loop
