import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PerfilComponent
  ],
  exports:[
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
