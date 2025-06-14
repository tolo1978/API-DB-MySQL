const posts = require ('../models/posts.model');

const checkPostId = async (req, res, next) => {
    const  id = req.query.id ? req.query.id : req.params.id;

    const noEsNumero = isNaN(id)
    if(noEsNumero) {
        return res.status(404).json({errorMsg: 'El id no es un número'});
    }
    const post = await posts.getById(id)
    if ( post === null) {
        return res.status(404).json({errorMsg: 'El post no existe'});      
    }

    next();
}
module.exports = {checkPostId}