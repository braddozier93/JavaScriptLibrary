let student = {
    name: "peter",
    awesome: true,
    degree: "javaScript",
    week: 1
}

for (let item in student){
    console.log(item);
}

let catArray = ["tabby", "shorthair", "burmese", "maine coon", "rag doll"];

for (let cat of catArray){
    console.log(cat);
}

/*for of loops are used on elements that have values
 (can't run on objects, because no #'s associated)--use on objects
 */
//for in loops are used to grab keys(Arrays) these keys are not iterable. 