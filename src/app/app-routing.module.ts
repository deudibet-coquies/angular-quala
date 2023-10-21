import { ListaSucursalComponent } from './componentes/lista-sucursal/lista-sucursal.component';
import { EditarSucursalComponent } from './componentes/editar-sucursal/editar-sucursal.component';
import { CrearSucursalComponent } from './componentes/crear-sucursal/crear-sucursal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'listado', component:ListaSucursalComponent},
  {path:'agregarSucursal', component:CrearSucursalComponent},
  {path:'editarSucursal', component:EditarSucursalComponent},
  {path:'**',pathMatch:'full',redirectTo:''},
];

export const APPROUTES = RouterModule.forRoot(routes);

