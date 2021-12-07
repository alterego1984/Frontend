import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './template/error/error.component';
import { InicioComponent } from './template/inicio/inicio.component';

const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/inicio"
  },
  {
    path:"seguridad",
    loadChildren: ()=>import("./modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
  },
  {
    path:"administracion",
    loadChildren: ()=>import("./modulos/administracion/administracion.module").then(x=>x.AdministracionModule)
  },
  {
    path:"solicitud",
    loadChildren: ()=>import("./modulos/solicitud/solicitud.module").then(x=>x.SolicitudModule)
  },
  {
    path:"vehiculos",
    loadChildren: ()=>import("./modulos/vehiculos/vehiculos.module").then(x=>x.VehiculosModule)
  },
  {
    path:"**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
