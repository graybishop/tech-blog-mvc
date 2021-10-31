const express = require('express');
const router = express.Router();
const { Post } = require('../../models');

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

router.post('/', async (req, res) => {

  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  try {
    const newProject = await Post.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {  
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  try {
    let updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {  
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  try {
    const projectData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
