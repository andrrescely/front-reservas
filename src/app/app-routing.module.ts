import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';
import { FincasEditComponent } from './fincas/fincas-edit/fincas-edit.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
{ path: 'componente-protegido', component: PagesComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'nosotros', component: FincasEditComponent },
  {path: 'fincas',component:FincasEditComponent,canActivate:[AuthGuard ]},
  {path: 'dashboard',component: PagesComponent,children: [
      {
        path: 'fincas',loadChildren: () =>import('./fincas/fincas.module').then((m) => m.FincasModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
