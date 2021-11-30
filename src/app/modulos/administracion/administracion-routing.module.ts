import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';

const routes: Routes = [
  {
    path:"create-client",
    component:CrearClienteComponent
  },
  {
    path:"delete-client",
    component:EliminarClienteComponent
  },
  {
    path:"update-client",
    component:EditarClienteComponent
  },
  {
    path:"find-client",
    component:BuscarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
