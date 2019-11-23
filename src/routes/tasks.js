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

router.get('/:id', (request, response) => {

  const data = {
    message: `Handling ${request.protocol} ${request.method} by ID ${request.params.id} requests for tasks!`
  }

  response
    .status(HttpStatus.OK)
    .json(data);
  
})

router.post('/', (request, response) => {

  const data = {
    message: 'Handling POST resquests for tasks!'
  }

  response
    .status(HttpStatus.OK)
    .json(data);

});

router.patch('/:id', (request, response) => {

  const data = {
    id: request.params.id,
    data: request.body,
    message: 'Handling PATCH resquests for tasks!'
  }

  response
    .status(HttpStatus.OK)
    .json(data);

});

router.delete('/:id', (request, response) => {

  const data = {
    id: request.params.id,
    message: 'Handling DELETE resquests for tasks!'
  }

  response
    .status(HttpStatus.OK)
    .json(data);

});

module.exports = router;