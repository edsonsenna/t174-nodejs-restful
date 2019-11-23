const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');

router.get('/', (request, response) => {

  const data = {
    message: `Handling ${request.protocol} ${request.method} requests for tasks!`
  }

  response
    .status(HttpStatus.OK)
    .json(data);

});

router.post('/', (request, response) => {

  const data = {
    message: 'Handling POST resquests for tasks!'
  }

  response
    .status(HttpStatus.OK)
    .json(data);

});

module.exports = router;