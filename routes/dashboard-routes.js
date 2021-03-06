const express = require('express');
const { Post, User } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {

  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  const userData = await User.findByPk(req.session.userId, {
    attributes: { exclude: ['password'] },
    include: [{ model: Post }],
  });

  const user = userData.toJSON();

  res.render('dashboard', {
    title: 'Dashboard',
    ...user,
    loggedIn: req.session.loggedIn
  });
});

router.get('/edit/:id', async (req, res) => {

  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  let post
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    post = postData.toJSON();
  } catch (error) {
    res.status(404).send('Cannot find post with that ID')
    return
  }


  if (req.session.userId !== post.userId){
  res.redirect('/login');
  return;
  }

  res.render('edit-post', {
    title: 'Edit Post',
    ...post,
    loggedIn: req.session.loggedIn
  });
});

module.exports = router;