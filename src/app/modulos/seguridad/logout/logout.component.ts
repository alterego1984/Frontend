import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private servicioSeguridad:SeguridadService,
    private router:Router) { }

  ngOnInit(): void {
    this.servicioSeguridad.EliminarInfoSesion();
    this.router.navigate(["/seguridad/login"]);
  }

}
