import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  url = "http://sucursalesapi.test/api/prueba";
  headers = new Headers({ 'content-type': 'application/json' });
  constructor(private http: HttpClient) { }

  getSucursal() {
    let url = this.url;
    return this.http.get(url);
  }

  nuevaSucursal(dato: any) {
    return this.http.post(this.url, dato);
  }

  editarSucursal(dato: any) {
    return this.http.put(`${this.url}/${dato.id}`, dato);
  }
}
