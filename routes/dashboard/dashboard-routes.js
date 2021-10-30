const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard',
        blog: [
          { title: 'test title 1', description: `test description 1`, author: `Boba` },
          { title: 'test title two', description: `test description two`, author: `Lewis` }
        ],
        loggedIn: req.session.loggedIn
      })
})

module.exports = router