let listTitle = document.getElementById('listTitle');
console.log(listTitle);

let listItem = document.querySelector('ul li');
console.log(listItem);

listTitle.style.textAlign = 'center';

listItem.style.color = "red";

let body = document.querySelector('body');
body.style.backgroundColor = "lightblue";

let grocery = document.getElementsByClassName('groceryItem');
console.log(grocery);
console.log(grocery[2]);
console.log(grocery.item(2));

//html collection
let listItems = document.getElementsByTagName("li");
console.log(listItems);

//node list or collection--node is just elements or text that is attached to a DOM like a h or nav p
let unorderedListItems = document.querySelectorAll("ul li")
console.log(unorderedListItems);
//underline all ist items in a ul--(for loop???)



//child nodes
console.log(document.body.childNodes);
console.log(document.body.children);

//more DOM manipulation
let listDiv = document.getElementById("list");
//returns text because of whitespace. the first child comes from the nodes list
console.log(listDiv.childNodes);
console.log(listDiv.firstChild);
console.log(listDiv.firstChild.nextSibling);
console.log(listDiv.firstChild.nextSibling.nextSibling);

//challenge: Select the input box and assign it to a variable called toDoTitle
let toDoTitle = document.getElementById("listInput");
console.log(toDoTitle);
let toDoTitle2 = document.getElementById("inputField");
console.log(toDoTitle2);

//underline all list items in a ul--(for loop???)
for(tag of unorderedListItems) {
    tag.style.textDecoration = "underline";
    tag.style.fontSize = "14px";
}
//                                            change inner text
document.getElementsByClassName("listItem")[4].innerText = "Visit Grindlewald";

//change first element in grocerylist to Moondew Drops
document.getElementsByClassName("groceryItem")[0].innerText = "Moondew Drops";

//add event listeners to our document
//its a method that takes two arguments            listener
document.getElementById("clickMe").addEventListener('click', (event) => {
    event.target.style.backgroundColor = "Blue";
    event.target.style.color = "white";
});
//event is an object, has an html target of style, and a style of bg color

//keyboard event key up
document.getElementById("listInput").addEventListener('keyup', (event) => {
    console.log(event.target.value);
});

//create and attach new items to to-do list

let newGroceryItem = document.createElement('li');
console.log(newGroceryItem);

let groceryList = document.getElementById('groceryList');
groceryList.appendChild(newGroceryItem);

newGroceryItem.innerText = "Ginger Root";
//Ginger root didn't have correct font, we need to get it to match
//re assign the unordered list items to include all at this point(ginger root wasn't there earlier)
//then run the for loop again to get it underlined and the right size
unorderedListItems = document.querySelectorAll("ul, li");

for(tag of unorderedListItems) {
    tag.style.textDecoration = "underline";
    tag.style.fontSize = "16px";
};
