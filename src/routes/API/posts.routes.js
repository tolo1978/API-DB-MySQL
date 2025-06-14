const router = require('express').Router();

const {checkPostId} = require('../../middlewares/posts.middleware');

const { getAll, getById, create, upDateById, deleteById, getPostByAutor} = require('../../controllers/posts.controllers');

router.get('/', getAll);
router.get('/:id', checkPostId, getById);
router.get('/autor/:idAutor', getPostByAutor); //idautor --> viene del controller del método getPostByAutor y tiene que ser exacto

router.post('/', create);
router.put('/:id', checkPostId, upDateById);
router.delete('/:id', checkPostId, deleteById);

module.exports = router;


