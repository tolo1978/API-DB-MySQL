const router = require('express').Router();

const {checkAutorId} = require('../../middlewares/autores.middleware');

const { getAll, getById, create, deleteById, updDateById} = require('../../controllers/autores.controllers');


router.get('/', getAll);
router.get('/:id', checkAutorId, getById);

router.post('/', create);
router.put('/:id', checkAutorId, updDateById);
router.delete('/:id', checkAutorId, deleteById);

module.exports = router;
