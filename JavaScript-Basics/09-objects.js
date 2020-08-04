//object literal with properties/keys("name") and values("bob alcorn")
let bobAlcorn = {
    name: "Bob Alcorn",
    age: 59,
    vocation: "Chief Operating Officer",
    isRetired: false
};
// dot . notation gives you access to an object's properties and values
console.log(bobAlcorn);
console.log(bobAlcorn.name);
console.log(bobAlcorn.age);
console.log(bobAlcorn.middleName);

let player = {
    username: "dragon",
    power: "fire",
    toughness: 95
}

console.log(player.username);

let friend = {
    name: "Marissa",
    hairColor: "brown",
    age: 33,
    occupation: "Dance Teacher"
}
console.log(friend)
console.log(friend.name + ": " + friend.occupation);

let movie = {
    name: "Raiders of the Lost Ark",
    director: "Steven Spielberg",
    releaseYear: 1981
}

let cardinalsInfield = {
    catcher: "Yadier Molina",
    firstBase: "Paul Goldschmidt",
    secondBase: "Kolten Wong",
    shortstop: "Paul Dejong",
    thirdBase: "Matt Carpenter"
}

console.log(movie.releaseYear);
console.log(cardinalsInfield.catcher);
