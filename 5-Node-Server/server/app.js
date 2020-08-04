
require('dotenv').config(); //with this we can make items in an .env file available to our whoe application

var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller');//1a
var authTest = require('./controllers/authtestcontroller');//imported the authtestcontroller file for access to the enpoints. 

var user = require('./controllers/usercontroller'); //import the usercontroller.js file
var sequelize = require('./db');//create a sequelize var that imports the db file. use the var and call sync(). this method will ensure that we sync all defined models to tthe DB

sequelize.sync(); //tip: pass in {force: true} for resetting tables
app.use(express.json());
app.use(require('./middleware/headers')); //activate our headers in teh app.js. this is in order, so the file will be read sequentially, which means that the headers must come before the routes are declared
/*********************
 * EXPOSED ROUTES
 ***********************/
//2a  //3a
app.use('/test', test);
app.use('/api/user', user);  //set up a route to the endpoints for the api/user route
//you could also write it this way without the requirement statement above
//app.use('/api/user', require('./controllers/usercontrollers'));

/*******************************
 * PROTECTED ROUTES
 ***************************/
app.use(require('./middleware/validate-session'));//we import the validate session middleware, which will check to see if the incoming request has a token
app.use('/authtest', authTest);//anything beneath 'validate-session' will require a token to access, thus becoming protected. anything above it will not require a token, remaining unprotected. therfore, the 'test' and 'user' routes are not protected, while the 'authtest' route is protected

//3         //4
app.listen(3000, function(){
    console.log('Hey man! App is listening on 3000.')//5
});
//1 we require the use of the 'express' npm package that we've installed on our dependencies
//2 we create an instance of express. We're actually firing off a top-level express() function
//exported by the Express module. This allows us to create an Express App.
//3 'app.listen' will us express to start a UNIX socket and listen for connections on the given path. 
// this method is identical to Node's 'http.server.listen().
//4 the given path is 'localhost:3000'
//5 we call a callback function when the connection happens with a simple console.log
app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});


//1a import the route object that we just created and store it in a variable called test
//2a we call 'app.use' and in the first parameter create a base url called '/test'. so our
//    base url will look like this: http://localhost:3000/test
//3afor our second parameter for the use() function, we pass in test. this means that
// all routes created in the testcontroller.js file will be sub routes. It will look
// like this: http://localhost:3000/test or http://localhost:3000/test/

