class PuertaEmbarque {
    constructor(numero, disponible = true) {
        this.numero = numero;
        this.disponible = disponible;
        this.avionAsignado = null; // Avión asignado a la puerta de embarque (inicialmente sin asignar)
        }
    
        asignarAvion(avion) {
        if (this.disponible) {
            this.avionAsignado = avion;
            this.disponible = false;
            avion.asignarPuertaEmbarque(this);
        }
        }
    
        desasignarAvion() {
        if (this.avionAsignado) {
            this.avionAsignado.desasignarPuertaEmbarque();
            this.avionAsignado = null;
            this.disponible = true;
        }
    }

    // Agrega métodos adicionales según sea necesario para la gestión de puertas de embarque
}

module.exports = PuertaEmbarque;

