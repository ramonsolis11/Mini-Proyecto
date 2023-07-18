const express = require('express');
const app = express();
const port = 3000;

// Configurar el motor de plantillas
app.set('view engine', 'ejs');

// Configurar el middleware para manejar datos JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

    // Ruta para agregar un avión
    app.post('/aviones', (req, res) => {
    // Obtener los datos enviados desde el formulario
    const { registro, aerolinea, capacidad, estado } = req.body;

    // Aquí puedes realizar la lógica de creación del avión

    res.redirect('/aviones');
    });

    // Ruta para eliminar un avión
    app.post('/aviones/delete', (req, res) => {
    const registro = req.body.registro;

    // Aquí puedes realizar la lógica de eliminación del avión

    res.redirect('/aviones');
    });

    app.listen(port, () => {
    console.log(`Servidor web en ejecución en http://localhost:${port}`);
});

