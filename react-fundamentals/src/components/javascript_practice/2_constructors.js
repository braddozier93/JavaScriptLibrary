//we name the class User
class User {
    //we call the constructor function and create parameters...
    //these will be values that we want to be passed in and stored in the object.
    constructor(first, last, e) {
            //on the right side of these expression, the word 'first', 'last', and 'e' below,
            //we have the value that is getting passed into the parens when the object is creates.
        this.f = first;
        this.l = last;
        this.email = e;
        //^^^^
        //on the right side we have the actual properties of the object.
        //the left side stores the incoming value from the right side as
        //the property for 'this' specific object being created.
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);//undefined
console.log(userOne.f);//Paul
console.log(userOne.l);//O'Connor
console.log(userOne); //User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}

class Car {
    constructor(make, model, year) {
        this.a = make;
        this.b = model;
        this.c = year
    }
}

var myCar = new Car("Mazda", "CX-5", "2015");
console.log(myCar.a);
console.log(myCar.b);
console.log(myCar.c);

class Player {
    constructor(name, number, averagePoints) {
        this.n = name;
        this.numb = number;
        this.avg = averagePoints;
    }
}

var newPlayer = new Player("Miller", "31", "21.3");
console.log(newPlayer.n);
console.log(newPlayer.numb);
console.log(newPlayer.avg);
