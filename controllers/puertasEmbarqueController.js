// controllers/puertasEmbarqueController.js

// Importar el modelo de PuertaEmbarque
const PuertaEmbarque = require('../models/PuertaEmbarque');

// Función de controlador para la ruta /puertas-embarque
const obtenerPuertasEmbarque = (req, res) => {
    // Obtener las puertas de embarque desde una fuente de datos (p. ej., una base de datos)
    const puertasEmbarque = [
        { numero: 'A1', disponible: true, avionAsignado: null },
        { numero: 'A2', disponible: false, avionAsignado: { registro: 'AB123', aerolinea: 'Airline 1' } },
        { numero: 'B1', disponible: true, avionAsignado: null },
        { numero: 'B2', disponible: false, avionAsignado: { registro: 'CD456', aerolinea: 'Airline 2' } },
    ];

    // Renderizar la vista puertasEmbarque con los datos de las puertas de embarque
    res.render('puertasEmbarque', { puertasEmbarque });
};

// Exportar la función del controlador
module.exports = {
    obtenerPuertasEmbarque
};
