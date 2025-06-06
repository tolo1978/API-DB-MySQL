const http = require('node:http'); 
const app = require('./src/app');
require('dotenv').config();


const server = http.createServer(app);
const PORT = process.env.PUERTO || 3000;
server.listen(PORT);
server.on('listening', () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
server.on('error', (error) => {
    console.log(`Error en el servidor ${error}`)
});