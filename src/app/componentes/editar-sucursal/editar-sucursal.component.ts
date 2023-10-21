import { SucursalesService } from './../../services/sucursales.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {

  id: number;
  sucursal: any = {};
  sucursales: any = [];
  constructor(
    private route: ActivatedRoute,
    private _sucursal: SucursalesService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this._sucursal.getSucursal().subscribe((data: any[]) => {
      this.sucursales = data;
      this.sucursal = this.sucursales.find((m) => { return m.id == this.id });
      console.log(this.sucursal);
    })
  }

  editarSucursal(forma: NgForm) {
    this._sucursal.editarSucursal(this.sucursal).subscribe(
      (resp: any) => {
        forma.reset();
        Swal.fire({
          icon: 'success',
          title: 'Su registro se ha editado satisfactoriamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['/listado']);
      },
    );
  }

}
