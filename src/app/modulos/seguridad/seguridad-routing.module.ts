import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RecordarContrasenaComponent } from './recordar-contrasena/recordar-contrasena.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"logout",
    component:LogoutComponent
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
