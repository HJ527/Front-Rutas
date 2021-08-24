import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CrearRutaComponent } from './pages/crear-ruta/crear-ruta.component';



@NgModule({
  declarations: [
    HomeComponent,
    CrearRutaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VendedoresModule { }
