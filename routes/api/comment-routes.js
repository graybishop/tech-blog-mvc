const express = require('express');
const router = express.Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {

  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  try {
    const newProject = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
