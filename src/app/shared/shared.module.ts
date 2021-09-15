import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { TipoInputPipe } from './pipes/tipo-input.pipe';
import { SubNavbarComponent } from './components/sub-navbar/sub-navbar.component';
import { RouterModule } from '@angular/router';
import { MinicardComponent } from './components/minicard/minicard.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PerfilComponent,
    TipoInputPipe,
    SubNavbarComponent,
    MinicardComponent,
  ],
  exports:[
    MinicardComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
