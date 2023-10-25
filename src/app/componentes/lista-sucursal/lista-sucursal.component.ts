import { SucursalesService } from './../../services/sucursales.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-sucursal',
  templateUrl: './lista-sucursal.component.html',
  styleUrls: ['./lista-sucursal.component.css']
})
export class ListaSucursalComponent implements OnInit {

  sucursales: any = [];

  constructor(private _sucursal: SucursalesService) { }

  ngOnInit() {
    this._sucursal.getSucursal().subscribe(data => {
      this.sucursales = data;
     // console.log('listado: ', this.sucursales);
    })
  }

}
