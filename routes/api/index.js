const express = require('express');
const router = express.Router();
const usersRouter = require('./user-routes.js');
const postRouter = require('./post-routes.js');
const commentRouter = require('./comment-routes.js');

router.use('/user', usersRouter)
router.use('/post', postRouter)
router.use('/comment', commentRouter)

module.exports = router