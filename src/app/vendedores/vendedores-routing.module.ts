import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarSubComponent } from '../subdistribuidores/pages/agregar-sub/agregar-sub.component';
import { HomeComponent } from '../vendedores/pages/home/home.component';
import { ProductosModule } from '../productos/productos.module';
import { CrearRutaComponent } from './pages/crear-ruta/crear-ruta.component';

const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'agregar-subdistribuidor',
        component:AgregarSubComponent
      },
      {
        path:'crear-ruta',
        component:CrearRutaComponent
      },
      {
        path:'productos',
        loadChildren:()=> import('../productos/productos.module').then(m=>ProductosModule)
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class VendedoresRoutingModule { }
