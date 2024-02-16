export class Reserva {
  capacidad: number;
  direccion: string;
  nombre: string;

  constructor(capacidad: number, direccion: string, nombre: string) {
    this.capacidad = capacidad;
    this.direccion = direccion;
    this.nombre = nombre;
  }
}
