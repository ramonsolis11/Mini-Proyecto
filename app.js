const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Configuración de body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar el motor de plantillas
app.set('view engine', 'ejs');

// Importar los modelos
const Avion = require('./models/Avion');
const PuertaEmbarque = require('./models/PuertaEmbarque');

// Array para almacenar los aviones
const aviones = [];

// Array para almacenar las puertas de embarque
const puertasEmbarque = [];

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

// Ruta para mostrar la lista de aviones
app.get('/aviones', (req, res) => {
    res.render('aviones', { aviones });
});

// Ruta para agregar un nuevo avión
app.post('/aviones', (req, res) => {
    const { registro, aerolinea, capacidad, estado } = req.body;

    // Crear una instancia del avión
    const avion = new Avion(registro, aerolinea, parseInt(capacidad), estado);

    // Agregar el avión al array
    aviones.push(avion);

    // Redireccionar a la página de aviones
    res.redirect('/aviones');
});

// Ruta para eliminar un avión por número de registro
app.post('/aviones/delete', (req, res) => {
    const { registro } = req.body;

    // Encontrar el índice del avión en el array
    const avionIndex = aviones.findIndex(avion => avion.registro === registro);

    // Si se encontró el avión, eliminarlo del array
    if (avionIndex !== -1) {
        aviones.splice(avionIndex, 1);
    }

    // Redireccionar a la página de aviones
    res.redirect('/aviones');
});

// Ruta para mostrar la lista de puertas de embarque
app.get('/puertas-embarque', (req, res) => {
    res.render('puertasEmbarque', { puertasEmbarque });
});

app.listen(port, () => {
    console.log(`Servidor web en ejecución en http://localhost:${port}`);
});
