// hacer las peticiones a la BD
const db = require('../config/db');

const getAll = async (page, limit) => {
    const offset = (page - 1) * limit;
    const [result] = await db.query('SELECT * FROM posts OFFSET ? LIMIT ?', [offset, limit]);
        if (result.length === 0) {
        return null;
        } 
    return result;
}
const getById = async (id) => {
    const [result] = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
    if (result.length === 0) {
        return null;
    }
    return result[0];
}
 const create = async (id_autor, categoria, descripcion, titulo) => {
    const [result] = await db.query ('INSERT INTO posts (id_autor, categoria, descripcion, titulo) VALUES (?, ?, ?, ?)', [id_autor,categoria, descripcion, titulo]);
    return result;
 }

const updDateById = async (id, categoria, descripcion, titulo) => {
    const [result] = await db.query('UPDATE  posts SET categoria = ?, descripcion = ?, titulo = ?) WHERE id = ?', [categoria, descripcion, titulo, id]);
    return result;
}

const deleteById = async (id) => {
    const [result] = await db.query ('DELETE * FROM posts WHERE id = ?', [id]);
    return result; 
}

const getAllByUser = async (page, limit, id_autor) => {
    const offset = (page - 1) * limit;
    const [result] = await db.query('SELECT * FROM posts OFFSET ? LIMIT ? WHERE id_autor = ?', [offset, limit, id_autor]); 
        if (result.length === 0) {
        return null;
        }
    return result;
}

module.exports = { getAll, getById, create, updDateById, deleteById, getAllByUser}