import { SucursalesService } from './services/sucursales.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APPROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CrearSucursalComponent } from './componentes/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './componentes/editar-sucursal/editar-sucursal.component';
import { ListaSucursalComponent } from './componentes/lista-sucursal/lista-sucursal.component';

@NgModule({
  declarations: [
    AppComponent,  
    NavbarComponent,
    FooterComponent,
    CrearSucursalComponent,
    EditarSucursalComponent,
    ListaSucursalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    APPROUTES
  ],
  providers: [SucursalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
