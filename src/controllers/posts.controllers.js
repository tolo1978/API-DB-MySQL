const posts = require('../models/posts.model');

const getAll = async () => {
    const { page = 1, limit = 10 } = req.query; // .query para peticiones get

    const allPosts = await posts.getAll(page, limit);

    res.json({
        page,
        limit,
        results: allPosts
    })

}
const getById = async (req, res) => {
    const id = req.query.id; // Preguntar a Mario, porque query no params. Query --> /usuarios?id=34 -- params --> /usuarios/35
    const postById = await posts.getById(id);

    if (postById === null) {
        res.status(404).json({ errMsg: "El post no existe" })
    }
    res.json(postById);

}
const create = async (req, res) => {
    const { id_autor, categoria, descripcion, titulo } = req.body; // datos en el cuerpo de la petición post

    const insert = await posts.create({ id_autor, categoria, descripcion, titulo })

    res.json(insert)
}

const upDateById = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const upDatePost = await posts.upDateById(id, data);

    res.json(updDateById);

}

const deleteById = async (req, res) => {
    const idPost = req.params.id;

    const deletePost = await posts.deleteById(idPost);

    res.json(deletePost);
   
}

const getPostByAutor = async (req, res) => {
    const idAutor = req.query.id_autor
    const page = req.query.page ? req.query.page : 1; 
    const limit = req.query.limit ? req.query.limit : 10; 

    const postAutor = await posts.getAllByAutor(page, limit, idAutor,);

    if (postAutor === null) {
        res.status(400).json({errorMsg: "El autor no tiene post"})
    }
    res.json({
        page,
        limit,
        results: postAutor
    });
}

module.exports = { getAll, getById, create, upDateById, deleteById, getPostByAutor}
