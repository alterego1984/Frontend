import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { RecordarContrasenaComponent } from './recordar-contrasena/recordar-contrasena.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecordarContrasenaComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
