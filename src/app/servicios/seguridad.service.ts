import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaIdentificarModelo } from '../modelos/respuestaidentificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http:HttpClient) { }

  Identificar(usuario:string,clave:string):Observable<RespuestaIdentificarModelo>{
    return this.http.post<RespuestaIdentificarModelo>("http://localhost:3000/autenticarPersona",
    {
      usuario:usuario,
      contrasena:clave
    },{
      headers: new HttpHeaders({})
    })

  }
}
