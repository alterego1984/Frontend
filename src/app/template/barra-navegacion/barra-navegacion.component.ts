import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RespuestaIdentificarModelo } from 'src/app/modelos/respuestaidentificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  autenticado: boolean = false;
  subs: Subscription = new Subscription();
  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    //ToDo Obtener la información de la sesión
    this.subs = this.seguridadServicio.ObtenerObsSesion().subscribe((datos: RespuestaIdentificarModelo) => {
      alert(datos.autenticado)
      this.autenticado = datos.autenticado;
    })
  }

}
