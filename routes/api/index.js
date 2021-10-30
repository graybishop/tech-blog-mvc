const express = require('express');
const router = express.Router();
const usersRouter = require('./users.js');

router.use('/users', usersRouter)

module.exports = router