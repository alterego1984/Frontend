import { Component, OnInit } from '@angular/core';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent implements OnInit {

  listaVehiculos:ModeloVehiculo[]=[];
  constructor(private servicioVehiculo:VehiculosService) { }

  ngOnInit(): void {
    this.ListarVehiculos();
  }

  ListarVehiculos(){
    this.servicioVehiculo.ObtenerVehiculos().subscribe((datos:ModeloVehiculo[])=>{
      this.listaVehiculos=datos;
    })
  }

}
