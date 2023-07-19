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

// Capturar el submit del formulario de agregar avión
const agregarAvionForm = document.getElementById('agregarAvionForm');
agregarAvionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const registroInput = document.getElementById('registroInput');
    const aerolineaInput = document.getElementById('aerolineaInput');
    const capacidadInput = document.getElementById('capacidadInput');
    const enVueloCheckbox = document.getElementById('enVueloCheckbox');
    const enMantenimientoCheckbox = document.getElementById('enMantenimientoCheckbox');
    const enPuertaEmbarqueCheckbox = document.getElementById('enPuertaEmbarqueCheckbox');

    // Crear una instancia del nuevo avión
    const avionNuevo = new Avion(
        registroInput.value,
        aerolineaInput.value,
        parseInt(capacidadInput.value),
        {
            enVuelo: enVueloCheckbox.checked,
            enMantenimiento: enMantenimientoCheckbox.checked,
            enPuertaEmbarque: enPuertaEmbarqueCheckbox.checked
        }
    );

    // Agregar el avión a la lista de aviones existentes
    const avionesContainer = document.getElementById('avionesContainer');
    const nuevoAvionRow = document.createElement('tr');
    nuevoAvionRow.innerHTML = `
        <td>${avionNuevo.registro}</td>
        <td>${avionNuevo.aerolinea}</td>
        <td>${avionNuevo.capacidad}</td>
        <td>${avionNuevo.estado.enVuelo ? 'Sí' : 'No'}</td>
        <td>${avionNuevo.estado.enMantenimiento ? 'Sí' : 'No'}</td>
        <td>${avionNuevo.estado.enPuertaEmbarque ? 'Sí' : 'No'}</td>
        <td>
            <form method="POST" action="/aviones/delete">
                <input type="hidden" name="registro" value="${avionNuevo.registro}">
                <button type="submit" class="btn btn-danger">Eliminar</button>
            </form>
        </td>
    `;
    avionesContainer.appendChild(nuevoAvionRow);

    // Mostrar mensaje de avión agregado
    showAlert('Se agregó un nuevo avión.');

    // Reiniciar los valores del formulario
    agregarAvionForm.reset();
});












