let student = {
    name: "peter",
    awesome: true,
    degree: "javaScript",
    week: 1
}


//let creates a variable with a placeholder value for whatever we are iterating over
//console.log(item); will return (enumerable?) property names, which are strings
for (let item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ["tabby", "shorthair", "burmese", "maine coon", "rag doll"];

for (let cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

/*challenge - write a for in loop that capitalizes the first letter of a name
and lowercases the rest of the name*/
//my effort:
let name = "donovan";

for (let letter in name){
    if (letter[0] === letter[0].toUpperCase()) {
    console.log(letter[0]);
} else {
    console.log(letter.slice(1).toLowerCase());
    }
}
//actual solution:
let name = "dOnOvAn";
let capName;

for (let l in name){
    if (l == 0) {
    capName = name[l].toUpperCase();
} else {
    capName += name[l].toLowerCase();
    }
}

console.log(capName);