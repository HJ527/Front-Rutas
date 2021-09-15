import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';

const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'agregar',
        component:AgregarProductoComponent
      },
      {
        path:'**',
        redirectTo:'agregar'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ProductosRoutingModule { }
