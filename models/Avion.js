class Avion {
  constructor(registro, aerolinea, capacidad, estado, puertaEmbarque) {
    this.registro = registro;
    this.aerolinea = aerolinea;
    this.capacidad = capacidad;
    this.estado = estado;
    this.puertaEmbarque = puertaEmbarque; // Nuevo atributo para la puerta de embarque
  }

  // Método para crear un avión (modificado como método estático)
  static crearAvion(registro, aerolinea, capacidad, estado, puertaEmbarque) {
    return new Avion(registro, aerolinea, capacidad, estado, puertaEmbarque);
  }

  // Método para editar un avión existente
  editarAvion(aerolinea, capacidad, estado, puertaEmbarque) {
    this.aerolinea = aerolinea;
    this.capacidad = capacidad;
    this.estado = estado;
    this.puertaEmbarque = puertaEmbarque;
  }

  // Método para eliminar un avión
  eliminarAvion() {
    this.estado = 'Eliminado';
  }
}

module.exports = Avion;

