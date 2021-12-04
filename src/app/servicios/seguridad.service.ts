import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RespuestaIdentificarModelo } from '../modelos/respuestaidentificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  datosSesion = new BehaviorSubject<RespuestaIdentificarModelo>(new RespuestaIdentificarModelo());

  constructor(private http:HttpClient) { }

  ObtenerObsSesion(){
    return this.datosSesion.asObservable();
  }

  ActualizarObservable(datos:RespuestaIdentificarModelo){
    this.datosSesion.next(datos);
  }

  Identificar(usuario:string,clave:string):Observable<RespuestaIdentificarModelo>{
    return this.http.post<RespuestaIdentificarModelo>("http://localhost:3000/autenticarPersona",
    {
      usuario:usuario,
      contrasena:clave
    },{
      headers: new HttpHeaders({})
    })

  }

  AlmacenarInfoSesion(datos:RespuestaIdentificarModelo){
    datos.autenticado=true;
    let datos_str=JSON.stringify(datos);
    localStorage.setItem("datosSesion",datos_str);
    this.ActualizarObservable(datos);
  }

  EliminarInfoSesion(){
    localStorage.removeItem("datosSesion");
    this.ActualizarObservable(new RespuestaIdentificarModelo());
  }

  ObtenerInfoSesion(){
    let datos_str=localStorage.getItem("datosSesion");
    if(datos_str){
      let datos=JSON.parse(datos_str);
      return datos;
    }else{
      return null;
    }
  }

  VerificarInfoSesion(){
    let datos_str=localStorage.getItem("datosSesion");
    if(datos_str){
      this.ActualizarObservable(JSON.parse(datos_str));
    }
  }
}
