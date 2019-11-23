const express = require('express');
const app = express();

//Middlewares
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const notFoundMiddleware = require('./middleware/not-found');

const tasksRouter = require('./routes/tasks');


app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/tasks', tasksRouter);
app.use(notFoundMiddleware);

module.exports = app;