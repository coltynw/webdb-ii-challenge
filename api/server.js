const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet')
const carRouter = require('../routers/carRouter.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(morgan());
// thought i'd try out using morgan this time.

server.use('/api/cars', carRouter);


module.exports = server;