const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');

// Configuración de body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar el motor de plantillas
app.set('view engine', 'ejs');

// Sirve archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, 'public')));

// Importar los modelos
const Avion = require('./models/Avion');
const PuertaEmbarque = require('./models/PuertaEmbarque');

// Lista de aviones y puertas de embarque disponibles (vacías inicialmente)
const aviones = [];
const puertasEmbarque = [
    new PuertaEmbarque('A1', true),
    new PuertaEmbarque('A2', true),
    new PuertaEmbarque('B1', true),
    new PuertaEmbarque('B2', true)
];

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

// Ruta para mostrar la lista de aviones
app.get('/aviones', (req, res) => {
    res.render('aviones', { aviones });
});

// Ruta para agregar un nuevo avión (formulario)
app.get('/agregar-avion', (req, res) => {
    res.render('agregarAvion', { puertasEmbarque });
});

// Ruta para procesar el formulario de agregar un nuevo avión
app.post('/aviones', (req, res) => {
    const { registro, aerolinea, puertaEmbarque, capacidad, enVuelo, enMantenimiento } = req.body;

    // Encontrar la puerta de embarque seleccionada
    const puertaEmbarqueSeleccionada = puertasEmbarque.find(puerta => puerta.numero === puertaEmbarque);
    

    // Crear una nueva instancia de Avion
    const avion = new Avion(
        registro,
        aerolinea,
        parseInt(capacidad),
        enVuelo === 'on',
        enMantenimiento === 'on',
        puertaEmbarqueSeleccionada
    );

    // Agregar el avión a la lista
    aviones.push(avion);

    // Registrar la puerta de embarque en puertas disponibles
    puertaEmbarqueSeleccionada.aerolinea = aerolinea;

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

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor web en ejecución en http://localhost:${port}`);
});
