import { SafeKeyedRead } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as cryptoJS from "crypto-js";
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    "usuario": ["", [Validators.required, Validators.email]],
    "clave": ["", [Validators.required]]
  });
  constructor(private fb: FormBuilder,
    private servicioSeguridad:SeguridadService,
    private router:Router) { }

  ngOnInit(): void {
  }

  IdentificarUsuario(){
    let usuario=this.fgValidador.controls["usuario"].value;
    let clave=this.fgValidador.controls["clave"].value;
    let claveCifrada=cryptoJS.MD5(clave).toString();

    // alert(claveCifrada)

    this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any)=>{
      //ToDo guardar en local storage
      this.servicioSeguridad.AlmacenarInfoSesion(datos);
      this.router.navigate(["/inicio"]);
      
    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })

  }

}
