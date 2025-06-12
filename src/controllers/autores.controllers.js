const autores = require ('../models/autores.model');

const getAll = async (req, res) => {
    const {page = 1, limit = 10} = req.query;

    const allAutores = await autores.getAll(page, limit);

    res.json({
        page,
        limit,
        allAutores
    });
}

const getById = async (req, res) => {

}

const create = async (req, res) => {

}

const deleteById = async (req, res) => {

}


const updDateById = async (req, res) => {

}


module.exports = { getAll, getById, create, deleteById, updDateById}