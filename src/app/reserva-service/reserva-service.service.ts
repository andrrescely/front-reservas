import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserva } from '../reservas/reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservaServiceService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  // crear una nueva reserva en el backend
  crearReserva(reserva: Reserva): Observable<any> {
    return this.http.post<any>(this.apiUrl, reserva);
  }

  //  obtener todas las reservas
  obtenerReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.apiUrl);
  }

  // obtener una reserva específica por su ID del backend
  obtenerReservaPorId(id: number): Observable<Reserva> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Reserva>(url);
  }

  //  actualizar una reserva existente
  actualizarReserva(id: number, reserva: Reserva): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, reserva);
  }

  // eliminar una reserva existente del backend por su ID
  eliminarReserva(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
