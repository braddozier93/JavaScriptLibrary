//ES^ JS Classes
class User {
    constructor(username, password){
        this.name = username;
        this.password = password;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    //method 2
    status(){
        console.log("Current status: " + this.type);
    }
}

//Instance of the class/new object
var anonDude = new User("Anonymous");

//we can now use the instance and the . operator
// to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class
var anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

//another instance of the class
var jeff = new User("Jeff");
jeff.greet();
jeff.status();

//1 of 2 more instances
var brad = new User("Brad");
brad.greet();
brad.status();

//2 of 2 more instances
var john = new User("John");
john.greet();
john.status();

