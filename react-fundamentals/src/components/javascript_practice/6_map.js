const instructors = [
    { name: 'Quincy', specialty: 'Quantam Mechanics' },
    { name: 'Kenn', specialty: 'Norse Mythology' },
    { name: 'Paul', specialty: 'Tuvan throat singing' },
    { name: 'Aaron', specialty: 'Entomology' },
    { name: 'Carolyn', specialty: 'Kung Fu' }
]
//iterate over this array and print just the names of the instructors. we'll use a for loop
let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    instructor_names.push(instructors[i].name);
}
console.log(instructor_names);
//what we just did: 1. manage the index 2. check the length 3. increment 4. create an empty array 5. etc
//we have to create an empty array to push the names into as we iterate through. 

//using the .map() function with ES5
const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);
//created a variable called instructorNames that stores the results as an array of objects
//call .map on the instructors array: instructors.map
//the 'instructor' parametet in .map can be named anything, usually something related to the array
//exact same thing, different parameter name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);
//the map() function requires a return value. this is a key rule of using map(), so that fat arrow is taking care of that requirement
const instructorInfo = instructors.map(instructor => instructors)
console.log(instructorInfo);

//STUDY UP ON .map() and React -- GO OVER MDN DOCS AS WE'LL SEE .MAP() EVERYWHERE. 
//WILL PROBABLY BE ASKED TO USE .MAP() DURING AN INTERVIEW

var kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray);

var reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})