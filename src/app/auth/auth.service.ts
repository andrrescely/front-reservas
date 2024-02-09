import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(credentials: any): Observable<boolean> {
    console.log('Credenciales recibidas:', credentials);
    if (
      credentials.email === 'andrescely@gmail.com' &&
      credentials.password === '123456'
    ) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
  /*constructor(private http: HttpClient) {}
  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    // Verifica si existe un token en el almacenamiento local
    const token = localStorage.getItem('token');
    // Devuelve true si el token existe y no está vacío, indicando que el usuario está autenticado
    return !!token;
  }

  // Método para realizar el inicio de sesión
  login(credentials: any) {
    // URL del backend donde se encuentra el endpoint de login
    const backendUrl = 'http://localhost:3000/login'; //CAMBIAR URL

    return this.http.post<any>(backendUrl, credentials).pipe(
      tap((response) => {
        // Maneja la respuesta del backend
        if (response && response.token) {
          // Si el backend devuelve un token JWT válido
          // Se guarda el token JWT en el almacenamiento local
          localStorage.setItem('token', response.token);
          console.log('Inicio de sesión exitoso');
        } else {
          // Si el backend devuelve un error u otra respuesta inesperada
          console.error('Error: No se recibió un token válido del servidor');
        }
      })
    );
  }

  // Método para cerrar sesión
  logout() {
    // se elimina el token del almacenamiento local
    localStorage.removeItem('token');
  }
}
*/
  