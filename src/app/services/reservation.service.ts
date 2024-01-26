// reservation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseUrl = 'URL_DEL_BACKEND'; //  URL DEL BACKEND

  constructor(private http: HttpClient) {}

  createReservation(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/reservations`, data);
  }

  getReservations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/reservations`);
  }

  deleteReservation(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/reservations/${id}`);
  }

  updateReservation(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/reservations/${id}`, data);
  }
}
