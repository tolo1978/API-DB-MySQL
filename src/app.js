const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

// AÑADIR ROUTER

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        message: "Not found"
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

module.exports = app;