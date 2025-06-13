const autores = require('../models/autores.model');

const checkAutorId = async (req, res, next) => {
    const  id = req.query.id ? req.query.id : req.params.id;

    const noEsNumero = isNaN(id) 
    if(noEsNumero) {
        return res.status(404).json({errorMsg: 'El id no es un número'});
    } 
    const autor = await autores.getById(id)
    if ( autor === null) {
        return res.status(404).json({errorMsg: 'El autor no existe'});      
    }

    next();
}

module.exports = {checkAutorId}