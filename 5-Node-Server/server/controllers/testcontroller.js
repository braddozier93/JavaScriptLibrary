var express = require('express');//1
var router = express.Router();//2
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

/**************************
 *  Controller Method # 1: Simple Response
 *******************************/
router.post('/one', function(req, res){
    res.send("Test 1 went through!")
});

/******************************
 * Controller Method #2: Persisting Data
 ********************************/
router.post('/two', function(req, res){
    let testData = "Test data for endpoint two";

    TestModel
        .create({
            testdata: testData
        }).then(dataFromDatabase => {
            res.send("test two went through!")
        })
});

/**************************
 * Controller Method #3: req.body
 ***************************/

router.post('/three', function (req, res) {
    var testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    res.send("Test three went through!")
    console.log("Test 3 went through!")
});
/*****
 * STEP 4 - USE THIS WITH POSTMNAN
 *******/
router.post('/four', function (req, res) {
    var testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message() {
    res.send("Test 4 went through!");
        });
});

/****************
 * Route 5: Return data in a promise
 ************************/
router.post('/five', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(function message(data) {
        res.send(data);
    });
})

/************************
 * Route 6: Return response as JSON
 *********************** */
router.post('/six', function (req,res) {
    var testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(testdata) {
            res.json({
                testdata: testdata
            });
        }
    );
});

/*****************************
 * Route 7: Handle Errors
 ********************************/
router.post('/seven', (req, res) => {
    var testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    .then(
        function createSuccess(testdata) {
            res.json({
                testdata: testdata
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});

/*******************************
 * GET: Get simple messge from server
 ********************************/
router.get('/helloclient', function(req, res){
    res.send('This is a message from the server to the client.')
});

/*********************************
 * GET: /one
 ********************************/
router.get('/one', function(req, res) {
    TestModel
        .findAll({
            attributes: ['id', 'testdata']//notice that we find the attributes for two of the columns: id and testdata. this is part of sequelize. if qurying an entire table, you can choose which columns to grab from
        })
        .then(
            function findAllSuccess(data) {
                console.log("Controller data:", data);
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});




module.exports = router;

//below code from first 4 modules 
/*//var about = require('express');
nodemon
//3    //4       //5       //6
router.get('/', function (req,res) {
        //7
    res.send('Hey!!! This is a test route!');
});

router.get('/about', function (req,res) {
    res.send('This is an about route');
});

router.get('/contact', function (req,res) {
    res.send({
        "user": "kenn",
        "email": "kenn@beastmose.com"
    })
});

router.get('/projects', function (req, res) {
    res.send(["Project 1", "Project 2"])
});

router.get('/mycontacts', function (req, res) {
    res.send([
        {
            "user": "quincy",
            "email": "quincy@beastmode.com"
        },
        {
            "user": "aaron",
            "email": "aaron@beastmode.com"
        },
        {
            "user": "tom",
            "email": "tom@beastmose.com"
        },
        {
            "user": "brad",
            "email": "brad@beastmode.com"
        }

    ])
});
//about.get('/about', function (req, res) {
//    res.send('This is an about route');
//});

//8
module.exports = router;

//1 import the Express framework and it inside the variable 'express'
//  this instance becomes our gateway to using express methods
//2 create new variable called router. since the express variable(ln 1) gives us access to
// the express framework, we can access properties and methods by calling 'express.'.
// therefore, when we call express.Router(), we are using the express variable to access the router() method.
// the router() method will return a router object for us. link to express docs in canvas in express router module page.
//3 use the router object by using the router variable to get access into the router() object methods
//4 get() is one of the methods in the object and we call it here. 
//      this method allows us to complete a HTTP GET request. we pass 2 arguments into the .get method
//5 the 1st argument is the path. in this case, the path is just a / . more on this later.
//6 the 2nd argument is a callback function, or "handler function". this funciton gets 
// called when the application recieves a request to the specified route and HTTP method. 
// this application "listens" for requests that match the specified routes and methods, and
// and when it detects a match, it calls the specified callback function.
//7 inside our callback function, we call res.send(). send() is an express method that can
//      be called on the res or response object. our response paramete is just a simple string
//8 we export the module for ouside usage of the file

*/