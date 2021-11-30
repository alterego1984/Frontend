import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecordarContrasenaComponent } from './recordar-contrasena/recordar-contrasena.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"recordar-contrasena",
    component:RecordarContrasenaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
