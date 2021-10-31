const express = require('express');
const router = express.Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
  // Get all projects and JOIN with user data
  const projectData = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  });

  // Serialize data so the template can read it
  const posts = projectData.map((Post) => Post.get({ plain: true }));

  // Pass serialized data and session flag into template
  res.render('home-page', {
    title: 'The Home Page',
    posts,
    loggedIn: req.session.loggedIn
  });

  // res.render('home-page', {
  //   title: 'The Home Page',
  //   blog: [
  //     { title: 'test title 1', description: `test description 1`, author: `Boba` },
  //     { title: 'test title two', description: `test description two`, author: `Lewis` }
  //   ],
  //   loggedIn: req.session.loggedIn
  // });
});

router.get('/login', function (req, res) {
  res.render('login', {
    title: 'Login Page',
    blog: [
      { title: 'test title 1', description: `test description 1`, author: `Boba` },
      { title: 'test title two', description: `test description two`, author: `Lewis` }
    ],
    loggedIn: req.session.loggedIn
  });
});


router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post', {
      ...post,
      logged_in: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;