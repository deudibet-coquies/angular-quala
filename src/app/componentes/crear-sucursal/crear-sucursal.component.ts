import { Sucursal } from './../../interfaces/sucursal';
import { SucursalesService } from './../../services/sucursales.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent implements OnInit {
  day: Date;
  sucursal: any = {};
  sucursales: any = [];
  monedas: any = [];
  error = [];
  formulario: FormGroup;

  constructor(private _crear: SucursalesService, private router: Router, private _sucursal: SucursalesService,) {
    this.formulario = new FormGroup({
      codigo: new FormControl("", [Validators.required]),
      descripcion: new FormControl("", [Validators.required]),
      direccion: new FormControl("", [Validators.required]),
      identificador: new FormControl("", [Validators.required]),
      moneda: new FormControl("", [Validators.required]),
    })

   
  }

  ngOnInit() {
    this.day = new Date();
    this._sucursal.getMonedas().subscribe(data => {
      this.monedas = data;
      console.log('monedas: ', this.monedas);
    })
  }

  guardar() {
    this.error = [];
    let nuevo = {
      codigo: this.formulario.value.codigo,
      descripcion: this.formulario.value.descripcion,
      direccion: this.formulario.value.direccion,      
      identificacion: this.formulario.value.identificador,
      fechaCreacion: this.day,
      moneda: this.formulario.value.moneda,
    }
   console.log('asi va la data',nuevo);
    this._crear.nuevaSucursal(nuevo).subscribe(
      (resp) => {
        this.formulario.reset();
        Swal.fire({
          icon: 'success',
          title: 'Su registro se ha guardado satisfactoriamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['/listado']);
      }, error => {
        Object.keys(error.error.errors).map((key) => {
          error.error.errors[key].forEach(element => {
            this.error.push(element);
          });
        });
      }
    );
  }

}
