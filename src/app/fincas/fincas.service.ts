import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FincaService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  crearFinca(fincaData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, fincaData);
  }
}
