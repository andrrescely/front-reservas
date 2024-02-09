import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    // Verifica si existe un token en el almacenamiento local
    const token = localStorage.getItem('token');
    // Devuelve true si el token existe y no está vacío, indicando que el usuario está autenticado
    return !!token;
  }

  // Método para realizar el inicio de sesión
  login(credentials: any): void {
    // URL del backend donde se encuentra el endpoint de login
    const backendUrl = 'http://localhost:3000/login';

    this.http
      .post<any>(backendUrl, credentials) // Envía las credenciales al backend
      .pipe(
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
      )
      .subscribe(
        () => {
          // Maneja el caso de éxito de la solicitud al backend (opcional)
        },
        (error) => {
          // Maneja el caso de error de la solicitud al backend
          console.error('Error al iniciar sesión:', error);
        }
      );
  }

  // Método para cerrar sesión
  logout(): void {
    // se elimina el token del almacenamiento local
    localStorage.removeItem('token');
  }
}
