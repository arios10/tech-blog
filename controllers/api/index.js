//Hooking Up Our Server
//Require Express
const router = require('express').Router();

//Add our user routes and link the folder
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', jokeRoutes);
router.use('/comments', commentRoutes);

//Export
module.exports = router;