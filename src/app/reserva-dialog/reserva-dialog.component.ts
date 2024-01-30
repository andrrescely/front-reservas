import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reserva-dialog',
  templateUrl: './reserva-dialog.component.html',
  styleUrls: ['./reserva-dialog.component.scss'],
})
export class ReservaDialogComponent {
  nombre: string = '';
  fincaForm: FormGroup;
  reservaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ReservaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.fincaForm = this.fb.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],
      descripcion: [''],
    });

    // Inicializa el nuevo formulario
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
    this.dialogRef.close({
      nombre: this.nombre,
      fincaFormValue: this.fincaForm.value,
      reservaFormValue: this.reservaForm.value,
    });
  }

  onSubmit(): void {
    if (this.fincaForm.valid) {
      console.log('Formulario Finca enviado:', this.fincaForm.value);
    }
  }

  // Método para manejar la lógica cuando se envía el formulario de reserva
  onSubmitReserva(): void {
    if (this.reservaForm.valid) {
      console.log('Formulario Reserva enviado:', this.reservaForm.value);
    }
  }
}