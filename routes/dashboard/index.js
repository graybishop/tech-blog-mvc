const express = require('express');
const router = express.Router();
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', dashboardRoutes)

module.exports = router