const router = require('express').Router();

router.use('/autores', require('./API/autores.routes'));
routes.use('/posts', require('./API/posts.routes'));

module.exports = router;