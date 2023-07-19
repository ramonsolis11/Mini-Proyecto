// controllers/avionesController.js

// Importar el modelo de Avion
const Avion = require('../models/Avion');

// Función de controlador para la ruta /aviones
const obtenerAviones = (req, res) => {
    // Obtener aviones desde una fuente de datos (p. ej., una base de datos)
    const aviones = [
        { registro: 'AB123', aerolinea: 'Airline 1', capacidad: 150, estado: 'disponible' },
        { registro: 'CD456', aerolinea: 'Airline 2', capacidad: 200, estado: 'en mantenimiento' },
        { registro: 'EF789', aerolinea: 'Airline 3', capacidad: 180, estado: 'en vuelo' }
    ];

    // Renderizar la vista aviones con los datos de los aviones
    res.render('aviones', { aviones });
};

// Exportar la función del controlador
module.exports = {
    obtenerAviones
};
