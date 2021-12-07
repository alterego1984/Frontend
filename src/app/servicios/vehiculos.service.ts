import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVehiculo } from '../modelos/vehiculo.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  url = "http://localhost:3000"
  token:string="";
  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) { 
      this.token=servicioSeguridad.ObtenerToken();
    }

  ObtenerVehiculos(): Observable<ModeloVehiculo[]> {
    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`);
  }

  ObtenerVehiculoPorId(id:string): Observable<ModeloVehiculo> {
    return this.http.get<ModeloVehiculo>(`${this.url}/vehiculos/${id}`);
  }

  CrearVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo> {
    return this.http.post<ModeloVehiculo>(`${this.url}/vehiculos`, vehiculo, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  EditarVehiculo(vehiculo:ModeloVehiculo): Observable<ModeloVehiculo> {
    return this.http.put<ModeloVehiculo>(`${this.url}/vehiculos/${vehiculo.id}`, vehiculo, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  EliminarVehiculo(id:string): Observable<any> {
    return this.http.delete<any>(`${this.url}/vehiculos/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
}
