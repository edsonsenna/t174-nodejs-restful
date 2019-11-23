const express = require('express');
const router = express.Router();

const HttpStatus = require('http-status-codes');

const checkAuth = require('../middleware/check-auth');
const TaskService = require('../services/TaskService');


router.get('/', async (request, response) => {

  const tasks = await TaskService.GetAll();

  tasks && tasks.length
    ? response.status(HttpStatus.OK).json(tasks)
    : response.status(HttpStatus.NO_CONTENT).end();

});

router.get('/:id', (request, response) => {

  const data = {
    message: `Handling ${request.protocol} ${request.method} by ID ${request.params.id} requests for tasks!`
  }

  response
    .status(HttpStatus.OK)
    .json(data);
  
})

router.post('/', checkAuth, async (request, response) => {

  const task = await TaskService.add(request.body);
  const data = {
    task,
    message: 'Handling POST resquests for tasks!'
  }

  response
    .status(HttpStatus.OK)
    .json(data);

});

router.patch('/:id', checkAuth, (request, response) => {

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