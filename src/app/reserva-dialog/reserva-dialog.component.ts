import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserva-dialog',
  templateUrl: './reserva-dialog.component.html',
  styleUrls: ['./reserva-dialog.component.scss'],
})
export class ReservaDialogComponent {
  fincaForm: FormGroup;
  reservaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ReservaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
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
      // Realiza más acciones  antes de cerrar el cuadro de diálogo
      console.log('Datos de reserva:', reservaData);
      
      this.snackBar.open('¡Reserva exitosa!', 'Cerrar', {
        duration: 3000, // Duración en milisegundos 
      });

      this.dialogRef.close(reservaData);
    }
  }

  onSubmit(): void {
    if (this.fincaForm.valid) {
      console.log('Formulario Finca enviado:', this.fincaForm.value);
    }
  }

  onSubmitReserva(): void {
    if (this.reservaForm.valid) {
      console.log('Formulario Reserva enviado:', this.reservaForm.value);
    }
  }
}
