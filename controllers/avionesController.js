// Importar el modelo de Avion
import Avion from '../public/Avion';

const Avion = require('../public/Avion');

// Array para almacenar los aviones en memoria
const aviones = [];

// Función de controlador para la ruta /aviones
const obtenerAviones = (req, res) => {
    // Renderizar la vista aviones con los datos de los aviones almacenados en memoria
    res.render('aviones', { aviones });
    
};

// Función de controlador para agregar un nuevo avión
const agregarAvion = (req, res) => {
    const { registro, aerolinea, capacidad, estado } = req.body;

    // Crear una instancia del avión
    const avion = new Avion(registro, aerolinea, parseInt(capacidad), estado);

    // Agregar el avión al array en memoria
    aviones.push(avion);

    // Redireccionar a la página de aviones
    res.redirect('/aviones');
};

// Función de controlador para eliminar un avión por número de registro
const eliminarAvion = (req, res) => {
    const { registro } = req.body;


    // Encontrar el índice del avión en el array en memoria
    const avionIndex = aviones.findIndex(avion => avion.registro === registro);


    // Si se encontró el avión, eliminarlo del array en memoria
    if (avionIndex !== -1) {
        aviones.splice(avionIndex, 1);
        
    }

    // Redireccionar a la página de aviones
    res.redirect('/aviones');
};

// Exportar las funciones del controlador
module.exports = {
    obtenerAviones,
    agregarAvion,
    eliminarAvion
};

