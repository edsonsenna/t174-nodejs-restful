const express = require('express');
const router = express.Router();

const HttpStatus = require('http-status-codes');

const checkAuth = require('../middleware/check-auth');
const TaskService = require('../services/TaskService');


router.get('/', async (request, response) => {

  const tasks = await TaskService.getAll();

  tasks && tasks.length
    ? response.status(HttpStatus.OK).json(tasks)
    : response.status(HttpStatus.NO_CONTENT).end();

});

router.get('/:id', async (request, response) => {

  const task = await TaskService.getById(request.params.id);

  const data = {
    task,
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

router.patch('/:id', checkAuth, async (request, response) => {

  const updatedTask = await TaskService.update(
    request.params.id,
    request.body
    );

  updatedTask
    && response.status(HttpStatus.OK).end();

  response.status(HttpStatus.NOT_FOUND).end();

});

router.delete('/:id', async (request, response) => {

  const isDelete = await TaskService.delete(request.params.id);
  isDelete
    ? response.status(HttpStatus.OK).end()
    : response.status(HttpStatus.NOT_FOUND).end()
  
});

module.exports = router;