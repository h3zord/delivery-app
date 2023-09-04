const express = require('express');
const path = require('path');
require('express-async-errors');
const cors = require('cors');
const router = require('./Routes');
const errorMiddleware = require('./Middlewares/error');

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use('/images', express.static(path.join(__dirname, './images/')));
app.use(errorMiddleware);

module.exports = app;
