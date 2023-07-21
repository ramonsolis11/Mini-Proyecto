class Avion {
  constructor(registro, aerolinea, capacidad, enVuelo, enMantenimiento, puertaEmbarque) {
      this.registro = registro;
      this.aerolinea = aerolinea;
      this.capacidad = capacidad;
      this.enVuelo = enVuelo;
      this.enMantenimiento = enMantenimiento;
      this.puertaEmbarque = puertaEmbarque;
  }


  static crearAvion(registro, aerolinea, capacidad, estado, puertaEmbarque) {
    return new Avion(registro, aerolinea, capacidad, estado, puertaEmbarque);
  }

  // editar un avión existente
  editarAvion(aerolinea, capacidad, estado, puertaEmbarque) {
    this.aerolinea = aerolinea;
    this.capacidad = capacidad;
    this.estado = estado;
    this.puertaEmbarque = puertaEmbarque;
  }

  // eliminar un avión
  eliminarAvion() {
    this.estado = 'Eliminado';
  }
}

module.exports = Avion;

