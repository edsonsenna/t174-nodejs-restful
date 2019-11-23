const express = require('express');
const app = express();

const tasksRouter = require('./routes/tasks');

app.use('/api/tasks', tasksRouter);

module.exports = app;