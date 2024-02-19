import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { FincasModule } from './fincas/fincas.module';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ReservaDialogComponent } from './reserva-dialog/reserva-dialog.component';
import { BoldInfoDirective } from './bold-info.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { ReservationsService } from './services/reservation.service';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from './date-format.pipe';
import { CookieService } from 'ngx-cookie-service';
import { FincaService } from './fincas/fincas.service';

@NgModule({
  declarations: [
    AppComponent,
    ReservaDialogComponent,
    ReservaDialogComponent,
    BoldInfoDirective,
    DateFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    FincasModule,
    AuthModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ReservationsService, FincaService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
