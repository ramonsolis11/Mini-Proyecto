const express = require('express');
const app = express();
const port = 3000;

// Configurar el motor de plantillas
app.set('view engine', 'ejs');

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
    });

    // Ruta para mostrar aviones
    app.get('/aviones', (req, res) => {
    // Obtener aviones desde una fuente de datos (p. ej., un arreglo)
    const aviones = [
        { registro: 'AB123', aerolinea: 'Airline 1', capacidad: 150, estado: 'disponible' },
        { registro: 'CD456', aerolinea: 'Airline 2', capacidad: 200, estado: 'en mantenimiento' },
        { registro: 'EF789', aerolinea: 'Airline 3', capacidad: 180, estado: 'en vuelo' }
    ];

    res.render('aviones', { aviones });
    });

    // Ruta para mostrar puertas de embarque
    app.get('/puertas-embarque', (req, res) => {
    // Obtener las puertas de embarque disponibles y ocupadas desde una fuente de datos (p. ej., un arreglo)
    const puertasEmbarque = [
        { numero: 'A1', disponible: true, avionAsignado: null },
        { numero: 'A2', disponible: false, avionAsignado: { registro: 'AB123', aerolinea: 'Airline 1' } },
        { numero: 'B1', disponible: true, avionAsignado: null },
        { numero: 'B2', disponible: false, avionAsignado: { registro: 'CD456', aerolinea: 'Airline 2' } },
    ];

    res.render('puertasEmbarque', { puertasEmbarque });
    });

    app.listen(port, () => {
    console.log(`Servidor web en ejecución en http://localhost:${port}`);
});

