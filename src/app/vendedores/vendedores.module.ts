import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CrearRutaComponent } from './pages/crear-ruta/crear-ruta.component';
import { SubdistribuidoresModule } from '../subdistribuidores/subdistribuidores.module';
import { VendedoresRoutingModule } from './vendedores-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    CrearRutaComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    VendedoresRoutingModule,
    SharedModule,
    SubdistribuidoresModule,
  ]
})
export class VendedoresModule { }
