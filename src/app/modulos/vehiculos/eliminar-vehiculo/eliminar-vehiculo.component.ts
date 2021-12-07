import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-eliminar-vehiculo',
  templateUrl: './eliminar-vehiculo.component.html',
  styleUrls: ['./eliminar-vehiculo.component.css']
})
export class EliminarVehiculoComponent implements OnInit {
  id:string="";
  fgValidador:FormGroup=this.fb.group({
    "placa":["",[Validators.required]],
    "marca":["",[Validators.required]],
    "referencia":["",[Validators.required]],
    "modelo":["",[Validators.required]]
  })

  constructor(private fb:FormBuilder,
    private servicioVehiculo:VehiculosService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarVehiculo();
  }

  BuscarVehiculo(){
    this.servicioVehiculo.ObtenerVehiculoPorId(this.id).subscribe((datos:ModeloVehiculo)=>{
      this.fgValidador.controls["placa"].setValue(datos.placa);
      this.fgValidador.controls["marca"].setValue(datos.marca);
      this.fgValidador.controls["referencia"].setValue(datos.referencia);
      this.fgValidador.controls["modelo"].setValue(datos.modelo);

    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })

  }

  EliminarVehiculo(){
    


    this.servicioVehiculo.EliminarVehiculo(this.id).subscribe((datos:any)=>{
      alert(`Se ha eliminado exitosamente el vehiculo con id ${this.id}`);
      this.router.navigate(["/vehiculos/listar-vehiculos"]);

    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })





  }

}
