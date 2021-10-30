const express = require('express');
const app = require('../app.js');
const router = express.Router();
const homeRouter = require('./home-routes.js');
const apiRouter = require('./api/index.js');

router.use('/', homeRouter)
router.use('/api', apiRouter)

module.exports = router;
