const HttpStatus = require('http-status-codes');

const checkAuth = (request, response, next) => {

  const token = request.headers.authorization;

  if(/ZG0xMjQ6YWx1bm9pbmF0ZWw=/.test(token)) {
    next();
  } else {
    const errorInfo = {
      status: HttpStatus.UNAUTHORIZED,
      message: 'Not authorized!'
    };

    response
      .status(HttpStatus.UNAUTHORIZED)
      .json(errorInfo);
  }
}

module.exports = checkAuth;