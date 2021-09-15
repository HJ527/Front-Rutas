import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../shared/services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private uiService:UiService) { }

  ngOnInit(): void {
    this.uiService.optionsSubnav=['vendedor','iniciar-ruta','crear-ruta','agregar-subdistribuidor']
  }

}
