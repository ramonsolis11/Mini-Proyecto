// Importar el modelo de Avion
const Avion = require('../models/Avion');

// Lista de aviones existentes
const aviones = [];

// Lista de puertas de embarque disponibles
const puertasEmbarque = [
    new PuertaEmbarque('A1', true),
    new PuertaEmbarque('A2', true),
    new PuertaEmbarque('B1', true),
    new PuertaEmbarque('B2', true),
    new PuertaEmbarque('C1', true),
    new PuertaEmbarque('C2', true),
];

// Función para mostrar una alerta
function showAlert(message) {
    alert(message);
}

// Capturar el submit del formulario de agregar avión
const agregarAvionForm = document.getElementById('agregarAvionForm');
agregarAvionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const registroInput = document.getElementById('registroInput').value;
    const aerolineaInput = document.getElementById('aerolineaInput').value;
    const capacidadInput = parseInt(document.getElementById('capacidadInput').value);
    const enVueloInput = document.getElementById('enVueloCheckbox').checked;
    const enMantenimientoInput = document.getElementById('enMantenimientoCheckbox').checked;
    const puertaEmbarqueInput = document.getElementById('puertaEmbarqueInput').value;

    // Validar el formulario (puedes mantener la función validarFormulario si lo deseas)
    if (!validarFormulario(registroInput, aerolineaInput, capacidadInput)) {
        return;
    }

    // Encontrar la instancia correcta de PuertaEmbarque
    const puertaEmbarqueSeleccionada = puertasEmbarque.find(puerta => puerta.numero === puertaEmbarqueInput);
    if (!puertaEmbarqueSeleccionada) {
        showAlert('Por favor, seleccione una puerta de embarque válida.');
        return;
    }

    // Crear el avión con la información del formulario
    const avionNuevo = new Avion(registroInput, aerolineaInput, capacidadInput, enVueloInput, enMantenimientoInput, puertaEmbarqueSeleccionada);

    // Agregar el avión a la lista de aviones existentes
    aviones.push(avionNuevo);

    // Mostrar mensaje de avión agregado
    showAlert('Se agregó un nuevo avión.');

    // Actualizar la tabla de aviones existentes
    generarTablaAviones();

    // Registrar la puerta de embarque en puertas disponibles
    if (enVueloInput || enMantenimientoInput) {
        puertaEmbarqueSeleccionada.asignarAvion(avionNuevo);
        showAlert(`Se asignó un avión a la puerta de embarque ${puertaEmbarqueInput}.`);
        // Actualizar disponibilidad en la interfaz
        const disponibilidadElement = document.getElementById(`disponibilidad-${puertaEmbarqueInput}`);
        disponibilidadElement.textContent = 'Ocupada';
        disponibilidadElement.classList.remove('text-success');
        disponibilidadElement.classList.add('text-danger');
    }

    // Reiniciar los valores del formulario
    agregarAvionForm.reset();
});













