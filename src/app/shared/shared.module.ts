import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { TipoInputPipe } from './pipes/tipo-input.pipe';
import { SubNavbarComponent } from './components/sub-navbar/sub-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    PerfilComponent,
    TipoInputPipe,
    SubNavbarComponent,
  ],
  exports:[
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
