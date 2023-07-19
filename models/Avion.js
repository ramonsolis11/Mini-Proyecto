class Avion {
  constructor(registro, aerolinea, capacidad, estado) {
    this.registro = registro;
    this.aerolinea = aerolinea;
    this.capacidad = capacidad;
    this.estado = estado;
  }

  // Método para crear un avión (modificado como método estático)
  static crearAvion(registro, aerolinea, capacidad, estado) {
    return new Avion(registro, aerolinea, capacidad, estado);
  }

  // Método para editar un avión existente
  editarAvion(aerolinea, capacidad, estado) {
    this.aerolinea = aerolinea;
    this.capacidad = capacidad;
    this.estado = estado;
  }

  // Método para eliminar un avión
  eliminarAvion() {
    // Aquí puedes implementar la lógica para eliminar un avión
  }
}

module.exports = Avion;

