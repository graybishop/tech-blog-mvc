const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('home-page', {
    title: 'The Home Page',
    blog: [
      { title: 'test title 1', description: `test description 1`, author: `Boba` },
      { title: 'test title two', description: `test description two`, author: `Lewis` }
    ],
    loggedIn: true
  });
});

module.exports = router;