import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarSubComponent } from './pages/agregar-sub/agregar-sub.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { SubdistribuidoresRoutingModule } from './subdistribuidores-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AgregarSubComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SubdistribuidoresRoutingModule,
  ]
})
export class SubdistribuidoresModule { }
