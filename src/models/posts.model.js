// hacer las peticiones a la BD
const db = require('../config/db');

const getAll = async (page, limit) => {
    const offset = (page - 1) * limit;
    const [result] = await db.query('SELECT * FROM posts OFFSET ? LIMIT ?', [offset, limit]); // Por qué offset y no limit
    return result;
}
const getById = async (id) => {
    const [result] = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
    if (result.length === 0) {
        return null;
    }
    return result[0];
}
 const create = async (categoria, descripcion, fecha_creacion, titulo) => {
    const [result] = await db.query ('INSERT INTO posts (categoria, descripcion, fecha_creacion, titulo) VALUES (?, ?, ?, ?)', [categoria, descripcion, fecha_creacion, titulo]);
    return result;
 }

const updDateById = async (id, categoria, descripcion, fecha, titulo) => {
    const [result] = await db.query('UPDATE  posts SET categoria = ?, descripcion = ?, fecha_creacion = ?, titulo = ?) WHERE id = ?', [categoria, descripcion, fecha, titulo, id]);
    return result;
}

const deleteById = async (id) => {
    const [result] = await db.query ('DELETE * FROM posts WHERE id = ?', [id]);
    return result; 
}

module.exports = { getAll, getById, create, updDateById, deleteById}