// Importar los modelos
import Avion from '../public/Avion';
const Avion = require('./models/Avion');
const PuertaEmbarque = require('./models/PuertaEmbarque');

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


    // Agregar el avión a la lista de aviones existentes
    const avionesContainer = document.getElementById('avionesContainer');
    const nuevoAvionRow = document.createElement('tr');
    nuevoAvionRow.innerHTML = `
        <td>${avionNuevo.registro}</td>
        <td>${avionNuevo.aerolinea}</td>
        <td>${avionNuevo.puertaEmbarque.numero}</td>
        <td>${avionNuevo.capacidad}</td>
        <td>${avionNuevo.enVuelo ? 'Sí' : 'No'}</td>
        <td>${avionNuevo.enMantenimiento ? 'Sí' : 'No'}</td>
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


    // Registrar la puerta de embarque en puertas disponibles
    const puertaEmbarqueRow = document.createElement('tr');
    puertaEmbarqueRow.innerHTML = `
        <td>${puertaEmbarqueSeleccionada.numero}</td>
        <td>${puertaEmbarqueSeleccionada.disponible ? 'Disponible' : 'Ocupada'}</td>
        <td>${avionNuevo.aerolinea}</td>
        <td>
            <button class="btn btn-primary" onclick="asignarAvionPuerta('${puertaEmbarqueSeleccionada.numero}', '${avionNuevo.registro}')">Agregar</button>
            <button class="btn btn-danger" onclick="eliminarAvionPuerta('${puertaEmbarqueSeleccionada.numero}')">Eliminar</button>
        </td>
    `;
    const puertasEmbarqueContainer = document.getElementById('puertasEmbarqueContainer');
    puertasEmbarqueContainer.appendChild(puertaEmbarqueRow);


    // Reiniciar los valores del formulario
    agregarAvionForm.reset();
});

// Función para validar el formulario de agregar avión
function validarFormulario() {
    // Obtener los valores de los campos del formulario
    const registroInput = document.getElementById('registroInput');
    const aerolineaInput = document.getElementById('aerolineaInput');
    const capacidadInput = document.getElementById('capacidadInput');


    // Validar que los campos no estén vacíos
    if (registroInput.value.trim() === '' || aerolineaInput.value.trim() === '' || capacidadInput.value.trim() === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return false; // Detener el envío del formulario
    }

    // Validar que la capacidad sea un número positivo
    const capacidad = parseInt(capacidadInput.value);
    if (isNaN(capacidad) || capacidad <= 0) {
        alert('Por favor, ingrese una capacidad de pasajeros válida.');
        return false; // Detener el envío del formulario
    }

    // Si todas las validaciones pasan, el formulario se enviará correctamente
    return true;
}

// Función para asignar un avión a una puerta de embarque
function asignarAvionPuerta(puertaNumero, avionRegistro) {
    const puertaEmbarqueSeleccionada = puertasEmbarque.find(puerta => puerta.numero === puertaNumero);
    if (puertaEmbarqueSeleccionada) {
        const avionAsignado = new Avion(avionRegistro, '', 0, '');
        puertaEmbarqueSeleccionada.asignarAvion(avionAsignado);
        showAlert(`Se asignó un avión a la puerta de embarque ${puertaNumero}.`);
        // Actualizar disponibilidad en la interfaz
        const disponibilidadElement = document.getElementById(`disponibilidad-${puertaNumero}`);
        disponibilidadElement.textContent = 'Ocupada';
        disponibilidadElement.classList.remove('text-success');
        disponibilidadElement.classList.add('text-danger');
    }
}

// Función para generar la tabla de aviones existentes
function generarTablaAviones() {
    const avionesContainer = document.getElementById('avionesContainer');
    avionesContainer.innerHTML = ''; // Limpiamos la tabla antes de rellenarla

    aviones.forEach(avion => {
        const nuevoAvionRow = document.createElement('tr');
        nuevoAvionRow.innerHTML = `
            <td>${avion.registro}</td>
            <td>${avion.aerolinea}</td>
            <td>${avion.puertaEmbarque.numero}</td>
            <td>${avion.capacidad}</td>
            <td>${avion.enVuelo ? 'Sí' : 'No'}</td>
            <td>${avion.enMantenimiento ? 'Sí' : 'No'}</td>
            <td>
                <form method="POST" action="/aviones/delete">
                    <input type="hidden" name="registro" value="${avion.registro}">
                    <button type="submit" class="btn btn-danger">Eliminar</button>
                </form>
            </td>
        `;
        avionesContainer.appendChild(nuevoAvionRow);
    });

    const puertasEmbarqueContainer = document.getElementById('puertasEmbarqueContainer');
    puertasEmbarqueContainer.innerHTML = ''; // Limpiamos la tabla antes de rellenarla

    puertasEmbarque.forEach(puerta => {
        const puertaEmbarqueRow = document.createElement('tr');
        puertaEmbarqueRow.innerHTML = `
            <td>${puerta.numero}</td>
            <td class="${puerta.disponible ? 'text-success' : 'text-danger'}">
                ${puerta.disponible ? 'Disponible' : 'Ocupada'}
            </td>
            <td>${puerta.avion ? puerta.avion.aerolinea : ''}</td>
            <td>
                <button class="btn btn-primary" onclick="asignarAvionPuerta('${puerta.numero}', '${avionNuevo.registro}')">Agregar</button>
                <button class="btn btn-danger" onclick="eliminarAvionPuerta('${puerta.numero}')">Eliminar</button>
            </td>
        `;
        puertasEmbarqueContainer.appendChild(puertaEmbarqueRow);
    });
}

// Función para eliminar un avión de una puerta de embarque
function eliminarAvionPuerta(puertaNumero) {
    const puertaEmbarqueSeleccionada = puertasEmbarque.find(puerta => puerta.numero === puertaNumero);
    if (puertaEmbarqueSeleccionada) {
        puertaEmbarqueSeleccionada.desasignarAvion();
        showAlert(`Se desasignó el avión de la puerta de embarque ${puertaNumero}.`);
        // Actualizar disponibilidad en la interfaz
        const disponibilidadElement = document.getElementById(`disponibilidad-${puertaNumero}`);
        disponibilidadElement.textContent = 'Disponible';
        disponibilidadElement.classList.remove('text-danger');
        disponibilidadElement.classList.add('text-success');

    }

};












