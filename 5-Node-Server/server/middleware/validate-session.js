var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

module.exports = function(req, res, next) {
    if (req.method == 'OPTIONS') {
        next()
    } else {
        var sessionToken = req.headers.authorization;//1 create sessiontoken to hold the token, which is pulled from the authorization header of the req coming in
        console.log(sessionToken)//2 print token to console. just to verify token is being seent to the server. it should not be left in the code, as its a potential security liability
        if (!sessionToken) return res.status(403).send({auth: false, message: 'No token provided.'});//3if no token, err is returned in response
        else {//4no user property is ever provided in the request, so only tokens will get checked. this prevents unauthorized use of a token that was assigned to a different user
            jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => {//5-verify method decodes the token with the provided secret, then sends a callback with two variables. if successful, decoded will contain the decoded payload
                if(decoded){
                    User.findOne({
                        where: {id: decoded.id}
                    }).then(user => {//6 if decoded has a value the sequelize findOne method looks for an id in the users table that matches the decoded.id property. this value is passed into a callback
                        req.user = user;//7the callback sets the user value for the request as the id value passed to it then sends the request on to its next destination. This properrty will be necessary later in adding to the database
                        next();
                    },
                    function(){//8if no matching id, an error message is thrown
                        res.status(401).send({error: 'Not authorized'});
                    });
                } else {//9 if no value for decoded, an error message is thrown
                    res.status(400).send({error: 'Not authorized'});
                }
            });
        }
   }
}