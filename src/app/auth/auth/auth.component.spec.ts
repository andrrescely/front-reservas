import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  //verifica que el componente se crea correctamente
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [ReactiveFormsModule], // Agrega ReactiveFormsModule a los imports para utilizar formularios reactivos
    }).compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize the form correctly', () => {
    expect(component.formLogin).toBeDefined(); // Verifica que el formulario se haya inicializado
    expect(component.formLogin.get('email')).toBeDefined(); // Verifica que el campo de correo electrónico esté definido
    expect(component.formLogin.get('password')).toBeDefined(); // Verifica que el campo de contraseña esté definido
  });
});
