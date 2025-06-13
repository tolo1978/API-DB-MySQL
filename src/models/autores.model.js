const  db = require('../config/db');

const getAll = async (page, limit) => {
    const offset = (page -1) * limit;
    const [result] = await db.query('SELECT * FROM autores OFFSET ? LIMIT ?', [offset, limit]);
    return result;

}

const getById = async (id) => {
    const [result] = await db.query('SELECT * FROM autores WHERE id = ?', [id]);
    if (result.length === 0) {
        return null;
    } 
   return result[0];
    
}
const create = async ({nombre, email, imagen = ""}) => {
    const [result] = await db.query('INSERT INTO  autores (nombre, email, imagen) VALUES (?, ?, ?)', [nombre, email, imagen]);
    return result;
}
const deleteById = async (id) => {
    const [result] = await db.query('DELETE FROM autores WHERE id = ?', [id]);
    return result;
}

const updDateById = async (id, {nombre, email, imagen}) => { // {} lo metemos en un objeto
    const [result] = await db.query ('UPDATE autores SET nombre = ?, email = ?, imagen = ? WHERE id = ?', [nombre, email, imagen, id]);
    return result;
}

module.exports = { getAll, getById, create, deleteById, updDateById };

// crear funcion update byid

