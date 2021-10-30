const express = require('express');
const app = require('../app.js');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send(`you have the homepage now`);
    res.render('index', { title: 'Express' });
  });

module.exports = router;