// fincas-details.component.ts
import { Component } from '@angular/core';
import { FincaService } from '../fincas.service'; 


@Component({
  selector: 'app-fincas-details',
  templateUrl: './fincas-details.component.html',
  styleUrls: ['./fincas-details.component.scss'],
})
export class FincasDetailsComponent {
  hayReservaciones: boolean = false;
  reserva: any;
  reservaciones: any;

  constructor(private FincaService: FincaService) {}

  actualizarReserva(datosReserva: any) {
    this.reserva = datosReserva;
    this.hayReservaciones = true;
  }
}
