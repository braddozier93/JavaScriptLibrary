let officeCharacter = "Pam";

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}
//default statement is the catch all

//challenge dessert menu
let dessert = "notlisted";

switch (dessert) {
    case "pie":
        console.log("pie, pie, me oh my");
        break;
    case "cake":
        console.log("cake is great");
        break;
    case "icecream":
        console.log("I scream for ice cream");
        break;
    default:
        console.log("Not on the menu");
}
//break breaks you out of the code block once a condition is met