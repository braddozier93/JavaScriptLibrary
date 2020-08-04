module.exports = (req, res, next) => {
    res.header('access-control-allow-origin', '*');//tells browser to allow code from any origin
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');//specifies method(s) that are allowed when accessing the server
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');//response header that indicates which headers can be used when making a request to the server

    next();
}