import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
/*export class AuthComponent {
  credentials: any = {}; // Definimos la propiedad credentials aquí

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
    // Verificar si las credenciales no están vacías
    if (!this.credentials.username || !this.credentials.password) {
      console.log('Por favor, ingresa tu nombre de usuario y contraseña');
      return;
    }

    // Llamar al método de login del servicio de autenticación
    this.authService.login(this.credentials).subscribe(
      () => {
        // Redireccionar al usuario al dashboard una vez que haya iniciado sesión correctamente
        this.router.navigateByUrl('/dashboard/fincas/fincas');
      },
      (error: any) => {
        // Manejar cualquier error que ocurra durante el inicio de sesión
        console.log('Error iniciando sesión', error);
      }
    );
  }
}
*/
export class AuthComponent {
  credentials = {
    email: 'andrescely@gmail.com',
    password: 'algo',
  };

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
    this.authService.login(this.credentials).subscribe(
      (success) => {
        if (success) {
          // Si el inicio de sesión es exitoso, redirigir al usuario a la página deseada
          this.router.navigateByUrl('/dashboard/fincas/fincas');
        } else {
          // Si el inicio de sesión falla, mostrar un mensaje de error al usuario
          console.error('Inicio de sesión fallido: credenciales incorrectas');
        }
      },
      (error) => {
        // Manejar errores de la solicitud de inicio de sesión
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}