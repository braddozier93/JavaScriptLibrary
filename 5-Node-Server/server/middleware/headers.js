//1                         2
module.exports = function(req, res, next) {
    //3                //4
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');//5
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');//6
    //7
    next();
};
//1 module.exports allows us to export this module to be used in another file
//2 req refers to the request from the client, specifically focusing on headers present on the object request
//2 res refeers to the response and will be used to present which types of headers are allowed by the server
//3 we call res.header so that the server will respond with what kind of headers are allowed in the request
//4 we use the specific a-c-a-o header to tell the server the specific origin locations that are allowed to communicate with the server
//4 the * is known as a "wild-card". it means that everything is allowed. requests originating from any location are allowed to communicate with the database
//5 these are http methods that the server will be allowed to be used. Postman allows you to send 15 differnt http requests; our server will only accept these 4
//6 specific header types that the server will accept from the cllient. earlier, we sent  content-Type header to the server
//6 without this header, our request would not have worked. 
//7 next sends the request along to it's destination. this could be the API endpoint or another middleware function designed to do something else

//next() ttells the middleware to continue its process. With the above example,
// next() takes the request object and passes it on the endpoint on the server.
// Not including the next() would cause the application to break, as the server 
//doesn't know what to do after sending the header. We could also use next() 
//to provide additional headers if we want further restrictions on our server.