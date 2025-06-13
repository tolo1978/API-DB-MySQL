const autores = require ('../models/autores.model');

const getAll = async (req, res) => {
    const {page = 1, limit = 10} = req.query; // .query oara peticiones get

    const allAutores = await autores.getAll(page, limit);

    res.json({
        page,
        limit,
        results: allAutores
    });
}

const getById = async (req, res) => {
    const idUser = req.query.id; // .query para peticiones get

    const user = await autores.getById(idUser);

    if ( user === null) {
        res.status(404).json({errorMsg: "El autor no existe"})
    }
    res.json(user);
}

const create = async (req, res) => {
    const {nombre, email, imagen} = req.body; // .body datos en el cuerpo de la peticion  post

    const insert = await autores.create({nombre, email, imagen}); 

    res.json(insert);

}

const deleteById = async (req, res) => {
    const idUser = req.params.id; // .params para peticiones GET, PUT, DELETE, como por ejemnplo la parte de la url

    const deleteUser = await autores.deleteById(idUser);

    res.json(deleteUser);

}


const updDateById = async (req, res) => {
    const id = req.params.id; // Preguntar a Mario
    const data = req.body; // Preguntar a Mario

    const upDateUser = await autores.updDateById(id, data);

    res.json(upDateUser);

}


module.exports = { getAll, getById, create, deleteById, updDateById}