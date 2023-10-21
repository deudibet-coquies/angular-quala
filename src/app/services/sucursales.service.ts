import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  url = "http://personasapi.test/api/prueba";
  url2 = "http://10.23.14.200:7902";
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
