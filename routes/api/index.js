const express = require('express');
const router = express.Router();
const usersRouter = require('./user-routes.js');
const postRouter = require('./post-routes.js');
const commentRouter = require('./comment-routes.js');

router.use('/users', usersRouter)
router.use('/posts', postRouter)
router.use('/comments', commentRouter)

module.exports = router