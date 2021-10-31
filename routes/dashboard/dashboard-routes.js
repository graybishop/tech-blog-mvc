const express = require('express');
const { Post, User } = require('../../models');
const router = express.Router();

router.get('/', async (req, res) => {

    if (!req.session.loggedIn) {
        res.redirect('/login')
        return
    }

    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.toJSON()

    res.render('dashboard', {
        title: 'Dashboard',
        ...user,
        loggedIn: req.session.loggedIn
      })
})

module.exports = router