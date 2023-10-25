import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  url = "https://localhost:7150";
  headers = new Headers({ 'content-type': 'application/json' });
  constructor(private http: HttpClient) { }

  getSucursal() {
    return this.http.get(`${this.url}/api/Sucursal/Lista-sucursales`);
  }

  getMonedas() {
    return this.http.get(`${this.url}/api/Sucursal/Lista-monedas`);
  }

  nuevaSucursal(dato: any) {
    return this.http.post(`${this.url}/api/Sucursal/Crear-sucursales`, dato);
  }

  editarSucursal(dato: any) {
    return this.http.post(`${this.url}/api/Sucursal/Editar-sucursales`, dato);
  }
}
