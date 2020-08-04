//env
require('dotenv').config() //automatically loads environment variables so we can access them

//express
const express = require('express'); //requires the express dependency--importing it
const app = express(); //invoking it--allows us to make http requests

//controllers
const pies = require('./controllers/piecontroller');
const user = require('./controllers/usercontroller');

//database
const sequelize = require('./db');
sequelize.sync();//will sync all of our models to the db//to drop tables...{force:true} inside sync()
app.use(express.json())//recognizes incoming object as javascript object...needed for POST and PUT requests
app.use(require('./middleware/headers'));//import from headers//must be above routes

//listen
app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`)); //tells our app what port to listen on and console log it

//routes
app.use('/auth', user);
app.use(require('./middleware/validate-session'));//bouncer checking our wristband//looking for a signed in user and verifying token...don't get it til after the auth..
app.use('/pies', pies);//once logged in and token validated, this must come after
//app.use(express.static(__dirname + '/public'))
//console.log(__dirname);

//app.get('/', (req, res) => res.render('index'));//renders our index file
//app.get('/pies', (req, res) => res.send('I love pie')); //when user makes request to pie endpoint, we send response of i love pie
//creates our baseurl endpoint


//none of our heavy ligic is in here. more for importing controllers and syncing with database
//heavy logic is inside controllers