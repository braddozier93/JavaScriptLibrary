var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var AuthTestModel = sequelize.import('../models/authtest');

/*********************************
 * POST ALL ITEMS FOR AN INDIVIDUAL USER(  /getall will find all items in the table with the user id token)
 **********************************/
router.get('/getall', function(req, res) {
    var userid = req.user.id;

    AuthTestModel
    .findAll({
        where: {owner: userid}
    })
    .then(
        function findAllSuccess(data) {
            res.json(data);
        }, 
        function findAllError(err) {
            res.send(500, err.message);
        }
    );
});

 /*********************************
  * POST SINGLE ITEM FOR INDIVIDUAL USER (  /:id  finds a single item in the table. uses both id from the url(primary key) and the userid from the token(foreign key))
  ********************************/
 router.post('/create', function (req, res) {
     var owner = req.user.id;
     var authTestData = req.body.authtestdata.item;

     AuthTestModel
     .create({
         authtestdata: authTestData,
         owner: owner
     })
     .then(
         function createSuccess(authtestdata) {
             res.json({
                 authtestdata: authtestdata
             });
         },
         function createError(err) {
             res.send(500, err.message);
         }
     );
 });

  /******************************
   * GET SINGLE ITEM FOR INDIVIDUAL USER ( /create adds items to a table with the userid from the token)
   ******************************/
  router.get('/:id', function(req, res) {
      var data = req.params.id;
      var userid = req.user.id;

      AuthTestModel
      .findOne({
          where: {id: data, owner: userid}
      }).then(
          function findOneSuccess(data) {
              res.json(data);
          },
          function findOneError(err) {
              res.send(500, err.message);
          }
      );
  });

  /*************************************
   * DELETE ITEM FOR INDIVIDUAL USER
   ***************************************/

router.delete('/delete/:id', function(req, res) {//when a delete request is recieved, the controller looks for a matching function, like what teh rest of the HTTP verbs do
                                                //we specify what we're doing in our endpoint to make it easy for the user to know what's happening. the :id allows a parameter to be passed through the URL to the server so we can use it later
    var data = req.params.id; //this is the parameter passed through the URL. the same way 'req.body' points to the body of the request, 'req.params' points to the URL
    var userid = req.user.id; //this is our 'userid', set when 'validate-session' is called

    AuthTestModel
        .destroy({//this is a sequelize method to remove an item from a database
            where: {id: data, owner: userid}//we tell sequelize what to look for in trying to find an item to delete. if nothing matches exactly, nothing is done
        }).then(
            function deleteLogSuccess(data){//callback function. this response is sent when the delete is successful
                res.send("you removed a log");
            },
            function deleteLogError(err){//callback function. this resonse is sent when the delete is unsuccessful
                res.send(500, err.message);
            }
        );
});
/******************************************
 * UPDATE AN ITEM FOR INDIVIDUAL USER
 ******************************************/
router.put('/update/:id', function(req, res) {//PUT is one of the HTTP verbs that replaces whatever is already there with what we give it. in other words, PUT means update
                                            //to make it easier on the user, we use update in our route. we also allow a variable (id) to be passed through the URL again
    
    var data = req.params.id;//the parameter tken from the URL
    var authtestdata = req.body.authtestdata.item;//our data we want to put into the database, replacing what already exists

    AuthTestModel
        .update({//'update' is a sequelize method which htakes 2 arguments
            authtestdata: authtestdata//first argument of .update -contains an object holding the new value we want to edit into the database
        },
        {where: {id: data}}//second argument of .update -tells Sequelize where to place the new data if a match is found
        ).then(
            function updateSuccess(updatedLog) {//callback function. runs if update is sud=ccessful, and returns the data entered
                res.json({
                    authtestdata: authtestdata
                });
            },
            function updateError(err) {//callback function. runs if update is not successful, and returns the error message
                res.send(500, err.message);
            }
        )
});



  module.exports = router;