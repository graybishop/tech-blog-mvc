const express = require('express');
const router = express.Router();
const homeRouter = require('./home-routes.js');
const apiRouter = require('./api/index.js');
const dashboardRouter = require('./dashboard/index.js');

router.use('/', homeRouter)
router.use('/dashboard', dashboardRouter)
router.use('/api', apiRouter)

module.exports = router;
