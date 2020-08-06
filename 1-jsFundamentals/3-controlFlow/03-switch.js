let officeCharacter = "Jim";

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
let dessert = "cake";

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

//PRACTICE----why can't i get it to work as switch statement as opposed to if else????/
// let weather = "3";

// switch (weather) {
//     case (weather <= '0'):
//         console.log("stay inside");
//         break;
//     case (weather > '0' && weather <= '32'):
//         console.log("wear a coat and gloves");
//         break;
//     case (weather > '32' && weather <= '50'):
//         console.log("wear a heavy jacket or coat");
//         break;
//     case (weather > '50' && weather <= '72'):
//         console.log('you may need a jacket')
//      default: 
//     console.log("It's " + weather + " , no jacket will be necessary");
// }