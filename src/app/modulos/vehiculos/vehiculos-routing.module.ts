import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './eliminar-vehiculo/eliminar-vehiculo.component';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [
  {
    path:"crear-vehiculo",
    component:CrearVehiculoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"editar-vehiculo/:id",
    component:EditarVehiculoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"eliminar-vehiculo/:id",
    component:EliminarVehiculoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"listar-vehiculos",
    component:ListarVehiculosComponent,
    canActivate:[ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
