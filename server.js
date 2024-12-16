const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo.routes');
const dotenv = require('dotenv');
const app = express();

app.use(bodyParser.json());

app.use('/todos', todoRouter);

app.listen(5000, () => {
    console.log('Server is running on Port 5000.');
});