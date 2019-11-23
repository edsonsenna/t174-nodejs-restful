const HttpStatus = require('http-status-codes');

const notFound = (request, response, next) => {

  const errorInfo = {
    message: `Route to ${request.method} ${request.path}`
  }

  response.
    status(HttpStatus.NOT_FOUND)
    .json(errorInfo);
    
  next &&
    next();

}

module.exports = notFound;