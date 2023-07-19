// Importar los modelos
const Avion = require('./models/Avion');
const PuertaEmbarque = require('./models/PuertaEmbarque');

// Crear una instancia de puerta de embarque
const puerta1 = new PuertaEmbarque(1, true);

// Función para mostrar una alerta
function showAlert(message) {
    alert(message);
    }

    // Capturar el click en los botones de asignar avión
    const asignarButtons = document.querySelectorAll('.asignar-button');
    asignarButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const puertaEmbarqueNumero = button.getAttribute('data-puerta-embarque');
        const avionRegistro = button.getAttribute('data-avion-registro');

        // Crear una instancia del avión asignado
        const avionAsignado = new Avion(avionRegistro, '', 0, '');

        // Asignar el avión a la puerta de embarque
        puerta1.asignarAvion(avionAsignado);

        // Mostrar mensaje de avión asignado
        showAlert(`Se asignó un avión a la puerta de embarque ${puertaEmbarqueNumero}.`);
    });
    });

    // Capturar el click en los botones de desasignar avión
    const desasignarButtons = document.querySelectorAll('.desasignar-button');
    desasignarButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const puertaEmbarqueNumero = button.getAttribute('data-puerta-embarque');

        // Desasignar el avión de la puerta de embarque
        puerta1.desasignarAvion();

        // Mostrar mensaje de avión desasignado
        showAlert(`Se desasignó el avión de la puerta de embarque ${puertaEmbarqueNumero}.`);
    });
});










