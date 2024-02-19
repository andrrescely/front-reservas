import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { config } from 'rxjs';

@Component({
  selector: 'app-reserva-dialog',
  templateUrl: './reserva-dialog.component.html',
  styleUrls: ['./reserva-dialog.component.scss'],
})
export class ReservaDialogComponent {
  fincaForm: FormGroup;
  reservaForm: FormGroup;
  fechaReserva: Date = new Date();

  constructor(
    public dialogRef: MatDialogRef<ReservaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    
    
  ) {
    this.fincaForm = this.fb.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],
      descripcion: [''],
    });

    this.reservaForm = this.fb.group({
      nombreCliente: ['', Validators.required],
      telefonoCliente: ['', Validators.required],
      fechaReserva: ['', Validators.required],
      horaReserva: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onReservarClick(): void {
    if (this.fincaForm.valid && this.reservaForm.valid) {
      const nombreFinca = this.data.fincaFormValue.nombre;

      const reservaData = {
        nombre: nombreFinca,
        fincaFormValue: this.data.fincaFormValue,
        reservaFormValue: this.reservaForm.value,
      };

      // Realiza más acciones antes de cerrar el cuadro de diálogo
      console.log('Datos de reserva:', reservaData);

      // Cierra el modal y pasa los datos
      this.dialogRef.close(reservaData);

      // Muestra el Snackbar
      this.mostrarSnackBar();
    }
  }

  mostrarSnackBar(): void {
    this.snackBar.open('¡Reserva exitosa!', 'Cerrar', {
      duration: 4000, // Duración en milisegundos
    });
  }

  onSubmit(): void {
    if (this.fincaForm.valid) {
      console.log('Formulario Finca enviado:', this.fincaForm.value);
    }
  }

  onSubmitReserva(): void {
    if (this.reservaForm.valid) {
      const reservaData = this.reservaForm.value;
      // Formatear la fecha y la hora
      const fechaReservaFormateada = new Date(
        reservaData.fechaReserva
      ).toLocaleString('es-CO', { timeZone: 'UTC' });

      console.log('Formulario Reserva enviado:', {
        ...reservaData,
        fechaReserva: fechaReservaFormateada,
      });

      //esto me cierra el modal
      this.dialogRef.close();
      //esto me muestr aun mensaje de agradecimiento
      this.mostrarAgradecimientoSnackBar();
      console.log('¡Gracias por su reserva!');
    }
  }
  mostrarAgradecimientoSnackBar(): void {
    this.snackBar.open('¡Gracias por su reserva!', 'Cerrar', {
      duration: 4000,
      
    });
  }
}