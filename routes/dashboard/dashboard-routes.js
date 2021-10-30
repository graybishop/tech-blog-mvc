const express = require('express');
const { Blog, User } = require('../../models');
const router = express.Router();

router.get('/', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login')
        return
    }

    const userData = await User.findByPk(req.session.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.toJSON()

    res.render('dashboard', {
        title: 'Dashboard',
        ...user,
        loggedIn: req.session.loggedIn
      })
})

module.exports = router