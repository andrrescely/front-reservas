// reservations.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private apiUrl = 'URL_DEL_BACKEND'; // URL DE MI BACKEND

  constructor(private http: HttpClient) {}

  // Método para crear una nueva reserva
  crearReserva(reserva: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, reserva);
  }

  // Método para obtener todas las reservas
  obtenerReservas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para eliminar una reserva
  eliminarReserva(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  // Método para actualizar una reserva
  actualizarReserva(id: number, reserva: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, reserva);
  }
}
