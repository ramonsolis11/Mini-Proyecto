class PuertaEmbarque {
    constructor(numero, disponible = true) {
        this.numero = numero;
        this.disponible = disponible;
        this.avionAsignado = null;
        }
    
        asignarAvion(avion) {
        if (this.disponible) {
            this.avionAsignado = avion;
            this.disponible = true;
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

    getNumero() {
        return this.numero;
    }
}

module.exports = PuertaEmbarque;

