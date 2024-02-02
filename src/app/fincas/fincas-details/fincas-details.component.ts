import { Component } from '@angular/core';

@Component({
  selector: 'app-fincas-details',
  templateUrl: './fincas-details.component.html',
  styleUrls: ['./fincas-details.component.scss'],
})
export class FincasDetailsComponent {
  hayReservaciones: boolean = false;
  reserva: any;
  reservaciones: any;
  actualizarReserva(datosReserva: any) {
    this.reserva = datosReserva;
    this.hayReservaciones = true;
  }
}
