import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {
  fgValidador:FormGroup=this.fb.group({
    "placa":["",[Validators.required]],
    "marca":["",[Validators.required]],
    "referencia":["",[Validators.required]],
    "modelo":["",[Validators.required]]
  })

  constructor(private fb:FormBuilder,
    private servicioVehiculo:VehiculosService,
    private router:Router) { }

  ngOnInit(): void {
  }

  GuardarVehiculo(){
    let placa=this.fgValidador.controls["placa"].value;
    let marca=this.fgValidador.controls["marca"].value;
    let referencia=this.fgValidador.controls["referencia"].value;
    let modelo=parseInt(this.fgValidador.controls["modelo"].value);

    let v=new ModeloVehiculo();
    v.placa=placa;
    v.marca=marca;
    v.referencia=referencia;
    v.modelo=modelo;

    this.servicioVehiculo.CrearVehiculo(v).subscribe((datos:ModeloVehiculo)=>{
      alert(`Se ha creado exitosamente el vehiculo con id ${datos.id}`);
      this.router.navigate(["/vehiculos/listar-vehiculos"]);

    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })





  }

}
