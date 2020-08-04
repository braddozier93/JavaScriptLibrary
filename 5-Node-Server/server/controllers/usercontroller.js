var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


/*****************************
 * Create user endpoint: Starter
 **********************************/
/*
router.post('/createuser', function(req, res) {

    var username = "The Dude";
    var pass = "therugtiestheroomtogether";

    User.create({
        username: username,
        passwordhash: pass
    }).then(
        function message(){
            res.send("I hate the Eagles, man");
        }
    );
});
*/
router.post('/createuser', function(req, res) {
    var username = req.body.user.username;
    var pass = req. body.user.password;

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10)
    }).then(
        function createSuccess(user) {
                //token creation on line 36 below. pass the value in line 41
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                                                //system goes to .env file
                                                //value of the secret stored in .env
            res.json({
                user: user,
                message: 'created',
                sessionToken: token
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});

router.post('/signin', function(req, res) {
    User.findOne({
        where: {
            username: req.body.user.username
        }
    }).then(
        function(user) {
            if(user) {
                bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches){
                    if(matches) {
                    var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                    res.json({
                        user: user,
                        message: "successfully authenticated",
                        sessionToken: token
                    });
            } else {
                res.status(502).send({error: "you failed, yo"});
            } 
        });
        } else {
                res.status(500).send({error: "failed to authenticate"});
            }
        },
        function (err) {
            res.status(501).send({error: "you failed, yo"});
        }
    );
});

 module.exports = router