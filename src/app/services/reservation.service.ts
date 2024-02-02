// reservation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'URL_DEL_BACKEND'; //  URL DE MI BACKEND

  constructor(private http: HttpClient) {}

  createReservation(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservations`, data);
  }
  obtenerReservas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reservas`);
  }

  getReservations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reservations`);
  }

  deleteReservation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservations/${id}`);
  }

  updateReservation(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/reservations/${id}`, data);
  }
}
