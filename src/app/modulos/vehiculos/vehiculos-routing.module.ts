import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './eliminar-vehiculo/eliminar-vehiculo.component';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [
  {
    path:"crear-vehiculo",
    component:CrearVehiculoComponent
  },
  {
    path:"editar-vehiculo/:id",
    component:EditarVehiculoComponent
  },
  {
    path:"eliminar-vehiculo/:id",
    component:EliminarVehiculoComponent
  },
  {
    path:"listar-vehiculos",
    component:ListarVehiculosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
