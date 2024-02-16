import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservaServiceService } from 'src/app/reserva-service/reserva-service.service'; 
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-fincas-create',
  templateUrl: './fincas-create.component.html',
  styleUrls: ['./fincas-create.component.scss'],
})
export class FincasCreateComponent {
  fincaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ReservaServiceService: ReservaServiceService
  ) {
    this.fincaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      capacidad: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.fincaForm.valid) {
      const reservaData = this.fincaForm.value;
      this.ReservaServiceService.crearReserva(reservaData).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          // Aquí puedes agregar lógica adicional después de recibir una respuesta exitosa del servidor
        },
        (error: HttpErrorResponse) => {
          console.error('Error al enviar el formulario:', error);
          // Aquí puedes manejar el error de acuerdo a tus necesidades
        }
      );
    }
  }
}
